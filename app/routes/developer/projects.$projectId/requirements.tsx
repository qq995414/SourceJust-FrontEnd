import NavBar from '~/components/NavBar';
import { Outlet } from 'remix';

const links = [
  {
    label: '製作需求 ',
    to: './requirements',
    match: /^\/developer\/projects\/(.*)\/requirements\/requirements$/
  },
  {
    label: '設計圖',
    to: './design',
    match: /^\/developer\/projects\/(.*)\/requirements\/design$/
  },
  {
    label: '樹狀圖 ',
    to: './tree',
    match: /^\/developer\/projects\/(.*)\/requirements\/tree$/
  },
  {
    label: '備註 ',
    to: './notes',
    match: /^\/developer\/projects\/(.*)\/requirements\/notes$/
  }
];

export default function Index() {
  return (
    <div className="p-4 mt-2">
      <div className="flex">
        <div
          className="w-1/2 justify-start text-gray-400">
          <NavBar items={links} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
