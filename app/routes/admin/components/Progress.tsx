import Button from '~/components/common/Button';
import { formatAmount } from '~/utils/amount';
import React from 'react';
import { useNavigate } from 'remix';

interface Props {
  state: 'setting' | 'UI' | 'GitHub' | string;
  date: string;
  name: string;
  type: string;
  amount: string | number;
  outsourceAmount: string | number;
  people: Array<any>;
}

export default function (props: Props) {
  const navigate = useNavigate();

  const amount = formatAmount(props.amount);
  const outsourceAmount = formatAmount(props.outsourceAmount);

  let state = 0;
  switch (props.state) {
    case 'setting':
      state = 0;
      break;
    case 'UI':
      state = 1;
      break;
    case 'GitHub':
      state = 2;
      break;
    default:
      break;
  }
  const stateColor = [
    'bg-pink-500',
    'bg-blue-400',
    'bg-orange-400',
  ];

  const stateName = [
    '設定SEO',
    '查看UI',
    'GitHub'
  ];

  return (
    <div
      className="w-5/6 h-24 bg-primary-white flex items-center justify-between
      my-2 rounded-lg border-2">

      <div className="flex flex-row items-center mr-12">
        <div className="text-gray-400 text-center w-40 whitespace-nowrap">
          {props.date}
        </div>
        <div className="text-gray-500 text-sm whitespace-nowrap text-center">
          <div className="mb-2">
            {props.name}
          </div>
          <div className="text-primary-red">
            {props.type}
          </div>
        </div>
      </div>

      <div>
        <Button
          color={stateColor[state]}
          onClick={() => {
          }}
          className="w-28"
        >
          {stateName[state]}
        </Button>
      </div>

      <div className="flex flex-row justify-between mx-16">
        <div className="text-center">
          <div className="text-gray-500 text-sm mb-4">專案金額</div>
          <div className="text-green-500 text-sm whitespace-nowrap">
            {amount}
          </div>
        </div>

        <div className="text-gray-200 text-center text-5xl mx-12">|</div>

        <div className="text-center">
          <div className="text-gray-500 text-sm mb-4">外包金額</div>
          <div className="text-green-500 text-sm text-center">
            {outsourceAmount}
          </div>
        </div>

        <div className="text-gray-200 text-center text-5xl mx-12">|</div>

        <div className="text-center">
          <div className="text-gray-500 text-sm mb-2">參與對象</div>
          <img
            src="/images/Participant.png"
            alt="Participant"
            className="h-10"/>
        </div>
      </div>

      <div className="flex flex-row items-center py-2">
        <div className="flex flex-col space-y-1">
          <Button
            type="square"
            onClick={() => location.pathname.includes('users')?
              navigate('./../../projects/' + Math.round(Math.random() * 100)
            + '/requirements')
              : navigate('./' + Math.round(Math.random() * 100)
            + '/requirements')}
            className="text-gray-400 text-sm"
          >
            進入專案
          </Button>
          <Button
            type="square"
            onClick={() => location.pathname.includes('users')?
              navigate('./../../projects/' + Math.round(Math.random() * 100)
          + '/information/basic')
              : navigate('./' + Math.round(Math.random() * 100)
          + '/information/basic')}
            className="text-gray-400 text-sm"
          >
            專案資料
          </Button>
        </div>

        <div
          className="text-center ml-6 cursor-pointer mr-4">
          <div className="bg-gray-300 w-1 h-1 my-1.5 rounded-full" />
          <div className="bg-gray-300 w-1 h-1 my-1.5 rounded-full" />
          <div className="bg-gray-300 w-1 h-1 my-1.5 rounded-full" />
        </div>
      </div>

    </div>
  );
}

