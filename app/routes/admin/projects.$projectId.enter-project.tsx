import Button from '~/components/common/Button';
import UiPreview from '~/components/UiPreview';
import ProgressBar from '~/components/ProgressBar';
import { useNavigate } from 'remix';
import { useState } from 'react';

const phases = [
  {
    label: '設計需求',
    link: '',
    id: 'requirements'
  },
  {
    label: '檔案下載',
    link: '',
    id: 'contract'
  },
  {
    label: '上傳 UI',
    link: '',
    id: 'ui'
  },
  {
    label: '上傳設計檔',
    link: '',
    id: 'upload-files'
  }
];

export default function Index() {
  const navigate = useNavigate();
  const [isShowLink, setIsShowLink] = useState(false);
  const [isShowLinkTwo, setIsShowLinkTwo] = useState(false);
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
    <div className="container mx-auto">
      <div
        className="bg-deep-orange w-full h-14 px-10 flex items-center
      place-content-between">
        <div className="w-1/3">
          <div
            className="w-9 h-9 rounded-full bg-shallow-orange text-white
        font-bold text-xl flex items-center place-content-center ml-14"
            onClick={() => navigate('./../create/member')}>
            <img src="/images/white-xiaoyuhao.svg" alt="" />
          </div>
        </div>
        <div className="text-white">已 李小花 進入此專案</div>
        <div className="flex w-1/3 place-content-end space-x-4">
          <input
            type="button"
            value="暫停專案"
            className="rounded-full bg-shallow-orange
            text-white h-8 w-24 cursor-pointer"
            onClick={() => {
              setIsShowLink(true);
            }} />
          <input
            type="button"
            value="解約專案"
            className="rounded-full bg-shallow-orange
            text-white h-8 w-24 cursor-pointer"
            onClick={() => {
              setIsShowLinkTwo(true);
            }} />
        </div>
      </div>
      <div className="flex items-center mt-12">
        <div className="w-1/3"></div>
        <ProgressBar phases={phases} currentPhase="ui" />
        <div className="w-1/3">
          <Button
            className="shadow-md border-0 w-28 h-12"
            type="deactivated"
            onClick={() => navigate('')}
          >
            + 上傳UI
          </Button>
        </div>
      </div>
      <div
        className="grid grid-cols-3 place-items-center mx-32
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
      {isShowLink &&
        <div className="fixed top-0 bottom-0 left-0 right-0">
          <div className="w-screen h-screen bg-gray-500 opacity-40 z-10"></div>
          <div
            className="w-5/12 h-96 bg-white z-20 py-12
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col items-center justify-around">
            <div className="font-semibold text-2xl">是否要與 李小花 暫停此專案？</div>
            <div className="flex space-x-10 w-full place-content-center">
              <Button
                type="deactivated"
                onClick={() => {
                  setIsShowLink(false);
                }}
                className="w-32 h-11 text-sm font-medium"
              >取消</Button>
              <Button
                onClick={() => navigate('./../create/member')}
                className="w-32 h-11 text-sm font-medium"
              >暫停</Button>
            </div>
          </div>
        </div>}
      {isShowLinkTwo &&
        <div className="fixed top-0 bottom-0 left-0 right-0">
          <div className="w-screen h-screen bg-gray-500 opacity-40 z-10"></div>
          <div
            className="w-5/12 h-96 bg-white z-20 py-12
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col items-center justify-around">
            <div className="font-semibold text-2xl">是否要與 李小花 解約此專案？</div>
            <div className="text-primary-red">*確認後系統會自動提供解約合約</div>
            <input
              type="text"
              value="填入專案總金額"
              className="w-2/3 h-16 border-2 border-gray-300 rounded-md
              text-gray-300 text-center" />
            <div className="flex space-x-10 w-full place-content-center">
              <Button
                type="deactivated"
                onClick={() => {
                  setIsShowLinkTwo(false);
                }}
                className="w-32 h-11 text-sm font-medium"
              >取消</Button>
              <Button
                onClick={() => navigate('./../create/member')}
                className="w-32 h-11 text-sm font-medium"
              >解約</Button>
            </div>
          </div>
        </div>}
    </div>

  );
}
