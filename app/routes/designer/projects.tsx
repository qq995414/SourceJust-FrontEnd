import Card, { CardModel } from '~/components/project/Card';
import ProjectPagination from '~/components/pagination/ProjectPagination';
import { useEffect, useState } from 'react';

let cards: CardModel[] = [
  {
    id: 0,
    state: 'proposal',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: 100000
  },
  {
    id: 1,
    state: 'progress',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: 100000
  },
  {
    id: 2,
    state: 'review',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  },
  {
    id: 3,
    state: 'finish',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  },
  {
    id: 4,
    state: 'proposal',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  },
  {
    id: 5,
    state: 'progress',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: 100000
  },
  {
    id: 1,
    state: 'progress',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: 100000
  },
  {
    id: 2,
    state: 'progress',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  },
  {
    id: 3,
    state: 'progress',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  },
  {
    id: 4,
    state: 'progress',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  },
  {
    id: 10,
    state: 'proposal',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: 100000
  },
  {
    id: 1,
    state: 'proposal',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: 100000
  },
  {
    id: 2,
    state: 'proposal',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  },
  {
    id: 3,
    state: 'proposal',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  },
  {
    id: 4,
    state: 'proposal',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  },
  {
    id: 0,
    state: 'review',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: 100000
  },
  {
    id: 1,
    state: 'review',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: 100000
  },
  {
    id: 2,
    state: 'review',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  },
  {
    id: 3,
    state: 'review',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  },
  {
    id: 4,
    state: 'review',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  }
];

export default function Index() {
  const itemsPerPage = 5;

  const [currentCards, setCurrentCards] = useState<CardModel[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentCards(cards.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(cards.length / itemsPerPage));
  }, [itemOffset]);

  const handleClickPage = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % cards.length;
    setItemOffset(newOffset);
  };

  const [value, setValue] = useState('');
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
          alt="search" />
        {value &&
          <div
            className="absolute bottom-1 right-1 h-8 w-8
            rounded-full bg-primary-blue"
          >
          </div>}
      </div>
      <Cards currentCards={currentCards} />
      <ProjectPagination
        pageCount={pageCount}
        pageRangeDisplayed={itemsPerPage}
        marginPagesDisplayed={0}
        onPageChange={handleClickPage}
      />
    </div>
  );
}

function Cards(props: { currentCards: CardModel[] }) {
  return (
    <div className="w-full h-full">
      {props.currentCards.map(
        card => {
          const {
            id,
            state,
            date,
            expectFinishDate,
            name,
            type,
            amount
          } = card;
          return <Card
            id={id}
            key={id}
            state={state}
            date={date}
            expectFinishDate={expectFinishDate}
            name={name}
            type={type}
            amount={amount}
          />;
        }
      )}
    </div>
  );
}
