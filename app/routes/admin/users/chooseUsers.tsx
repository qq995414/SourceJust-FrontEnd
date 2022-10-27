import { Link } from 'remix';

export default function Index() {
  return (
    <div
      className="flex h-screen items-center place-content-center
    container mx-auto">
      <Link
        to="./../clients"
        className="flex bg-gray-200 w-44 h-16 items-center place-content-center
        rounded-xl text-lg transition hover:bg-primary-red
        hover:text-white hover:font-semibold">合作客戶
      </Link>
      <Link
        to="./../designers"
        className="flex bg-gray-200 w-44 h-16 items-center place-content-center
         mx-16 rounded-xl text-lg transition hover:bg-primary-red
         hover:text-white hover:font-semibold">合作設計師
      </Link>
      <Link
        to="./../developers"
        className="flex bg-gray-200 w-44 h-16 items-center place-content-center
        rounded-xl text-lg transition hover:bg-primary-red
        hover:text-white hover:font-semibold">合作工程師
      </Link>
    </div>
  );
}

