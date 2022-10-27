import classNames from 'classnames';
import React, { useState } from 'react';

interface Props {
    pageCount: number;
    onPageChange(newPage: number): void;
    className?: string;
}

export default function (props: Props) {
  const { pageCount, onPageChange, className } = props;

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div
      className={classNames(
        'flex w-full h-20 items-center justify-center',
        className
      )}>
      <div
        className="text-primary-red flex items-center justify-between
      w-36 h-full">
        <div
          className={classNames(
            'bg-white w-10 h-10 shadow-lg rounded-full',
            'flex items-center justify-center text-2xl cursor-pointer',
            currentPage === 0 && 'opacity-0'
          )}
          onClick={() => {
            if (currentPage > 0) {
              setCurrentPage(currentPage - 1);
              onPageChange(currentPage);
            }
          }}
        >
          {'<'}
        </div>

        <div className=" flex">
          <div>
            {currentPage + 1}
          </div>

          <div>/</div>

          <div>
            {pageCount}
          </div>
        </div>

        <div
          className="bg-white w-10 h-10 shadow-xl rounded-full
        flex items-center justify-center text-2xl cursor-pointer"
          onClick={() => {
            if (currentPage < pageCount - 1) {
              setCurrentPage(currentPage + 1);
              onPageChange(currentPage);
            }
          }}
        >
          {'>'}
        </div>
      </div>

    </div>
  );
}
