import TextInput from '~/components/common/TextInput';
import Button from '~/components/common/Button';
import { Link } from 'remix';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return(
    <div className="container px-32 mt-8">
      <div className="flex items-center">
        <TextInput
          className="w-60 rounded-md p-2 text-black ml-4 mr-12 pl-6"
          value="檸檬科技股份有現公司"
          onChange={()=>{}}></TextInput>
        <div>總費用：</div>
        <TextInput
          className="w-48 rounded-md p-2 ml-4 font-bold text-center"
          value="$100,000"
          onChange={()=>{}}></TextInput>
      </div>
      <div
        className="grid grid-cols-6 divide-x h-12 font-bold text-gray-500 mt-12
      divide-gray-300 text-center bg-primary-gray">
        <div className="py-3">階段</div>
        <div className="py-3">金額</div>
        <div className="py-3">預計收款日</div>
        <div className="py-3">實際收款日</div>
        <div className="py-3">帳號後五碼</div>
        <div className="py-3">開立發票日</div>
      </div>
      <div
        className="grid grid-cols-6 divide-x h-20  font-medium text-gray-500
      divide-gray-300 text-center bg-white border-b-2">
        <div className="py-7">20% </div>
        <div className="py-7">$ 20,000</div>
        <div className="py-7">2022/1/22</div>
        <div className="py-7 ">2022/1/22</div>
        <div className="py-7">24351</div>
        <div className="py-7 text-blue-500 underline">2022/1/22</div>
      </div>
      <div
        className="grid grid-cols-6 divide-x h-20  font-medium text-gray-500
      divide-gray-300 text-center bg-white border-b-2">
        <div className="py-7">20% </div>
        <div className="py-7">$ 20,000</div>
        <div className="py-7">2022/1/22</div>
        <div className="py-7 ">2022/1/22</div>
        <div className="py-7">24351</div>
        <div className="py-7 text-blue-500 underline">2022/1/22</div>
      </div>
      <div
        className="grid grid-cols-6 divide-x h-20  font-medium text-gray-500
      divide-gray-300 text-center bg-white border-b-2">
        <div className="py-7">20% </div>
        <div className="py-7">$ 20,000</div>
        <div className="py-7">2022/1/22</div>
        <div className="py-7 "></div>
        <div className="py-7"></div>
        <div className="pt-4">
          <Button
            className="shadow-md border-0"
            type="deactivated"
            onClick={() => navigate('')}
          >
            + 上傳發票
          </Button>
        </div>
      </div>
      <div
        className="grid grid-cols-6 divide-x h-20  font-medium text-gray-500
      divide-gray-300 text-center bg-white border-b-2">
        <div className="py-7">40% </div>
        <div className="py-7">$ 20,000</div>
        <div className="py-7">2022/1/22</div>
        <div className="py-7 "></div>
        <div className="py-7"></div>
        <div className="pt-4">
          <Button
            className="shadow-md border-0"
            type="deactivated"
            onClick={() => navigate('')}
          >
            + 上傳發票
          </Button>
        </div>
      </div>
      <div
        className="flex justify-center mt-12">
        <Link to=""><img src="/images/redadd.svg" alt="" /></Link>
      </div>
    </div>

  );
}
