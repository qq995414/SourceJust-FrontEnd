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

  const resp = await authenticator.authenticate("updataUser", request, {
    successRedirect: "/admin/",
    failureRedirect: "/admin/",
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

export default function Index() {

  return (
    <>
      <div className='fixed navName'>
        <div className='flex'  >
          <div className='pl-heard '><img className="pt-1 " src={'/icons/notifications-gray.svg'} alt="" /><div className='heard-notifi-red'>1</div>
          </div>
          <div className='pl-5 flex' style={{ zIndex: "100" }} ><div className='rounded-full heard-name-circle'  >C</div><div className='heard-name pl-1' style={{ width: '5rem;' }}>Serati Ma</div> <div className='heard-svg pt-2 '><img src={'/icons/heard-bottom-arrow.svg'} alt="" /></div></div>
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
              link: '/admin/clientexam',
              targettext: "作品集管理",
              match: /^\/admin\/clientexam/,
            },
            {
              activeIconUrl: '/icons/mail.svg',
              inactiveIconUrl: '/icons/mail-gray.svg',
              activeIconColor: '#E7142D',
              inactiveIconColor: '#BBBBBB',
              activeBgColor: '#FFF1F3',
              inactiveBgColor: '#FFFFFF',
              link: '/admin/users/chooseUsers',
              targettext: "信件管理",
              match: /^\/admin\/users/,
            },
            {
              activeIconUrl: '/icons/navi.svg',
              inactiveIconUrl: '/icons/navi-gray.svg',
              activeIconColor: '#E7142D',
              inactiveIconColor: '#BBBBBB',
              activeBgColor: '#FFF1F3',
              inactiveBgColor: '#FFFFFF',
              link: '/admin/users/templateUsers',
              targettext: "模板管理",
              match: /^\/admin\/template/,
            }
          ]} />


        <Outlet />
      </div>
    </>
  );
}
