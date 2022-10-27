import SideButtons from '~/components/SideButtons';
import Button from '~/components/common/Button';
import TextArea from '~/components/common/TextArea';
import cx from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'remix';

interface Props{
  num:string;
}

export default function Index() {
  const [isShowLink, setIsShowLink] = useState(false);
  const [isShowFile, setIsShowFile] = useState(false);
  return (
    <div className="flex flex-col tracking-[0.12em]">
      <SideButtons type="client"/>
      <div className="flex items-center mt-12">
        <div className="flex w-1/4">
          <p className="text-primary-red font-semibold">檔案管理</p>

        </div>
        <div className="flex-grow"></div>
        <div className="flex">
          <button
            className="shadow-lg mx-2 w-24 h-12 rounded-full text-primary-red"
            onClick={() => {setIsShowLink(true);}}
          >
            <div className="flex justify-center">
              <img src="/images/client-note.svg" alt=""/>
              <p className="mx-1">備註</p>
            </div>
          </button>
          <button
            className="shadow-lg mx-2 w-32 h-12 rounded-full text-primary-red"
            onClick={() => {setIsShowFile(true);}}
          >
            <div className="flex items-center justify-center">
              <p className="font-bold text-[25px] mr-2 h-12 flex items-center">+</p>
              <p className="h-12 flex items-center z-10">上傳檔案</p>
            </div>

          </button>
        </div>
        {isShowFile &&
        <div className="fixed top-0 bottom-0 left-0 right-0 z-40">
          <div className="w-screen h-screen bg-gray-500 opacity-40 z-10"></div>
          <div
            className="w-5/12 h-3/4 bg-white z-20 tracking-[0.12em]
          fixed top-0 left-0 bottom-0 right-0 m-auto bg-primary-gray
          rounded-xl shadow-xl flex flex-col items-center " >
            <div className="w-full flex justify-end p-3">
              <img
                className="w-4 cursor-pointer"
                src="/images/client-cross.svg"
                alt=""
                onClick={()=>setIsShowFile(false)}/>
            </div>
            <p className="font-semibold text-lg text-primary-red mb-3">上傳檔案</p>
            <div
              className="p-4 bg-white text-gray-400 rounded-md w-3/5
             outline-[3px]  outline-[#B6212260] outline-dashed
             bg-gradient-to-b from-white to-[#B6212218]">
              <div className="grid place-items-center text-sm">
                <img className="mb-1 w-24" src="/images/client-upload.svg" alt="" />
                <p className="my-2">上傳或拖移檔案至此</p>
                <p className="my-1">或</p>
                <Button className="my-2 text-xs h-10 w-28" onClick={()=>{}}>瀏覽檔案</Button>
              </div>
            </div>
            <div className="w-3/5 mt-5">
              <p className="text-primary-red font-bold">上傳進度</p>
              <UploadFile num="60%"/>
              <UploadFile num="80%"/>
              <DoneUploadFile num="100%"/>
            </div>
          </div>
        </div>}
        {isShowLink &&
        <div className="fixed top-0 bottom-0 left-0 right-0">
          <div className="w-screen h-screen bg-gray-500 opacity-40 z-10"></div>
          <div
            className="w-5/12 h-96 bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto bg-primary-gray
          rounded-xl shadow-xl flex flex-col items-center" >
            <div className="w-full flex justify-end p-3">
              <img
                className="w-4 cursor-pointer"
                src="/images/client-cross.svg"
                alt=""
                onClick={()=>setIsShowLink(false)}/>
            </div>
            <p className="font-semibold text-lg text-primary-red ">備註</p>
            <textarea
              className="font-base text-usual-gray mt-5 bg-white w-4/5 h-60
             outline-none rounded-md p-5"
              placeholder="輸入文字輸入文字輸入文字輸入文字輸入文字輸入文字輸入文字"/>

          </div>
        </div>}
      </div>
      <div
        className="flex divide-x h-14 text-gray-500 mt-5 w-full
      divide-gray-300 text-center bg-primary-gray text-lg">
        <div className="p-4 w-20">No.</div>
        <div className="p-4 w-1/5">檔案名稱</div>
        <div className="p-4 w-52">文件大小</div>
        <div className="p-4 w-1/6 text-center">更新時間</div>
      </div>
      <div
        className="flex divide-x h-14 text-gray-500 w-full
      divide-gray-300 text-center bg-white tracking-[0.12em]">
        <div className="p-4 w-20">1</div>
        <div className="p-4 w-1/5 text-center text-[#036EEB] underline">
          原始檔.pdf</div>
        <div className="p-4 w-52">100MB</div>
        <div className="p-4 w-1/6 text-center">05-18 12:00</div>

      </div>
      <div
        className="flex divide-x h-14 text-gray-500 w-full
      divide-gray-300 text-center bg-primary-gray">
        <div className="p-4 w-20">1</div>
        <div className="p-4 w-1/5 text-center text-[#036EEB] underline">
          原始檔.pdf</div>
        <div className="p-4 w-52">100MB</div>
        <div className="p-4 w-1/6 text-center">05-18 12:00</div>

      </div>
      <div
        className="flex divide-x h-14 text-gray-500 w-full
      divide-gray-300 text-center bg-white">
        <div className="p-4 w-20">1</div>
        <div className="p-4 w-1/5 text-center text-[#036EEB] underline">
          原始檔.pdf</div>
        <div className="p-4 w-52">100MB</div>
        <div className="p-4 w-1/6 text-center">05-18 12:00</div>

      </div>
      <div
        className="flex divide-x h-14 text-gray-500 w-full
      divide-gray-300 text-center bg-primary-gray">
        <div className="p-4 w-20">1</div>
        <div className="p-4 w-1/5 text-center text-[#036EEB] underline">
          原始檔.pdf</div>
        <div className="p-4 w-52">100MB</div>
        <div className="p-4 w-1/6 text-center">05-18 12:00</div>

      </div>
      <div
        className="flex divide-x h-14 text-gray-500 w-full
      divide-gray-300 text-center bg-white">
        <div className="p-4 w-20">1</div>
        <div className="p-4 w-1/5 text-center text-[#036EEB] underline">
          原始檔.pdf</div>
        <div className="p-4 w-52">100MB</div>
        <div className="p-4 w-1/6 text-center">05-18 12:00</div>
      </div>

    </div>
  );
}

function UploadFile(props:Props){
  return (
    <div className="mt-2 full rounded-lg p-5 h-16 flex items-center bg-white">
      <img src="/images/pdf.svg" alt=""/>
      <div className="flex flex-col w-full ml-3">
        <div className="flex justify-between w-full">
          <p className="text-usual-gray text-sm">Dribble CV.PDF</p>
          <p className="text-primary-red text-sm">{props.num}</p>
        </div>
        <div className="mt-1 rounded-full h-3 bg-primary-gray relative">
          <div style={{ width:props.num }} className="bg-primary-red h-3 rounded-full absolute"/>
        </div>
      </div>
    </div>
  );
}
function DoneUploadFile(props:Props){
  return (
    <div className="mt-2 full rounded-lg p-5 h-16 flex items-center bg-white">
      <img src="/images/pdf.svg" alt=""/>
      <div className="flex flex-col w-full ml-3">
        <div className="flex justify-between w-full">
          <p className="text-usual-gray text-sm">Dribble CV.PDF</p>
          <p className="text-primary-red text-sm">{props.num}</p>
        </div>
        <div>
          <p className="text-usual-gray text-xs">978KB</p>
        </div>
      </div>
    </div>
  );
}
