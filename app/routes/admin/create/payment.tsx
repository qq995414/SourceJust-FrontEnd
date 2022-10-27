import Select from '~/components/Select';
import Button from '~/components/common/Button';
import { Link } from 'remix';
import { useNavigate } from 'remix';
import { useState } from 'react';

export default function Index() {
  const navigate = useNavigate();
  const [target, setTarget] = useState(1);
  const [date, setDate] = useState(2);
  const [date1, setDate1] = useState(1);
  const [date2, setDate2] = useState(1);
  const [date3, setDate3] = useState(1);
  return(
    <div className="container px-32 mt-8">
      {target === 1 && <div>
        <div className="flex items-center">
          <div className="w-1/5 h-12 mr-20">
            <Select<number>
              className="bg-gray-100 text-black h-12 text-left"
              value = {target}
              onChange={setTarget}
              options= {[
                {
                  value:1,
                  label:'檸檬科技股份有現公司'
                },
                {
                  value:2,
                  label:'李小花'
                },
              ]} />
          </div>
          <div>總費用：</div>
          <div
            className="w-48 rounded-md ml-4 font-bold bg-gray-100 h-12
           text-primary-red flex items-center place-content-center">
            <div>$100,000</div>
          </div>
        </div>
        <div
          className="grid grid-cols-6 divide-x h-20 font-bold text-gray-500
      divide-gray-300 text-center bg-primary-gray mt-12">
          <div className="py-7">階段</div>
          <div className="py-7">金額</div>
          <div className="py-7">預計收款日</div>
          <div className="py-7">實際收款日</div>
          <div className="py-7">帳號後五碼</div>
          <div className="py-7">開立發票日</div>
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
      }
      {target === 2 && <div>
        <div className="flex items-center">
          <div className="w-1/5 h-12 mr-20">
            <Select<number>
              className="bg-gray-100 text-black h-12 text-left"
              value = {target}
              onChange={setTarget}
              options= {[
                {
                  value:1,
                  label:'檸檬科技股份有現公司'
                },
                {
                  value:2,
                  label:'李小花'
                },
              ]} />
          </div>
          <div>總費用：</div>
          <div
            className="w-48 rounded-md ml-4 font-bold bg-gray-100 h-12
           text-primary-red flex items-center place-content-center">
            <div>$100,000</div>
          </div>
          <div className="ml-20 text-gray-400">
            <p>匯款帳號：</p>
            <p> (007) 台灣銀行   234567891023</p>
          </div>
        </div>
        <div
          className="flex divide-x h-20 font-bold text-gray-500
      divide-gray-300 text-center bg-primary-gray mt-12">
          <div className="w-56 py-7">階段</div>
          <div className="w-56 py-7">金額</div>
          <div className="w-60 py-7">撥款時間</div>
          <div className="w-64 py-7">操作</div>
          <div className="flex-grow py-7">實際撥款時間</div>
        </div>
        <div
          className="flex divide-x h-20  font-medium text-gray-500
      divide-gray-300 text-center bg-white border-b-2">
          <div className="w-56 py-7">20% </div>
          <div className="w-56 py-7">$ 20,000</div>
          <div className="w-60 py-7">2022/1/22</div>
          <div className="w-64 flex items-center place-content-center ">
            <Button
              className="bg-usual-gray shadow-md w-28 cursor-default"
              type="circle"
              onClick={() => { }}>已匯款</Button>
          </div>
          <div className="flex-grow flex items-center place-content-center">
            <div className="w-60 h-12">
              <Select<number>
                className="bg-white text-black h-12 relative"
                value = {date}
                onChange={setDate}
                options= {[
                  {
                    value:1,
                    label:'請選擇時間'
                  },
                  {
                    value:2,
                    label:'2022/1/22'
                  },
                ]} />
            </div>
          </div>
        </div>
        <div
          className="flex divide-x h-20  font-medium text-gray-500
      divide-gray-300 text-center bg-white border-b-2">
          <div className="w-56 py-7">20% </div>
          <div className="w-56 py-7">$ 20,000</div>
          <div className="w-60 py-7">2022/1/22</div>
          <div className="w-64 flex items-center place-content-center">
            <Button
              className="shadow-md w-28"
              type="circle"
              onClick={() => {}}>我已匯款</Button>
          </div>
          <div className="flex-grow flex items-center place-content-center">
            <div className="w-60 h-12">
              <Select<number>
                className="bg-white text-black h-12 relative"
                value = {date1}
                onChange={setDate1}
                options= {[
                  {
                    value:1,
                    label:'請選擇時間'
                  },
                  {
                    value:2,
                    label:'2022/1/22'
                  },
                ]} />
            </div>
          </div>
        </div>
        <div
          className="flex divide-x h-20  font-medium text-gray-500
      divide-gray-300 text-center bg-white border-b-2">
          <div className="w-56 py-7">20% </div>
          <div className="w-56 py-7">$ 20,000</div>
          <div className="w-60 py-7">2022/1/22</div>
          <div className="w-64 flex items-center place-content-center">
            <Button
              className="shadow-md w-28"
              type="circle"
              onClick={() => {}}>我已匯款</Button>
          </div>
          <div className="flex-grow flex items-center place-content-center">
            <div className="w-60 h-12">
              <Select<number>
                className="bg-white text-black h-12 relative"
                value = {date2}
                onChange={setDate2}
                options= {[
                  {
                    value:1,
                    label:'請選擇時間'
                  },
                  {
                    value:2,
                    label:'2022/1/22'
                  },
                ]} />
            </div>
          </div>
        </div>
        <div
          className="flex divide-x h-20  font-medium text-gray-500
      divide-gray-300 text-center bg-white border-b-2">
          <div className="w-56 py-7">20% </div>
          <div className="w-56 py-7">$ 20,000</div>
          <div className="w-60 py-7">2022/1/22</div>
          <div className="w-64 flex items-center place-content-center">
            <Button
              className="shadow-md w-28"
              type="circle"
              onClick={() => {}}>我已匯款</Button>
          </div>
          <div className="flex-grow flex items-center place-content-center">
            <div className="w-60 h-12">
              <Select<number>
                className="bg-white text-black h-12 relative"
                value = {date3}
                onChange={setDate3}
                options= {[
                  {
                    value:1,
                    label:'請選擇時間'
                  },
                  {
                    value:2,
                    label:'2022/1/22'
                  },
                ]} />
            </div>
          </div>
        </div>
        <div
          className="flex justify-center mt-12">
          <img
            src="/images/redadd.svg"
            alt=""
            className="cursor-pointed"/>
        </div>
      </div>
      }
    </div>
  );
}
