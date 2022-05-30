import Button from '~/components/common/Button';
import { Link } from 'remix';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return(
    <div className="container mx-auto flex flex-col px-36 mt-12">
      <div className="flex">
        <Link
          className="flex justify-start items-center "
          to="./../chooseUsers">
          <div><img src="/images/xiaoyuhao.svg" alt="" /></div>
          <div className="text-primary-red ml-8 font-bold text-lg"> 回到列表</div>
        </Link>
        <div className="flex-grow"></div>
        <Button
          className="shadow-md border-0"
          type="deactivated"
          onClick={() => navigate('./../create-developer')}
        >
          + 建立新工程師
        </Button>
      </div>
      <div
        className="grid grid-cols-3 gap-20 place-items-center
       mt-12 self-center w-11/12">
        <Link to="./1" className="relative">
          <img className="" src="/images/developer1.svg" alt="" />
          <div
            className="absolute w-full h-1/2 bottom-0
          bg-gradient-to-t from-black rounded-lg"></div>
          <p
            className="absolute bottom-6 left-4 text-white
          tracking-widest text-2xl">Leo (工程師)</p>
        </Link>
        <Link to="./1" className="relative">
          <img className="" src="/images/developer2.svg" alt="" />
          <div
            className="absolute w-full h-1/2 bottom-0
          bg-gradient-to-t from-black rounded-lg"></div>
          <p
            className="absolute bottom-6 left-4 text-white
          tracking-widest text-2xl">王小明（工程師）</p>
        </Link>
        <Link to="./1" className="relative">
          <img className="" src="/images/developer3.svg" alt="" />
          <div
            className="absolute w-full h-1/2 bottom-0
          bg-gradient-to-t from-black rounded-lg"></div>
          <p
            className="absolute bottom-6 left-4 text-white
          tracking-widest text-2xl">劉宇翔（工程師）</p>
        </Link>
        <Link to="./1" className="relative">
          <img className="" src="/images/developer4.svg" alt="" />
          <div
            className="absolute w-full h-1/2 bottom-0
          bg-gradient-to-t from-black rounded-lg"></div>
          <p
            className="absolute bottom-6 left-4 text-white
          tracking-widest text-2xl">Leo (工程師)</p>
        </Link>
      </div>
    </div>
  );
}
