import NavBar from '~/components/NavBar';
import { Outlet } from 'remix';

const links = [
  {
    label: 'App 設計規範',
    to: './app',
    match: /\/developer\/guidelines\/app/,
  },
  {
    label: '網頁設計規範',
    to: './web',
    match: /\/developer\/guidelines\/web/,
  },
  {
    label: '軟體設計規範',
    to: './software',
    match: /\/developer\/guidelines\/software/,
  },
  {
    label: 'LINE 設計規範',
    to: './line',
    match: /\/developer\/guidelines\/line/,
  }
];

export default function Index() {
  return <div className="container px-64 mx-auto min-h-screen">
    <div className="flex place-content-center mt-20 justify-around px-16">
      <NavBar items={links} />
    </div>
    <Outlet />
  </div>;
}
