import Maintain from '../components/Maintain';
import Progress from '../components/Progress';
import Proposal from '../components/Proposal';
import Warranty from '../components/Warranty';
import TextInput from '~/components/common/TextInput';
import Select from '~/components/Select';
import cx from 'classnames';
import { useLoaderData } from 'remix';
import { Link } from 'remix';
import { useState } from 'react';

const proposalCards = [
  {
    id: 0,
    state: 'negotiation',
    date: '2021-05-01',
    name: '檸檬科技股份有限公司',
    type: 'App 開發 -iOS',
    responsiblePerson: '王小明',
    telephone: '0912-345678',
    businessPerson: '李鵬',
  },
];

const progressCards = [
  {
    id: 0,
    state: 'setting',
    date: '2021-05-01',
    name: '檸檬科技股份有限公司',
    type: 'App 開發 -iOS',
    amount: '10000',
    outsourceAmount: '100000',
    people: ['1', '2'],
  },
];

const maintainCards = [
  {
    id: 0,
    state: 'finished',
    date: '2021-05-01',
    name: '檸檬科技股份有限公司',
    type: 'App 開發 -iOS',
    hostDate: '2021-12-09',
    netDate: '2021-12-09',
    businessPerson: '李鵬'
  },
];

const warrantyCards = [
  {
    id: 0,
    state: 'urgent',
    date: '2021-05-01',
    name: '檸檬科技股份有限公司',
    type: 'App 開發 -iOS',
    leftWarranty: '3個月',
    hostDate: '2021-12-09',
    netDate: '2021-12-09',
    businessPerson: '李鵬'
  },
];

export async function loader({ params }: any) {
  return params;
}

export default function Index() {
  const [target, setTarget] = useState(1);
  const [target2, setTarget2] = useState(1);
  const [target3, setTarget3] = useState(1);
  const [target4, setTarget4] = useState(1);
  const { projectId } = useLoaderData();
  const [project, setProject] = useState(1);
  console.log(projectId);
  return (
    <div className="flex flex-col container mx-auto w-full my-12">
      <div className="grid grid-cols-3 px-32">
        <Link
          className="flex justify-start items-center "
          to="./../">
          <div><img src="/images/xiaoyuhao.svg" alt="" /></div>
          <div className="text-primary-red ml-8 font-bold text-lg"> 回到列表</div>
        </Link>
        <div className="text-2xl self-center font-semibold text-center">
          设计師資料</div>
      </div>
      <div className="w-80 h-72 self-center rounded-lg overflow-hidden mt-20">
        <img src="/images/designer1.svg" alt="" />
      </div>
      <div
        onClick={()=>{}}
        className="self-center mt-6 mr-56 text-primary-red font-medium
        cursor-pointer">
        重新上傳照片</div>
      <div className="flex flex-col mb-12 mt-12 px-32">
        <div className="flex items-center">
          <div className="text-primary-red font-bold text-xl">客戶資料</div>
          <div className="flex-grow"></div>
          <div
            className="text-primary-red cursor-pointer"
            onClick={()=>{}}>編輯</div>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-40">姓名：</div>
          <TextInput
            className="w-1/3 rounded-md p-2 text-black mr-20"
            value="王小明"
            onChange={()=>{}}></TextInput>
          <div className="w-40">作品集連結： </div>
          <TextInput
            className="w-1/3 rounded p-2  text-primary-blue underline"
            value="http://www.設計師作品集連結.com"
            onChange={()=>{}}></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-40">電話：</div>
          <TextInput
            className="w-1/3 rounded-md p-2 text-black mr-20"
            value="0912-3456789"
            onChange={()=>{}}></TextInput>
          <div className="w-40">居住地：</div>
          <TextInput
            className="w-1/3 rounded p-2 text-black "
            value="台北市"
            onChange={()=>{}}></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-40">身分證字號：</div>
          <TextInput
            className="w-1/3 rounded-md p-2 text-black mr-20"
            value="A121345678"
            onChange={()=>{}}></TextInput>
          <div className="w-40">電子郵件：</div>
          <TextInput
            className="w-1/3 rounded p-2 text-black"
            value="abc_1234@gmail.com"
            onChange={()=>{}}></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-40">使用軟體類型：</div>
          <div className="w-1/6 h-12 mr-6">
            <Select<number>
              className="bg-gray-100 text-black h-12 relative"
              value = {target}
              onChange={setTarget}
              options= {[
                {
                  value:1,
                  label:'Figma'
                },
              ]} />
          </div>
          <div className="w-1/6 h-12">
            <Select<number>
              className="bg-gray-100 text-black h-12 relative"
              value = {target2}
              onChange={setTarget2}
              options= {[
                {
                  value:1,
                  label:'精通'
                },
              ]} />
          </div>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-40"></div>
          <div className="w-1/6 h-12 mr-6">
            <Select<number>
              className="bg-gray-100 text-black h-12 relative"
              value = {target3}
              onChange={setTarget3}
              options= {[
                {
                  value:1,
                  label:'Figma'
                },
              ]} />
          </div>
          <div className="w-1/6 h-12">
            <Select<number>
              className="bg-gray-100 text-black h-12 relative"
              value = {target4}
              onChange={setTarget4}
              options= {[
                {
                  value:1,
                  label:'精通'
                },
              ]} />
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-12 px-32">
        <div className="flex items-center">
          <div className="text-primary-red font-bold text-xl">匯款資料</div>
          <div className="flex-grow"></div>
          <div
            className="text-primary-red cursor-pointer"
            onClick={()=>{}}>編輯</div>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-24">代碼：</div>
          <TextInput
            className="w-1/4 rounded-md p-2 text-black mr-12"
            value="007"
            onChange={()=>{}}></TextInput>
          <div className="w-24">銀行：</div>
          <TextInput
            className="w-1/4 rounded p-2 text-black mr-12"
            value="第一銀行"
            onChange={()=>{}}></TextInput>
          <div className="w-24">分行：</div>
          <TextInput
            className="w-1/4 rounded p-2 text-black"
            value="敦化分行"
            onChange={()=>{}}></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-24">帳號：</div>
          <div
            className="grid grid-cols-4 rounded-md text-left p-3 text-md
            bg-primary-gray font-sansb text-black w-1/3 h-13 border-2
            border-primary-gray outline-none
            hover:gray-100  hover:border-gray-400 transition-all"
          >
            <div className="flex items-center">0001</div>
            <div className="flex items-center">1234</div>
            <div className="flex items-center">5678</div>
            <div className="flex items-center">9012</div>
          </div>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-24">戶名：</div>
          <TextInput
            className="w-1/3 rounded-md p-2 text-black "
            value="王小明"
            onChange={()=>{}}></TextInput>
        </div>
      </div>
      <div className="mx-32"><hr /></div>
      <div className="text-primary-red font-bold text-xl mt-8 mb-4 px-32">
        相關專案</div>
      <div className="grid grid-cols-4 text-center w-3/5 px-32 space-x-4">
        <p
          onClick={() => setProject(1)}
          className={cx(
            project === 1
              ? 'text-primary-red border-b-primary-red'
              : 'hover:text-red-900 border-b-[rgba(0,0,0,0)] text-usual-gray',
            'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
        >
          提案中
        </p>
        <p
          onClick={() => setProject(2)}
          className={cx(
            project === 2
              ? 'text-primary-red border-b-primary-red'
              : 'hover:text-red-900 border-b-[rgba(0,0,0,0)] text-usual-gray',
            'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
        >
          進行中
        </p>
        <p
          onClick={() => setProject(3)}
          className={cx(
            project === 3
              ? 'text-primary-red border-b-primary-red'
              : 'hover:text-red-900 border-b-[rgba(0,0,0,0)] text-usual-gray',
            'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
        >
          保固中
        </p>
        <p
          onClick={() => setProject(4)}
          className={cx(
            project === 4
              ? 'text-primary-red border-b-primary-red'
              : 'hover:text-red-900 border-b-[rgba(0,0,0,0)] text-usual-gray',
            'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
        >
          維護中
        </p>
      </div>
      {project === 1 &&
      <div className="flex flex-col items-center">
        {proposalCards.map(proposalCard => {
          const {
            id, state, date, name, type,
            responsiblePerson, telephone, businessPerson
          } = proposalCard;
          return (
            <Proposal
              key={id}
              state={state}
              date={date}
              name={name}
              type={type}
              responsiblePerson={responsiblePerson}
              telephone={telephone}
              businessPerson={businessPerson}
            />
          );
        })}
      </div>
      }
      {project === 2 &&
      <div className="flex flex-col items-center">
        {progressCards.map(progressCard => {
          const {
            id, state, date, name, type,
            amount, outsourceAmount, people
          } = progressCard;
          return <Progress
            key={id}
            state={state}
            date={date}
            name={name}
            type={type}
            amount={amount}
            outsourceAmount={outsourceAmount}
            people={people}
          />;
        })}
      </div>
      }
      {project === 3 &&
      <div className="flex flex-col items-center">
        {warrantyCards.map(warrantyCard => {
          const {
            id, date, state, hostDate, netDate, name, type, leftWarranty,
            businessPerson
          }=warrantyCard;
          return <Warranty
            key={id}
            date={date}
            state={state}
            name={name}
            type={type}
            hostDate={hostDate}
            netDate={netDate}
            leftWarranty={leftWarranty}
            businessPerson={businessPerson}
          />;
        })}
      </div>
      }
      {project === 4 &&
      <div className="flex flex-col items-center">
        {maintainCards.map(maintainCard => {
          const {
            id, date, state, hostDate, netDate,
            name, type, businessPerson
          } = maintainCard;
          return <Maintain
            key={id}
            date={date}
            state={state}
            name={name}
            type={type}
            hostDate={hostDate}
            netDate={netDate}
            businessPerson={businessPerson}
          />;
        })}
      </div>
      }
    </div>
  );
}
