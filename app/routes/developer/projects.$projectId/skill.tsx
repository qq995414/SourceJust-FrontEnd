import Button from '~/components/common/Button';
import Select from '~/components/Select';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const FOptions = [
  {
    value:1,
    label:'前端技術'
  }, {
    value:2,
    label:'後端技術'
  }, {
    value:3,
    label:'資料庫'
  }, {
    value:4,
    label:'RWD'
  }
];
const SOptions = [
  {
    value:1,
    label:'HTML'
  }, {
    value:2,
    label:'CSS'
  }, {
    value:3,
    label:'React'
  }, {
    value:4,
    label:'Vue'
  }
];
const BOptions = [
  {
    value:1,
    label:'Java'
  }, {
    value:2,
    label:'C++'
  }, {
    value:3,
    label:'JavaScript'
  }, {
    value:4,
    label:'Python'
  }
];
const DOptions = [
  {
    value:1,
    label:'A'
  }, {
    value:2,
    label:'B'
  }, {
    value:3,
    label:'C'
  }, {
    value:4,
    label:'D'
  }
];
const ROptions = [
  {
    value:1,
    label:'0'
  }, {
    value:2,
    label:'1'
  }, {
    value:3,
    label:'2'
  }, {
    value:4,
    label:'3'
  }
];

export default function Index() {
  const [list, setList] = useState([{ id:'' }]);
  const newObject = { id:'' };
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-4 mt-2">
      <div>
        {list.map((i)=><SkCard key={i.id}/>)}
      </div>
      <div>
        <button
          onClick={()=>setList([...list, newObject])}
          className="text-primary-red text-sm
         rounded-l-full rounded-r-full w-20 h-10">
          新增技能</button>
      </div>
      <div className="self-center mt-60 text-primary-red">
        <p> 請確認後所有會撰寫的技術，再進行下一步</p>
        <br />
        <p className="text-center">如發現有未填寫或者未按照所填寫使用技術</p>
        <p className="text-center">將終止合作並懲罰性兩倍的專案金額</p>
      </div>
      <div className="self-center mt-4">
        <Button
          type="circle"
          onClick={() => navigate('./../milestone')}
        >
          下一步
        </Button>
      </div>
    </div>
  );
}

function SkCard(){
  const [fvalue, setFvalue] = useState(1);
  const [svalue, setSvalue] = useState(1);
  const [bvalue, setBvalue] = useState(1);
  const [dvalue, setDvalue] = useState(1);
  const [rvalue, setRvalue] = useState(1);
  return (
    <div className="w-full flex h-12 tracking-[0.2em] mb-10">
      <p className="mx-2 flex items-center">使用技術</p>
      <div className="w-1/5 mx-2">
        <Select<number>
          className="bg-[#F8F8F8] text-usual-gray
            tracking-[0.5em] text-center h-12 shadow-md"
          value={fvalue}
          onChange={setFvalue}
          options={FOptions} />
      </div>
      {fvalue==1 && <div className="w-1/5 mx-2">
        <Select<number>
          className="tracking-[0.5em] text-center h-12
          text-usual-gray bg-[#F8F8F8] shadow-md"
          value={svalue}
          onChange={setBvalue}
          options={SOptions} />
      </div>}
      {fvalue==2 && <div className="w-1/5 mx-2">
        <Select<number>
          className="tracking-[0.5em] text-center h-12
          text-usual-gray bg-[#F8F8F8] shadow-md"
          value={bvalue}
          onChange={setBvalue}
          options={BOptions} />
      </div>}
      {fvalue==3 && <div className="w-1/5 mx-2">
        <Select<number>
          className="tracking-[0.5em] text-center h-12
          text-usual-gray bg-[#F8F8F8] shadow-md"
          value={dvalue}
          onChange={setBvalue}
          options={DOptions} />
      </div>}
      {fvalue==4 && <div className="w-1/5 mx-2">
        <Select<number>
          className="tracking-[0.5em] text-center h-12
          text-usual-gray bg-[#F8F8F8] shadow-md"
          value={rvalue}
          onChange={setBvalue}
          options={ROptions} />
      </div>}
    </div>

  );
}
