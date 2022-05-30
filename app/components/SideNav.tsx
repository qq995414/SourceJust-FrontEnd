import { Link, useLocation } from 'remix';

interface SideNavLink {
  activeIconUrl: string;
  inactiveIconUrl: string;
  link: string;
  match: RegExp;
}

interface Props {
  avatarUrl: string;
  links: SideNavLink[];
}

export default function (props: Props) {

  const location = useLocation();

  return <div
    className="fixed top-0 left-0 h-screen bg-white shadow-xl
  p-4 rounded-lg flex flex-col justify-between">
    <div className="flex flex-col align-center w-full">
      <Link to="/">
        <img src={'/images/logo.svg'} className="w-12 h-12 mx-auto" alt="" />
      </Link>
      {props.links.map((link, i) => {
        const isActive = location.pathname.match(link.match);
        return <div key={i} className="mx-auto mt-12">
          <Link
            to={link.link}
            prefetch="intent"
          >
            <img
              src={isActive ? link.activeIconUrl : link.inactiveIconUrl}
              alt="" />
          </Link>
        </div>;
      })}
    </div>
    <div className="w-full flex flex-col justify-center align-center">
      {!location.pathname.includes('admin') &&
        <Link
          prefetch="intent"
          to={'/' + location.pathname.split('/')[1] + '/notifications'}>
          <img
            className="mx-auto mb-12"
            src={location.pathname.includes('notifications')
              ? '/icons/notifications.svg' : '/icons/notifications-gray.svg'}
            alt="" />
        </Link>
      }
      <Link
        prefetch="intent"
        to={'/' + location.pathname.split('/')[1] + '/account'}>
        <img
          className="w-14 h-14 rounded-full cursor-pointer mx-auto mb-12"
          src={props.avatarUrl}
          alt="" />
      </Link>
    </div>
  </div>;
}
