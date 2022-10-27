import Button from '~/components/common/Button';
import TextInput from '~/components/common/TextInput';
import { useState } from 'react';
import { useNavigate } from 'remix';
import cx from 'classnames';

export default function Index() {
  const [project, setProject] = useState(1);
  const navigate = useNavigate();
  return(
    <div>
      <div className="grid grid-cols-5 text-center w-3/5 space-x-4">
        <p
          onClick={() => setProject(1)}
          className={cx(
            project === 1
              ? 'text-primary-red border-b-primary-red'
              : 'hover:text-red-900 border-b-[rgba(0,0,0,0)] text-usual-gray',
            'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
        >
          報價單
        </p>
        <p
          onClick={() => setProject(2)}
          className={cx(
            project === 2
              ? 'text-primary-red border-b-primary-red'
              : 'hover:text-red-900 border-b-[rgba(0,0,0,0)] text-usual-gray',
            'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
        >
          合約
        </p>
        <p
          onClick={() => setProject(3)}
          className={cx(
            project === 3
              ? 'text-primary-red border-b-primary-red'
              : 'hover:text-red-900 border-b-[rgba(0,0,0,0)] text-usual-gray',
            'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
        >
          勞務報酬單
        </p>
        <p
          onClick={() => setProject(4)}
          className={cx(
            project === 4
              ? 'text-primary-red border-b-primary-red'
              : 'hover:text-red-900 border-b-[rgba(0,0,0,0)] text-usual-gray',
            'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
        >
          專案金額
        </p>
        <p
          onClick={() => setProject(5)}
          className={cx(
            project === 5
              ? 'text-primary-red border-b-primary-red'
              : 'hover:text-red-900 border-b-[rgba(0,0,0,0)] text-usual-gray',
            'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
        >
          匯款資料
        </p>
      </div>
      {
        project === 1 &&
        <div className="flex flex-col items-center relative my-10">
          <img src={'/images/contract-sjbjd.svg'} alt=""/>
          <Button
            className="absolute top-12 right-20"
            type="circle"
            onClick={() => {}}
          >
            下載PDF
          </Button>
        </div>
      }
      {
        project === 2 &&
        <div className="flex flex-col items-center relative my-10">
          <img src={'/images/contract-hys.svg'} alt=""/>
          <Button
            className="absolute top-12 right-20"
            type="circle"
            onClick={() => {}}
          >
            下載PDF
          </Button>
        </div>
      }
      {
        project === 3 &&
        <div className="flex flex-col items-center relative my-10">
          <img src={'/images/contract-lwbjd.svg'} alt=""/>
          <Button
            className="absolute top-12 right-20"
            type="circle"
            onClick={() => {}}
          >
            下載PDF
          </Button>
        </div>
      }
      {
        project === 4 &&
        <div className="flex flex-col items-center tracking-[0.2em]">
          <div
            className="flex w-full font-bold text-2xl place-content-end mt-12">
            <p>專案總計金額：</p>
            <p className="text-primary-red">$100,000</p>
          </div>
          <div className="mt-8 w-full px-16">
            <div
              className="flex w-full bg-primary-gray h-16 font-semibold
        items-center text-gray-500">
              <p className="w-36 text-center">階段</p>
              <p className="w-40 text-center">金額</p>
              <p className="w-72 text-center">預計撥款日</p>
              <p className="w-72 text-center">實際撥款日</p>
              <p className="w-72 text-center">撥款狀態</p>
            </div>
            <div
              className="flex w-full h-16 items-center border-b-[1px]
         font-semibold">
              <p className="w-36 text-center">20%</p>
              <p className="w-40 text-center">$ 20,000</p>
              <p className="w-72 text-center">2022/1/22</p>
              <p className="w-72 text-center">2022/1/22</p>
              <p className="w-72 text-center text-green-400 font-normal">已匯款</p>
            </div>
            <div
              className="flex w-full h-16 items-center border-b-[1px]
        font-semibold">
              <p className="w-36 text-center">20%</p>
              <p className="w-40 text-center">$ 20,000</p>
              <p className="w-72 text-center">2022/1/22</p>
              <p className="w-72 text-center">2022/1/22</p>
              <p className="w-72 text-center text-green-400 font-normal">已匯款</p>
            </div>
            <div
              className="flex w-full h-16 items-center border-b-[1px]
        font-semibold">
              <p className="w-36 text-center">20%</p>
              <p className="w-40 text-center">$ 20,000</p>
              <p className="w-72 text-center">2022/1/22</p>
            </div>
            <div className="flex w-full h-16 items-center font-semibold">
              <p className="w-36 text-center">20%</p>
              <p className="w-40 text-center">$ 20,000</p>
              <p className="w-72 text-center">2022/1/22</p>
            </div>
          </div>
          <Button
            className="mt-24 font-normal text-base w-32 h-12"
            type="circle"
            onClick={() => {
              setProject(5);
            }}
          >
            下一步
          </Button>
        </div>
      }
      {
        project === 5 &&
        <div className="my-12 flex flex-col items-center font-semibold text-xl">
          <h1 className="text-black font-black text-2xl mb-12">匯款資料</h1>
          <div className="flex items-center w-full px-32 my-4">
            <div className="w-20">代碼：</div>
            <TextInput
              className="mr-14"
              placeholder="007"
            />
            <div className="w-20">銀行：</div>
            <TextInput
              className="mr-14"
              placeholder="第一銀行"
            />
            <div className="w-20">分行：</div>
            <TextInput
              placeholder="敦化分行"
            />
          </div>
          <div className="flex items-center w-full px-32 my-4">
            <div className="w-20">帳號：</div>
            <TextInput
              className="w-7/12"
              placeholder="0001 1234 5678 9012"
            />
          </div>
          <div className="flex items-center w-full px-32 my-4">
            <div className="w-20">戶名：</div>
            <TextInput
              className="w-7/12"
              placeholder="王小明"
            />
          </div>
          <Button
            className="mt-24 font-normal text-base w-32 h-12"
            type="circle"
            onClick={() => {
              navigate('../outsourcing-contract');
            }}
          >
            下一步
          </Button>
        </div>
      }
    </div>
  );
}
