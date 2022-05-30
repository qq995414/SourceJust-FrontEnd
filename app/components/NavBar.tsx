import { Link, useLocation } from 'remix';
import cx from 'classnames';

interface NavBarItem {
  // 顯示文字
  label: string;
  // 判斷當前是否在這個頁面
  match: RegExp;
  // 按了以後會跳到哪頁
  to: string;
}

interface Props {
  items: NavBarItem[];
  className?: string;
}

function NavBar(props: Props) {
  const location = useLocation();
  return <div className="flex place-content-center justify-around w-full">
    {props.items.map(link => <Link
      prefetch="render"
      key={link.to}
      className={cx(
        location.pathname.match(link.match)
          ? 'text-primary-red border-b-primary-red'
          : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]', props.className,
        'border-b-4 pb-2 font-semibold transition-all px-2 tracking-widest')}
      to={link.to}>
      {link.label}
    </Link>)}
  </div>;
}

export default NavBar;
