import Button from '~/components/common/Button';
import { useState } from 'react';
import { useNavigate } from 'remix';

interface Signs{
    type:string;
    name:string;
}
interface SignsB{
  type:string;
  name:string;
  chosen?:boolean;
}

export default function Index(){
  const navigate = useNavigate();
  return(
    <div className="w-full mt-6">
      <div className="flex mt-5 mb-16">
        <div
          className="w-1/6 text-sm absolute text-primary-red flex
          cursor-pointer"
          onClick={()=>{navigate('../request-quotation/request');}}>
          <img className="w-3 mx-2" src="/images/previous-page.svg" alt=""/>
          <button >回到上頁查看需求</button>
        </div>
        <p className="text-xl text-center w-full">XXX專案 需求新增 報價合約</p>
      </div>
      <p className="w-full text-center tracking-[0.2em] font-bold text-xl">
        額外報價合約
      </p>
      <div className="flex flex-col items-center mt-8 text-sm tracking-[0.4em]">
        <div className="w-auto">
          <p className="text-center">發包單位索爾斯科技有限公司(以下簡稱甲方)</p>
          <div className="flex justify-between mt-1">
            <p className="">承包單位</p>
            <p className="">(以下簡稱乙方)</p>
          </div>
        </div>
      </div>
      <div className="mt-20 tracking-[0.12em] flex ml-24">
        <p>茲證明</p>
        <div
          className="border-b-[1px] w-52 border-black border-dashed
             text-primary-red font-bold text-xs text-right mx-2">
          <button onClick={()=>{}}>
            點擊簽名
          </button>
        </div>
        <p>確實領取下列款項無誤</p>
      </div>
      <div className="mt-40 tracking-[0.27em] w-auto ml-14">
        <p>所得格式代號: ○50(兼職所得) ○9A(執行業務所得) ○9B(稿費) ○92其他所得</p>
        <p>應付新台幣:＿＿＿萬＿＿＿千＿＿＿百＿＿＿拾 元整</p>
        <p> 支領方式:○現金 ○銀行轉帳(扣15元轉帳費) ○掛號支票(扣25元掛號郵資)</p>
        <p> 所得人姓名:＿＿＿＿＿＿(簽章)</p>
        <p> 身分證字號/統一編號:</p>
        <p> 戶籍地址:</p>
        <p> 通訊地址:</p>
        <p>(扣繳憑單寄送地址; 建議須寫到里鄰等詳細資訊)</p>
        <p> ___________________________________________________________</p>
        <p>聯絡電話：＿＿＿＿＿＿＿＿＿＿＿</p>
        <p>日期：＿＿＿＿＿＿＿＿＿＿＿＿＿</p>
        <p>經辦人：＿＿＿＿＿＿＿＿＿＿＿＿</p>
        <p>所得人簽名：＿＿＿＿＿＿＿＿＿＿</p>
      </div>
      <div className="w-full my-20 text-center">
        <Button
          className="w-32 h-12"
          onClick={()=>{navigate('../contract/quotation');}}>下一步</Button>
      </div>
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
  return(
    <div className="flex justify-between">
      <p className="w-1/2">{props.type}</p>
      <div className="ml-48 w-1/2 text-left border-b-2 mt-1 flex items-center">
        <p className="w-3/4">{props.name}</p>
        {props.chosen &&
        <div className="text-primary-red font-bold text-sm">
          <button onClick={()=>{}}>
            點擊簽名
          </button>
        </div>}
      </div>
    </div>
  );
}

