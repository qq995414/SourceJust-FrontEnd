import ReactPaginate from 'react-paginate';

interface Props {
    pageCount: number;
    pageRangeDisplayed: number;
    marginPagesDisplayed: number;
    onPageChange(event: {selected: number}): void;
    nextLabel?: string;
    previousLabel?: string;
    className?: string;
}

export default function ProjectPagination(props: Props) {
  const {
    pageCount,
    pageRangeDisplayed,
    marginPagesDisplayed,
    onPageChange,
    nextLabel,
    previousLabel,
    className
  } = props;

  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={onPageChange}
      containerClassName={container}
      activeClassName={activeItem}
      pageClassName={pageItem}
      previousClassName={arrow}
      nextClassName={arrow}
      breakClassName={pageItem}
      breakLabel=""
      nextLabel={nextLabel ? nextLabel : '>'}
      previousLabel={previousLabel ? previousLabel : '<'}
    />
  );
}

const container = 'h-20 flex w-64 items-center justify-between text-gray-300';
const pageItem = '';
const activeItem = 'text-primary-red';
const arrow = 'text-xl text-gray-500';
