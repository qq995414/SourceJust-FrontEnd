import Cancel from './components/Cancel';
import Maintain from './components/Maintain';
import Progress from './components/Progress';
import Datatables from './components/datatables';
import Warranty from './components/Warranty';
import Button from '~/components/common/Button';
import Select from '~/components/Select';
import { MetaFunction, useNavigate, Link } from 'remix';
import { useState } from 'react';
import cx from 'classnames';
import Nav from '~/components/Nav';


export const meta: MetaFunction = () => {
  return { title: '總後台 ｜ 索爾斯科技', };
};

export default function Index() {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();
  const [target, setTarget] = useState(1);
  const [isShowLink, setIsShowLink] = useState(false);

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
    {
      id: 1,
      state: 'negotiation',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      responsiblePerson: '王小明',
      telephone: '0912-345678',
      businessPerson: '李鵬',
    },
    {
      id: 2,
      state: 'unBuilt',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      responsiblePerson: '王小明',
      telephone: '0912-345678',
      businessPerson: '李鵬',
    },
    {
      id: 3,
      state: 'unSigned',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      responsiblePerson: '王小明',
      telephone: '0912-345678',
      businessPerson: '李鵬',
    },
    {
      id: 4,
      state: 'unSigned',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      responsiblePerson: '王小明',
      telephone: '0912-345678',
      businessPerson: '李鵬',
    }
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
    {
      id: 1,
      state: 'setting',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      amount: '10000',
      outsourceAmount: '100000',
      people: ['1', '2'],
    },
    {
      id: 2,
      state: 'UI',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      amount: '10000',
      outsourceAmount: '100000',
      people: ['1', '2'],
    },
    {
      id: 3,
      state: 'GitHub',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      amount: '10000',
      outsourceAmount: '100000',
      people: ['1', '2'],
    },
    {
      id: 4,
      state: 'GitHub',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      amount: '10000',
      outsourceAmount: '100000',
      people: ['1', '2'],
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
    {
      id: 1,
      state: 'urgent',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      leftWarranty: '3個月',
      hostDate: '2021-12-09',
      netDate: '2021-12-09',
      businessPerson: '李鵬'
    },
    {
      id: 2,
      state: 'urgent',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      leftWarranty: '3個月',
      hostDate: '2021-12-09',
      netDate: '2021-12-09',
      businessPerson: '李鵬'
    },
    {
      id: 3,
      state: 'normal',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      leftWarranty: '20天',
      hostDate: '2021-12-09',
      netDate: '2021-12-09',
      businessPerson: '李鵬'
    },
    {
      id: 4,
      state: 'normal',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      leftWarranty: '20天',
      hostDate: '2021-12-09',
      netDate: '2021-12-09',
      businessPerson: '李鵬'
    }
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
    {
      id: 1,
      state: 'finished',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      hostDate: '2021-12-09',
      netDate: '2021-12-09',
      businessPerson: '李鵬'
    },
    {
      id: 2,
      state: 'finished',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      hostDate: '2021-12-09',
      netDate: '2021-12-09',
      businessPerson: '李鵬'
    },
    {
      id: 3,
      state: 'finished',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      hostDate: '2021-12-09',
      netDate: '2021-12-09',
      businessPerson: '李鵬'
    },
    {
      id: 4,
      state: 'finished',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      hostDate: '2021-12-09',
      netDate: '2021-12-09',
      businessPerson: '李鵬'
    }
  ];

  const cancelCards = [
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
    {
      id: 1,
      state: 'finished',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      hostDate: '2021-12-09',
      netDate: '2021-12-09',
      businessPerson: '李鵬'
    },
    {
      id: 2,
      state: 'finished',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      hostDate: '2021-12-09',
      netDate: '2021-12-09',
      businessPerson: '李鵬'
    },
    {
      id: 3,
      state: 'finished',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      hostDate: '2021-12-09',
      netDate: '2021-12-09',
      businessPerson: '李鵬'
    },
    {
      id: 4,
      state: 'finished',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      hostDate: '2021-12-09',
      netDate: '2021-12-09',
      businessPerson: '李鵬'
    }
  ];

  return (
    <div className="grid">
      <Nav></Nav>
      <div className="page-content h-screen w-full  login-background container pt-4" style={{ width: '83vw;' }}>

        <div className="flex items-center mt-10 webpage-title pt-5 absolute w-10/12" style={{ zIndex: "1" }} >
          <div style={{ fontSize: '14px' }}
            className="flex w-8/12 place-content-center justify-around">
            <p

              onClick={() => setTab(0)}
              className={cx(
                tab === 0
                  ? 'text-primary-red border-b-primary-red'
                  : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 ml-4 tracking-widest cursor-pointer')}
            >
              所有日誌
            </p>
            <p
              onClick={() => setTab(1)}
              className={cx(
                tab === 1
                  ? 'text-primary-red border-b-primary-red'
                  : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 ml-4 tracking-widest cursor-pointer')}
            >
              SEO優化
            </p>
            <p
              onClick={() => setTab(2)}
              className={cx(
                tab === 2
                  ? 'text-primary-red border-b-primary-red'
                  : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 ml-4 tracking-widest cursor-pointer')}
            >
              網頁設計常見問題
            </p>
            <p
              onClick={() => setTab(3)}
              className={cx(
                tab === 3
                  ? 'text-primary-red border-b-primary-red'
                  : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 ml-4 tracking-widest cursor-pointer')}
            >
              網頁須知
            </p>
            <p
              onClick={() => setTab(4)}
              className={cx(
                tab === 4
                  ? 'text-primary-red border-b-primary-red'
                  : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 ml-4 tracking-widest cursor-pointer')}
            >
              網頁工具說明
            </p>
            <p
              onClick={() => setTab(5)}
              className={cx(
                tab === 5
                  ? 'text-primary-red border-b-primary-red'
                  : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 ml-4 tracking-widest cursor-pointer')}
            >
              數位行銷
            </p>
          </div>
          <div className="flex-grow"></div>
          <img
            src="/icons/webpan.svg"
            alt=""
            onClick={() => {
              setIsShowLink(true);
            }}
            className="cursor-pointer"
          />
          {isShowLink &&
            <div className="fixed top-0 bottom-0 left-0 right-0">
              <div
                className="w-screen h-screen bg-gray-500
              opacity-40 z-10"></div>
              <div
                className="w-5/12 h-96 bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col pt-12">
                <p className="font-semibold text-xl self-center">建立專案類型</p>
                <div className="flex self-center items-center w-1/2 mt-12">
                  <input
                    className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red  mr-4"
                    type="radio"
                    name="web" />
                  <div>空白專案</div>
                </div>
                <div className="flex self-center items-center w-1/2 mt-10">
                  <input
                    className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red mr-4"
                    type="radio"
                    name="web" />
                  <div>從現有專案複製</div>
                </div>
                <div className="w-1/2 h-12 self-center mt-5">
                  <Select<number>
                    className="bg-white text-black h-12 relative"
                    value={target}
                    onChange={setTarget}
                    options={[
                      {
                        value: 1,
                        label: '專案名稱Ａ'
                      },
                    ]} />
                </div>
                <Button
                  onClick={() => navigate('./../create/basic')}
                  className="w-32 text-sm font-medium h-12 mt-8 self-center"
                >建立</Button>
              </div>
            </div>}
        </div>
        <div className="flex flex-col mt-8">
          <div
            className="web-add-box flex mb-4 w-2/6  text-left
           bg-white rounded-2xl shadow-md  mx-32" >
            <Link className="flex" to='/admin/insertpage'>
              <img src="/images/add.svg" alt="" />

              <p className='web-add-text'>建立文章
              </p></Link>
          </div>
          <div className="flex flex-col items-center">
            {tab === 0 && proposalCards.map(proposalCard => {
              const {
                id, state, date, name, type,
                responsiblePerson, telephone, businessPerson
              } = proposalCard;
              return (
                <Datatables
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
            })
            }
            {tab === 1 && progressCards.map(progressCard => {
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
            {tab === 2 && warrantyCards.map(warrantyCard => {
              const {
                id, date, state, hostDate, netDate, name, type, leftWarranty,
                businessPerson
              } = warrantyCard;
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
            {tab === 3 && maintainCards.map(maintainCard => {
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
            {tab === 4 && cancelCards.map(cancelCard => {
              const {
                id, date, state, hostDate, netDate,
                name, type, businessPerson
              } = cancelCard;
              return <Cancel
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
        </div>
      </div>
    </div>
  );
}
