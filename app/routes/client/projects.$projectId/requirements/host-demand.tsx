import Button from '~/components/common/Button';
import Select from '~/components/Select';
import cx from 'classnames';
import { useNavigate } from 'remix';
import { useState } from 'react';

interface Props {
  name: string;
  money: string;
  CPU: string;
  RAM: string;
  space: string;
  ulDBMS: string;
  ulMonG: string;
  ulMonP: string;
  ulProtect: string;
  type: string;
  classNames?: string;
  isSelected:boolean;
  onSelect:() => void;
}

export default function Index() {
  const navigate = useNavigate();
  const [Selected, setSelectPlan] = useState(0);
  return (
    <div className="w-full h-screen">
      <div className="h-10">
        <p className="text-primary-red font-bold">選取雲端主機</p>
      </div>
      <div className="w-full h-[620px] flex">
        <Plan
          name="小型方案"
          money="＄3,500"
          CPU="CPU雙核心"
          RAM="1G RAM"
          space="30GB 儲存空間"
          ulDBMS="1 個資料庫"
          ulMonG="流量每月 25Ｇ"
          ulMonP="每月最高5000名訪客"
          ulProtect="全天候監控網路安全性和 DDOS 防護"
          type="chosen"
          isSelected={Selected===0}
          onSelect ={()=>setSelectPlan(0)}
        />
        <Plan
          name="中型方案"
          money="＄6,500"
          CPU="CPU雙核心"
          RAM="4G RAM"
          space="100GB 儲存空間"
          ulDBMS="10 個資料庫"
          ulMonG="流量每月 250Ｇ"
          ulMonP="每月最高30000名訪客"
          ulProtect="全天候監控網路安全性和 DDOS 防護"
          type="notchosen"
          isSelected={Selected===1}
          onSelect ={()=>setSelectPlan(1)}
        />
        <Plan
          name="無限吃到飽方案"
          money="＄8,000"
          CPU="CPU 四核心"
          RAM="8G RAM"
          space="無限儲存空間"
          ulDBMS="25 個資料庫"
          ulMonG="流量每月 750Ｇ"
          ulMonP="每月最高150000名訪客"
          ulProtect="全天候監控網路安全性和 DDOS 防護"
          type="notchosen"
          isSelected={Selected===2}
          onSelect ={()=>setSelectPlan(2)}
        />
      </div>
      <p className="mt-8 w-full text-[#AE2423] text-center">總計：$ 3,500</p>
      <div className="w-full text-center mt-4">
        <Button
          className="w-28 mb-28"
          onClick={() => navigate('../requirements/host-domain')}>
          下一步
        </Button>
      </div>
    </div>
  );
}

function Plan(props: Props) {
  const [target, setTarget] = useState(1);
  return (<div
    className="flex flex-col w-1/3 bg-primary-gray rounded-3xl
  shadow-lg p-4 m-3">
    <div className="w-full text-center my-4">
      <p className="my-2 text-lg text-usual-gray font-bold">{props.name}</p>
      <p className="my-4 text-3xl text-[#EA4335]">{props.money}</p>
      <p className="my-4 text-sm tracking-widest">{props.CPU}</p>
      <p className="my-4 text-sm tracking-widest">{props.RAM}</p>
      <p className="my-4 text-sm tracking-widest">{props.space}</p>
    </div>
    <div className="w-2/3 h-12 self-center rounded-full">
      <Select<number>
        className="bg-white text-black h-12 relative rounded-l-full
        rounded-r-full"
        value = {target}
        onChange={setTarget}
        options= {[
          {
            value:1,
            label:'1年'
          },
          {
            value:2,
            label:'2年'
          },
        ]} />
    </div>
    <div className="mt-2 border-y" />
    <div className="mt-8 text-usual-gray text-sm">
      <ul className="list-disc ml-4">
        <li>{props.ulDBMS}</li>
        <li>{props.ulMonG}</li>
        <li>{props.ulMonP}</li>
        <li>{props.ulProtect}</li>
      </ul>
      <div className="w-full h-12 mt-12 text-center">
        <Button
          className={
            cx(props.isSelected ?
              'bg-primary-red' : 'bg-usual-gray', 'h-10 w-28 ')}
          onClick={props.onSelect}>
          {props.isSelected ? '已選擇' : '選擇'}
        </Button>
      </div>
    </div>
  </div>);
}
