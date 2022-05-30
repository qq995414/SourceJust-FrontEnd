import Button from '~/components/common/Button';
import SideButtons from '~/components/SideButtons';
import { useNavigate } from 'remix';

interface Props {
    id: number;
    main: string;
    overall: string;
    illustrate: string;
    note: string;
  }
export default function Index(){
  const navigate = useNavigate();
  return(
    <div className="w-full h-screen tracking-[0.12em] px-20">
      <SideButtons type="client"/>
      <div
        className="flex w-full text-xl
      justify-center mt-20">
        <p>總費用：</p>
        <p className="text-primary-red ml-12 font-bold">$100,000</p>
      </div>
      <div className="mt-12 w-full">
        <div className="flex w-full bg-primary-gray h-16 items-center">
          <div className="w-28 flex justify-center items-center border-r-[1px] h-16">階段</div>
          <p className="w-40 flex justify-center items-center border-r-[1px] h-16">金額</p>
          <p className="w-52 flex justify-center items-center border-r-[1px] h-16">預計撥款日</p>
          <p className="w-40 flex justify-center items-center border-r-[1px] h-16">實際撥款日</p>
          <p className="w-48 flex justify-center items-center border-r-[1px] h-16">帳號後五碼</p>
          <p className="w-48 flex justify-center items-center">狀態</p>
        </div>
        <div className="flex w-full h-16 items-center border-b-[1px]">
          <p className="w-28 flex justify-center items-center border-r-[1px] h-16">20%</p>
          <p className="w-40 flex justify-center items-center border-r-[1px] h-16">$ 20,000</p>
          <p className="w-52 flex justify-center items-center border-r-[1px] h-16">2022/1/22</p>
          <p className="w-40 flex justify-center items-center border-r-[1px] h-16">2022/1/22</p>
          <p className="w-48 flex justify-center items-center border-r-[1px] h-16">24351</p>
          <p className="w-48 text-center text-usual-gray">已付款</p>
        </div>
        <div className="flex w-full h-16 items-center border-b-[1px]">
          <p className="w-28 flex justify-center items-center border-r-[1px] h-16">20%</p>
          <p className="w-40 flex justify-center items-center border-r-[1px] h-16">$ 20,000</p>
          <p className="w-52 flex justify-center items-center border-r-[1px] h-16">2022/1/22</p>
          <p className="w-40 flex justify-center items-center border-r-[1px] h-16">2022/1/22</p>
          <p className="w-48 flex justify-center items-center border-r-[1px] h-16">24351</p>
          <div className="w-48 text-center">
            <button
              className="w-24 h-10 text-center text-white bg-[#99CB98]
            rounded-full shadow-lg">
              已收款</button>
          </div>
        </div>
        <div className="flex w-full h-16 items-center border-b-[1px]">
          <p className="w-28 flex justify-center items-center border-r-[1px] h-16">20%</p>
          <p className="w-40 flex justify-center items-center border-r-[1px] h-16">$ 20,000</p>
          <p className="w-52 flex justify-center items-center border-r-[1px] h-16">2022/1/22</p>
          <p className="w-40 flex justify-center items-center border-r-[1px] h-16"></p>
          <p className="w-48 flex justify-center items-center border-r-[1px] h-16">24351</p>
          <div className="w-48 text-center">
            <button
              className="w-24 h-10 text-center text-white bg-[#99CB98]
            rounded-full shadow-lg">
              已收款</button>
          </div>
        </div>
        <div className="flex w-full h-16 items-center border-b-[1px]">
          <p className="w-28 flex justify-center items-center border-r-[1px] h-16">40%</p>
          <p className="w-40 flex justify-center items-center border-r-[1px] h-16">$ 40,000</p>
          <p className="w-52 flex justify-center items-center border-r-[1px] h-16">2022/1/22</p>
          <p className="w-40 flex justify-center items-center border-r-[1px] h-16"></p>
          <p className="w-48 flex justify-center items-center border-r-[1px] h-16">24351</p>
          <div className="w-48 text-center">
            <button
              className="w-24 h-10 text-center text-white bg-[#99CB98]
            rounded-full shadow-lg">
              已收款</button>
          </div>
        </div>
      </div>
    </div>
  );
}
