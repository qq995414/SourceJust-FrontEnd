import Button from '~/components/common/Button';
import UiPreview from '~/components/UiPreview';
import SideButtons from '~/components/SideButtons';
import { useNavigate } from 'remix';
import { useState } from 'react';

export default function Index() {
  const navigate = useNavigate();

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
      commentCount:0,
      name: '首頁',
      imgUrl: '/images/preview1.png',
    }
  ];

  return (
    <div>
      <div>
        <SideButtons type="client"/>
        <div className="flex flex-row justify-end">
          <Button
            className="flex mr-4 shadow-md border-0"
            type="deactivated"
            onClick={() => {navigate('./../ui-check'); }}
          >
            <img src="/images/figma.svg" alt="" />
            專案查看
          </Button>
        </div>
        <div
          className="grid grid-cols-3 place-items-center
      gap-x-32 gap-y-10 mt-8">
          {uiPreviews.map((uiPreview)=> {
            const { id, commentCount, name, imgUrl } = uiPreview;
            return <UiPreview
              platform="designer"
              key={id}
              commentCount={commentCount}
              name={name}
              imgUrl={imgUrl}
            />;
          })}
        </div>
        <div className="flex place-content-center mt-12">
          <div>
            <Button
              onClick={() => {}}
              className="w-36 h-12 mr-20 font-medium bg-usual-gray"
            >儲存</Button>
            <p className="mt-8 mb-8 text-gray-500 tracking-widest">
              修改次數剩餘 3 次</p>
          </div>
          <Button
            onClick={() => { setIsShowLink(true); }}
            className="w-36 h-12 ml-20 font-medium"
          >下一步</Button>
        </div>

      </div>
      {isShowLink &&
        <div className="fixed top-0 bottom-0 left-0 right-0">
          <div className="w-screen h-screen bg-gray-500 opacity-40 z-10"></div>
          <div
            className="w-5/12 h-96 bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col items-center pt-20" >
            <p className="font-semibold text-lg">確定定稿後</p>
            <p className="font-semibold text-lg">就無法進行修改摟！</p>
            <Button
              onClick={() => { navigate('./../seo-setup'); }}
              className="w-1/4 text-sm font-medium mt-16 mb-6 h-12"
            >確認</Button>
            <Button
              onClick={() => { setIsShowLink(false); }}
              className="w-1/4 text-sm font-medium bg-usual-gray h-12"
            >取消</Button>
          </div>
        </div>}
    </div>

  );
}
