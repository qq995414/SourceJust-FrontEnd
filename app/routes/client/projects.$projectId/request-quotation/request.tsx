import Button from '~/components/common/Button';
import { useNavigate } from 'remix';

interface Props {
  id: number;
  main: string;
  overall: string;
  illustrate: string;
  note: string;
}

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen p-3 tracking-[0.12em]">
      <p className="text-center p-3 text-xl">XXX專案 需求新增</p>
      <div className="w-full mt-20">
        <table className="w-full table-auto text-center">
          <thead>
            <tr className="h-16 w-full">
              <th className="w-1/12 bg-white" />
              <th className="w-1/5">主要項目</th>
              <th className="w-1/11">數量</th>
              <th className="w-1/5">總設計頁面</th>
              <th className="w-1/3">說明</th>
            </tr>
          </thead>
          <tbody>
            <Tbbody
              id={1}
              main="網站主視覺設計"
              overall=""
              illustrate=""
              note="專業設計師依客戶需求客製化全站視覺風格並使用合法授權免費、
              商用圖庫、讓網站視覺更有記憶張力" />
            <Tabody
              id={2}
              main="首頁"
              overall="1"
              illustrate={'首頁'}
              note="首頁資料管理程式：依首頁定稿樣式建置各區塊圖文資料管理程式
              資料管理程式：依首頁定稿樣式建置各區塊" />
            <Tbbody
              id={3}
              main="最新消息"
              overall="2"
              illustrate="最新消息列表"
              note="首頁資料管理程式：依首頁定稿樣式建置各區塊圖文資料管理程式
              資料管理程式：依首頁定稿樣式建置各區塊" />
          </tbody>

        </table>
        <div className="mt-24">
          <div className="flex ml-24 text-xl justify-between">
            <p>專案費用增加</p>
            <p className="text-primary-red font-bold">＄40,000</p>
          </div>
          <p className="ml-24 text-[#BBBBBB] text-sm mt-2">
            *若專案功能增加及到架上有疑慮，請洽索爾斯</p>
        </div>
        <div className="mt-20 w-full text-center h-20">
          <p className="text-[#BBBBBB] text-sm my-3">確認無誤後請至下一步，簽署新的報價合約</p>
          <Button
            onClick={() => {
              navigate('../request-quotation/quotation');
            }}>
            下一步，簽署合約</Button>
        </div>
      </div>
    </div>
  );

}

function Tabody(props: Props) {
  return (<tr className=" text-usual-gray h-16">
    <td>
      <div className="flex justify-center">
        <li className=" list-disc text-primary-red"></li>{props.id}
      </div></td>
    <td className="text-center">{props.main}</td>
    <td className="text-sm text-center">{props.overall}</td>
    <td className="text-sm text-left p-2">{props.illustrate}</td>
    <td className="text-xs p-2 text-left">{props.note}</td>
  </tr>);
}

function Tbbody(props: Props) {
  return (<tr
    className=" text-usual-gray bg-[#E5E5E5] h-16">
    <td className="bg-white">
      <div className="flex justify-center">
        <li className=" list-disc text-primary-red"></li>{props.id}
      </div>
    </td>
    <td className="text-center">{props.main}</td>
    <td className="text-sm text-center">{props.overall}</td>
    <td className="text-sm text-left p-2">{props.illustrate}</td>
    <td className="text-xs p-2 text-left">{props.note}</td>
  </tr>);
}
