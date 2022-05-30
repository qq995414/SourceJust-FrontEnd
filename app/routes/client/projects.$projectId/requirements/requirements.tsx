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
    <div className="w-full h-screen p-3">
      <p className="text-center p-3 text-xl font-bold text-primary-red">專案需求</p>
      <p className="font-bold p-3 text-primary-red">[一] 網站系統設計與服務</p>
      <div className="w-full">
        <table className="w-full table-auto text-center">
          <thead>
            <tr className="divide-x-2 divide-white h-16">
              <th className="w-2 bg-white" />
              <th className="w-1/6">主要項目</th>
              <th className="w-1/4">總設計頁面</th>
              <th className="w-1/3">說明</th>
              <th className="w-1/4">客戶備註</th>
            </tr>
          </thead>
          <tbody>
            <Tbbody
              id={1}
              main="網站主視覺設計"
              overall=""
              illustrate="專業設計師依客戶需求客製化全站視覺風格並使用合法授權免費、
              商用圖庫、讓網站視覺更有記憶張力"
              note="" />
            <Tabody
              id={2}
              main="首頁"
              overall="首頁"
              illustrate={`首頁資料管理程式：依首頁定稿樣式建置各區塊圖文資料管理程式
              資料管理程式：依首頁定稿樣式建置各區塊`}
              note="" />
            <Tbbody
              id={3}
              main="最新消息"
              overall="最新消息列表"
              illustrate="專業設計師依客戶需求客製化全站視覺風格並使用合法授權免費、
              商用圖庫、讓網站視覺更有記憶張力"
              note="" />
            <Tabody
              id={4}
              main="服務項目"
              overall="廣告-服務項目內頁"
              illustrate={`首頁資料管理程式：依首頁定稿樣式建置各區塊圖文資料管理程式
              資料管理程式：依首頁定稿樣式建置各區塊`}
              note="" />
            <Tbbody
              id={5}
              main="網站主視覺設計"
              overall=""
              illustrate=""
              note="" />
          </tbody>

        </table>
        <p className="mt-8 font-bold p-3 text-primary-red">[二] 網站系統設計與服務</p>
        <table>
          <thead>
            <tr className="divide-x-2 divide-white">
              <th className="w-2 bg-white" />
              <th className="w-1/6" />
              <th className="w-1/4" />
              <th className="w-1/3" />
              <th className="w-1/4" />
            </tr>
          </thead>
          <tbody>
            <Tbbody
              id={1}
              main="網站主視覺設計"
              overall=""
              illustrate="專業設計師依客戶需求客製化全站視覺風格並使用合法授權免費、
              商用圖庫、讓網站視覺更有記憶張力"
              note="" />
          </tbody>
        </table>

        <p className="mt-12 font-bold p-3 text-primary-red">[三] 額外需求</p>
        <table>
          <thead>
            <tr className="divide-x-2 divide-white">
              <th className="w-2 bg-white" />
              <th className="w-1/6" />
              <th className="w-1/4" />
              <th className="w-1/3" />
              <th className="w-1/4" />
            </tr>
          </thead>
          <tbody>
            <Tbbody
              id={1}
              main="程式碼版本控制"
              overall="前後端程式碼 Version Control"
              illustrate=""
              note="" />
          </tbody>
        </table>
        <div className="mt-20 w-full text-center h-20">
          <Button
            className="w-32"
            onClick={() => {
              navigate('../requirements/tree');
            }}>
            下一步</Button>
        </div>
      </div>
    </div>
  );

}

function Tabody(props: Props) {
  return (<tr className="divide-x-2 divide-white text-usual-gray h-16">
    <td className="pr-4">{props.id}</td>
    <td className="text-center">{props.main}</td>
    <td className="text-sm text-center">{props.overall}</td>
    <td className="text-xs text-left p-2">{props.illustrate}</td>
    <td>{props.note}</td>
  </tr>);
}

function Tbbody(props: Props) {
  return (<tr
    className="divide-x-2 divide-white text-usual-gray bg-primary-gray h-16">
    <td className="bg-white pr-4">{props.id}</td>
    <td className="text-center">{props.main}</td>
    <td className="text-sm text-center">{props.overall}</td>
    <td className="text-xs text-left p-2">{props.illustrate}</td>
    <td>{props.note}</td>
  </tr>);
}
