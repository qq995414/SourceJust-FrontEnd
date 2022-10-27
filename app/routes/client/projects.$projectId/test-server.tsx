import SideButtons from '~/components/SideButtons';
import Button from '~/components/common/Button';
import TextArea from '~/components/common/TextArea';
import { useState } from 'react';
import { useNavigate } from 'remix';

interface Props{
    account:string;
    password:string;
}

export default function Index(){
  const navigate = useNavigate();
  const [fontAccList, setFontAccList] = useState([
    {
      account:'',
      password:''
    }, {
      account:'',
      password:''
    }, {
      account:'',
      password:''
    }
  ]);
  const [backAccList, setBackAccList] = useState([
    {
      account:'',
      password:''
    }, {
      account:'',
      password:''
    }, {
      account:'',
      password:''
    }
  ]);
  return(
    <div className="w-full h-screen">
      <SideButtons type="client"/>
      <div className="text-sm shadow-md rounded-md p-5">
        <div className="w-full h-24">
          <p className="text-primary-red font-bold text-base mb-2">測試資料</p>
          <p className="text-primary-red my-2">前台網址</p>
          <div className="flex text-usual-gray my-2">
            <p className="w-52">xxxxxxxxxxxxxxx.com</p>
            <button className="text-primary-red text-xs">複製</button>
          </div>
        </div>

        <div className="w-full mt-5">
          <div className="flex items-center tracking-[0.1em]">
            <p className="text-base">測試帳號</p>
            <p className="text-usual-gray ml-5 text-xs">最少新增 3 位</p>
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
            <p className="text-sm text-primary-red">後台網址</p>
            <p className="my-4 text-usual-gray">xxxxxxxxxxxxxxx.com</p>
          </div>
        </div>

        <div className="w-full my-10">
          <div className="flex items-center tracking-[0.1em]">
            <p className="text-base">測試帳號</p>
            <p className="text-usual-gray ml-5 text-xs">最少新增 3 位</p>
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
          onClick={()=>{navigate('../test-debug');}}>下一步</Button>
      </div>
      <SideButtons type="client"/>
    </div>

  );
}

function SCard(props:Props){
  return(
    <div className="w-1/3 my-2">
      <div className="flex my-1">
        <p className="w-52">帳號：abc@gmail.com</p>
        <button className="text-primary-red text-xs">複製</button>
      </div>
      <div className="flex my-2">
        <p className="w-52">密碼：abc1234</p>
        <button className="text-primary-red text-xs">複製</button>
      </div>
    </div>
  );
}
