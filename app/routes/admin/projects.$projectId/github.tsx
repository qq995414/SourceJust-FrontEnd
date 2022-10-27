import Button from '~/components/common/Button';
import SideButtons from '~/components/SideButtons';
import TextInput from '~/components/common/TextInput';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="px-32 flex flex-col py-6">
      <SideButtons type="admin"/>
      <div className="flex items-center ml-52 mb-4">
        <div className="text-gray-500 mr-12">Github 專案</div>
        <TextInput className="border-2 h-16 w-2/3 rounded-xl" />
      </div>
      <div>
        <div className="flex my-12 text-gray-500 font-semibold text-lg">
          <div className="w-64 text-center mr-20">工程師</div>
          <div className="w-1/3 ">工程師 Github</div>
          <div className="w-64 text-center">審核狀態</div>
          <div className="w-64 text-center">操作</div>
        </div>
        <div className="flex my-12 items-center">
          <div className="w-64 text-center mr-20">王小明</div>
          <div className="w-1/3 ">abcdefghijk@gmail.com</div>
          <div className="w-64 text-center flex place-content-center">
            <div className="flex text-green-400 space-x-4 font-semibold">
              <img src="/images/green√.svg" alt="√" />
              <div>已開通</div>
            </div>
          </div>
          <div className="w-64 text-center">
            <Button
              className="bg-usual-gray shadow-md w-28 cursor-default"
              type="circle"
              onClick={() => { }}>已確認</Button>
          </div>
        </div>
        <div className="flex my-12 items-center">
          <div className="w-64 text-center mr-20">王小明</div>
          <div className="w-1/3 ">abcdefghijk@gmail.com</div>
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
        </div>
      </div>
      <Button
        className="mt-12 self-center"
        type="circle"
        onClick={() => navigate('./../progress')}
      >
        下一步
      </Button>
    </div>
  );
}

