import Button from '~/components/common/Button';
import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from '@remix-run/react';

interface Props {
  placeholder?: string;
  value: string;
  className?: string;
}

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen">
      <p className="text-primary-red font-bold">選擇網域</p>
      <div className="flex justify-center w-full mt-5">
        <SearchInput value="sourcejust" placeholder="請輸入您想要的網域名稱" />
      </div>
      <p className="text-center mt-2 p-3 text-usual-gray">依照名稱產出的網域名</p>
      <div className="flex flex-col w-full items-center mt-5">
        <div className="flex w-11/12">
          <SelectInput value="sourcejust.com" />
          <SelectInput value="sourcejust.com" />
        </div>
        <div className="flex w-11/12">
          <SelectInput value="sourcejust.org" />
          <SelectInput value="sourcejust.org" />
        </div>
        <div className="flex w-11/12">
          <SelectInput value="sourcejust.org" />
          <SelectInput value="sourcejust.org" />
        </div>
        <div className="flex w-11/12">
          <SelectInput value="sourcejust.org" />
          <SelectInput value="sourcejust.org" />
        </div>
      </div>
      <div className="w-full mt-12 text-center">
        <Button
          className="w-32 h-12"
          onClick={() => {
            navigate('../requirements/server-function');
          }}>下一步</Button>
      </div>
    </div>
  );
}

function SearchInput(props: Props) {
  return (
    <div className="text-left w-2/3 rounded-xl bg-primary-gray flex">
      <input
        className={classNames(`bg-primary-gray rounded-lg outline-none
         w-2/3 h-16 text-left p-4 tracking-widest`)}
        placeholder={props.placeholder}
        value={props.value}/>
      <div className="w-1/3 justify-end mr-3 flex items-center">
        <button
          className="bg-primary-red rounded-lg text-lg
       text-white w-16 h-12 tracking-widest">搜尋
        </button>
      </div>
    </div>
  );
}

function SelectInput(props: Props) {
  const [isChange, setIsChange] = useState(false);
  return (
    <div className="text-left w-1/2 rounded-xl bg-primary-gray flex mx-5 my-4 outline-none">
      <input
        className={classNames(`ml-3 bg-primary-gray rounded-lg outline-none
         w-2/3 h-16 text-left p-4 tracking-widest text-lg`)}
        placeholder={props.placeholder}
        value={props.value} />
      <div className="w-1/3 justify-end mr-3 flex items-center">
        <button
          className="bg-primary-gray rounded-lg text-lg
       text-primary-red w-20 h-12 tracking-widest"
          onClick={() => {
            setIsChange(!isChange);
          }}>
          {!isChange && <div>選擇</div>}
          {isChange && <div className="text-[#036EEB]">已選擇</div>}
        </button>
      </div>
    </div>
  );
}
