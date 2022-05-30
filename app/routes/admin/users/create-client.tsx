import TextInput from '~/components/common/TextInput';
import Button from '~/components/common/Button';
import { Link, useLoaderData, useNavigate } from 'remix';

export async function loader({ params }: any) {
  return params;
}

export default function Index() {
  const navigate = useNavigate();
  const { projectId } = useLoaderData();
  console.log(projectId);
  return (
    <div className="flex flex-col container mx-auto w-full mt-12">
      <div className="grid grid-cols-3 px-32">
        <Link
          className="flex justify-start items-center "
          to="./../clients">
          <div><img src="/images/xiaoyuhao.svg" alt="" /></div>
          <div className="text-primary-red ml-8 font-bold text-lg"> 回到列表</div>
        </Link>
        <div className="text-2xl self-center font-semibold text-center">
          建立客戶資料
        </div>
      </div>
      <div
        className="w-80 h-72 self-center rounded-lg text-gray-400
      overflow-hidden mt-20 bg-primary-gray flex">
        <div className="self-center text-center w-full">
          點擊上傳合作公司圖片
        </div>
      </div>
      {/* <div className="self-center mt-6 mr-56 text-primary-red font-medium">
        重新上傳照片</div> */}
      <div className="flex flex-col mb-12 mt-12 px-32">
        <div className="flex items-center">
          <div className="text-primary-red font-bold text-xl">客戶資料</div>
          {/* <div className="flex-grow"></div>
          <div className="text-primary-red ">編輯</div> */}
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">公司名稱</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"

          ></TextInput>
          <div className="w-32">電子郵件</div>
          <TextInput
            className="w-1/4 rounded p-2 text-black"

          ></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">負責人</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"

          ></TextInput>
          <div className="w-32">行業類別</div>
          <TextInput
            className="w-1/4 rounded p-2 text-black "

          ></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">電話</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"

          ></TextInput>
          <div className="w-32">統一編號</div>
          <TextInput
            className="w-1/4 rounded p-2 text-black"

          ></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">地址</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"

          ></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">客戶來源</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"

          ></TextInput>
        </div>
      </div>
      <div className="px-32">
        <hr />
      </div>
      <div className="flex flex-col mb-12 px-32">
        <div className="flex items-center">
          <div className="text-primary-red font-bold text-xl mt-8 mb-4">
            其他聯絡人
          </div>
          <div className="flex-grow"></div>
          <div className="text-primary-red font-bold text-5xl">+</div>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">姓名</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"

          ></TextInput>
          <div className="w-32">電子郵件</div>
          <TextInput
            className="w-1/4 rounded p-2 text-black"

          ></TextInput>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">電話</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"

          ></TextInput>
        </div>
      </div>
      <div className="px-32">
        <hr />
      </div>
      <div className="text-primary-red font-bold text-xl mt-8 mb-4 px-32">
        相關專案
      </div>
      <Button
        className="w-28 self-center mt-16 mb-12"
        type="circle"
        onClick={() => navigate('./../clients')}>
        建立
      </Button>
    </div>
  );
}
