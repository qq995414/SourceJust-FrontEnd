import Button from '~/components/common/Button';
import { useNavigate } from 'remix';

interface Props {
  type?: 'normal' | 'other';
  value: string;
  name: string;
}

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className=" mt-2 h-screen w-full">
      <div className="h-12">
        <p className="text-primary-red p-3 font-bold">專案需求</p>
      </div>
      <div className="mt-2 flex flex-col w-full">
        <div className="flex w-full p-3 h-12 items-center">
          <p className="w-36">預計完成日</p>
          <p className="w-1/3 text-xs text-usual-gray">2022-01-22</p>
          <p className="w-36 ">服務種類</p>
          <p className="w-1/3 text-xs text-usual-gray">網頁開發</p>
        </div>
        <div className="flex w-full p-3 h-12 items-center">
          <p className="w-36">案件類型</p>
          <p className="w-1/3 text-xs text-usual-gray">電商</p>
          <p className="w-36 ">App是否需要上架</p>
          <div className="flex pl-16 w-1/3 text-xs text-usual-gray">
            <input
              type="radio"
              id="true"
              value="true"
              name="radioBtn"
              className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red" />
            <label className="ml-2 w-1/4" htmlFor="true">是</label>
            <input
              type="radio"
              id="false"
              value="false"
              name="radioBtn"
              className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red" />
            <label className="ml-2 w-1/4" htmlFor="false">否</label>
            <input
              type="radio"
              id="NoNeed"
              value="NoNeed"
              name="radioBtn"
              className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red" />
            <label className="ml-2 w-1/4 w-20" htmlFor="NoNeed">不需要</label>
          </div>
        </div>

        <div className="mt-8 w-full p-3 flex flex-col">
          <Content
            value="富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富
            富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸
            富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸
            爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸
            富爸爸富爸爸富爸爸富爸爸"
            name="目標用戶是誰" />
          <Content
            value="富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富
            富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸
            富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸
            爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸
            富爸爸富爸爸富爸爸富爸爸"
            name="包含什麼介紹單元" />
          <Content
            value="富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富
            富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸
            富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸
            爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸
            富爸爸富爸爸富爸爸富爸爸"
            name="喜歡的樣式 / 色系" />
          <Content
            value="富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富
            富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸
            富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸
            爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸富爸爸
            富爸爸富爸爸富爸爸富爸爸"
            name="專案備註" />
          <Content type="other" value="保密條約.pdf" name="保密條約" />
          <div className="flex justify-center items-center -mt-8">
            <Button
              className="w-32 mb-8"
              onClick={() => navigate('../requirements/requirements')}>
              下一步
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

function Content(props: Props) {
  return (<div className="flex w-full h-36">
    <p className="w-48">{props.name}</p>
    <p className=" leading-8 w-9/12 text-sm text-usual-gray">
      {props.type === 'other' ? <a
        href="https://www.google.com"
        className="text-blue-500 underline">
        {props.value}
      </a> : props.value}
    </p>
  </div>);
}
