import Button from '~/components/common/Button';
import { Outlet, useLocation, useNavigate } from 'remix';

const links = [
  {
    label: '網頁設計規範',
    to: '/designer/guidelines/web/spec',
    prefix: '/designer/guidelines/web'
  },
  {
    label: 'App 設計規範',
    to: '/designer/guidelines/app',
    prefix: '/designer/guidelines/app'
  },
  {
    label: '軟體設計規範',
    to: '/designer/guidelines/software',
    prefix: '/designer/guidelines/software'
  },
  {
    label: 'LINE 設計規範',
    to: '/designer/guidelines/line',
    prefix: '/designer/guidelines/line'
  },
];

export default function Index() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex flex-row justify-center">
      <div className="container px-64">
        <div className="flex place-content-center mt-12">
          {links.map(link => <Button
            key={link.to}
            type={location.pathname.startsWith(link.prefix)
              ? 'circle' : 'deactivated'}
            className="mr-8"
            onClick={() => navigate(link.to)}>
            {link.label}
          </Button>)}
        </div>
        <Outlet />
      </div>
    </div>
  );
}
