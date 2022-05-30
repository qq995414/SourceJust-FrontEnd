import Button from '~/components/common/Button';
import SideButtons from '~/components/SideButtons';
import TextInput from '~/components/common/TextInput';
import { useNavigate } from 'remix';
import { useState } from 'react';

export default function Index() {
  const navigate = useNavigate();
  const [isShowLink, setIsShowLink] = useState(false);
  const [isShowLinkTwo, setIsShowLinkTwo] = useState(false);
  const [provided, setProvided] = useState(0);
  const [providedTwo, setProvidedTwo] = useState(0);
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-10">
        <SideButtons type="developer"/>
        {provided == 0 &&
        <div
          className="grid grid-cols-2 bg-shallow-red w-1/3 h-12
        rounded-full cursor-pointer">
          <div
            className="bg-primary-red flex items-center place-content-center
          text-white rounded-full "
          >主機雲端管理</div>
          <div
            className="flex items-center place-content-center text-primary-red"
            onClick={() => {setProvided(1);}}>網域</div>
        </div>}
        {provided == 1 &&
        <div
          className="grid grid-cols-2 bg-shallow-red w-1/3 h-12
        rounded-full cursor-pointer">
          <div
            className="flex items-center place-content-center text-primary-red"
            onClick={() => {setProvided(0);}}>主機雲端管理</div>
          <div
            className="bg-primary-red flex items-center place-content-center
        text-white rounded-full ">
            網域</div>
        </div>}
      </div>
      <div className="flex items-center my-5">
        <div className="text-xl w-44 ">主機商</div>
        <div className="flex w-1/3 px-4 h-12 items-center">
          <p className="text-usual-gray">Godaddy</p>
        </div>
      </div>
      <div className="flex items-center my-5">
        <div className="text-xl w-44">主機商網址</div>
        <div
          className="flex w-1/3 px-4 h-12 items-center
        place-content-between">
          <p className="text-usual-gray">hahahhaha.com</p>
        </div>
      </div>
      <div className="flex items-center my-5">
        <div className="text-xl w-44">帳號</div>
        <div
          className="flex w-1/3 px-4 h-12 items-center
         place-content-between">
          <div>-</div>
        </div>
      </div>
      <div className="flex items-center my-5">
        <div className="text-xl w-44">密碼</div>
        <div className="flex w-1/3 px-4 h-12 text-usual-gray items-center">
          <p className="text-usual-gray">-</p>
        </div>
      </div>
      <div className="flex items-center mb-5">
        <div className="text-xl h-28 w-44 flex items-start">備註</div>
        <div className="flex w-full px-4 h-40 items-center text-usual-gray">
          <div className="ml-7">
            測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測
            試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試
            測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測
            試測試測試測試測試測試測試測試測試測試測試測試測試測試測試
            測試測試測試測試測試測試測試測試</div>
        </div>
      </div>

      <hr className="mt-16"/>

      <div className="text-usual-gray font-bold text-lg mt-12 ml-20">開通權限</div>
      <div className="ml-20">
        <div className="flex my-12 text-gray-500 text-lg">
          <div className="w-1/3 ">電子郵件</div>
          <div className="w-64 text-center">審核狀態</div>
          <div className="w-64 text-center">操作</div>
        </div>
        <div className="flex my-12 items-center">
          <div className="w-1/3 flex place-content-between pr-6">
            <TextInput className="w-full"/>
          </div>
          <div className="w-64 text-center flex place-content-center">
            <div className="flex text-green-400 space-x-4 font-semibold">
              <img src="/images/green√.svg" alt="√" />
              <div>已開通</div>
            </div>
          </div>
          <div className="w-64 text-center">
            <Button
              className="bg-[#B8B8B8] shadow-md w-28 mr-2"
              type="circle"
              onClick={() => { }}>已收到</Button>
            <Button
              className="bg-[#B8B8B8] shadow-md w-28 ml-2"
              type="circle"
              onClick={() => { }}>未收到</Button>
          </div>
        </div>
        <div className="flex my-12 items-center">
          <div className="w-1/3 flex place-content-between pr-6">
            <TextInput className="w-full"/>
          </div>
          <div className="w-64 text-center flex place-content-center">
            <div className="flex text-green-400 space-x-4 font-semibold">
              <img src="/images/green√.svg" alt="√" />
              <div>已開通</div>
            </div>
          </div>
          <div className="w-64 text-center">
            <Button
              className="bg-[#B8B8B8] shadow-md w-28 mr-2"
              type="circle"
              onClick={() => { }}>已收到</Button>
            <Button
              className="bg-[#B8B8B8] shadow-md w-28 ml-2"
              type="circle"
              onClick={() => { }}>未收到</Button>
          </div>
        </div>
        <div className="flex my-12 items-center">
          <div className="w-1/3 flex place-content-between pr-6">
            <TextInput className="w-full"/>
          </div>
          <div className="w-64 text-center flex place-content-center">
            <div className="flex text-[#4C9EEA] space-x-4 font-semibold">
              <img src="/images/developer-loading.svg" alt="×" />
              <div>邀請中</div>
            </div>
          </div>
          <div className="w-64 text-center">
            <Button
              className="shadow-md w-28 mr-2"
              type="circle"
              onClick={() => {}}>已收到</Button>
            <Button
              className="shadow-md w-28 ml-2"
              type="circle"
              onClick={() => {}}>未收到</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
