import Button from '~/components/common/Button';
import Select from '~/components/Select';
import TextInput from '~/components/common/TextInput';
import { useNavigate } from 'remix';
import { useState } from 'react';

interface Props {
  name: string;
  money: string;
  classNames?: string;
}

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="px-32 flex flex-col py-6">
      <h1 className="text-primary-red font-black text-2xl">額外功能</h1>
      <div className="flex place-content-between mt-4">
        <div>伺服器的額外功能</div>
        <Button
          className="border-0 shadow-md"
          type="deactivated"
          onClick={()=> {}}>+ 新增功能</Button>
      </div>
      <Extra
        name="每日備份"
        money="＄5,000"
      />
      <Extra
        name="防火牆"
        money="＄10,000"
      />
      <Extra
        name="SSL"
        money="＄2,800"
      />
      <div className="flex place-content-between mt-4">
        <div>伺服器的額外功能</div>
        <Button
          className="border-0 shadow-md"
          type="deactivated"
          onClick={()=> {}}>+ 新增功能</Button>
      </div>
      <Extra
        name="Email 行銷"
        money="＄5,000"
      />
      <Extra
        name="SEO"
        money="＄10,000"
      />
      <div className="flex place-content-between mt-4">
        <div>伺服器的額外功能</div>
        <Button
          className="border-0 shadow-md"
          type="deactivated"
          onClick={()=> {}}>+ 新增功能</Button>
      </div>
      <Extra
        name="Google 登入"
        money="＄5,000"
      />
      <Extra
        name="Facebook 登入"
        money="＄10,000"
      />
      <Extra
        name="Line 登入"
        money="＄10,000"
      />
      <Extra
        name="簡訊功能"
        money="＄10,000"
      />
      <Button
        className="mt-8 self-center"
        type="circle"
        onClick={() => navigate('./../third-party')}
      >
        下一步
      </Button>
    </div>
  );
}

function Extra(props: Props) {
  const [target, setTarget] = useState(1);
  const [isShowLink, setIsShowLink] = useState(false);
  return (<div className="w-full h-32 bg-primary-gray flex items-center my-4">
    <div className="ml-24 w-44 text-xl font-medium">{props.name}</div>
    <div className="w-36 h-12 self-center mx-32">
      <Select<number>
        className="bg-white text-black h-12 relative rounded-l-full
  rounded-r-full "
        value = {target}
        onChange={setTarget}
        options= {[
          {
            value:1,
            label:'1年'
          },
          {
            value:2,
            label:'2年'
          },
        ]} />
    </div>
    <div
      className="ml-20 mr-64 w-44 text-red-500 text-center
     text-xl font-bold">
      {props.money}</div>
    <img
      className="cursor-pointer"
      src="/images/pen.svg"
      alt="pen"
      onClick={()=> {setIsShowLink(true);}}/>
    {isShowLink &&
      <div className="fixed top-0 bottom-0 left-0 right-0">
        <div
          className="w-screen h-screen bg-gray-500
              opacity-40 z-30"></div>
        <div
          className="w-5/12 h-96 bg-white z-30
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col pt-12" >
          <p className="font-semibold text-lg self-center">伺服器的額外功能</p>
          <div className="flex ml-12 my-4">
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-400 mr-3"
            >每日備份</Button>
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-400 mr-3"
            >防火牆</Button>
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-400 mr-3"
            >SSL</Button>
          </div>
          <div className="flex mx-16 items-center my-4">
            <div className="w-28">功能名稱</div>
            <TextInput
              className="h-12 flex-grow flex p-2 bg-primary-gray"
              placeholder={props.name}
            />
          </div>
          <div className="flex mx-16 items-center mb-4">
            <div className="w-28">價格</div>
            <TextInput
              className="h-12 flex-grow flex p-2 bg-primary-gray"
              placeholder={props.money}
            />
          </div>
          <Button
            onClick={() => { setIsShowLink(false); }}
            className="w-1/4 text-sm font-medium mt-4 h-10 self-center"
          >儲存
          </Button>
        </div>
      </div>}
  </div>);
}
