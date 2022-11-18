
import {
  useNavigate,
  ActionFunction,
  json,
  LoaderFunction,
  useLoaderData
} from 'remix';
import authenticator from "~/services/auth.server";
import { sessionStorage } from "~/services/session.server";
/***
export const action: ActionFunction = async ({ request, context }) => {

    // const formData = await request.formData();
    // call my authenticator
    console.log('request:' + request);
    const resp = await authenticator.authenticate("user-login", request, {
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
/*
export const loader: LoaderFunction = async ({ request }) => {

    await authenticator.isAuthenticated(request, {
        failureRedirect: "/admin/login"
    });

    const session = await sessionStorage.getSession(
        request.headers.get("Cookie")
    );

    const error = session.get("sessionErrorKey");
    return json<any>({ error });
};

*/

export const action: ActionFunction = async ({ request }) => {

  const user = await authenticator.isAuthenticated(request, {

    failureRedirect: "/admin/login",
  });

  const resp = await authenticator.authenticate("updataUser", request, {
    successRedirect: "/admin/protal",
    failureRedirect: "/admin/protal",
    throwOnError: true,
    context: user,

  });
  console.log('resp:' + resp);
  return resp;
};

export let loader: LoaderFunction = async ({ request }) => {

  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/admin/login",
  });


};
interface Props {
  onClick(): void;
}

export default function Index() {
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  return (<div
    className=" justify-center h-screen items-center overflow-hidden w-screen ">
    <div className="flex flex-row w-full h-16 px-8   pt-5 login-background "
      style={{ boxShadow: 'inset 0px -1px 0px #F0F0F0;' }}>
      <img className="mb-5" src={'/icons/logo.svg'} alt="" />
    </div>
    <div className="pt-12 flex flex-row w-full justify-center align-center portal-tatle">
      歡迎登入索爾斯後台，請選擇您要登入的管理系統
    </div>
    <div className="pt-12 flex flex-row w-full  justify-center align-center px-64">
      <a className='w-3/12 mx-10 '>
        <div className="w-full flex flex-col justify-center h-64 items-center portal-link px-10">
          <img className="mb-5" src={'/icons/portal-company.svg'} alt="" />
          <p
            style={{ fontWeight: 500 }}
            className="text-center tracking-widest text-2xl ">專案系統</p>
          <p
            style={{ fontWeight: 400 }}
            className="text-center tracking-widest pt-4 portal-context ">客戶專案、進度與資料查詢</p>
        </div>
      </a>
      <a className='w-3/12 mx-10 '>
        <div className="w-full flex flex-col justify-center h-64 items-center portal-link  px-10">
          <img className="mb-5" src={'/icons/portal-company.svg'} alt="" />
          <p
            style={{ fontWeight: 500 }}
            className="text-center tracking-widest text-2xl ">公司系統</p>
          <p
            style={{ fontWeight: 400 }}
            className="text-center tracking-widest pt-4 portal-context ">公司內部系統管理、薪資、請假單</p>

        </div>
      </a>
      <a className='w-3/12 mx-10 '>
        <div className="w-full flex flex-col justify-center h-64 items-center portal-link  px-10">
          <img className="mb-5" src={'/icons/portal-project.svg'} alt="" />
          <p
            style={{ fontWeight: 500 }}
            className="text-center tracking-widest text-2xl ">檔案系統</p>
          <p
            style={{ fontWeight: 400 }}
            className="text-center tracking-widest pt-4 portal-context ">系統詳細描述</p>
        </div>
      </a>
    </div >
    <div className="pt-12 flex flex-row w-full justify-center align-center px-64">
      <a className='w-3/12 mx-10 '>
        <div className="w-full flex flex-col justify-center h-64 items-center portal-link  px-10">
          <img className="mb-5" src={'/icons/portal-business.svg'} alt="" />
          <p
            style={{ fontWeight: 500 }}
            className="text-center tracking-widest text-2xl ">業務系統</p>
          <p
            style={{ fontWeight: 400 }}
            className="text-center tracking-widest pt-4 portal-context ">查看業務業績、排行等</p>
        </div>
      </a>
      <a className='w-3/12 mx-10 ' href='/admin/webpage'>
        <div className="w-full flex flex-col justify-center h-64 items-center portal-link  px-10">
          <img className="mb-5" src={'/icons/portal-web.svg'} alt="" />
          <p
            style={{ fontWeight: 500 }}
            className="text-center tracking-widest text-2xl ">網頁系統</p>
          <p
            style={{ fontWeight: 400 }}
            className="text-center tracking-widest pt-4 portal-context ">部落格、作品集、Ｑ&A</p>
        </div>
      </a>
      <a className='w-3/12 mx-10 '>
        <div className="w-full flex flex-col justify-center h-64 items-center portal-link  px-10">
          <img className="mb-5" src={'/icons/portal-manufacturer.svg'} alt="" />
          <p
            style={{ fontWeight: 500 }}
            className="text-center tracking-widest text-2xl ">廠商系統</p>
          <p
            style={{ fontWeight: 400 }}
            className="text-center tracking-widest pt-4 portal-context ">合作人員、客戶相關資料</p>
        </div>
      </a>
    </div >
  </div >


  );
}
/**<div
      className=" justify-center h-screen items-center overflow-hidden w-screen">
      <div className="flex flex-row w-full h-16 px-8   pt-5 login-background "
        style={{ boxShadow: 'inset 0px -1px 0px #F0F0F0;' }}>
        <img className="mb-5" src={'/icons/logo.svg'} alt="" />

      </div>
      <div className="pt-36 flex flex-row w-full h-full  justify-center align-center">
        <div className="w-3/12 p-4 flex flex-col justify-center h-128 items-center login-box">
          <p
            style={{ fontWeight: 800 }}
            className="text-center tracking-widest text-2xl ">登入</p>
          <div
            className=' pt-5 w-96'
          >
            <Form className="w-1/2" method="post" name='form'>
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

                  className="mt-3 mx-auto w-screen neutral-colors-5-LightGrey-border"
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
    </div > */
function ButtonAdmin(props: { Id: string, Name: string, LinkTo: string }) {
  const navigate = useNavigate();
  const Id = props.Id;
  const LinkTo = '/admin/' + props.LinkTo;

  return (<button
    style={{
      color: '#B62122',
      backgroundColor: '#FFFFFFD1',

    }}

    className="rounded-lg w-3/12
     p-4 text-center m-10 z-30 pt-7 pt-7 hover-button"

  ><a href={LinkTo}>
      <span className='hover-button--off'>
        {props.Id}
      </span>
      <span className='hover-button--on  pt-4'>
        <div>{props.Id}
        </div>
        <div className='pt-5' style={{ color: '#5B5B5B	' }}>{props.Name}
        </div>
      </span></a>
  </button>);

}
