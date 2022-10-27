import Button from '~/components/common/Button';
import { useNavigate } from 'remix';
import { useState } from 'react';

interface Signs {
  type: string;
  name: string;
}

interface SignsB {
  type: string;
  name: string;
  chosen?: boolean;
}

export default function Index() {
  const [isTerminated, setIsTerminated] = useState(false);
  return (
    <div className="h-screen w-full">
      {!isTerminated ?
        <div className="w-full mt-6">
          <p className="w-full text-center tracking-[0.2em] font-bold text-xl">
            解約合約
          </p>
          <div
            className="flex flex-col items-center mt-8
           text-sm tracking-[0.3em]">
            <p className="w-2/5 text-center">
              發包單位索爾斯科技有限公司(以下簡稱甲方)
            </p>
            <div className="w-2/5 flex justify-between mt-1">
              <p className="">承包單位</p>
              <p className="">(以下簡稱乙方)</p>
            </div>
          </div>
          <div className="mt-8 text-sm w-full text-center tracking-[0.3em]">
            <p>甲方委託乙方_____網頁專案，經雙方同意所訂合約條款如下:</p>
          </div>
          <div className="flex justify-center w-full mt-12">
            <div className="flex flex-col w-3/4 text-sm tracking-[0.3em]">
              <p className="my-2">第一條 合約標的物：＿＿＿＿＿＿＿＿＿</p>
              <p className="my-2">第二條 合約期限</p>
              <p className="my-2">1、乙方同意於中華民國(下同)110 年 12 月 31 日前完成專案。 </p>
              <p className="my-2">
                2、若乙方未能依照期限繳交已完成之專案，須提前向甲方說明且經甲方同意後，延長繳交專案之期限。
              </p>
              <p className="my-2">
                3、若甲方必須提供本專案相關之文字及圖片資料供乙方執行製作使用，如因甲方製作素材提供延遲所致之
                專案遲延者，乙方扣除延遲之時日後，仍應按本工作進度完成之。
              </p>
              <p className="mt-2">第三條 合約標的修改方式</p>
              <p>甲乙雙方於確認本專案之方向及設計風格無誤後，乙方應立即開始製作專案，若甲方對於</p>
              <p className="mb-2">專案內容仍有問題需要修改專案，須立即通知乙方進行修改專案。</p>

              <p className="mt-2">第四條 標的物總價</p>
              <p>1、平面設計專案共4件，</p>
              <p className="mb-2">2、本案件結算金額共計一頁計算為新台幣350元整。</p>

              <p className="mt-2">第五條 付款辦法</p>
              <p className="mb-2">甲方於簽訂本合約時，需預付乙方新台幣10000元整
                。 餘款甲方同意以現金 一次付清(於驗收完成付清餘款)</p>

              <hr className="mt-16 mb-3" />
              <p className="font-bold text-base my-2">立合約人:</p>
              <div className="flex flex-col my-2 w-full">
                <SignCardA type="甲方:" name="索爾斯科技有限公司" />
                <SignCardA type="負 責 人:" name="陳宜謙" />
                <SignCardA type="地 址:" name="新竹縣竹北市成功十五街25號" />
                <SignCardA type="統一編號:" name="90872435" />
                <SignCardA type="聯 絡 人:" name="陳宜謙" />
                <SignCardA type="電 話:" name="0912-833-615" />
              </div>
              <div className="flex flex-col my-2 w-full">
                <SignCardB type="乙方:" name="" chosen />
                <SignCardB type="負 責 人:" name="" chosen />
                <SignCardB type="地 址:" name="台北市信義區" />
                <SignCardB type="統一編號:" name="" />
                <SignCardB type="聯 絡 人:" name="" />
                <SignCardB type="電 話:" name="" />
              </div>
              <div className="w-full flex justify-center my-10">
                <Button
                  className="w-32 h-12"
                  onClick={() => setIsTerminated(true)}>
                  下一步
                </Button>
              </div>
            </div>
          </div>
        </div> : <Terminated />}
    </div>
  );
}

function SignCardA(props: Signs) {
  return (
    <div className="flex justify-between">
      <p className="w-1/2 h-6">{props.type}</p>
      <p className="ml-48 w-1/2 text-left">{props.name}</p>
    </div>
  );
}

function SignCardB(props: SignsB) {
  return (
    <div className="flex justify-between">
      <p className="w-1/2 h-6">{props.type}</p>
      <div className="ml-48 w-1/2 text-left border-b-2 mt-1 flex items-center">
        <p className="w-3/4">{props.name}</p>
        {props.chosen &&
          <div className="text-primary-red font-bold text-sm">
            <button
              onClick={() => {
              }}>
              點擊簽名
            </button>
          </div>}
      </div>
    </div>
  );
}

function Terminated() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div
        className="text-usual-gray w-full text-center
       mb-20 tracking-[0.12em]">
        <div className="flex justify-center mb-5">
          <p>您已簽署完畢，與 </p>
          <p className="ml-3 text-primary-red">專案名稱XXX</p>
          <p>正式解約，請下載合約以保存，</p>
        </div>
        <p>避免造成其爭議，其他文字文字</p>
      </div>
      <div className="h-24 w-1/2 shadow-md rounded-lg flex items-center p-5">
        <div className="w-1/2 h-8 text-left flex items-center">
          <a href="./" className="text-[#036EEB] underline">
            解約合約.pdf
          </a>
        </div>
        <table className="w-1/2 h-8">
          <tr className="divide-x-2 divide-primary-gray">
            <th className="w-1/3">
            </th>
            <th className="w-2/3 text-primary-red pl-5 cursor-pointer">下載</th>
          </tr>
        </table>

      </div>
      <div className="mt-32">
        <button
          className="h-12 w-32 bg-primary-red rounded-l-full
          rounded-r-full text-white p-3"
          onClick={() => navigate('/client/projects')}>
          回到專案列表
        </button>
      </div>
    </div>
  );
}
