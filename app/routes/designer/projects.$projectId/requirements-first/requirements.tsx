import Button from '~/components/common/Button';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="pb-10 flex flex-col items-center">
      <h1 className="text-primary-red font-black text-2xl">專案需求</h1>
      <table className="text-center table-fixed my-8 self-center p-2">
        <thead>
          <tr className="h-20">
            <th />
            <th className="w-72">主要項目</th>
            <th className="w-40">數量</th>
            <th className="w-72">總設計頁面</th>
            <th className="w-5/12">說明</th>
          </tr>
        </thead>
        <tbody className="text-gray-500">
          <tr className="bg-gray-200 divide-x-2 divide-white h-20">
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
            <td>1</td>
            <td>首頁</td>
            <td className="text-left p-2 text-sm">
              <p>首頁資料管理程式：依首頁定稿樣式建置各區塊圖文資料管理程式</p>
              資料管理程式：依首頁定稿樣式建置各區塊
            </td>
          </tr>
          <tr className="bg-gray-200 divide-x divide-white h-20">
            <td className="bg-white text-gray-600 pr-6">3</td>
            <td>最新消息</td>
            <td>2</td>
            <td>最新消息列表</td>
            <td className="text-left p-2 text-sm">
              <p>首頁資料管理程式：依首頁定稿樣式建置各區塊圖文資料管理程式</p>
              資料管理程式：依首頁定稿樣式建置各區塊
            </td>
          </tr>
          <tr className="h-20">
            <td className="text-gray-600 pr-6">4</td>
            <td>服務項目</td>
            <td>3</td>
            <td><p>廣告-服務項目內頁</p>攝影-服務項目內頁</td>
            <td className="text-left p-2 text-sm">
              <p> 首頁資料管理程式：依首頁定稿樣式建置各區塊圖文資料管理程式 </p>
              資料管理程式：依首頁定稿樣式建置各區塊
            </td>
          </tr>
          <tr className="bg-gray-200 divide-x divide-white h-20">
            <td className="bg-white text-gray-600 pr-6">5</td>
            <td>網站主視覺設計</td>
            <td>1</td>
            <td />
            <td className="text-left" />
          </tr>
        </tbody>
      </table>
      <Button
        className="mt-8"
        type="circle"
        onClick={() => navigate('../tree')}
      >
        下一步
      </Button>
    </div>
  );
}
