import Button from '~/components/common/Button';
import TextInput from '~/components/common/TextInput';
import UiPreview from '~/components/UiPreview';
import SideButtons from '~/components/SideButtons';
import { useNavigate } from 'remix';
import { useState } from 'react';

export default function Index() {
  const navigate = useNavigate();

  const email = 'contact@sourcejust.com';

  const [isShowLink, setIsShowLink] = useState(false);

  const uiPreviews = [
    {
      id: 0,
      commentCount: 5,
      name: '首頁',
      imgUrl: '/images/preview1.png',
    },
    {
      id: 1,
      commentCount: 0,
      name: '首頁',
      imgUrl: '/images/preview1.png',
    },
    {
      id: 2,
      commentCount: 0,
      name: '首頁',
      imgUrl: '/images/preview1.png',
    },
    {
      id: 3,
      commentCount: 0,
      name: '首頁',
      imgUrl: '/images/preview2.png',
    },
    {
      id: 4,
      commentCount: 0,
      name: '首頁',
      imgUrl: '/images/preview2.png',
    },
    {
      id: 5,
      commentCount: 0,
      name: '首頁',
      imgUrl: '/images/preview2.png',
    },
    {
      id: 6,
      commentCount: 0,
      name: '首頁',
      imgUrl: '/images/preview1.png',
    }
  ];

  return (
    <div className="mb-16">
      <div>
        <div className="flex flex-row justify-end">
          <Button
            className="flex mr-4 shadow-md border-0"
            type="deactivated"
            onClick={() => {
              setIsShowLink(true);
            }}
          >
            <img src="/images/figma.svg" alt="" />
            專案連結
          </Button>
          <Button
            className="shadow-md border-0"
            type="deactivated"
            onClick={() => navigate('../uiUpload')}
          >
            + 上傳UI
          </Button>
        </div>
        <div
          className="grid grid-cols-3 place-items-center
      gap-x-32 gap-y-10 mt-8">
          {uiPreviews.map((uiPreview) => {
            const {
              id,
              commentCount,
              name,
              imgUrl
            } = uiPreview;
            return <UiPreview
              platform="designer"
              key={id}
              commentCount={commentCount}
              name={name}
              imgUrl={imgUrl}
            />;
          })}
        </div>
      </div>

      {isShowLink &&
        <div className="fixed top-0 bottom-0 left-0 right-0">
          <div className="w-screen h-screen bg-gray-500 opacity-40 z-10"></div>
          <div
            className="w-5/12 h-96 bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col items-center justify-around">
            <div
              className="flex flex-row items-center
             w-full justify-center px-24 my-4">
              <img
                src="/images/figma.png"
                alt="figma"
                className="w-10 h-10 mr-4" />
              <TextInput
                placeholder="填入連結"

                className="w-full"
              />
            </div>
            <div className="w-7/12">
              <div className="text-primary-red text-sm mb-6">
                請開放此 email 的“編輯者”權限
              </div>
              <div className="flex flex-row items-center">
                <img
                  src="/images/logo.svg"
                  alt="logo"
                  className="w-10 h-10 mr-10" />
                <div className="text-gray-400 mr-10">
                  {email}
                </div>
                <div
                  className="text-primary-red cursor-pointer"
                  onClick={() => {
                    console.log('copy');
                  }}>
                  複製
                </div>
              </div>
            </div>
            <Button
              onClick={() => {
                setIsShowLink(false);
              }}
              className="w-1/6 text-sm font-medium"
            >確認</Button>
          </div>
        </div>}

      <SideButtons type="designer" />
    </div>

  );
}
