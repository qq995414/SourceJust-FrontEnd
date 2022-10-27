import Button from '~/components/common/Button';
import TextInput from '~/components/common/TextInput';
import SideButtons from '~/components/SideButtons';
import { useState } from 'react';

interface Props {
  state:'open'|'unopen'|'inviting'
}

export default function Index() {
  const [isShowLink, setIsShowLink] = useState(false);
  return (
    <div className="flex flex-col py-6">
      <SideButtons type="developer"/>
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
            <img
              className="cursor-pointer"
              src="/images/web.svg"
              alt="web"
              onClick={()=>{}}/>
          </div>
          <div className="w-60 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/access.svg"
              alt="access"
              onClick={()=>setIsShowLink(true)}/>
          </div>
          <div className="ml-12 flex-grow mr-6">
            <TextInput
              className="w-full rounded-md p-2 text-black mr-8"></TextInput>
          </div>
        </div>
        <div className="flex h-20 items-center my-3">
          <div className="w-52 text-center">金流</div>
          <div className="w-1/4 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/web.svg"
              alt="web"
              onClick={()=>{}}/>
          </div>
          <div className="w-60 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/access.svg"
              alt="access"
              onClick={()=>{}}/>
          </div>
          <div className="ml-12 flex-grow mr-6">
            <TextInput
              className="w-full rounded-md p-2 text-black mr-8"></TextInput>
          </div>
        </div>
        <div className="flex h-20 items-center my-3">
          <div className="w-52 text-center">Line <br /> Developer</div>
          <div className="w-1/4 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/web.svg"
              alt="web"
              onClick={()=>{}}/>
          </div>
          <div className="w-60 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/access.svg"
              alt="access"
              onClick={()=>{}}/>
          </div>
          <div className="ml-12 flex-grow mr-6">
            <TextInput
              className="w-full rounded-md p-2 text-black mr-8"></TextInput>
          </div>
        </div>
        <div className="flex h-20 items-center my-3">
          <div className="w-52 text-center">Apple <br /> Developer</div>
          <div className="w-1/4 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/web.svg"
              alt="web"
              onClick={()=>{}}/>
          </div>
          <div className="w-60 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/access.svg"
              alt="access"
              onClick={()=>{}}/>
          </div>
          <div className="ml-12 flex-grow mr-6">
            <TextInput
              className="w-full rounded-md p-2 text-black mr-8"></TextInput>
          </div>
        </div>
        <div className="flex h-20 items-center my-3">
          <div className="w-52 text-center">Goolge <br /> Developer</div>
          <div className="w-1/4 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/web.svg"
              alt="web"
              onClick={()=>{}}/>
          </div>
          <div className="w-60 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/access.svg"
              alt="access"
              onClick={()=>{}}/>
          </div>
          <div className="ml-12 flex-grow mr-6">
            <TextInput
              className="w-full rounded-md p-2 text-black mr-8"></TextInput>
          </div>
        </div>
        <div className="flex h-20 items-center my-3">
          <div className="w-52 text-center">FaceBook <br /> Developer</div>
          <div className="w-1/4 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/web.svg"
              alt="web"
              onClick={()=>{}}/>
          </div>
          <div className="w-60 flex place-content-center">
            <img
              className="cursor-pointer"
              src="/images/access.svg"
              alt="access"
              onClick={()=>{}}/>
          </div>
          <div className="ml-12 flex-grow mr-6">
            <TextInput
              className="w-full rounded-md p-2 text-black mr-8"></TextInput>
          </div>
        </div>
        {isShowLink &&
          <div className="fixed top-0 bottom-0 left-0 right-0 z-30">
            <div
              className="w-screen h-screen bg-gray-500
              opacity-40 z-10 fixed top-0 left-0"></div>
            <div
              className="w-7/12 max-h-[80vh] bg-white z-20
           top-0 left-0 bottom-0 right-0 m-auto fixed overflow-y-auto
          rounded-xl shadow-xl flex flex-col pt-12">
              <div
                className="absolute right-6 top-4 font-bold text-3xl
                cursor-pointer"
                onClick={()=>{setIsShowLink(false);}}>×</div>
              <p className="font-semibold text-xl self-center">綠界</p>
              <div className="self-center ml-8">
                <div
                  className="flex mt-12 mb-6 text-gray-500 font-semibold
                text-lg">
                  <div className="w-1/3 ">電子郵件</div>
                  <div className="w-64 text-center">審核狀態</div>
                  <div className="w-64 text-center">操作</div>
                </div>
                <Items state="open"/>
                <Items state="open"/>
                <Items state="unopen"/>
                <Items state="open"/>
                <Items state="inviting"/>
              </div>
              <div
                className="flex place-content-center border-dashed mt-4
                border-gray-100 border-4 rounded-xl
                 ml-24 mr-16"
              >
                <div className="h-12 flex items-center">
                  <img
                    className="h-8"
                    src="/images/plus.svg"
                    alt=""
                    onClick={()=>{setIsShowLink(true);}}/>
                </div>
              </div>
              <Button
                className="shadow-md w-32 h-14 my-12 self-center"
                type="circle"
                onClick={() => setIsShowLink(false)}>登入</Button>
            </div>
          </div>}
      </div>
    </div>
  );
}

function Items(props:Props) {
  return (
    <div className="flex my-6 items-center">
      <TextInput
        className="w-1/3"/>
      <div className="w-64 text-center flex place-content-center">
        {props.state === 'open' &&
        <div
          className="flex text-green-400 space-x-4 font-semibold">
          <img src="/images/green√.svg" alt="√" />
          <div>已開通</div>
        </div>
        }
        {props.state === 'unopen' &&
        <div className="flex text-red-400 space-x-4 font-semibold">
          <img src="/images/red×.svg" alt="×" />
          <div>未開通</div>
        </div>
        }
        {props.state === 'inviting' &&
        <div
          className="flex text-blue-400 space-x-4 font-semibold">
          <img src="/images/blue-loading.svg" alt="〇" />
          <div>邀請中</div>
        </div>
        }
      </div>
      {(props.state === 'open' || props.state === 'unopen') &&
        <div className="w-64 text-center flex">
          <Button
            className="bg-usual-gray shadow-md w-28 mr-6"
            type="circle"
            onClick={() => { }}>已收到</Button>
          <Button
            className="bg-usual-gray shadow-md w-28"
            type="circle"
            onClick={() => { }}>未收到</Button>
        </div>
      }
      {props.state === 'inviting' &&
        <div className="w-64 text-center flex">
          <Button
            className="shadow-md w-28 mr-6"
            type="circle"
            onClick={() => { }}>已收到</Button>
          <Button
            className="shadow-md w-28"
            type="circle"
            onClick={() => { }}>未收到</Button>
        </div>
      }
    </div>
  );
}
