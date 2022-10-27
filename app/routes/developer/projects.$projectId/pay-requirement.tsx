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
    <div className="w-full h-screen tracking-[0.2em]">
      <SideButtons type="developer"/>
      <div
        className="flex w-full font-bold text-2xl
      justify-center mt-20">
        <p>專案總計金額：</p>
        <p className="text-primary-red">$100,000</p>
      </div>
      <div className="mt-12 w-full">
        <div className="flex w-full bg-primary-gray h-16 items-center">
          <p className="w-36 text-center">階段</p>
          <p className="w-40 text-center">金額</p>
          <p className="w-72 text-center">預計撥款日</p>
          <p className="w-40 text-center">實際撥款日</p>
          <p className="w-48 text-center">狀態</p>
        </div>
        <div className="flex w-full h-16 items-center border-b-[1px]">
          <p className="w-36 text-center">20%</p>
          <p className="w-40 text-center">$ 20,000</p>
          <p className="w-72 text-center">2022/1/22</p>
          <p className="w-40 text-center">2022/1/22</p>
          <p className="w-48 text-center text-usual-gray">確認已收款</p>
        </div>
        <div className="flex w-full h-16 items-center border-b-[1px]">
          <p className="w-36 text-center">20%</p>
          <p className="w-40 text-center">$ 20,000</p>
          <p className="w-72 text-center">2022/1/22</p>
          <p className="w-40 text-center">2022/1/22</p>
          <div className="w-48 text-center">
            <button className="w-20 h-10 text-center text-white bg-[#99CB98] rounded-full">
              已確認</button>
          </div>
        </div>
        <div className="flex w-full h-16 items-center border-b-[1px]">
          <p className="w-36 text-center">20%</p>
          <p className="w-40 text-center">$ 20,000</p>
          <p className="w-72 text-center">2022/1/22</p>
          <p className="w-40 text-center"></p>
          <div className="w-48 text-center">
            <button className="w-24 h-10 text-center text-white bg-[#BBBBBB] rounded-full">
              尚未付款</button>
          </div>
        </div>
        <div className="flex w-full h-16 items-center">
          <p className="w-36 text-center">20%</p>
          <p className="w-40 text-center">$ 20,000</p>
          <p className="w-72 text-center">2022/1/22</p>
          <p className="w-40 text-center"></p>
          <div className="w-48 text-center">
            <button className="w-24 h-10 text-center text-white bg-[#BBBBBB] rounded-full">
              尚未付款</button>
          </div>
        </div>
      </div>
    </div>
  );
}

