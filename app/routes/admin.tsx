import SideNav from '~/components/SideNav';
import { MetaFunction, Outlet } from 'remix';
import { Form, useNavigate, ActionFunction, LoaderFunction, useLoaderData } from 'remix';
import authenticator from "~/services/repwd.server";

export const meta: MetaFunction = () => {
  return { title: '總後台 ｜ 索爾斯科技', };
};
export const action: ActionFunction = async ({ request }) => {

  const user = await authenticator.isAuthenticated(request, {

    failureRedirect: "/admin/login",
  });

};
export let loader: LoaderFunction = async ({ request }) => {

  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/admin/login",
  });


};


export default function Index() {
  const data = useLoaderData();
  console.log(data.data?.profile?.name);
  const allName = data.data?.profile?.name
  const fristName = allName.substring(0, 1)
  const lastName = allName.substring(1, allName.length)
  return (
    <>
      <div className='fixed navName'>
        <div className='flex'  >
          <div className='pl-5 flex' style={{ zIndex: "100" }} ><div className='rounded-full heard-name-circle'  >{fristName}</div><div className='heard-name pl-1'>{lastName}</div> <div className='heard-svg pt-1 pl-2'><img src={'/icons/heard-bottom-arrow.svg'} alt="" /></div></div>
        </div>
      </div>
      <div className='flex w-screen'>
        <SideNav
          avatarUrl="https://media.istockphoto.com/photos/smiling-female-architect-sitting-at-her-office-desk-picture-id1287459398?k=20&m=1287459398&s=612x612&w=0&h=-BH-AsvbdjM8G-Uc_UabWztbQxFmYstg_Z2-Ix4_IEg="
          links={[
            {
              activeIconUrl: '/icons/overview.svg',
              inactiveIconUrl: '/icons/overview-gray.svg',
              activeIconColor: '#E7142D',
              inactiveIconColor: '#BBBBBB',
              activeBgColor: '#FFF1F3',
              inactiveBgColor: '#FFFFFF',
              link: '/admin/dashboard',
              targettext: "總覽",
              match: /^\/admin\/dashboard/,
            },
            {
              activeIconUrl: '/icons/blog.svg',
              inactiveIconUrl: '/icons/blog-gray.svg',
              activeIconColor: '#E7142D',
              inactiveIconColor: '#BBBBBB',
              activeBgColor: '#FFF1F3',
              inactiveBgColor: '#FFFFFF',
              link: '/admin/webpage',
              targettext: "部落格管理",
              match: /^\/admin\/webpage/,
            },

            {
              activeIconUrl: '/icons/clientexam.svg',
              inactiveIconUrl: '/icons/clientexam-gray.svg',
              activeIconColor: '#E7142D',
              inactiveIconColor: '#BBBBBB',
              activeBgColor: '#FFF1F3',
              inactiveBgColor: '#FFFFFF',
              link: '/admin/folio',
              targettext: "作品集管理",
              match: /^\/admin\/folio/,
            },
            {
              activeIconUrl: '/icons/mail.svg',
              inactiveIconUrl: '/icons/mail-gray.svg',
              activeIconColor: '#E7142D',
              inactiveIconColor: '#BBBBBB',
              activeBgColor: '#FFF1F3',
              inactiveBgColor: '#FFFFFF',
              link: '/admin/mail',
              targettext: "信件管理",
              match: /^\/admin\/mail/,
            },
            {
              activeIconUrl: '/icons/navi.svg',
              inactiveIconUrl: '/icons/navi-gray.svg',
              activeIconColor: '#E7142D',
              inactiveIconColor: '#BBBBBB',
              activeBgColor: '#FFF1F3',
              inactiveBgColor: '#FFFFFF',
              link: '/admin/template',
              targettext: "模板管理",
              match: /^\/admin\/template/,
            }, {
              activeIconUrl: '/icons/navi.svg',
              inactiveIconUrl: '/icons/navi-gray.svg',
              activeIconColor: '#E7142D',
              inactiveIconColor: '#BBBBBB',
              activeBgColor: '#FFF1F3',
              inactiveBgColor: '#FFFFFF',
              link: '/admin/news',
              targettext: "最新消息",
              match: /^\/admin\/news/,
            }
          ]} />


        <Outlet />
      </div>
    </>
  );
}
