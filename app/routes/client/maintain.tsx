import Button from '~/components/common/Button';
import Select from '~/components/Select';
import { useState } from 'react';
import { useNavigate } from 'remix';

interface Props {
  name: string;
  money: string;
}

const options = [
  {
    value: 1,
    label: '1年'
  },
  {
    value: 2,
    label: '2年'
  },
  {
    value: 3,
    label: '3年'
  }
];

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col">
      <div className="container mx-auto">
        <p
          className="w-full text-center text-primary-red
        mt-12 font-bold text-xl">
          延續維護方案
        </p>
        <div className="w-full mt-12 flex flex-col items-center">
          <FCard name="方案 A" money="＄2,800" />
          <FCard name="方案 B" money="＄2,800" />
          <FCard name="方案 C" money="＄2,800" />
          <FCard name="方案 Ｄ" money="$2,800" />
        </div>
        <div className="w-full mt-5 text-center">
          <Button
            className="mt-6 w-32 h-12"
            onClick={() => navigate('./')}>
            下一步
          </Button>
        </div>
      </div>
    </div>
  );
}

function FCard(props: Props) {
  const [value, setValue] = useState(1);
  const [btnChange, setBtnChange] = useState(false);
  return (
    <div className="bg-primary-gray w-4/6 h-24 flex items-center my-3">
      <div className="flex justify-center items-center w-24">
        {!btnChange && <button
          className=" appearance-none h-10 w-10 rounded-md
           bg-[#97979754] border-primary-gray
             duration-200"
          onClick={() => {
            setBtnChange(!btnChange);
          }} />}
        {btnChange && <button
          className=" appearance-none h-10 w-10 rounded-md
           bg-primary-red border-primary-red
             duration-200"
          onClick={() => {
            setBtnChange(!btnChange);
          }}>
          <img
            className="h-3/5 w-full"
            src={'/images/client-tick.svg'}
            alt="" />
        </button>}

      </div>
      <div className="flex w-1/4 justify-center tracking-[0.12em]">
        <p>{props.name}</p>
      </div>
      <div className="w-1/4 ml-4 h-12">
        <div className="w-32">
          <Select<number>
            className="rounded-r-full rounded-l-full
            tracking-[0.5em] text-center h-12 text-black"
            value={value}
            onChange={setValue}
            options={options} />
        </div>
      </div>
      <div className="w-1/6 ml-20">
        <p
          className="text-center text-xl tracking-[0.12em]
         text-[#EA4335] font-bold"
        >
          {props.money}
        </p>
      </div>
    </div>
  );
}
