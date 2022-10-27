import Button from '../common/Button';
import { formatAmount } from '~/utils/amount';
import React from 'react';
import { useNavigate } from 'remix';

interface Props {
  state: 'proposal' | 'progress' | 'review' | 'finish' | string;
  date: string;
  name: string;
  type: string;
  expectFinishDate: string;
  amount: number | string;
}

export default function (props: Props) {
  const navigate = useNavigate();
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
      className=
        "w-5/6 h-24 bg-primary-white flex items-center shadow my-2 rounded-lg"
    >

      <div className="text-gray-400 text-center w-40">{props.date}</div>
      <div className="text-gray-500 text-center w-48">{props.name}</div>
      <div
        className="text-gray-500 text-center w-36 mr-6">{props.type}</div>

      <Button
        color={stateColor[state]}
        onClick={() => {
        }}
      >
        {stateName[state]}
      </Button>

      <div className="text-center w-24 ml-24">
        <div className="text-gray-500 text-sm mb-4">預計完成日</div>
        <div className="text-green-500 text-sm">{props.expectFinishDate}</div>
      </div>
      <div className="text-gray-200 text-center text-5xl mx-12">|</div>
      <div className="text-center w-24 mr-16">
        <div className="text-gray-500 text-sm mb-4">金額</div>
        <div className="text-green-500 text-sm text-center">{amount}</div>
      </div>
      <div className="flex flex-col space-y-1">
        <Button
          type="square"
          onClick={() => navigate('./../' + Math.round(Math.random() * 100)
            + '/requirements')}
        >
          進入專案
        </Button>
        <Button
          type="square"
          onClick={() => navigate('./../' + Math.round(Math.random() * 100)
            + '/information/basic')}
        >
          專案資料
        </Button>
      </div>

      <div className="text-center ml-12 cursor-pointer">
        <div className="bg-gray-300 w-1 h-1 my-1.5 rounded-full" />
        <div className="bg-gray-300 w-1 h-1 my-1.5 rounded-full" />
        <div className="bg-gray-300 w-1 h-1 my-1.5 rounded-full" />
      </div>
    </div>
  );
}

