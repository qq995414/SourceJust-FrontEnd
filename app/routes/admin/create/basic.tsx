import Button from '~/components/common/Button';
import TextInput from '~/components/common/TextInput';
import { useState } from 'react';

export default function Index() {
  const [isShowLink, setIsShowLink] = useState(false);
  return (
    <div className="container px-32 mt-8">
      <div className="flex flex-col mb-12">
        <div className="flex items-center">
          <div className="text-primary-red font-bold text-xl">客戶資料</div>
          <Button
            className="ml-12 text-blue-400 bg-white border-1"
            type="cancel"
            onClick={() => {
              setIsShowLink(true);
            }}
          >
            帶入客戶資料
          </Button>
          {isShowLink &&
            <div className="fixed top-0 bottom-0 left-0 right-0">
              <div
                className="w-screen h-screen bg-gray-500
              opacity-40 z-10"></div>
              <div
                className="w-5/12 h-96 bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col pt-12">
                <p className="font-semibold text-xl self-center">帶入客戶資料</p>
                <div className="w-full px-40 mt-12 text-gray-300">
                  <input
                    type="text"
                    className="flex place-content-center items-center rounded-md
                 h-12 border-2 border-gray-200 w-full text-center"
                    value="請輸入客戶名稱關鍵字" />
                </div>
                <Button
                  onClick={() => {
                    setIsShowLink(false);
                  }}
                  className="w-32 text-sm font-medium h-12 mt-28 self-center"
                >帶入</Button>
              </div>
            </div>}
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">公司名稱</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"
            value="檸檬科技股份有現公司" />
          <div className="w-32">電子郵件</div>
          <TextInput className="w-1/4 rounded p-2 text-black" />
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">負責人</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"
            value="王小明" />
          <div className="w-32">行業類別</div>
          <TextInput
            className="w-1/4 rounded p-2 text-black"
            value="食品業"
          />
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">電話</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black  mr-8"
            value="02-26874388"
          ></TextInput>
          <div className="w-32">統一編號</div>
          <TextInput
            className="w-1/4 rounded p-2 text-black"
            value="7281 3991"
          ></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">地址</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"
            value="新北市中和區文字文字文字文字文字文字文字文字"
          ></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">客戶來源</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"
            value="FB-陳小明"
          ></TextInput>
        </div>
      </div>
      <hr />
      <div className="flex flex-col mb-12">
        <div className="text-primary-red font-bold text-xl mt-8 mb-4">專案資料</div>
        <div className="flex mt-8">
          <div className="flex items-center w-1/2">
            <div>設計可修改次數</div>
            <TextInput
              className="w-32 rounded-md p-2 text-black ml-44 text-center"
              value="3"
            ></TextInput>
          </div>
          <div className="flex items-center w-1/2">
            <div>是否要SEO&emsp;</div>
            <input
              className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red ml-44 mr-4"
              type="radio"
              name="SFQ" />
            <div>是</div>
            <input
              className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red ml-16 mr-4"
              type="radio"
              name="SFQ" />
            <div>否</div>
          </div>
        </div>
        <div className="flex mt-8">
          <div className="flex items-center w-1/2">
            <div>程式可修改次數</div>
            <TextInput
              className="w-32 rounded-md p-2 text-black ml-44 text-center"
              value="3"
            ></TextInput>
          </div>
          <div className="flex items-center w-1/2">
            <div>是否有伺服器</div>
            <input
              className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red ml-44 mr-4"
              type="radio"
              name="SFQ" />
            <div>是</div>
            <input
              className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red ml-16 mr-4"
              type="radio"
              name="SFQ" />
            <div>否</div>
          </div>
        </div>
      </div>
    </div>
  );
}
