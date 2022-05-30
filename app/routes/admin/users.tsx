import { Outlet } from 'remix';

export default function Index() {
  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  );
}

