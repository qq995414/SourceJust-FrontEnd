import Button from '~/components/common/Button';
import Select from '~/components/Select';
import TextArea from '~/components/common/TextArea';
import { useNavigate } from 'remix';
import { useState } from 'react';

export default function Index() {
  const navigate = useNavigate();
  const [target, setTarget] = useState(1);
  return (
    <div className="container mx-auto py-10 text-lg">
      <div className="flex place-content-between items-center px-24">
        <div className="w-12"> <img src={'/images/logo.svg'} alt="" /></div>
        <div className="text-center text-primary-red text-2xl">
          索爾斯專案資料填寫
        </div>
        <div className="w-12"></div>
      </div>
      <div className="flex flex-col mx-32">
        <div className="flex w-2/5 self-center mt-12 mb-24 items-center">
          <div className="text-gray-500 mr-6">業務編號：</div>
          <input
            type="text"
            className="h-12 rounded-md p-2 bg-gray-50
           flex-grow"/>
        </div>
        <div className="font-semibold mb-8">客戶基本資料</div>
        <div className="grid grid-cols-2 text-gray-500 mb-2">
          <div>公司名稱</div>
          <div>電子郵件</div>
        </div>
        <div className="grid grid-cols-2 mb-10">
          <input
            type="text"
            className="h-16 rounded-md p-2
           bg-gray-100 w-11/12"/>
          <input
            type="text"
            className="h-16 rounded-md p-2
          bg-gray-100 w-11/12"/>
        </div>
        <div className="grid grid-cols-2 text-gray-500 mb-2">
          <div>負責人</div>
          <div>客戶來源</div>
        </div>
        <div className="grid grid-cols-2 mb-10">
          <input
            type="text"
            className="h-16 rounded-md p-2
          bg-gray-100 w-11/12"/>
          <input
            type="text"
            className="h-16 rounded-md p-2
          bg-gray-100 w-11/12"/>
        </div>
        <div className="grid grid-cols-2 text-gray-500 mb-2">
          <div>電話</div>
          <div>行業類別</div>
        </div>
        <div className="grid grid-cols-2 mb-10">
          <input
            type="text"
            className="h-16 rounded-md p-2
          bg-gray-100 w-11/12"/>
          <div className="w-11/12 h-16">
            <Select<number>
              className="bg-gray-100 text-black h-16 relative"
              value = {target}
              onChange={setTarget}
              options= {[
                {
                  value:1,
                  label:''
                },
              ]} />
          </div>
        </div>
        <div className="grid grid-cols-2 text-gray-500 mb-2">
          <div>地址</div>
          <div>統一編號</div>
        </div>
        <div className="grid grid-cols-2 mb-10">
          <input
            type="text"
            className="h-16 rounded-md p-2
          bg-gray-100 w-11/12"/>
          <input
            type="text"
            className="h-16 rounded-md p-2
          bg-gray-100 w-11/12"/>
        </div>
        <div className="font-semibold mt-6 mb-8">專案資料</div>
        <div className="grid grid-cols-2 text-gray-500 mb-2">
          <div>預計完成日</div>
          <div>設計可修改次數</div>
        </div>
        <div className="grid grid-cols-2 mb-10">
          <div className="w-11/12 h-16">
            <Select<number>
              className="bg-gray-100 text-black h-16 relative"
              value = {target}
              onChange={setTarget}
              options= {[
                {
                  value:1,
                  label:''
                },
              ]} />
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="h-16 rounded-md p-2
            bg-gray-100 w-5/6"/>
            <div className="ml-6 text-gray-500">次</div>
          </div>

        </div>
        <div className="grid grid-cols-2 text-gray-500 mb-2">
          <div>案件類型</div>
          <div>程式可修改次數</div>
        </div>
        <div className="grid grid-cols-2 mb-10">
          <div className="w-11/12 h-16">
            <Select<number>
              className="bg-gray-100 text-black h-16 relative"
              value = {target}
              onChange={setTarget}
              options= {[
                {
                  value:1,
                  label:''
                },
              ]} />
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="h-16 rounded-md p-2
            bg-gray-100 w-5/6"/>
            <div className="ml-6 text-gray-500">次</div>
          </div>
        </div>
        <div className="grid grid-cols-2 text-gray-500 mb-2">
          <div>服務種類</div>
        </div>
        <div className="grid grid-cols-2 mb-10">
          <div className="w-11/12 h-16">
            <Select<number>
              className="bg-gray-100 text-black h-16 relative"
              value = {target}
              onChange={setTarget}
              options= {[
                {
                  value:1,
                  label:''
                },
              ]} />
          </div>
        </div>
        <div className="flex mb-12 items-center text-black">
          <div className="w-1/3 text-gray-500">是否提供有圖片與文案</div>
          <input
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red  mr-4"
            type="radio"
            name="picture" />
          <div>是</div>
          <input
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red ml-16 mr-4"
            type="radio"
            name="picture"/>
          <div>否</div>
        </div>
        <div className="flex mb-12 items-center text-black">
          <div className="w-1/3  text-gray-500">是否有網址</div>
          <input
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red  mr-4"
            type="radio"
            name="web" />
          <div>是</div>
          <input
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red ml-16 mr-4"
            type="radio"
            name="web"/>
          <div>否</div>
          <input
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red ml-16 mr-4"
            type="radio"
            name="web"/>
          <div>不需要</div>
        </div>
        <div className="flex mb-12 items-center text-black">
          <div className="w-1/3 text-gray-500">是否有伺服器</div>
          <input
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red  mr-4"
            type="radio"
            name="serve" />
          <div>是</div>
          <input
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red ml-16 mr-4"
            type="radio"
            name="serve"/>
          <div>否</div>
          <input
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red ml-16 mr-4"
            type="radio"
            name="serve"/>
          <div>不需要</div>
        </div>
        <div className="flex text-black mb-12 items-center">
          <div className="w-1/3  text-gray-500">App 是否需要上架</div>
          <input
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red  mr-4"
            type="radio"
            name="app" />
          <div>是</div>
          <input
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red ml-16 mr-4"
            type="radio"
            name="app"/>
          <div>否</div>
          <input
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red ml-16 mr-4"
            type="radio"
            name="app"/>
          <div>不需要</div>
        </div>
        <div className="text-gray-500 mb-5">
          <div>目標用戶是誰</div>
        </div>
        <div className="mb-10">
          <TextArea
            className="h-32 rounded-md p-2
          bg-gray-100 w-11/12"/>
        </div>
        <div className="text-gray-500 mb-5 flex items-center">
          <div>包含什麼介紹單元</div>
          <div className="ml-12 mr-2">建議頁面：</div>
          <input
            type="button"
            value="首頁"
            className="border-2 border-gray-300 rounded-full
            h-10 w-24 mx-2 cursor-pointer"/>
          <input
            type="button"
            value="商店頁"
            className="border-2 border-gray-300 rounded-full
            h-10 w-24 mx-2 cursor-pointer"/>
          <input
            type="button"
            value="設定頁"
            className="border-2 border-gray-300 rounded-full
            h-10 w-24 mx-2 cursor-pointer"/>
          <input
            type="button"
            value="品牌頁"
            className="border-2 border-gray-300 rounded-full
            h-10 w-24 mx-2 cursor-pointer"/>
          <input
            type="button"
            value="登入"
            className="border-2 border-gray-300 rounded-full
            h-10 w-24 mx-2 cursor-pointer"/>
          <div
            className="text-blue-500 ml-8 text-lg cursor-pointer"
            onClick={() => { }}>換一組</div>
        </div>
        <div className="mb-10">
          <TextArea
            className="h-32 rounded-md p-2
          bg-gray-100 w-11/12"/>
        </div>
        <div className="text-gray-500 mb-5">
          <div>功能需求</div>
        </div>
        <div className="mb-10">
          <TextArea
            className="h-32 rounded-md p-2
          bg-gray-100 w-11/12"/>
        </div>
        <div className="text-gray-500 mb-5">
          <div>專案備註</div>
        </div>
        <div className="mb-10">
          <TextArea
            className="h-32 rounded-md p-2
          bg-gray-100 w-11/12"/>
        </div>
        <div className="text-gray-500 mb-5">
          <div>保密條約</div>
        </div>
        <div className="flex place-content-between items-center">
          <div
            className="text-blue-500 underline cursor-pointer"
            onClick={()=>{}}>保密條約.pdf</div>
          <Button
            className="w-32 h-12 mr-12"
            type="circle"
            onClick={()=>navigate('./../../')}>
            建立
          </Button>
        </div>
      </div>

    </div>
  );
}

