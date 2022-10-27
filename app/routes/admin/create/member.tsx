import Button from '~/components/common/Button';
import { Link } from 'remix';
import { useState } from 'react';
import { useNavigate } from 'remix';

export default function Index() {
  const [isShowLink, setIsShowLink] = useState(false);
  const navigate = useNavigate();
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
        <div
          className="py-7 text-primary-red"
          onClick={()=> navigate('./../../projects/' +
          Math.round(Math.random() * 100)+ '/enter-project')}>以身份進入該專案</div>
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
        <div
          className="py-7 text-primary-red"
          onClick={()=> navigate('./../../projects/' +
          Math.round(Math.random() * 100)+ '/enter-project')}>以身份進入該專案</div>
      </div>
      <div
        className="grid grid-cols-6 divide-x h-20  font-medium text-gray-500
      divide-gray-300 text-center bg-primary-gray">
        <div className="py-7">王小明 </div>
        <div className="py-7 text-red-600">設計師</div>
        <div className="py-7 ">已解約</div>
        <Link to=""> <div className="py-7 text-blue-500">點擊查看</div></Link>
        <div className="py-7">＄50,000 / 100,000</div>
        <Link to="./../../enter-project">
          <div className="py-7 text-gray-400">以身份進入該專案</div></Link>
      </div>
      <div
        className="flex justify-center border-dashed mt-4 border-gray-100
      border-4 rounded-xl h-16 items-center"
      >
        <div>
          <img
            src="/images/plus.svg"
            alt=""
            onClick={()=>{setIsShowLink(true);}}/></div>
      </div>
      {isShowLink &&
      <div className="fixed top-0 bottom-0 left-0 right-0">
        <div
          className="w-screen h-screen bg-gray-500
              opacity-40 z-10"></div>
        <div
          className="w-7/12 h-2/3 bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col pt-12" >
          <p className="font-semibold text-2xl self-center">選取專案人員</p>
          <div
            className="w-5/6 self-center mt-8 h-16 bg-gray-100 p-3
          flex items-center rounded-md text-gray-400">
            <img
              src="/images/search-notborder.svg"
              alt="search"
              className="mx-3"/>
            <div>搜尋設計師、工程師</div>
          </div>
          <div className="w-5/6 flex self-center space-x-3 my-5">
            <input
              type="button"
              value="×&emsp;王小明"
              className="rounded-full bg-gray-100 text-gray-400 h-8 w-28"/>
            <input
              type="button"
              value="×&emsp;王小明"
              className="rounded-full bg-gray-100 text-gray-400 h-8 w-28"/>
            <input
              type="button"
              value="×&emsp;王小明"
              className="rounded-full bg-gray-100 text-gray-400 h-8 w-28"/>
          </div>
          <div className="flex items-center h-36 w-5/6 self-center">
            <input type="checkbox" />
            <img
              src="/images/designer1.svg"
              alt=""
              className="h-24 w-24 rounded-full ml-8 mr-12"/>
            <div className="flex flex-col">
              <div className="text-lg">王小明 </div>
              <div className="my-3">居住地：新北市</div>
              <div className="flex space-x-3">
                <input
                  type="button"
                  value="Figma"
                  className="rounded-full bg-gray-100 text-gray-500 h-8 w-28"/>
                <input
                  type="button"
                  value="Adobe XD"
                  className="rounded-full bg-gray-100 text-gray-500 h-8 w-28"/>
              </div>
            </div>
            <div className="flex-grow"></div>
            <div
              className="flex flex-col items-end h-5/6
            place-content-between">
              <div>設計師</div>
              <input
                type="button"
                value="公司員工"
                className="rounded-full bg-primary-red text-white h-8 w-28"/>
            </div>
          </div>
          <hr className="w-5/6 self-center"/>
          <Button
            type="deactivated"
            onClick={()=>{setIsShowLink(false);}}
            className="w-32 font-bold h-12 self-center"
          >新增</Button>
        </div>
      </div>}
    </div>
  );
}
