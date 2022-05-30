import { Link, Outlet, useLocation } from 'remix';
import cx from 'classnames';

const links = [
  {
    label: '設計規格',
    to: './spec',
    prefix: '/designer/guidelines/web/spec'
  },
  {
    label: '網頁 UI/UX 參考',
    to: './uiux',
    prefix: '/designer/guidelines/web/uiux'
  },
  {
    label: '細節注意事項',
    to: './detail',
    prefix: '/designer/guidelines/web/detail'
  },
  {
    label: '給工程師的注意事項',
    to: './export',
    prefix: '/designer/guidelines/web/export'
  }
];

export default function Index() {
  const location = useLocation();
  return <div className="container pb-12">
    <div className="flex place-content-center mt-12 justify-around px-32">
      {links.map(link => <Link
        key={link.to}
        className={cx(
          location.pathname.startsWith(link.prefix)
            ? 'text-primary-red' : 'hover:text-red-900',
          'font-semibold transition-all')}
        to={link.to}>
        {link.label}
      </Link>)}
    </div>
    <Outlet />
  </div>;
}
