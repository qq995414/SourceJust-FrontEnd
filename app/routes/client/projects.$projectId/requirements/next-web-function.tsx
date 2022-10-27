import Button from '~/components/common/Button';
import { useState } from 'react';
import { useNavigate } from 'remix';

interface Props {
  name: string;
  money: string;
}

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full">
      <div className="w-full mt-20 flex flex-col items-center">
        <FCard name="Google 登入" money="＄2,800" />
        <FCard name="Facebook 登入" money="＄2,800" />
        <FCard name="Line 登入" money="＄2,800" />
        <FCard name="APPLE 登入" money="＄2,800" />
        <FCard name="簡訊驗證功能" money="＄2,800" />
      </div>
      <div className="w-full mt-5 text-center">
        <p className="text-primary-red tracking-[0.040em]">總計：$ 3,500</p>
        <Button
          className="mt-5 w-32 h-12"
          onClick={() => navigate('./../loading')}>
          下一步
        </Button>
      </div>
    </div>
  );
}

function FCard(props: Props) {
  const [value, setValue] = useState(1);
  const [btnChange, setBtnChange] = useState(false);
  return (
    <div className="bg-primary-gray w-5/6 h-24 flex items-center my-3">
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
          <img className="h-3/5 w-full" src="/images/client-tick.svg" alt="" />
        </button>}

      </div>
      <div className="flex w-1/4 justify-center">
        <p>{props.name}</p>
      </div>
      <div className="w-1/4 ml-4 h-12">

      </div>
      <div className="w-1/6 ml-20">
        <p className="text-center text-xl tracking-[0.12em] text-[#EA4335]">
          {props.money}</p>
      </div>
    </div>
  );
}

