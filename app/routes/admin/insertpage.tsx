import Select from '~/components/webSelect';
import { MetaFunction, useNavigate } from 'remix';
import { useState } from 'react';
import { Editor } from './components/react-draft-wysiwyg.client';
import { ClientOnly } from "remix-utils";
import styles from "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const meta: MetaFunction = () => {
  return { title: '總後台 ｜ 索爾斯科技', };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {



  const [target2, setTarget2] = useState(1);
  const navigate = useNavigate();
  const [target, setTarget] = useState(1);
  const [isShowLink, setIsShowLink] = useState(false);

  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex items-center mt-12 mx-32" >
        <div style={{ fontSize: '20px' }}
          className="flex w-11/12 place-content-center justify-around">
          <Select<number>
            className="bg-gray-100 text-black h-12 relative mr-8"
            value={target2}
            onChange={setTarget2}
            options={[
              {
                value: 0,
                label: 'SEO優化'
              },
              {
                value: 1,
                label: '網頁設計常見問題'
              },
              {
                value: 2,
                label: '網頁須知'
              },
              {
                value: 3,
                label: '網站工具說明'
              },
            ]} />
          <div className="flex w-11/12 place-content-center justify-around ">
            <p className=' border-b-4' style={{ fontWeight: '500', fontSize: '32px' }}>
              為什麼 SEO如此重要？三個秘密告訴你！
            </p>
          </div>
        </div>

        <div className="flex-grow"></div>
        <img
          src="/icons/webpan.svg"
          alt=""
          onClick={() => {
            setIsShowLink(true);
          }}
          className="cursor-pointer"
        />

      </div>
      <div className="flex items-center mt-12 mx-32" >
        <input className='mt-5' placeholder={'描述文字'} style={{ borderBottom: '1px solid #717274', width: '669px', fontSize: '20', letterSpacing: '0.02em' }}></input>
        <p className='whitespace-nowrap mt-12 ml-48' style={{
          width: '74px',
          height: '64px',
          left: '57px',
          top: '51px',
          fontWeight: '700',
          fontSize: '20px',
          lineHeight: '160%',
          /* identical to box height, or 64px */

          alignItems: 'center',
          textAlign: 'center',
          letterSpacing: '0.05em',
          color: '#D11329',
        }}>預覽</p>
      </div>

      <div className="flex items-center mt- mx-32" >
        <input className='mt-5' placeholder={'關鍵字'} style={{ borderBottom: '1px solid #717274', width: '669px' }}></input>
      </div>
      <div className="flex flex-col mt-8">
        
        <div className="flex flex-col items-center">
        
          <ClientOnly>
            {() => <Editor/>}
          </ClientOnly>
        </div>
      </div>
    </div>
  );
}
