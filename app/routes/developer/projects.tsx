import DeveloperProject from '~/components/project/DeveloperProject';
import ProjectPagination from '~/components/pagination/ProjectPagination';
import { useState, useEffect } from 'react';
import { Outlet } from 'remix';
import cx from 'classnames';

const finishedCard = [
  {
    id: 0,
    state: 'finish',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    programLanguage: 'C',
    type: '網頁開發',
    amount: 100000,
    leftTime: '1年5個月',
    leftMoney: 10000,
    isMoneyPaid: true
  },
  {
    id: 1,
    state: 'finish',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    programLanguage: 'C',
    type: '網頁開發',
    amount: 100000,
    leftTime: '1年5個月',
    leftMoney: 10000,
    isMoneyPaid: false
  },
  {
    id: 2,
    state: 'finish',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    programLanguage: 'C',
    type: '網頁開發',
    amount: '$100,000',
    leftTime: '1年5個月',
    leftMoney: 10000,
    isMoneyPaid: false
  },
  {
    id: 3,
    state: 'finish',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    programLanguage: 'C',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000',
    leftTime: '1年5個月',
    leftMoney: 10000,
    isMoneyPaid: true
  },
  {
    id: 4,
    state: 'finish',
    date: '2021-05-01',
    programLanguage: 'C',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000',
    leftTime: '1年5個月',
    leftMoney: 10000,
    isMoneyPaid: true
  },
  {
    id: 5,
    state: 'finish',
    date: '2021-05-01',
    programLanguage: 'C',
    expectFinishDate: '2021-06-30',
    name: 'Second Page',
    type: '網頁開發',
    amount: '$100,000',
    leftTime: '1年5個月',
    leftMoney: 10000,
    isMoneyPaid: true
  },
  {
    id: 6,
    state: 'finish',
    date: '2021-05-01',
    programLanguage: 'C',
    expectFinishDate: '2021-06-30',
    name: 'Second Page',
    type: '網頁開發',
    amount: '$100,000',
    leftTime: '1年5個月',
    leftMoney: 10000,
    isMoneyPaid: true
  },
  {
    id: 7,
    state: 'finish',
    date: '2021-05-01',
    programLanguage: 'C',
    expectFinishDate: '2021-06-30',
    name: 'Second Page',
    type: '網頁開發',
    amount: '$100,000',
    leftTime: '1年5個月',
    leftMoney: 10000,
    isMoneyPaid: true
  },
  {
    id: 8,
    state: 'finish',
    date: '2021-05-01',
    programLanguage: 'C',
    expectFinishDate: '2021-06-30',
    name: 'Second Page',
    type: '網頁開發',
    amount: '$100,000',
    leftTime: '1年5個月',
    leftMoney: 10000,
    isMoneyPaid: true
  },
  {
    id: 9,
    state: 'finish',
    date: '2021-05-01',
    programLanguage: 'C',
    expectFinishDate: '2021-06-30',
    name: 'Second Page',
    type: '網頁開發',
    amount: '$100,000',
    leftTime: '1年5個月',
    leftMoney: 10000,
    isMoneyPaid: true
  }
];

let cards = [
  {
    id: 0,
    state: 'proposal',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    programLanguage: 'C',
    leftTime: '1年5個月',
    type: '網頁開發',
    amount: 100000
  },
  {
    id: 1,
    state: 'progress',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    programLanguage: 'C',
    leftTime: '1年5個月',
    type: '網頁開發',
    amount: 100000
  },
  {
    id: 2,
    state: 'review',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    programLanguage: 'C',
    leftTime: '1年5個月',
    type: '網頁開發',
    amount: '$100,000'
  },
  {
    id: 3,
    state: 'progress',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    programLanguage: 'C',
    leftTime: '1年5個月',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  },
  {
    id: 4,
    state: 'proposal',
    date: '2021-05-01',
    programLanguage: 'C',
    leftTime: '1年5個月',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  }
];
cards = cards.concat(cards).concat(cards);
cards = cards.concat(cards);

export default function Index() {
  const [value, setValue] = useState('');
  const [tab, setTab] = useState(0);

  const itemsPerPage = 5;

  const [currentCards, setCurrentCards] = useState<any[]>([]);
  const [currentFinishCards, setCurrentFinishCards] = useState<any[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (tab === 0)
    {
      setCurrentCards(cards.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(cards.length / itemsPerPage));
    }
    else
    {
      setCurrentFinishCards(finishedCard.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(finishedCard.length / itemsPerPage));
    }
  }, [itemOffset, tab]);

  const handleClickPage = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % cards.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col items-center container mx-auto px-24 mt-24">
      <div className="flex mb-8 w-full">
        <input
          type="text"
          placeholder="搜尋"
          className="self-center px-2 mr-4 pl-6 rounded-lg h-14 w-80
        bg-gray-100 text-lg placeholder-gray-300"
          onChange={(e) => setValue(e.target.value)}
        />
        <img
          className="self-center cursor-pointer"
          src="/images/search.svg"
          alt="" />
        {value &&
          <div
            className="absolute bottom-1 right-1 h-8 w-8
            rounded-full bg-primary-blue"
          >
          </div>}
        <div className="flex-grow"></div>
        <div
          className="flex-none self-center w-1/4 justify-around
        place-content-center text-gray-400">
          <div className="flex place-content-center justify-around w-full">
            <p
              onClick={() => {
                setTab(0);
                setItemOffset(0);
              }}
              className={cx(
                tab === 0
                  ? 'text-primary-red border-b-primary-red'
                  : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
            >
              進行中
            </p>
            <p
              onClick={() => {
                setTab(1);
                setItemOffset(0);
              }}
              className={cx(
                tab === 1
                  ? 'text-primary-red border-b-primary-red'
                  : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
            >
              已結案/保固
            </p>
          </div>
        </div>
        <Outlet />
      </div>

      {(tab ? currentFinishCards : currentCards).map(card => {
        const {
          id,
          state,
          date,
          expectFinishDate,
          leftTime,
          name,
          type,
          amount,
          programLanguage
        } = card;
        return <DeveloperProject
          id={id}
          developer="own"
          key={id}
          state={state}
          date={date}
          programLanguage={programLanguage}
          expectFinishDate={expectFinishDate}
          leftTime={leftTime}
          name={name}
          type={type}
          amount={amount}
        />;
      })}

      <ProjectPagination
        pageCount={pageCount}
        pageRangeDisplayed={itemsPerPage}
        marginPagesDisplayed={0}
        onPageChange={handleClickPage}
      />
    </div>
  );
}

