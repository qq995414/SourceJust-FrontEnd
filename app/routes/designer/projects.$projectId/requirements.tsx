import Button from '~/components/common/Button';
import { useNavigate } from 'remix';
import { useState } from 'react';
import cx from 'classnames';

export default function Index() {
  const [project, setProject] = useState(1);
  const [stop, setStop] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [newQuotation, setNewQuotation] = useState(false);
  const [signContract, setSignContract] = useState(false);
  const navigate = useNavigate();
  return(
    <div className="mb-12">
      {stop &&
      <div className="fixed top-0 bottom-0 left-0 right-0 z-30">
        <div
          className="w-screen h-screen bg-gray-500
      opacity-40 z-10"></div>
        <div
          className="w-5/12 h-96 bg-white z-20
  fixed top-0 left-0 bottom-0 right-0 m-auto
  rounded-xl shadow-xl flex flex-col items-center pt-20" >
          <p className="font-semibold text-2xl">此專案現階段已暫停實作</p>
          <Button
            onClick={() => navigate('./../../')}
            className="w-1/4 font-medium mt-32 h-12"
          >回專案列表</Button>
        </div>
      </div>}
      {cancel &&
      <div className="fixed top-0 bottom-0 left-0 right-0 z-30">
        <div
          className="w-screen h-screen bg-gray-500
    opacity-40 z-10"></div>
        <div
          className="w-5/12 h-96 bg-white z-20
fixed top-0 left-0 bottom-0 right-0 m-auto
rounded-xl shadow-xl flex flex-col items-center pt-20" >
          <p className="font-semibold text-2xl">您與此專案解約，</p>
          <p className="font-semibold text-2xl">請簽署解約合約並送出</p>
          <Button
            onClick={() => navigate('./../contract-cancel')}
            className="w-1/4 font-medium mt-32 h-12"
          >查看合約</Button>
        </div>
      </div>
      }
      {newQuotation &&
      <div className="fixed top-0 bottom-0 left-0 right-0 z-30">
        <div
          className="w-screen h-screen bg-gray-500
    opacity-40 z-10"></div>
        <div
          className="w-5/12 h-96 bg-white z-20
fixed top-0 left-0 bottom-0 right-0 m-auto
rounded-xl shadow-xl flex flex-col items-center pt-20" >
          <p className="font-semibold text-2xl">新功能追加</p>
          <p className="font-semibold text-2xl">須簽名新追加功能報價單</p>
          <Button
            onClick={() => navigate('./../new-quotation')}
            className="w-1/4 font-medium mt-32 h-12"
          >查看細節</Button>
        </div>
      </div>
      }
      {signContract &&
      <div className="fixed top-0 bottom-0 left-0 right-0 z-30">
        <div
          className="w-screen h-screen bg-gray-500
    opacity-40 z-10"></div>
        <div
          className="w-5/12 h-2/3 bg-white z-20
fixed top-0 left-0 bottom-0 right-0 m-auto
rounded-xl shadow-xl flex flex-col items-center pt-20" >
          <p className="text-2xl">提醒您！新合約已簽名完成</p>
          <p className="text-2xl">可下載進行備份</p>
          <div
            className="my-16 space-y-6 flex flex-col items-center w-full px-32">
            <div className="flex w-full">
              <div
                className="text-blue-400 w-3/4 cursor-pointer"
                onClick={()=>{}}>報價單. pdf</div>
              <div
                className="text-primary-red w-1/4 cursor-pointer font-semibold
                text-right"
                onClick={()=>{}}>下載</div>
            </div>
            <div className="flex w-full">
              <div
                className="text-blue-400 w-3/4 cursor-pointer"
                onClick={()=>{}}>專案合約. pdf</div>
              <div
                className="text-primary-red w-1/4 cursor-pointer font-semibold
                text-right"
                onClick={()=>{}}>下載</div>
            </div>
            <div className="flex w-full">
              <div
                className="text-blue-400 w-3/4 cursor-pointer"
                onClick={()=>{}}>勞務報酬單. pdf</div>
              <div
                className="text-primary-red w-1/4 cursor-pointer font-semibold
                text-right"
                onClick={()=>{}}>下載</div>
            </div>
          </div>
          <Button
            onClick={() => setSignContract(false)}
            className="w-32 font-medium h-12"
          >下一步</Button>
        </div>
      </div>
      }
      <div className="grid grid-cols-3 text-center w-2/5 space-x-4">
        <p
          onClick={() => setProject(1)}
          className={cx(
            project === 1
              ? 'text-primary-red border-b-primary-red'
              : 'hover:text-red-900 border-b-[rgba(0,0,0,0)] text-usual-gray',
            'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
        >
          設計需求
        </p>
        <p
          onClick={() => setProject(2)}
          className={cx(
            project === 2
              ? 'text-primary-red border-b-primary-red'
              : 'hover:text-red-900 border-b-[rgba(0,0,0,0)] text-usual-gray',
            'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
        >
          樹狀圖
        </p>
        <p
          onClick={() => setProject(3)}
          className={cx(
            project === 3
              ? 'text-primary-red border-b-primary-red'
              : 'hover:text-red-900 border-b-[rgba(0,0,0,0)] text-usual-gray',
            'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
        >
          備註
        </p>
      </div>
      <div className="flex space-x-10 cursor-pointer mt-12">
        <div onClick={()=>setStop(true)}>當後台管理系統暫停專案</div>
        <div onClick={()=>setCancel(true)}>取消專案時</div>
        <div onClick={()=>setNewQuotation(true)}>當新增報價時</div>
        <div onClick={()=>setSignContract(true)}>新合約已簽名完成</div>
      </div>

      {project === 1 &&
      <table className="text-center table-fixed mt-8 self-center p-2">
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
      }
      {project === 2 &&
      <img className="my-8" src={'/images/tree-view.svg'} alt="" />
      }
      {project === 3 &&
      <div className="flex place-content-center mt-24">
        <div className="my-8">
          <p>APP需要的功能：</p>
          <p>高相似度搜尋引擎（100％為目標）：</p>
          <p>當用戶搜尋某個單字的時候相關字應該呈現給用戶選擇，而用戶之前搜尋過的相關字將會先出現在選擇的上方</p>
          <p>產品條碼掃描比價功能：</p>
          <p>必須能夠掃過物品條碼呈現目前有哪幾家商家有賣此物品，以及呈現不同的價位顯示價為由低至高</p>
          <p>系統提示功能：</p>
          <p>顯示用戶追蹤物品的價格跳動，以及用戶點數即將過期通知等廣告用途</p>
          <p>產品分享：</p>
          <p>用戶能夠將在APP以及我們網站上所看</p>
        </div>
      </div>
      }
    </div>
  );
}
