import TextInput from '~/components/common/TextInput';
import Button from '~/components/common/Button';
import {
  Link, useNavigate,
  Form,
  ActionFunction,
  json,
  LoaderFunction,
  useLoaderData
} from 'remix';
import authenticator from "~/services/auth.server";
import { sessionStorage } from "~/services/session.server";

/**
 * 登入事件
 */
export const action: ActionFunction = async ({ request, context }) => {

  // const formData = await request.formData();
  // call my authenticator
  console.log('request:' + request);
  const resp = await authenticator.authenticate("user-login", request, {
    successRedirect: "/developer",
    failureRedirect: "/developer/login",
    throwOnError: true,
    context,
  });
  console.log('resp:' + resp);
  return resp;
};
/**
 * 獲取Cookie且查看登入是否發生錯誤
 * @param param0 
 * @returns 
 */
export const loader: LoaderFunction = async ({ request }) => {

  await authenticator.isAuthenticated(request, {
    successRedirect: "/developer"
  });

  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  const error = session.get("sessionErrorKey");
  return json<any>({ error });
};
export default function Index() {
  const navigate = useNavigate();
  const loaderData = useLoaderData();

  return (
    <div
      className="flex justify-center h-screen items-center overflow-hidden">
      <div className="flex flex-row w-full h-full">
        <div className="w-1/2 p-4 flex flex-col justify-center items-center">
          <img className="mb-5" src={'/images/logo.svg'} alt="" />
          <p className="text-center tracking-widest text-lg m-2">索爾斯科技</p>
          <p
            className="text-center text-sm m-2
          text-primary-red tracking-widest">
            Source Solution
          </p>
          <p
            style={{ color: '#717274' }}
            className="text-center tracking-widest text-lg mt-3">工程師登入系統</p>
          <Form className="w-1/2" method="post" name='form'>
            <TextInput
              className="mt-10 mx-auto w-full"
              type="sign"
              placeholder="帳號"
              itemName='account'
            />
            <TextInput
              className="mt-16 mx-auto w-full"
              type="sign"
              placeholder="密碼"
              itemName='password'
            />
            <div className="text-right mt-4 mr-1">
              <Link
                style={{ color: '#983333' }}
                className="text-sm"
                to="/developer/forgot">忘記密碼</Link>
            </div>
            <div className="mt-16 text-center">
              <Button
                type="circle"
                onClick={() => navigate('/developer/sms-verify')}>
                登入
              </Button>
            </div>
            <div>
              {loaderData?.error ? <p>錯誤訊息: {loaderData?.error?.message}</p> : null}
            </div>
          </Form>
        </div>
        <div className="h-screen w-1/2">
          <img
            className="w-full h-screen object-cover"
            src={'/images/login-bg.svg'}
            alt="" />
        </div>
      </div>
    </div>
  );
}
