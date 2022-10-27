import Button from '~/components/common/Button';
import { useNavigate } from 'remix';
import { useState } from 'react';

export default function Index() {
  const navigate = useNavigate();
  const [isShowLink, setIsShowLink] = useState(false);
  return (
    <div className="px-32 flex flex-col py-6">
      <div className="flex items-center">
        <div className="text-primary-red font-black text-xl">
          [一] 網站系統設計與服務</div>
        <div className="flex-grow"></div>
        <div>
          <Button
            className="border-0 shadow-md"
            type="deactivated"
            onClick={() => {setIsShowLink(true);}}
          >
            + 新增欄位
          </Button>
        </div>
      </div>
      <table className="text-center table-fixed mt-8 self-center p-2">
        <thead>
          <tr className="h-20">
            <th />
            <th className="w-52">主要項目</th>
            <th className="w-80">總設計頁面</th>
            <th className="w-80">說明</th>
            <th className="w-80">客戶備註</th>
          </tr>
        </thead>
        <tbody className="text-gray-500">
          <tr className="bg-gray-100 divide-x-2 divide-white h-20">
            <td className="bg-white text-gray-600 pr-6">1</td>
            <td>網站主視覺設計</td>
            <td />
            <td className="text-left p-2 text-sm">
              專業設計師依客戶需求客製化設計全站視覺風格並使用合法授權免費、商用圖庫,讓網站視覺更有記憶張力
            </td>
            <td></td>
          </tr>
          <tr className="h-20">
            <td className="text-gray-600 pr-6">2</td>
            <td>首頁</td>
            <td>首頁</td>
            <td className="text-left p-2 text-sm">
              <p>首頁資料管理程式：依首頁定稿樣式建置各區塊圖文資料管理程式</p>
              資料管理程式：依首頁定稿樣式建置各區塊
            </td>
            <td></td>
          </tr>
          <tr className="bg-gray-100 divide-x divide-white h-20">
            <td className="bg-white text-gray-600 pr-6">3</td>
            <td>最新消息</td>
            <td>最新消息列表</td>
            <td className="text-left p-2 text-sm">
              <p>首頁資料管理程式：依首頁定稿樣式建置各區塊圖文資料管理程式</p>
              資料管理程式：依首頁定稿樣式建置各區塊
            </td>
            <td></td>
          </tr>
          <tr className="h-20">
            <td className="text-gray-600 pr-6">4</td>
            <td>服務項目</td>
            <td><p>廣告-服務項目內頁</p>攝影-服務項目內頁</td>
            <td className="text-left p-2 text-sm">
              <p> 首頁資料管理程式：依首頁定稿樣式建置各區塊圖文資料管理程式 </p>
              資料管理程式：依首頁定稿樣式建置各區塊
            </td>
            <td></td>
          </tr>
          <tr className="bg-gray-100 divide-x divide-white h-20">
            <td className="bg-white text-gray-600 pr-6">5</td>
            <td>網站主視覺設計</td>
            <td />
            <td className="text-left" />
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center mt-12">
        <div className="text-primary-red font-black text-xl">
          [二] 額外需求</div>
        <div className="flex-grow"></div>
        <div>
          <Button
            className="border-0 shadow-md"
            type="deactivated"
            onClick={() => {setIsShowLink(true);}}
          >
            + 新增欄位
          </Button>
        </div>
      </div>
      <table className="text-center table-fixed mt-8 self-center">
        <thead>
        </thead>
        <tbody className="text-gray-500">
          <tr className="bg-gray-100 divide-x divide-white h-20">
            <td className="bg-white text-gray-600 pr-6">1</td>
            <td className="w-52">程式碼版本控制</td>
            <td className="text-center w-80 p-2">
              <p>前後端程式碼</p>
              <p>Version Control</p>
            </td>
            <td className="w-80"></td>
            <td className="w-80"></td>
          </tr>
        </tbody>
      </table>
      <Button
        className="mt-12 self-center"
        type="circle"
        onClick={() => navigate('./../contract')}
      >
        下一步
      </Button>
      {isShowLink &&
      <div className="fixed top-0 bottom-0 left-0 right-0">
        <div
          className="w-screen h-screen bg-gray-500
              opacity-40 z-10"></div>
        <div
          className="w-1/2 h-3/5 bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col pt-10" >
          <div className="flex mx-4 items-center my-4">
            <div className="w-28 text-right">主要項目：</div>
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-500 mr-2"
            >首頁</Button>
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-500 mr-2"
            >商店頁</Button>
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-500 mr-2"
            >設定頁</Button>
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-500 mr-2"
            >登入</Button>
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-500 mr-2"
            >註冊</Button>
            <div className="text-primary-red text-sm ml-6">換一組</div>
          </div>
          <div className="flex ml-4 mr-40 my-4">
            <div className="w-28 text-right">總設計頁面：</div>
            <div
              className="h-24 flex-grow flex p-2 bg-primary-gray text-sm">
              首頁
            </div>
          </div>
          <div className="flex ml-4 mr-40 mb-4">
            <div className="w-28 text-right flex-none">說明：</div>
            <div
              className="h-24 flex-grow flex p-2 bg-primary-gray text-sm">
              首頁需要哪些東西首頁需要哪些東西首頁需要哪些東西首頁需要哪些東西
              首頁需要哪些東西首頁需要哪些東西首頁需要哪些東西首頁需要哪些東西
              首頁需要哪些東西首頁需要哪些東西首頁需要哪些東西首頁需要哪些東西
            </div>
          </div>
          <Button
            onClick={() => { setIsShowLink(false); }}
            className="w-32 text-sm font-medium mt-4 h-10 self-center"
          >新增
          </Button>
        </div>
      </div>}
    </div>
  );
}

