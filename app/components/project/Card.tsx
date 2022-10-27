import Button from '../common/Button';
import { formatAmount } from '~/utils/amount';
import React, { useState } from 'react';
import { useNavigate } from 'remix';

export interface CardModel {
  id: number | string;
  state: 'proposal' | 'progress' | 'review' | 'finish' | string;
  date: string;
  name: string;
  type: string;
  expectFinishDate: string;
  amount: number | string;
}

export default function (props: CardModel) {
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

  const amount = formatAmount(props.amount);

  return (
    <div
      className="h-24 bg-primary-white flex items-center
     shadow my-2 rounded-lg w-full relative">
      <div className="text-gray-400 text-center w-40 whitespace-nowrap">
        {props.date}
      </div>
      <div className="text-gray-500 text-center w-48 mx-4">{props.name}</div>
      <div className="text-gray-500 text-center w-36 mr-6">
        {props.type}
      </div>

      <Button
        color={stateColor[state]}
        onClick={() => {
        }}
      >
        {stateName[state]}
      </Button>

      <div className="text-center w-24 ml-24">
        <div className="text-gray-500 text-sm mb-4">預計完成日</div>
        <div className="text-green-500 text-sm whitespace-nowrap">
          {props.expectFinishDate}
        </div>
      </div>
      <div className="text-gray-200 text-center text-5xl mx-12">|</div>
      <div className="text-center w-24 mr-16">
        <div className="text-gray-500 text-sm mb-4">金額</div>
        <div className="text-green-500 text-sm text-center">{amount}</div>
      </div>

      <Button
        type="square"
        onClick={() => navigate('./' + Math.round(Math.random() * 100)
          + '/nondisclosure-agreement')}
      >
        進入專案
      </Button>
      <div
        onClick={()=>{setIsOpenMenu(!isOpenMenu);}}
        className="text-center ml-12 cursor-pointer mx-8">
        <div className="bg-gray-300 w-1 h-1 my-1.5 rounded-full" />
        <div className="bg-gray-300 w-1 h-1 my-1.5 rounded-full" />
        <div className="bg-gray-300 w-1 h-1 my-1.5 rounded-full" />
      </div>

      {isOpenMenu &&
        <div
          className="shadow-2xl z-30 absolute w-36 h-48 bg-white
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
              src="/icons/cardOptions/chat-room.png"
              alt="chatRoom"
              className="w-4 h-4 mr-4" />
            <div>合作聊天室</div>
          </div>
          <div className="flex ml-4 cursor-pointer  items-center">
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

