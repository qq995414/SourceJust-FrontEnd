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

export const action: ActionFunction = async ({ request, context }) => {

  // const formData = await request.formData();
  // call my authenticator
  console.log('request:' + request);
  const resp = await authenticator.authenticate("user-login", request, {
    successRedirect: "/admin",
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
    successRedirect: "/admin"
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
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <div
      className=" flex justify-center h-screen items-center overflow-hidden">
      {!isSuccess && <div className="flex flex-row w-full h-full">
        <div className="flex flex-row w-full h-full">
          <div
            className="w-1/2 p-4 flex flex-col
          justify-center items-center">
            <img className="mb-5" src={'/images/logo.svg'} alt="" />
            <p className="text-center tracking-widest text-lg m-2">索爾斯科技</p>
            <p
              className="text-center text-sm m-2
              text-primary-red tracking-widest">Source Solution</p>
            <p
              style={{ color: '#717274' }}
              className="text-center tracking-widest text-lg mt-3">後台管理系統</p>
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
              <div className="mt-16 text-center">
                <Button
                  type="circle"
                  onClick={() => {
                    setIsSuccess(true);
                  }}>
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
      </div>}

      {
        isSuccess && <div
          style={{ backgroundImage: 'url(\'/images/admin-login-bg.svg\'', }}
          className="h-full relative overflow-hidden
         bg-cover bg-no-repeat w-full">
          <div className="mt-12 ml-24">
            <img
              className="w-12"
              src={'/images/logo.svg'}
              alt="" />
          </div>
          <div className="flex flex-col justify-center items-center mt-20 z-30">
            <ButtonAdmin
              onClick={() => {
              }}>網頁系統</ButtonAdmin>
            <ButtonAdmin
              onClick={() => {
                navigate('/admin/dashboard');
              }}>
              專案系統</ButtonAdmin>
            <ButtonAdmin
              onClick={() => {
              }}>公司系統</ButtonAdmin>
          </div>
          <div
            className="bg-black w-full h-full absolute
      top-0 bg-opacity-30 z-10" />
        </div>
      }
    </div >
  );
}

function ButtonAdmin(props: PropsWithChildren<Props>) {
  return (<button
    style={{
      color: '#B62122',
      backgroundColor: '#FFFFFFD1'
    }}
    className="rounded-lg w-4/12
     p-4 text-center m-10 z-30"
    onClick={() => props.onClick()}
  >
    {props.children}
  </button>);

}
