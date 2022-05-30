import Button from '~/components/common/Button';
import Popup from '~/components/common/Popup';
import { useNavigate } from 'remix';
import { useState } from 'react';

export default function () {
  const navigate = useNavigate();
  const [signature, setSignature] = useState(false);
  return <div className="w-full flex justify-center">
    <div className="container flex flex-col items-center px-64 pt-24">
      <div className="text-center">
        <br />
        <h1 className="font-black">保密條約</h1>
        <br />
        <h2>發包單位索爾斯科技有限公司(以下簡稱甲方)</h2>
        <br />
        <h2>
          承包單位&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(以下簡稱乙方)
        </h2>
        <br />
        <div className="flex">
          <h2>甲方委託乙方</h2>
          <h2
            className="cursor-pointer"
            onClick={() => { setSignature(true); }}>
            _&nbsp;_&nbsp;_&nbsp;_&nbsp;_</h2>
          <h2>網頁專案,經雙方同意所訂合約條款如下: </h2>
        </div>
        <br /><br />
      </div>
      <div className="w-5/6">
        <h3 >第一條 合約標的物：＿&nbsp;＿&nbsp;＿&nbsp;＿&nbsp;＿&nbsp;
          ＿&nbsp;＿&nbsp;＿&nbsp;＿</h3>
        <br />
        <h3>第二條 合約期限</h3>
        <br />
        <p>1、乙方同意於中華民國(下同)110 年 12 月 31 日前完成專案。</p>
        <br />
        <p>2、若乙方未能依照期限繳交已完成之專案,須提前向甲方說明且經甲方同意後，延長繳交專案之期限。</p>
        <br />
        <p>3、若甲方必須提供本專案相關之文字及圖片資料供乙方執行製作使用,
          如因甲方製作素材提供延遲所致之專案遲延者，乙方扣除延遲之時日後，仍應按本工作進度完成之。</p>
        <br />
        <h3>第三條 合約標的修改方式</h3>
        <br />
        <p>甲乙雙方於確認本專案之方向及設計風格無誤後，乙方應立即開始製作專案，若甲方對於
          專案內容仍有問題需要修改專案，須立即通知乙方進行修改專案。</p>
        <br />
      </div>
      <br />
      <Button
        type="circle"
        onClick={() => {
          if (signature) {
            navigate('./../requirements/requirements');
          }
          else {
            setSignature(true);
          }
        }}
      >
        送出並進入專案
      </Button>
    </div>
    {signature &&
      <Popup
        type="signature"
        onClickButton={()=>{}}/>}
  </div>;
}
