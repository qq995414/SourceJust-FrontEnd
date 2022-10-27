import Button from '~/components/common/Button';
import TextInput from '~/components/common/TextInput';
import { Link, useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col pt-12 mx-36 h-screen ">
      <Link className="flex justify-start items-center mb-10" to="./../ui">
        <div><img src="/images/xiaoyuhao.svg" alt="" /></div>
        <div className="text-primary-red ml-8 font-bold text-lg"> 回到上一頁</div>
      </Link>
      <div className="flex w-full h-5/6">
        <div
          className="grid p-4 bg-primary-gray text-gray-400
        rounded-md place-items-center w-3/5">
          點擊或拖移檔案至此.png
        </div>
        <div className="flex w-1/3 flex-col justify-between ml-20">
          <div
            className="grid grid-rows-2 w-full
          rounded-md border-2 divide-y-2 divide-gray-200 border-gray-200">
            <div className="flex items-center text-gray-400 px-6">
              <div>頁面名稱</div>
              <TextInput
                className="bg-white text-right flex-grow ml-6 text-blue-400"
              />
            </div>

            <div className="flex flex-col text-gray-400 px-6 h-24 py-4">
              <div > 圖片連結</div>
              <a
                href="http://google_drive/.com"
                target="_blank"
                className="mt-2 text-blue-400 underline"
                rel="noopener noreferrer">http://google_drive/.com</a>
            </div>
          </div>
          <div className="self-center">
            <Button
              type="circle"
              onClick={() => {navigate('./../ui');}}
            >
              上傳UI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
