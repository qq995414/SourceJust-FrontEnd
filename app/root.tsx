import styles from './generated.css';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
} from 'remix';
import nProgressStyles from 'nprogress/nprogress.css';
import draftjsStyles from 'react-quill/dist/quill.snow.css';
import rcCalendarStyles from 'rc-calendar/assets/index.css';
import NProgress from 'nprogress';
import { useEffect, useState } from 'react';

export function links() {
  return [
    {
      rel: 'icon',
      href: '/images/logo.svg',
      type: 'image/svg+xml',
    },
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'stylesheet',
      href: nProgressStyles
    },
    {
      rel: 'stylesheet',
      href: rcCalendarStyles
    },
    {
      rel: 'stylesheet',
      href: draftjsStyles
    },
  ];
}

export default function App() {
  const transition = useTransition();

  useEffect(() => {
    if (transition.state === 'idle') NProgress.done();
    else NProgress.start();
  }, [transition.state]);

  const [isScreenTooSmall, setIsScreenTooSmall] = useState(false);

  function handleResize() {
    setIsScreenTooSmall(window.innerWidth < 1024);
  }

  useEffect(() => {
    setIsScreenTooSmall(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#983333" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>索爾斯科技</title>
      </head>
      <body>
        {isScreenTooSmall &&
        <div
          className="bg-white w-screen h-screen fixed top-0 z-50 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <img className="w-12" src="/images/logo.svg" alt="" />
            <div className="flex">
              <p
                style={{ letterSpacing: '20px' }}
                className="h-6 mt-4">
                索爾斯科
              </p>
              <p className="h-6 mt-4">技</p>
            </div>
            <p
              style={{ color: '#717274' }}
              className="h-12 text-xs">Source Solution</p>
          </div>
          <p>本網站目前不支持手機或小螢幕設備</p>
          <p>請改用電腦開啟，或調整瀏覽器視窗大小</p>
        </div>}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
