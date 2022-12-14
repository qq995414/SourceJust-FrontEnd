import SideNav from '~/components/SideNav';
import { MetaFunction, Outlet } from 'remix';

export const meta: MetaFunction = () => {
  return { title: '工程師後台 ｜ 索爾斯科技', };
};

export default function Index() {
  return (
    <>
      <SideNav
        avatarUrl="https://media.istockphoto.com/photos/smiling-female-architect-sitting-at-her-office-desk-picture-id1287459398?k=20&m=1287459398&s=612x612&w=0&h=-BH-AsvbdjM8G-Uc_UabWztbQxFmYstg_Z2-Ix4_IEg="
        links={[
          {
            activeIconUrl: '/icons/edit.svg',
            inactiveIconUrl: '/icons/edit-gray.svg',
            link: '/developer/guidelines/app',
            match: /^\/developer\/guidelines/,
          },
          {
            activeIconUrl: '/icons/projects.svg',
            inactiveIconUrl: '/icons/projects-gray.svg',
            link: '/developer/projects',
            match: /^\/developer\/projects/,
          },
          {
            activeIconUrl: '/icons/contact.svg',
            inactiveIconUrl: '/icons/contact-gray.svg',
            link: '/developer/contact',
            match: /^\/developer\/contact/,
          }
        ]} />
      <Outlet />
    </>
  );
}
