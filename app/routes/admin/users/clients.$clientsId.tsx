import Maintain from '../components/Maintain';
import Progress from '../components/Progress';
import Proposal from '../components/Proposal';
import Warranty from '../components/Warranty';
import TextInput from '~/components/common/TextInput';
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
  const { projectId } = useLoaderData();
  const [project, setProject] = useState(1);
  console.log(projectId);
  return (
    <div className="flex flex-col w-full mt-12 container mx-auto ">
      <div className="grid grid-cols-3 px-32">
        <Link
          className="flex justify-start items-center "
          to="./../">
          <div><img src="/images/xiaoyuhao.svg" alt="" /></div>
          <div className="text-primary-red ml-8 font-bold text-lg"> 回到列表</div>
        </Link>
        <div className="text-2xl self-center font-semibold text-center">
          客戶資料</div>
      </div>
      <div className="w-80 h-72 self-center rounded-lg overflow-hidden mt-20">
        <img src="/images/client1.svg" alt="" />
      </div>
      {/* <div className="self-center mt-6 mr-56 text-primary-red font-medium">
        重新上傳照片</div> */}
      <div className="flex flex-col mb-12 mt-12 px-32">
        <div className="flex items-center">
          <div className="text-primary-red font-bold text-xl">客戶資料</div>
          <div className="flex-grow"></div>
          <div className="text-primary-red">編輯</div>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">公司名稱</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"
            value="檸檬科技股份有現公司"
            onChange={()=>{}}></TextInput>
          <div className="w-32">電子郵件</div>
          <TextInput
            className="w-1/4 rounded p-2 text-black"
            value="abc123@gmail.com"
            onChange={()=>{}}></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">負責人</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"
            value="王小明"
            onChange={()=>{}}></TextInput>
          <div className="w-32">行業類別</div>
          <TextInput
            className="w-1/4 rounded p-2 text-black "
            value="食品業"
            onChange={()=>{}}></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">電話</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"
            value="02-26874388"
            onChange={()=>{}}></TextInput>
          <div className="w-32">統一編號</div>
          <TextInput
            className="w-1/4 rounded p-2 text-black"
            value="7281 3991"
            onChange={()=>{}}></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">地址</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"
            value="新北市中和區文字文字文字文字文字文字文字文字"
            onChange={()=>{}}></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">客戶來源</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"
            value="FB-陳小明"
            onChange={()=>{}}></TextInput>
        </div>
      </div>
      <div className="px-32"><hr /></div>
      <div className="flex flex-col mb-12 px-32">
        <div className="flex items-center">
          <div className="text-primary-red font-bold text-xl mt-8 mb-4">
            其他聯絡人</div>
          <div className="flex-grow"></div>
          <div className="text-primary-red font-bold text-5xl">+</div>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">姓名</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"
            value="李小花"
            onChange={()=>{}}></TextInput>
          <div className="w-32">電子郵件</div>
          <TextInput
            className="w-1/4 rounded p-2 text-black"
            value="abc123@gmail.com"
            onChange={()=>{}}></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">電話</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"
            value="02-26874388"
            onChange={()=>{}}></TextInput>
        </div>
      </div>
      <div className="px-32"><hr /></div>
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
