import Button from '~/components/common/Button';
import React from 'react';
import { useNavigate } from 'remix';

interface Props {
  state: 'finished' | string;
  date: string;
  name: string;
  type: string;
  hostDate: string;
  netDate: string;
  businessPerson: string;
}

export default function (props: Props) {
  const navigate = useNavigate();

  let state = 0;
  switch (props.state) {
    case 'finished':
      state = 0;
      break;
    default:
      break;
  }
  const stateColor = ['bg-gray-300', ];

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
          className="w-24"
        >
          已解約
        </Button>
      </div>

      <div className="flex flex-row justify-between mx-16">
        <div className="text-center">
          <div className="text-gray-500 text-sm mb-4">主機到期日</div>
          <div className="text-green-500 text-sm whitespace-nowrap">
            {props.hostDate}
          </div>
        </div>

        <div className="text-gray-200 text-center text-5xl mx-12">|</div>

        <div className="text-center">
          <div className="text-gray-500 text-sm mb-4">網域到期日</div>
          <div className="text-green-500 text-sm text-center">
            {props.netDate}
          </div>
        </div>

        <div className="text-gray-200 text-center text-5xl mx-12">|</div>

        <div className="text-center">
          <div className="text-gray-500 text-sm mb-4">業務人員</div>
          <div className="text-gray-500 text-sm text-center">
            {props.businessPerson}
          </div>
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

