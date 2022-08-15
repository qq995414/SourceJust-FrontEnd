import { Link, useLocation } from 'remix';
import { useLoaderData } from 'remix';
import { useState } from 'react';

interface SideNavLink {
  activeIconUrl: string;
  inactiveIconUrl: string;
  activeIconColor: string;
  inactiveIconColor: string;
  activeBgColor: string,
  inactiveBgColor: string,
  targettext: string;
  link: string;
  match: RegExp;
}

interface Props {
  avatarUrl: string;
  links: SideNavLink[];
}

export default function (props: Props) {
  const data = useLoaderData();
  const [sidenavshow, setsidenavshow] = useState(true);
  console.log(data);
  const location = useLocation();
  return (
    <div className="fixed top-0 left-0 h-screen bg-white shadow-xl 
     rounded-lg flex flex-col  ">
       {sidenavshow === true &&
             <img className="mb-5 " src={'/icons/sidenav-logo.svg'} alt="" />
       }
       {sidenavshow === false &&
             <img className="mb-5 w-full" src={'/icons/logo.svg'} alt="" />
       }
      {sidenavshow === true &&
        <div className="flex flex-col align-center w-full pt-4 ">

          {props.links.map((link, i) => {
            const isActive = location.pathname.match(link.match);
            
            return <div className=' w-full pt-1 pb-1'  >
              <div key={i} className={isActive? `w-full isActive-off  mx-auto  pt-4 pb-4 px-4 ` :  ` w-full isActive-on  mx-auto  pt-4 pb-4 px-4`} >
                <Link 
                  to={link.link}
                  prefetch="intent"
                >
                  <img
                    src={isActive ? link.activeIconUrl : link.inactiveIconUrl}
                    className=' w-4'
                    alt="" />
                </Link>
              </div>
            </div>;
          })}
        </div>
      }
      {sidenavshow === false &&
        <div className="flex flex-col align-center w-full pt-4 ">
          {props.links.map((link, i) => {
            const isActive = location.pathname.match(link.match);
            const color = isActive ? link.activeIconColor : link.inactiveIconColor;
            const bkcolor = isActive ? link.activeBgColor : link.inactiveBgColor
            
            return <div  className='w-full  pt-1 pb-1 '   >

              <div key={i} className={isActive? `w-full isActive-off  mx-auto w-full  pt-3 pb-3 ` :  ` w-full isActive-on mx-auto w-full  pt-3 pb-3`}  >
                <Link
                  to={link.link}
                  prefetch="intent"
                >
                  <div className='px-4'>

                    <img
                      src={isActive ? link.activeIconUrl : link.inactiveIconUrl}
                      className=' w-4'
                      style={{ display: "inline-block" }} /> <span className='pl-2 ' style={{ color: color }}>{link.targettext}</span>
                  </div>

                </Link>
              </div>
            </div>
              ;
          })}
        </div>
      }
      {sidenavshow === true &&
        <div className="w-full flex mt-96 flex-col justify-center align-center">
          <div className='w-12' style={{ boxShadow: 'inset 0px 1px 0px #F0F0F0' }}>
            <a onClick={() => setsidenavshow(false)} >YES</a>
          </div>
        </div>
      }
      {sidenavshow === false &&
        <div className="w-full flex mt-96 flex-col justify-center align-center">
          <div className='w-36' style={{ boxShadow: 'inset 0px 1px 0px #F0F0F0' }}>
            <a onClick={() => setsidenavshow(true)} >NO</a>
          </div>
        </div>
      }
    </div>

  );
}
