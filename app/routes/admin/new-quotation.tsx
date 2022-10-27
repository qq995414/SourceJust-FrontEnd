import Button from '~/components/common/Button';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto w-full min-h-screen py-10">
      <div className="flex flex-col mx-32">
        <h1 className="text-primary-red font-black text-xl self-center">
          專案功能追加</h1>
        <div className="flex items-center">
          <div className="text-primary-red font-black text-xl">
            [一] 網站系統設計與服務</div>
          <div className="flex-grow"></div>
          <div>
            <Button
              className="border-0 shadow-md"
              type="deactivated"
              onClick={() => navigate('')}
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
              onClick={() => navigate('')}
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
              <td className="text-right w-80 p-2">
                <p>前後端程式碼</p>
                <p>Version Control</p>
              </td>
              <td className="w-80"></td>
              <td className="w-80"></td>
            </tr>
          </tbody>
        </table>
        <div className="self-center mt-12">
          <Button
            className=""
            type="circle"
            onClick={() => navigate('./../new-quotation-delivery')}
          >
            送出，生成報價單
          </Button>
        </div>
      </div>
    </div>
  );
}
