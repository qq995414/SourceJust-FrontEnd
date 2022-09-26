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
import { PropsWithChildren, useState } from 'react';
import { OpenAPI } from 'app/ApiClient';

export const action: ActionFunction = async ({ request, context }) => {

  // const formData = await request.formData();
  // call my authenticator
  console.log('request:' + request);
  const resp = await authenticator.authenticate("user-login", request, {
    successRedirect: "/admin/portal",
    failureRedirect: "/admin/login",
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
    successRedirect: "/admin/portal"
  });

  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  const error = session.get("sessionErrorKey");
  return json<any>({ error }); 
};


interface Props {
  onClick(): void;
}

export default function Index() {
  const navigate = useNavigate();
  const loaderData = useLoaderData();

  OpenAPI.TOKEN = loaderData?.data?.token;
  const [passwordShown, setPasswordShown] = useState(true);

  // const [Account, setAccount] = useState('');
  // const [Password, setPassword] = useState('');
  return (
    <div
      className=" justify-center h-screen items-center overflow-hidden w-screen">
      <div className="flex flex-row w-full h-16 px-8   pt-5 login-background "
        style={{ boxShadow: 'inset 0px -1px 0px #F0F0F0;' }}>
        <img className="mb-5" src={'/icons/logo.svg'} alt="" />

      </div>
      <div className="pt-36 flex flex-row w-full h-full  justify-center align-center">
        <div className="p-4 flex flex-col justify-center h-128 items-center login-box">
          <p
            style={{ fontWeight: 800 }}
            className="text-center tracking-widest text-2xl ">登入</p>
          <div
            className=' pt-5 w-96'
          >
            <Form className="w-full" method="post" name='form'>
              <p className='pt-1 Neutral-Colors-DarkGrey text-sm' style={{ fontWeight: 800 }}>帳號</p>
              <p className='text-xs' style={{ color: '#7c7c7c' }}>請出入 ID 或 Email</p>
              <TextInput
                className="mt-2 mx-auto w-full neutral-colors-5-LightGrey-border"
                type="sign"
                placeholder="例如：Source9121"
                itemName='account'
              />
              <div
                className='pt-5 w-screen'>
                <a className=' Neutral-Colors-DarkGrey text-sm' style={{ fontWeight: 800 }}>密碼</a>
                <Link
                  style={{ fontWeight: 800 }}
                  className="text-sm ml-96 Primary-Primary"
                  to="/designer/forgot">忘記密碼？</Link>
              </div>
              <div className="pass-wrapper w-screen">
                <TextInput

                  className="mt-3 mx-auto w-full neutral-colors-5-LightGrey-border"
                  type="sign"
                  placeholder="請輸入密碼"
                  itemName='password'
                  show={passwordShown}
                />
                {passwordShown === true && <i className='mr-10' onClick={() => setPasswordShown(false)}><img className="mb-5" src={'/icons/eye-icon.svg'} alt="" /></i>}
                {passwordShown === false && <i className='mr-10' onClick={() => setPasswordShown(true)}><img className="mb-5" src={'/icons/eye-icon.svg'} alt="" /></i>}
              </div>
              <div className="text-right mt-4 mr-1">
              </div>
              <div className='flex flex-col'>
                {loaderData?.error ? <p className='login-error flex'><img className="mb-5" src={'/icons/login-error.svg'} alt="" />  {loaderData?.error?.message}</p> : ""}
              </div>
              <div className="mt-1 text-center">
                <Button
                  type="login"
                  onClick={() => console.log("點擊登入")}
                >
                  登入
                </Button>
              </div>

            </Form>
          </div>
        </div>

      </div >
    </div >
  );
}
