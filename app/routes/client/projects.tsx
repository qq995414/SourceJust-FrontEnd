import ClientProject, { ClientProjectModel } from '~/components/project/ClientProject';
import ProjectPagination from '~/components/pagination/ProjectPagination';
import { useState, useEffect } from 'react';

let clientProjects = [
  {
    id: 0,
    state: 'proposal',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  },
  {
    id: 1,
    state: 'proposal',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
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
    state: 'review',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  },
  {
    id: 4,
    state: 'finish',
    date: '2021-05-01',
    expectFinishDate: '2021-06-30',
    name: '專案名稱 XX 的名稱',
    type: '網頁開發',
    amount: '$100,000'
  }
];

clientProjects = clientProjects.concat(clientProjects).concat(clientProjects);

export default function Index() {
  const itemsPerPage = 5;

  const [currentCards, setCurrentCards] = useState<ClientProjectModel[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentCards(clientProjects.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(clientProjects.length / itemsPerPage));
  }, [itemOffset]);

  const handleClickPage = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % clientProjects.length;
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
          alt=""
        />
        {value &&
          <div
            className="absolute bottom-1 right-1 h-8 w-8
            rounded-full bg-primary-blue"
          >
          </div>}
      </div>
      {currentCards.map(clientProject => {
        const {
          id, state, date, expectFinishDate,
          name, type, amount
        } = clientProject;

        return <ClientProject
          id={id}
          key={id}
          state={state}
          date={date}
          expectFinishDate={expectFinishDate}
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
