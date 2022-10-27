import Button from '~/components/common/Button';
import { useNavigate } from 'remix';

export default function Index(){
  const navigate = useNavigate();
  return(
    <div className="w-full tracking-[0.2em] px-16">
      <div
        className="flex w-full font-bold text-2xl
      justify-center mt-20">
        <p>專案總計金額：</p>
        <p className="text-primary-red">$100,000</p>
      </div>
      <div className="mt-12 w-full">
        <div
          className="flex w-full bg-primary-gray h-16 font-semibold
        items-center text-gray-500">
          <p className="w-36 text-center">階段</p>
          <p className="w-40 text-center">金額</p>
          <p className="w-72 text-center">預計撥款日</p>
        </div>
        <div
          className="flex w-full h-16 items-center border-b-[1px]
         font-semibold">
          <p className="w-36 text-center">20%</p>
          <p className="w-40 text-center">$ 20,000</p>
          <p className="w-72 text-center">2022/1/22</p>
        </div>
        <div
          className="flex w-full h-16 items-center border-b-[1px]
        font-semibold">
          <p className="w-36 text-center">20%</p>
          <p className="w-40 text-center">$ 20,000</p>
          <p className="w-72 text-center">2022/1/22</p>
        </div>
        <div
          className="flex w-full h-16 items-center border-b-[1px]
        font-semibold">
          <p className="w-36 text-center">20%</p>
          <p className="w-40 text-center">$ 20,000</p>
          <p className="w-72 text-center">2022/1/22</p>
        </div>
        <div className="flex w-full h-16 items-center font-semibold">
          <p className="w-36 text-center">20%</p>
          <p className="w-40 text-center">$ 20,000</p>
          <p className="w-72 text-center">2022/1/22</p>
        </div>
      </div>
      <div className="flex place-content-center space-x-8 mt-20">
        <Button
          onClick={()=>navigate('./../../../')}
          className="h-12 w-32">取消</Button>
        <Button
          onClick={()=>navigate('./../loading')}
          className="h-12 w-32">我要接案</Button>
      </div>
    </div>
  );
}

