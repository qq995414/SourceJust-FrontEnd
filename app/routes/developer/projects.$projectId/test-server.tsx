import TextInput from '~/components/common/TextInput';
import Button from '~/components/common/Button';
import TextArea from '~/components/common/TextArea';
import SideButtons from '~/components/SideButtons';
import { useState } from 'react';
import { useNavigate } from 'remix';

interface Props {
  account: string;
  password: string;
}

export default function Index() {
  const navigate = useNavigate();
  const [fontAccList, setFontAccList] = useState([
    {
      account: '',
      password: ''
    }, {
      account: '',
      password: ''
    }, {
      account: '',
      password: ''
    }
  ]);

  const [backAccList, setBackAccList] = useState([
    {
      account: '',
      password: ''
    }, {
      account: '',
      password: ''
    }, {
      account: '',
      password: ''
    }
  ]);

  const newObject = {
    account: '',
    password: ''
  };

  return (
    <div className="w-full h-screen">
      <div
        className="shadow-md rounded-md p-5 w-full tracking-[0.12em]
      text-primary-red">
        <div className="flex items-center">
          <p className="font-bold w-3/5">
            是否已上傳測試環境(TestFlight、Googleplay、伺服器)
          </p>
          <input
            type="radio"
            id="true"
            value="true"
            name="radioBtn"
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red" />
          <label className="text-black mx-5" htmlFor="true">是</label>
          <input
            type="radio"
            id="false"
            value="false"
            name="radioBtn"
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red" />
          <label className="mx-5 text-black" htmlFor="false">否</label>
        </div>
      </div>
      <div className="text-sm shadow-md rounded-md p-5 mt-5">
        <div className="w-full h-24">
          <p className="text-primary-red font-bold text-base mb-2">測試資料</p>
          <p className="text-primary-red my-2">前台網址</p>
          <div className="flex text-usual-gray my-2">
            <TextInput
              className="w-full h-10 mx-5"

            />
          </div>
        </div>

        <div className="w-full mt-5">
          <div className="flex justify-between items-center tracking-[0.1em]">
            <div className="flex items-center">
              <p className="text-base">測試帳號</p>
              <p className="text-usual-gray ml-5 text-xs">最少新增 3 位</p>
            </div>
            <button
              className="text-primary-red mr-5"
              onClick={() => {
                setFontAccList([...fontAccList, newObject]);
              }}>
              新增測試帳號
            </button>
          </div>
          <div className="mt-5 ml-5 text-usual-gray tracking-[0.2em]">
            <div className="flex flex-wrap">
              {fontAccList.map((i) => <SCard
                key={i.account}
                account={i.account}
                password={i.password} />)}
            </div>
          </div>
        </div>

        <div className="w-full mt-5">
          <div className="items-center tracking-[0.1em]">
            <p className="text-sm text-primary-red mb-2">後台網址</p>
            <div className="flex text-usual-gray my-2">
              <TextInput
                className="w-full h-10 mx-5"

              />
            </div>
          </div>
        </div>

        <div className="w-full my-10">
          <div className="flex justify-between items-center tracking-[0.1em]">
            <div className="flex items-center">
              <p className="text-base">測試帳號</p>
              <p className="text-usual-gray ml-5 text-xs">最少新增 3 位</p>
            </div>
            <button
              className="text-primary-red mr-5"
              onClick={() => {
                setBackAccList([...backAccList, newObject]);
              }}>
              新增測試帳號
            </button>
          </div>
          <div className="mt-5 ml-5 text-usual-gray tracking-[0.2em]">
            <div className="flex flex-wrap">
              {backAccList.map((i) => <SCard
                key={i.account}
                account={i.account}
                password={i.password} />)}
            </div>
          </div>
        </div>

        <div className="w-full mb-5 border-dashed border-2 h-10 rounded-lg">

        </div>
      </div>

      <div className="text-sm shadow-md rounded-md p-5 h-1/4 mt-5">
        <p className="text-base text-primary-red mt-2 font-bold">備註</p>
        <TextArea
          className="w-full text-left mt-4 text-[#BBBBBB]
          bg-primary-gray h-2/3 rounded-sm p-2 mx-auto"
          placeholder="輸入文字" />
      </div>

      <div className="w-full text-center mt-10">
        <Button
          className="h-12 w-32 mb-20"
          onClick={() => {
            navigate('../test-debug');
          }}>下一步</Button>
      </div>
      <SideButtons type="developer" />
    </div>

  );
}

function SCard(props: Props) {
  return (
    <div className="w-1/3 my-2">
      <div
        className="w-64 rounded-md bg-primary-gray
      h-full inline-block align-middle p-2">
        <p className="my-1">帳號：abc@gmail.com</p>
        <p className="my-2">密碼：abc1234</p>
      </div>
    </div>
  );
}
