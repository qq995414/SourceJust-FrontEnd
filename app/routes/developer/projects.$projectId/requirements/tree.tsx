import Button from '~/components/common/Button';
import ImagePagination from '~/components/pagination/ImagePagination';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const images = [
  {
    id: 0,
    src: '/images/tree-view.svg',
    alt: ''
  },
  {
    id: 1,
    src: '/images/tree-view.svg',
    alt: ''
  },
  {
    id: 2,
    src: '/images/tree-view.svg',
    alt: ''
  },
  {
    id: 3,
    src: '/images/tree-view.svg',
    alt: ''
  },
  {
    id: 4,
    src: '/images/tree-view.svg',
    alt: ''
  }
];

export default function Index() {
  const navigate = useNavigate();
  const pageCount = images.length;

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return (
    <div className=" p-4 mt-2">
      <div className="w-full p-4 mt-2 flex flex-col items-center">
        <h1 className="text-primary-red font-black text-2xl">樹狀圖</h1>
        <div className="w-full flex items-end">
          <img
            className="my-8 mr-2"
            src={images[currentPage].src}
            alt={images[currentPage].alt}
          />
          <ImagePagination
            pageCount={pageCount}
            onPageChange={handlePageChange}
            className="mb-4"
          />
        </div>
        <Button
          type="circle"
          onClick={() => navigate('./../notes')}
        >
          下一步
        </Button>
      </div>

    </div>
  );
}
