import Button from '~/components/common/Button';
import TextInput from '~/components/common/TextInput';
import { useNavigate } from 'remix';
import { useState } from 'react';

export default function Index() {
  const navigate = useNavigate();
  const [isShowLink, setIsShowLink] = useState(false);

  return (
    <div className="container mx-auto w-full min-h-screen py-10">
      <div className="flex flex-col mx-32 items-center">
        <h1 className="text-primary-red font-black text-xl">
          傳送 報價單/合約/勞務報酬單</h1>
        <div className="flex mt-20">
          <div className="text-center mr-20 mt-4">
            傳送至
          </div>
          <div className="flex flex-col space-y-8">
            <div className="flex items-center">
              <input type="checkbox" />
              <img
                className="mx-10"
                src="/images/portrait.svg"
                alt="portrait" />
              <div className="w-60">客戶 - 檸檬科技有限公司</div>
              <TextInput
                className="bg-gray-100 border-0 text-gray-400 ml-10 text-center
                w-28"
                placeholder="填寫價格"
              />
            </div>
            <div className="flex items-center mb-8">
              <input type="checkbox" />
              <img
                className="mx-10"
                src="/images/portrait.svg"
                alt="portrait" />
              <div className="w-60">工程師 - 王小明 </div>
              <TextInput
                className="bg-gray-100 border-0 text-gray-400 ml-10 text-center
                w-28"
                placeholder="填寫價格"
              />
            </div>
            <div className="flex items-center mb-8">
              <input type="checkbox" />
              <img
                className="mx-10"
                src="/images/portrait.svg"
                alt="portrait" />
              <div className="w-60">設計師 - 王小明 </div>
              <TextInput
                className="bg-gray-100 border-0 text-gray-400 ml-10 text-center
                w-28"
                placeholder="填寫價格"
              />
            </div>
            <div className="flex items-center mb-8">
              <input type="checkbox" />
              <img
                className="mx-10"
                src="/images/portrait.svg"
                alt="portrait" />
              <div className="w-60">設計師 - 王小明 </div>
              <TextInput
                className="bg-gray-100 border-0 text-gray-400 ml-10 text-center
                w-28"
                placeholder="填寫價格"
              />
            </div>
          </div>
        </div>
        <Button
          className="mt-24"
          type="circle"
          onClick={() => {setIsShowLink(true);}}
        >
          送出並下一步
        </Button>
        {isShowLink &&
        <div className="fixed top-0 bottom-0 left-0 right-0">
          <div
            className="w-screen h-screen bg-gray-500
              opacity-40 z-10"></div>
          <div
            className="w-5/12 h-96 bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col items-center pt-20" >
            <p className="font-semibold text-lg">新增報價流程完成，</p>
            <p className="font-semibold text-lg">等待專案人員合約簽署</p>
            <Button
              onClick={() => {navigate('./../information/basic'); }}
              className="w-1/4 text-sm font-medium mt-32 h-10"
            >確認</Button>
          </div>
        </div>}
      </div>
    </div>
  );
}
