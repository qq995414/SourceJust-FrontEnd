import Button from '~/components/common/Button';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="p-4 mt-2">
      <div className="p-4 mt-2 flex flex-col items-center">
        <h1 className="text-primary-red font-black text-2xl">客戶備註</h1>
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
        <Button
          className="mt-8"
          type="circle"
          onClick={() => navigate('../amount')}
        >
          下一步
        </Button>
      </div>
    </div>
  );
}
