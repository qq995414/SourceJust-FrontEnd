import { ActionFunction, Form, LoaderFunction, useLoaderData } from "remix";
import authenticator from "~/services/auth.server";
import { sessionStorage } from "~/services/session.server";
import SideNav from '~/components/SideNav';
import { MetaFunction, Outlet } from 'remix';

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/designer/login",
  });
};
export const action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/designer/login" });
};

export const meta: MetaFunction = () => {
  return { title: '設計師後台 ｜ 索爾斯科技', };
};

export default function Index() {
  const data = useLoaderData();
  return (
    <>
      <SideNav
        avatarUrl="https://media.istockphoto.com/photos/smiling-female-architect-sitting-at-her-office-desk-picture-id1287459398?k=20&m=1287459398&s=612x612&w=0&h=-BH-AsvbdjM8G-Uc_UabWztbQxFmYstg_Z2-Ix4_IEg="
        links={[
          {
            activeIconUrl: '/icons/edit.svg',
            inactiveIconUrl: '/icons/edit-gray.svg',
            link: '/designer/guidelines/web/spec',
            match: /^\/designer\/guidelines/,
          },
          {
            activeIconUrl: '/icons/projects.svg',
            inactiveIconUrl: '/icons/projects-gray.svg',
            link: '/designer/projects',
            match: /^\/designer\/projects/,
          },
          {
            activeIconUrl: '/icons/contact.svg',
            inactiveIconUrl: '/icons/contact-gray.svg',
            link: '/designer/contact',
            match: /^\/designer\/contact/,
          }
        ]} />
      <Outlet />
    </>
  );
}
