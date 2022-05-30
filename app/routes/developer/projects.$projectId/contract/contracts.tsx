import Button from '~/components/common/Button';
import Popup from '~/components/common/Popup';
import { useNavigate } from 'remix';
import { useEffect, useState } from 'react';

interface Signs{
  type:string;
  name:string;
}
interface SignsB{
type:string;
name:string;
chosen?:boolean;
}

export default function Index() {
  const files = [
    {
      name: '報價單. pdf',
      id:0
    },
    {
      name: '專案外包合約書. pdf',
      id:1
    },
    {
      name: '勞務報酬單. pdf',
      id:2
    },
  ];
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isUnFinished, setIsUnFinished] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('finish-infor') === 'true'
      && localStorage.getItem('labor-quotation-signature') === 'true'
    && localStorage.getItem('outsourcing-signature') === 'true') {
      setIsOpen(true);
    }
    else if (localStorage.getItem('back') === 'true') {
      setIsUnFinished(true);
    }
  }, []);

  return (
    <div className="p-4 mt-2">
      <div className="mt-2 flex flex-col items-center relative">
        <div className="w-full mt-6">
          <p className="w-full text-center tracking-[0.2em] font-bold text-xl">
            專案合約書
          </p>
          <div
            className="flex flex-col items-center
          mt-8 text-sm tracking-[0.3em]">
            <p className="w-2/5 text-center">發包單位索爾斯科技有限公司(以下簡稱甲方)</p>
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

              <p className="mt-2">第六條 著作財產權</p>
              <p>1、乙方為甲方製作之專案，不得違反著作權法，若有違反著作權之爭議，
                致甲方受有損害，乙方需賠償甲方所有損害，並且相關法律責任由乙方負責。</p>
              <p className="mb-2">2、乙方交付專案於甲方後，甲方即取得乙方所製作該專案之著作財產權。</p>

              <p className="mt-2">第七條 保密約定</p>
              <p className="mb-2">乙方同意因參與本專案而知悉或持有甲方之商業機密
                及其他機密資訊，負有保密務，乙方 不得以任何方法洩漏或公開
                予其他第三人，亦不得為自己或其他人之利益，使用該資訊。 乙方違反
                本契約之約定者，甲方有權立即終止本契約，若甲方受有損害時，甲方並得向乙 方請求損害賠
                償。乙方員工之違約行為，亦視為乙方之違約。</p>

              <p className="mt-2">第八條 爭議處理</p>
              <p className="mb-2">若因本合約未能履行或履行不完全所生之爭議
                ，雙方同意先本誠信原則協商之，本合約如需涉訟，雙方同意以新竹縣地方法院為第一審管轄法院。</p>

              <p className="mt-2">第九條 其他</p>
              <p className="mb-2">1、本合約未約定事項，雙方得以書面方式另行約定，修正時同。</p>

              <p className="my-2">2、本合約之附件視為合約之一部份，本合約計正本兩份，由雙方各執乙份。</p>
              <hr className="my-3"/>
              <p className="font-bold text-base my-2">立合約人:</p>
              <div className="flex flex-col my-2 w-full">
                <SignCardA type="甲方:" name="索爾斯科技有限公司"/>
                <SignCardA type="負 責 人:" name="陳宜謙"/>
                <SignCardA type="地 址:" name="新竹縣竹北市成功十五街25號"/>
                <SignCardA type="統一編號:" name="90872435"/>
                <SignCardA type="聯 絡 人:" name="陳宜謙"/>
                <SignCardA type="電 話:" name="0912-833-615"/>
              </div>
              <div className="flex flex-col my-2 w-full">
                <SignCardB type="乙方:" name="" chosen/>
                <SignCardB type="負 責 人:" name="" chosen/>
                <SignCardB type="地 址:" name="台北市信義區"/>
                <SignCardB type="統一編號:" name="12345678"/>
                <SignCardB type="聯 絡 人:" name="王小明"/>
                <SignCardB type="電 話:" name="0912345678"/>
              </div>
            </div>

          </div>
        </div>

        <Button
          type="circle"
          className="mt-8"
          onClick={() => navigate('../contract/labor-quotation')}
        >
          下一步
        </Button>
      </div>

      {isOpen && <Popup
        onClickButton={() => {
          localStorage.clear();
          navigate('../../milestone');
        }}
        type="download"
        title="提醒您！合約已簽名完成
      可下載進行備份"
        files={files}
      />}

      {isUnFinished && <Popup
        title="尚有資料未填寫完成"
        onClickButton={() => {
          localStorage.clear();
        }}
      />}
    </div>
  );
}
function SignCardA(props:Signs){
  return(
    <div className="flex justify-between">
      <p className="w-1/2">{props.type}</p>
      <p className="ml-48 w-1/2 text-left">{props.name}</p>
    </div>
  );
}

function SignCardB(props:SignsB){
  const [signature, setSignature] = useState(false);
  return(
    <div className="flex justify-between">
      <p className="w-1/2">{props.type}</p>
      <div className="ml-48 w-1/2 text-left border-b-2 mt-1 flex items-center">
        <p className="w-3/4">{props.name}</p>
        {props.chosen &&
        <div className="text-primary-red font-bold text-sm">
          <button onClick={()=>{setSignature(true);}}>
            點擊簽名
          </button>
        </div>}
      </div>
      {signature &&
        <Popup
          type="signature"
          onClickButton={() => {
            localStorage.setItem('outsourcing-signature', 'true');
          }}/>}
    </div>

  );
}
