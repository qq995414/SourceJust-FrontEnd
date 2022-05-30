import Button from '~/components/common/Button';
import TextInput from '~/components/common/TextInput';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="container px-32 mt-8">
      <div className="flex flex-col mb-12">
        <div className="flex items-center">
          <div className="text-primary-red font-bold text-xl">客戶資料</div>
          <Button
            className="ml-12 text-blue-400 bg-white border-1"
            type="cancel"
            onClick={() => navigate('')}
          >
            帶入客戶資料
          </Button>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">公司名稱</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"
            value="檸檬科技股份有現公司"
          />
          <div className="w-32">電子郵件</div>
          <TextInput
            className="w-1/4 rounded p-2 text-black"
          />
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">負責人</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"
            value="王小明"
          />
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
          />
          <div className="w-32">統一編號</div>
          <TextInput
            className="w-1/4 rounded p-2 text-black"
            value="7281 3991"
          />
        </div>
        <div className="flex items-center mt-8">
          <div className="w-32">地址</div>
          <TextInput
            className="w-1/2 rounded-md p-2 text-black mr-8"
            value="新北市中和區文字文字文字文字文字文字文字文字"
          />
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
            />
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
            />
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
