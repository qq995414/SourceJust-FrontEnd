import Button from '~/components/common/Button';
import { Link } from 'remix';

export default function Index() {
  return(
    <div className="container px-32 mt-8">
      <div className="flex text-lg font-medium">
        <div className="mr-12">業務代表：</div>
        <div>陳大明</div>
      </div>
      <div
        className="grid grid-cols-6 divide-x h-12 font-bold text-gray-500 mt-12
      divide-gray-300 text-center bg-primary-gray">
        <div className="py-3">專案人員</div>
        <div className="py-3">身份</div>
        <div className="py-3">狀態</div>
        <div className="py-3">Ｍilestone</div>
        <div className="py-3">款項</div>
        <div className="py-3"></div>
      </div>
      <div
        className="grid grid-cols-6 divide-x h-20  font-medium text-gray-500
      divide-gray-300 text-center bg-white">
        <div className="py-7">王小明 </div>
        <div className="py-7 text-red-600">設計師</div>
        <div className="py-7 text-yellow-500">已簽約</div>
        <Link to=""> <div className="py-7 text-blue-500">點擊查看</div></Link>
        <div className="py-7">＄50,000 / 100,000</div>
        <Link to="./../../enter-project">
          <div className="py-7 text-primary-red">以身份進入該專案</div></Link>
      </div>
      <div
        className="grid grid-cols-6 divide-x h-20  font-medium text-gray-500
      divide-gray-300 text-center bg-primary-gray">
        <div className="py-7">王小明 </div>
        <div className="py-7 text-red-600">設計師</div>
        <div className="py-7 text-yellow-500">尚未簽保密條約</div>
        <div className="py-7 text-blue-500">-</div>
        <div className="py-7">-</div>
        <div><Button
          className="mt-5"
          type="circle"
          onClick={() => {}}
        >
          刪除
        </Button></div>
      </div>
      <div
        className="grid grid-cols-6 divide-x h-20  font-medium text-gray-500
      divide-gray-300 text-center bg-white">
        <div className="py-7">王小明 </div>
        <div className="py-7 text-red-600">工程師</div>
        <div className="py-7 text-yellow-500">上傳開發伺服器</div>
        <Link to=""> <div className="py-7 text-blue-500">點擊查看</div></Link>
        <div className="py-7">＄50,000 / 100,000</div>
        <Link to="./../../enter-project">
          <div className="py-7 text-primary-red">以身份進入該專案</div></Link>
      </div>
      <div
        className="grid grid-cols-6 divide-x h-20  font-medium text-gray-500
      divide-gray-300 text-center bg-primary-gray">
        <div className="py-7">王小明 </div>
        <div className="py-7 text-red-600">設計師</div>
        <div className="py-7 ">已解約</div>
        <Link to=""> <div className="py-7 text-blue-500">點擊查看</div></Link>
        <div className="py-7">＄50,000 / 100,000</div>
        <div className="py-7 text-gray-400">以身份進入該專案</div>
      </div>
      <div
        className="flex justify-center border-dashed mt-4 border-gray-100
      border-4 rounded-xl h-16 items-center">
        <div><img src="/images/plus.svg" alt="" /></div>

      </div>
    </div>
  );
}
