import Button from '~/components/common/Button';
import TextInput from '~/components/common/TextInput';
import SideButtons from '~/components/SideButtons';
import { useNavigate } from 'remix';
import { useState } from 'react';

interface Props {
  email : string
  state : string
}

export default function Index() {
  const navigate = useNavigate();
  const [isShowLinkTwo, setIsShowLinkTwo] = useState(false);
  const [needThird, setNeedThird] = useState(true);
  const [isLeft, setIsLeft] = useState(true);

  const items = [
    {
      id:0,
      email:'abcdefghijk@gmail.com',
      state:'open'
    },
    {
      id:1,
      email:'abcdefghijk@gmail.com',
      state:'open'
    },
    {
      id:2,
      email:'abcdefghijk@gmail.com',
      state:'unopen'
    },
    {
      id:3,
      email:'abcdefghijk@gmail.com',
      state:'open'
    },
    {
      id:4,
      email:'abcdefghijk@gmail.com',
      state:'inviting'
    },
    {
      id:5,
      email:'abcdefghijk@gmail.com',
      state:'open'
    },
    {
      id:6,
      email:'abcdefghijk@gmail.com',
      state:'inviting'
    },
    {
      id:7,
      email:'abcdefghijk@gmail.com',
      state:'open'
    },
    {
      id:8,
      email:'abcdefghijk@gmail.com',
      state:'unopen'
    },
  ];

  setTimeout(() => {
    setNeedThird(false);
  }, 3000);

  return (
    <div className="flex flex-col py-6">
      {needThird &&
      <div className="fixed top-0 bottom-0 left-0 right-0">
        <div
          className="w-full h-full bg-white
          opacity-80 z-10 flex place-content-center items-center">
          <div>不需要第三方串接</div>
        </div>
      </div>
      }
      <div className="flex place-content-between">
        <SideButtons type="client"/>
        {isLeft &&
        <div className="flex bg-shallow-red w-72 rounded-full">
          <div
            className="bg-primary-red h-12 flex items-center w-40
          text-white rounded-full pl-10"
          >索爾斯提供</div>
          <div
            className="h-12 flex items-center flex-row-reverse pr-10
          text-primary-red w-32"
            onClick={() => {setIsLeft(false);}}>客戶提供</div>
        </div>}
        {!isLeft &&
        <div className="flex bg-shallow-green w-72 rounded-full">
          <div
            className="h-12 flex items-center pl-10
          text-deep-green w-36"
            onClick={() => {setIsLeft(true);}}>索爾斯提供</div>
          <div
            className="bg-deep-green h-12 flex items-center w-36
         text-white rounded-full flex-row-reverse pr-10"
          >客戶提供</div>
        </div>}
      </div>
      <div className="w-full shadow rounded-xl mt-6">
        <div className="flex h-20 items-center font-semibold text-gray-500">
          <div className="w-52 text-center">第三方廠商</div>
          <div className="w-1/4 text-center">網站</div>
          <div className="w-60 text-center">填寫申請資料</div>
          <div className="ml-12 flex-grow">備註</div>
        </div>
        <hr />
        <div className="flex h-20 items-center my-3">
          <div className="w-52 text-center">綠界</div>
          <div className="w-1/4 flex place-content-center">
            <img src="/images/web.svg" alt="web" />
          </div>
          <div className="w-60 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/access.svg"
              alt="access"
              onClick={()=>{setIsShowLinkTwo(true);}}/>
          </div>
          <div className="ml-12 flex-grow mr-6">
            <TextInput
              className="w-full rounded-md p-2 text-black mr-8"
              value=""
              onChange={()=>{}}></TextInput>
          </div>
        </div>
        <div className="flex h-20 items-center my-3">
          <div className="w-52 text-center">金流</div>
          <div className="w-1/4 flex place-content-center">
            <img src="/images/web.svg" alt="web" />
          </div>
          <div className="w-60 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/access.svg"
              alt="access"
              onClick={()=>{setIsShowLinkTwo(true);}}/>
          </div>
          <div className="ml-12 flex-grow mr-6">
            <TextInput
              className="w-full rounded-md p-2 text-black mr-8"
              value=""
              onChange={()=>{}}></TextInput>
          </div>
        </div>
        <div className="flex h-20 items-center my-3">
          <div className="w-52 text-center">Line <br /> Developer</div>
          <div className="w-1/4 flex place-content-center">
            <img src="/images/web.svg" alt="web" />
          </div>
          <div className="w-60 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/access.svg"
              alt="access"
              onClick={()=>{setIsShowLinkTwo(true);}}/>
          </div>
          <div className="ml-12 flex-grow mr-6">
            <TextInput
              className="w-full rounded-md p-2 text-black mr-8"
              value=""
              onChange={()=>{}}></TextInput>
          </div>
        </div>
        <div className="flex h-20 items-center my-3">
          <div className="w-52 text-center">Apple <br /> Developer</div>
          <div className="w-1/4 flex place-content-center">
            <img src="/images/web.svg" alt="web" />
          </div>
          <div className="w-60 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/access.svg"
              alt="access"
              onClick={()=>{setIsShowLinkTwo(true);}}/>
          </div>
          <div className="ml-12 flex-grow mr-6">
            <TextInput
              className="w-full rounded-md p-2 text-black mr-8"
              value=""
              onChange={()=>{}}></TextInput>
          </div>
        </div>
        <div className="flex h-20 items-center my-3">
          <div className="w-52 text-center">Goolge <br /> Developer</div>
          <div className="w-1/4 flex place-content-center">
            <img src="/images/web.svg" alt="web" />
          </div>
          <div className="w-60 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/access.svg"
              alt="access"
              onClick={()=>{setIsShowLinkTwo(true);}}/>
          </div>
          <div className="ml-12 flex-grow mr-6">
            <TextInput
              className="w-full rounded-md p-2 text-black mr-8"
              value=""
              onChange={()=>{}}></TextInput>
          </div>
        </div>
        <div className="flex h-20 items-center my-3">
          <div className="w-52 text-center">FaceBook <br /> Developer</div>
          <div className="w-1/4 flex place-content-center">
            <img src="/images/web.svg" alt="web" />
          </div>
          <div className="w-60 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/access.svg"
              alt="access"
              onClick={()=>{setIsShowLinkTwo(true);}}/>
          </div>
          {isShowLinkTwo && isLeft &&
          <div className="fixed top-0 bottom-0 left-0 right-0 z-30">
            <div
              className="w-screen h-screen bg-gray-500
              opacity-40 z-10"></div>
            <div
              className="w-7/12 max-h-[80vh] bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto overflow-y-auto
          rounded-xl shadow-xl flex flex-col pt-12" >
              <div
                className="absolute right-6 top-4 font-bold text-3xl
                cursor-pointer"
                onClick={()=>{setIsShowLinkTwo(false);}}>×</div>
              <p className="font-semibold text-xl self-center">綠界</p>
              <div className="flex-grow mx-10 mt-3">
                <div className="flex items-center my-5">
                  <div className="w-36">帳號</div>
                  <TextInput className="flex-grow h-12"/>
                </div>
                <div className="flex items-center my-5">
                  <div className="w-36">密碼</div>
                  <TextInput className="flex-grow h-12"/>
                </div>
                <div className="flex items-center my-5">
                  <div className="w-36">聯絡電話</div>
                  <TextInput className="flex-grow h-12"/>
                </div>
                <div className="flex items-center my-5">
                  <div className="w-36">電子郵件</div>
                  <TextInput className="flex-grow h-12"/>
                </div>
                <div className="flex my-5">
                  <div className="w-36 pt-2">登記證照</div>
                  <div className="flex flex-grow flex-col h-64">
                    <div className="flex items-center mb-6">
                      <Button type="circle" onClick={()=>{}}>上傳檔案</Button>
                      <div className="ml-6 text-sm text-gray-400">
                        限制250x200,限制於200KB</div>
                    </div>
                    <div className="flex place-content-between flex-grow">
                      <div
                        className="w-7/12 bg-gray-600 rounded-xl flex
                      place-content-center items-center relative">
                        <div className="font-semibold text-white">上傳檔案</div>
                        <img
                          src="/images/dustbin.svg"
                          alt="dustbin"
                          className="absolute right-4 bottom-4"
                          onClick={()=>{}}/>
                      </div>
                      <div
                        className="w-1/3 bg-gray-600 rounded-xl flex
                      place-content-center items-center">
                        <div className="font-semibold text-white">上傳檔案</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex my-5">
                  <div className="w-36 pt-2">負責人證件影本</div>
                  <div className="flex flex-grow flex-col h-64">
                    <div className="flex items-center mb-6">
                      <Button type="circle" onClick={()=>{}}>上傳檔案</Button>
                      <div className="ml-6 text-sm text-gray-400">
                        限制250x200,限制於200KB</div>
                    </div>
                    <div className="flex place-content-between flex-grow">
                      <div
                        className="w-7/12 bg-gray-600 rounded-xl flex
                      place-content-center items-center relative">
                        <div className="font-semibold text-white">上傳檔案</div>
                        <img
                          src="/images/dustbin.svg"
                          alt="dustbin"
                          className="absolute right-4 bottom-4"
                          onClick={()=>{}}/>
                      </div>
                      <div
                        className="w-1/3 bg-gray-600 rounded-xl flex
                      place-content-center items-center">
                        <div className="font-semibold text-white">上傳檔案</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                type="circle"
                onClick={() => {setIsShowLinkTwo(false);}}
                className="w-32 h-14 mb-10 mt-4 self-center"
              >儲存</Button>
            </div>
          </div>}
          {isShowLinkTwo && !isLeft &&
          <div className="fixed top-0 bottom-0 left-0 right-0 z-30">
            <div
              className="w-screen h-screen bg-gray-500
              opacity-40 z-10"></div>
            <div
              className="w-7/12 max-h-[80vh] bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto overflow-y-auto
          rounded-xl shadow-xl flex flex-col pt-12" >
              <div
                className="absolute right-6 top-4 font-bold text-3xl
                cursor-pointer"
                onClick={()=>{setIsShowLinkTwo(false);}}>×</div>
              <p className="font-semibold text-xl self-center">綠界</p>
              <div className="self-center ml-8">
                <div className="flex my-12 text-gray-500 font-semibold text-lg">
                  <div className="w-1/3 ">電子郵件</div>
                  <div className="w-64 text-center">審核狀態</div>
                  <div className="w-64 text-center">操作</div>
                </div>
                {items.map(items => {
                  const { id, email, state } = items;
                  return (
                    <Item
                      key={id}
                      email={email}
                      state={state}
                    />
                  );
                })}
              </div>
            </div>
          </div>}
          <div className="ml-12 flex-grow mr-6">
            <TextInput
              className="w-full rounded-md p-2 text-black mr-8 "
              value=""
              onChange={()=>{}}></TextInput>
          </div>
        </div>
      </div>
      <Button
        className="mt-12 self-center"
        type="circle"
        onClick={() => navigate('./../quotation')}
      >
        下一步
      </Button>
    </div>
  );
}

function Item(props:Props) {
  return (
    <div className="flex my-12 items-center">
      <div className="w-1/3 flex place-content-between">
        <div>{props.email}</div>
        <div
          className="text-primary-red ml-6 w-10 cursor-pointer"
          onClick={()=>{}}>複製</div>
      </div>
      {props.state === 'open' &&
      <div className="flex items-center">
        <div className="w-64 text-center flex place-content-center">
          <div
            className="flex text-green-400 space-x-4
           font-semibold">
            <img src="/images/green√.svg" alt="√" />
            <div>已開通</div>
          </div>
        </div>
        <div className="w-64 text-center">
          <Button
            className="bg-usual-gray shadow-md w-28"
            type="circle"
            onClick={() => { }}>已確認</Button>
        </div>
      </div>}
      {props.state === 'unopen' &&
      <div className="flex items-center">
        <div className="w-64 text-center flex place-content-center">
          <div className="flex text-red-400 space-x-4 font-semibold">
            <img src="/images/red×.svg" alt="×" />
            <div>未開通</div>
          </div>
        </div>
        <div className="w-64 text-center">
          <Button
            className="shadow-md w-28"
            type="circle"
            onClick={() => {}}>寄送邀請</Button>
        </div>
      </div>}
      {props.state === 'inviting' &&
      <div className="flex items-center">
        <div className="w-64 text-center flex place-content-center">
          <div
            className="flex text-blue-400 space-x-4
                    font-semibold">
            <img src="/images/blue-loading.svg" alt="〇" />
            <div>邀請中</div>
          </div>
        </div>
        <div className="w-64 text-center">
          <Button
            className="bg-usual-gray shadow-md w-28"
            type="circle"
            onClick={() => { }}>已寄送</Button>
        </div>
      </div>}
    </div>
  );
}
