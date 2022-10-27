import Button from '../common/Button';
import { formatAmount } from '~/utils/amount';
import React, { useState } from 'react';
import { useNavigate } from 'remix';

interface Props {
  developer: 'own' | 'outsource' | string;
  id: string | number;
  state: 'proposal' | 'progress' | 'review' | 'finish' | string;
  date: string;
  name: string;
  type: string;
  programLanguage?: string;
  expectFinishDate?: string;
  amount?: number | string;
  leftTime?: string;
  leftMoney?: string | number;
  isMoneyPaid?: boolean;
}

export default function (props: Props) {
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  let state = 0;
  switch (props.state) {
    case 'proposal':
      state = 0;
      break;
    case 'progress':
      state = 1;
      break;
    case 'review':
      state = 2;
      break;
    case 'finish':
      state = 3;
      break;
    default:
      break;
  }

  const stateColor = [
    'bg-state-proposal',
    'bg-state-progress',
    'bg-state-review',
    'bg-state-finish'
  ];

  const stateName = [
    '提案中',
    '進行中',
    '審稿中',
    '已完成'
  ];

  const amount = props.amount ? formatAmount(props.amount) :
    props.leftMoney ? formatAmount(props.leftMoney) : 0;

  return (
    <div
      className="h-24 my-2 bg-primary-white shadow rounded-lg w-full
    flex items-center text-sm relative">

      <div className="flex w-1/3">
        <div className="text-gray-400 text-center w-40">{props.date}</div>
        <div className="text-gray-500 text-center w-48">{props.name}</div>
        <div className="text-gray-500 text-center w-36 mr-6">{props.type}</div>
      </div>

      <div className="w-32 px-0">
        <Button
          color={stateColor[state]}
          onClick={() => {
          }}
        >
          {stateName[state]}
        </Button>
      </div>

      {state !== 3 ?
        <div className="flex w-2/5">
          <div className="text-center w-1/4 mx-2">
            <div className="text-gray-500 mb-4">程式語言</div>
            <div className="text-gray-500">{props.programLanguage}</div>
          </div>
          <div className="text-gray-100 text-center text-4xl my-auto">|</div>

          <div className="text-center w-1/4 mx-2">
            <div className="text-gray-500 mb-4 whitespace-nowrap">預計完成日</div>
            <div className="text-green-500 whitespace-nowrap">
              {props.expectFinishDate}
            </div>
          </div>
          <div className="text-gray-100 text-center text-4xl my-auto">|</div>

          <div className="text-center w-1/4 mx-2">
            <div className="text-gray-500 mb-4">金額</div>
            <div className="text-green-500">{amount}</div>
          </div>
        </div> :
        <div className="flex w-2/5">
          <div className="text-center w-1/4 mx-2">
            <div className="text-gray-500 mb-4">保固剩餘</div>
            <div className="text-green-500">{props.leftTime}</div>
          </div>
          <div className="text-gray-100 text-center text-4xl my-auto">|</div>

          <div className="text-center w-1/4 mx-2">
            <div className="text-gray-500 mb-4">尾款金額</div>
            <div className="text-green-500">{amount}</div>
          </div>
          <div className="text-gray-100 text-center text-4xl my-auto">|</div>

          <div className="text-center w-1/4 mx-2">
            <div className="text-gray-500 mb-4">尾款狀態</div>
            {props.isMoneyPaid ?
              <div className="text-gray-500">已入帳</div> :
              <div className="text-red-500">待入帳</div>
            }
          </div>
        </div>}

      <Button
        type="square"
        onClick={() => {
          state !== 3 ? navigate('./' + Math.round(Math.random() * 100)
              + '/nondisclosure-agreement') :
            navigate('./' + Math.round(Math.random() * 100)
              + '/contact');
        }}
        className="text-gray-400"
      >
        {state === 3 ? '與客戶聯絡' : '進入專案'}
      </Button>

      <div
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className="text-center flex-1 flex justify-end
         cursor-pointer mr-10 ml-4">
        <div>
          <div className="bg-gray-300 w-1 h-1 my-1.5 rounded-full" />
          <div className="bg-gray-300 w-1 h-1 my-1.5 rounded-full" />
          <div className="bg-gray-300 w-1 h-1 my-1.5 rounded-full" />
        </div>
      </div>

      {isOpenMenu &&
        <div
          className="shadow-2xl z-30 absolute w-36 h-64 bg-white
        right-10 top-16 flex flex-col justify-around text-gray-500">
          <div className="flex ml-4 cursor-pointer items-center">
            <img
              src="/icons/cardOptions/file-manage.png"
              alt="fileManage"
              className="w-4 h-4 mr-4" />
            <div>檔案管理</div>
          </div>
          <div className="flex ml-4 cursor-pointer items-center">
            <img
              src="/icons/cardOptions/pay-manage.png"
              alt="fileManage"
              className="w-4 h-4 mr-4" />
            <div>付款管理</div>
          </div>
          <div className="flex ml-4 cursor-pointer items-center">
            <img
              src="/icons/cardOptions/host-manage.png"
              alt="hostManage"
              className="w-4 h-4 mr-4" />
            <div>主機管理</div>
          </div>
          <div className="flex ml-4 cursor-pointer items-center">
            <img
              src="/icons/cardOptions/developer-infor.png"
              alt="developInfor"
              className="w-4 h-4 mr-4" />
            <div>開發資訊</div>
          </div>
          <div className="flex ml-4 cursor-pointer items-center">
            <img
              src="/icons/cardOptions/chat-room.png"
              alt="chatRoom"
              className="w-4 h-4 mr-4" />
            <div>合作聊天室</div>
          </div>
          <div className="flex ml-4 cursor-pointer items-center">
            <img
              src="/icons/cardOptions/service-center.png"
              alt="serviceCenter"
              className="w-4 h-4 mr-4" />
            <div>客服中心</div>
          </div>
        </div>}
    </div>
  );
}

