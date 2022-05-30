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
    <div className="h-screen w-full">
      <p className="w-full text-center text-primary-red mt-6 font-bold text-xl">
        行銷功能</p>
      <div className="w-full mt-20 flex flex-col items-center">
        <div className="w-5/6 flex justify-end">
          <img
            className="mx-2 w-4"
            src={'/images/client-question.svg'}
            alt="" />
          <p className="text-right text-sm text-[#036EEB]">想要追加功能？</p>
        </div>
        <FCard name="Email 行銷" money="＄12,000" />
        <FCard name="SEO" money="＄5,000" />
        <p className="w-5/6 text-left text-sm text-usual-gray tracking-widest">
          如有其他額外行銷 例如實體活動、論壇行銷、廣告投放等相關需求，請洽公司電話 03-6583366
        </p>
      </div>
      <div className="w-full mt-20 text-center">
        <p className="text-primary-red tracking-[0.040em]">總計：$ 3,500</p>
        <Button
          className="mt-6 w-32 h-12"
          onClick={() => {
            navigate('../requirements/web-function');
          }}>下一步</Button>
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
          <img
            className="h-3/5 w-full"
            src={'/images/client-tick.svg'}
            alt="" />
        </button>}

      </div>
      <div className="flex w-1/4 justify-center">
        <p>{props.name}</p>
        <img className="w-4 mx-3" src={'/images/client-question.svg'} alt="" />
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
        <p className="text-center text-xl tracking-[0.12em] text-[#EA4335]">
          {props.money}</p>
      </div>
    </div>
  );
}

