import SideNav from '~/components/SideNav';
import { MetaFunction, Outlet } from 'remix';

export const meta: MetaFunction = () => {
  return { title: '總後台 ｜ 索爾斯科技', };
};

export default function Index() {
  return (
    <>
      <SideNav
        avatarUrl="https://media.istockphoto.com/photos/smiling-female-architect-sitting-at-her-office-desk-picture-id1287459398?k=20&m=1287459398&s=612x612&w=0&h=-BH-AsvbdjM8G-Uc_UabWztbQxFmYstg_Z2-Ix4_IEg="
        links={[
          {
            activeIconUrl: '/icons/overview.svg',
            inactiveIconUrl: '/icons/overview-gray.svg',
            link: '/admin/dashboard',
            match: /^\/admin\/dashboard/,
          },
          {
            activeIconUrl: '/icons/projects.svg',
            inactiveIconUrl: '/icons/projects-gray.svg',
            link: '/admin/projects',
            match: /^\/admin\/projects/,
          },
          {
            activeIconUrl: '/icons/users.svg',
            inactiveIconUrl: '/icons/users-gray.svg',
            link: '/admin/users/chooseUsers',
            match: /^\/admin\/users/,
          }
        ]} />
      <Outlet />
    </>
  );
}
