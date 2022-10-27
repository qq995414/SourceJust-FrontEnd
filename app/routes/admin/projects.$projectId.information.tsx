import NavBar from '~/components/NavBar';
import Button from '~/components/common/Button';
import TextInput from '~/components/common/TextInput';
import { Link, Outlet, useNavigate } from 'remix';
import { useState } from 'react';

const links = [
  {
    label: '基本資料',
    to: './basic',
    match: /^\/admin\/projects\/(.*)\/information\/basic$/
  },
  {
    label: '專案人員',
    to: './member',
    match: /^\/admin\/projects\/(.*)\/information\/member$/
  },
  {
    label: '合約管理',
    to: './contract',
    match: /^\/admin\/projects\/(.*)\/information\/contract$/
  },
  {
    label: '付款管理',
    to: './payment',
    match: /^\/admin\/projects\/(.*)\/information\/payment$/
  }
];

export default function Index() {
  const navigate = useNavigate();
  const [isShowLink, setIsShowLink] = useState(false);
  const [isPause, setIsPause] = useState(false);

  return (
    <div className="container mx-auto w-full min-h-screen">
      <div className="flex flex-col  mr-20 pt-12">
        <div className="flex ml-36 items-center">
          <Link
            className="flex justify-start items-center "
            to="./../..">
            <div><img src="/images/xiaoyuhao.svg" alt="" /></div>
            <div className="text-primary-red ml-8 font-bold text-lg"> 回到列表</div>
          </Link>
          <div className="flex-grow text-lg text-center font-bold ml-28">
            專案資料
          </div>
          <div>
            <Button
              className="mr-4 border-primary-red text-primary-red"
              type="square"
              onClick={() => navigate('./../new-quotation')}
            >
              新增報價
            </Button>
            {!isPause && <Button
              className="mr-4 border-primary-red text-primary-red"
              type="square"
              onClick={() => { setIsShowLink(true);setIsPause(true); }}
            >
              暫停專案
            </Button>}
            {isPause && <Button
              className="mr-4 border-green-400 text-green-400"
              type="square"
              onClick={() => { setIsPause(false); }}
            >
              恢復專案
            </Button>}
            {isShowLink &&
              <div className="fixed top-0 bottom-0 left-0 right-0">
                <div
                  className="w-screen h-screen bg-gray-500
              opacity-40 z-10"></div>
                <div
                  className="w-5/12 h-96 bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col items-center pt-20">
                  <p className="font-semibold text-lg">此專案現階段已暫停，</p>
                  <p className="font-semibold text-lg">所有人將無法進行任何實作</p>
                  <Button
                    onClick={() => {
                      setIsPause(true);
                      setIsShowLink(false);
                    }}
                    className="w-1/4 text-sm font-medium mt-32 h-10"
                  >確認</Button>
                </div>
              </div>}
            <Button
              className="border-primary-red text-primary-red"
              type="square"
              onClick={() => navigate('')}
            >
              專案解約
            </Button>
          </div>
        </div>
        <div className="mt-10 ml-8 flex items-center place-content-between">
          <div className="w-1/2  ml-12">
            <NavBar items={links} />
          </div>
          <div className="flex items-center">
            <div className="w-24">業務代表：</div>
            <TextInput
              className="w-40 rounded p-2 text-black text-center"
              value="李鵬"
              onChange={() => {
              }} />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
