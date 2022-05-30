import Button from '~/components/common/Button';
import Select from '~/components/Select';
import TextInput from '~/components/common/TextInput';
import TextArea from '~/components/common/TextArea';
import { useNavigate } from 'remix';
import { useState } from 'react';
import cx from 'classnames';
interface Props {
  title : string;
  money : string;
  cpu : string;
  ram : string;
  room : string;
  info1 : string;
  info2 : string;
  info3 : string;
  info4 : string;
}

export default function Index() {
  const navigate = useNavigate();
  const [target, setTarget] = useState(1);
  const [isShowLinkTwo, setIsShowLinkTwo] = useState(false);
  const [provided, setProvided] = useState(0);
  const [providedTwo, setProvidedTwo] = useState(0);
  return (
    <div className="px-32 flex flex-col py-6">
      <div className="flex items-center mb-10">
        <div className="text-primary-red font-bold text-2xl mr-12">網域</div>
        {provided == 0 &&
        <div
          className="grid grid-cols-3 bg-shallow-red w-1/3 h-12 cursor-pointer
        rounded-full">
          <div
            className="bg-primary-red flex items-center place-content-center
          text-white rounded-full cursor-pointer"
          >公司提供</div>
          <div
            className="flex items-center place-content-center
            text-primary-red cursor-pointer"
            onClick={() => {setProvided(1);}}>客戶提供</div>
          <div
            className="flex items-center  place-content-center
            text-primary-red cursor-pointer"
            onClick={() => {setProvided(2);}}>不需要</div>
        </div>}
        {provided == 1 &&
        <div
          className="grid grid-cols-3 bg-shallow-red w-1/3 h-12 cursor-pointer
        rounded-full">
          <div
            className="flex items-center place-content-center
            text-primary-red cursor-pointer"
            onClick={() => {setProvided(0);}}>公司提供</div>
          <div
            className="bg-primary-red flex items-center place-content-center
        text-white rounded-full cursor-pointer">
            客戶提供</div>
          <div
            className="flex items-center  place-content-center
            text-primary-red cursor-pointer"
            onClick={() => {setProvided(2);}}>不需要</div>
        </div>}
        {provided == 2 &&
        <div
          className="grid grid-cols-3 bg-shallow-red w-1/3 h-12 cursor-pointer
        rounded-full">
          <div
            className="flex items-center place-content-center
            text-primary-red cursor-pointer"
            onClick={() => {setProvided(0);}}>公司提供</div>
          <div
            className="flex items-center  place-content-center
            text-primary-red cursor-pointer"
            onClick={() => {setProvided(1);}}>
            客戶提供</div>
          <div
            className="bg-primary-red flex items-center place-content-center
          text-white rounded-full cursor-pointer" >不需要</div>
        </div>}
      </div>
      <div className="flex items-center my-5">
        <div className="text-xl w-44">網域商</div>
        <div className="w-1/3 h-12">
          <Select<number>
            className="bg-gray-100 text-black h-12 relative"
            value = {target}
            onChange={setTarget}
            options= {[
              {
                value:1,
                label:'Godaddy'
              },
            ]} />
        </div>
      </div>
      <div className="flex items-center my-5">
        <div className="text-xl w-44">帳號</div>
        <div
          className="flex w-1/3 px-4 h-12 bg-gray-100 items-center
        place-content-between">
          <div>abc123</div>
          <div className="text-primary-red text-sm cursor-pointer"> 複製</div>
        </div>
      </div>
      <div className="flex items-center my-5">
        <div className="text-xl w-44">密碼</div>
        <div
          className="flex w-1/3 px-4 h-12 bg-gray-100 items-center
         place-content-between">
          <div>abc123</div>
          <div className="text-primary-red text-sm cursor-pointer"> 複製</div>
        </div>
      </div>
      <div className="flex items-center my-5">
        <div className="text-xl w-44">網址</div>
        <div className="flex w-1/3 px-4 h-12 text-blue-500 items-center">
          <a href="javascript:;">http://www.網址</a>
        </div>
      </div>
      <div className="flex items-center mb-10 mt-8">
        <div className="text-primary-red font-bold text-2xl mr-12">雲端主機</div>
        {providedTwo == 0 &&
        <div
          className="grid grid-cols-3 bg-shallow-red w-1/3 h-12 cursor-pointer
        rounded-full">
          <div
            className="bg-primary-red flex items-center place-content-center
          text-white rounded-full "
          >公司提供</div>
          <div
            className="flex items-center place-content-center
            text-primary-red cursor-pointer"
            onClick={() => {setProvidedTwo(1);}}>客戶提供</div>
          <div
            className="flex items-center  place-content-center
            text-primary-red cursor-pointer"
            onClick={() => {setProvidedTwo(2);}}>不需要</div>
        </div>}
        {providedTwo == 1 &&
        <div
          className="grid grid-cols-3 bg-shallow-red w-1/3 h-12 cursor-pointer
        rounded-full">
          <div
            className="flex items-center place-content-center
            text-primary-red cursor-pointer"
            onClick={() => {setProvidedTwo(0);}}>公司提供</div>
          <div
            className="bg-primary-red flex items-center place-content-center
        text-white rounded-full cursor-pointer ">
            客戶提供</div>
          <div
            className="flex items-center  place-content-center
            text-primary-red cursor-pointer"
            onClick={() => {setProvidedTwo(2);}}>不需要</div>
        </div>}
        {providedTwo == 2 &&
        <div
          className="grid grid-cols-3 bg-shallow-red w-1/3 h-12 cursor-pointer
        rounded-full">
          <div
            className="flex items-center place-content-center
            text-primary-red cursor-pointer"
            onClick={() => {setProvidedTwo(0);}}>公司提供</div>
          <div
            className="flex items-center  place-content-center
            text-primary-red cursor-pointer"
            onClick={() => {setProvidedTwo(1);}}>
            客戶提供</div>
          <div
            className="bg-primary-red flex items-center place-content-center
          text-white rounded-full cursor-pointer" >不需要</div>
        </div>}
        <div className="flex-grow"></div>
        <div>
          <Button
            className="border-0 shadow-md"
            type="deactivated"
            onClick={() => {setIsShowLinkTwo(true);}}
          >
            + 新增主機
          </Button>
        </div>
      </div>
      <Plan
        title = "小型方案"
        money = "$ 3,500"
        cpu="雙核心"
        ram="1G"
        room="30GB"
        info1 = "1 個資料庫"
        info2 = "流量每月 25Ｇ"
        info3 = "每月最高5000名訪客"
        info4 = "全天候監控網路安全性和 DDOS 防護"
      />
      <Plan
        title = "中型方案"
        money = "$ 6,500"
        cpu="雙核心"
        ram="4G"
        room="100GB"
        info1 = "10 個資料庫"
        info2 = "流量每月 250Ｇ"
        info3 = "每月最高30000名訪客"
        info4 = "全天候監控網路安全性和 DDOS 防護"
      />
      <Plan
        title = "無限吃到飽方案"
        money = "$ 8,000"
        cpu="四核心"
        ram="8G"
        room="無限"
        info1 = "25 個資料庫"
        info2 = "流量每月 750Ｇ"
        info3 = "每月最高150000名訪客"
        info4 = "全天候監控網路安全性和 DDOS 防護"
      />
      <Plan
        title = "超高級電商方案"
        money = "$ 12,000"
        cpu="十六核心"
        ram="32G"
        room="100GB"
        info1 = "無限資料庫"
        info2 = "每月無限流量"
        info3 = "每月無限訪客數"
        info4 = "全天候監控網路安全性和 DDOS 防護"
      />
      {isShowLinkTwo &&
      <div className="fixed top-0 bottom-0 left-0 right-0 z-30">
        <div
          className="w-full h-full bg-gray-500
            opacity-40 z-10"></div>
        <div
          className="w-5/12 max-h-[80vh] bg-white z-20
        fixed top-0 left-0 bottom-0 right-0 m-auto overflow-y-auto
        rounded-xl shadow-xl flex flex-col pt-12" >
          <p className="font-semibold text-lg self-center">新增主機</p>
          <div className="flex ml-12 my-4">
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-400 mr-3"
            >小型方案</Button>
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-400 mr-3"
            >中型方案</Button>
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-400 mr-3"
            >無限吃到飽方案</Button>
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-400 mr-3"
            >超高級電商方案</Button>
          </div>
          <div className="flex mx-16 items-center my-4">
            <div className="w-28">方案名稱</div>
            <TextInput
              className="h-12 flex-grow"
              placeholder="小型方案"
            />
          </div>
          <div className="flex mx-16 items-center mb-4">
            <div className="w-28">價格</div>
            <TextInput
              className="h-12 flex-grow"
              placeholder="＄3,500"
            />
          </div>
          <div className="flex mx-16 items-center mb-4">
            <div className="w-28">CPU</div>
            <TextInput
              className="h-12 flex-grow"
              placeholder="雙核心"
            />
          </div>
          <div className="flex mx-16 items-center mb-4">
            <div className="w-28">RAM</div>
            <TextInput
              className="h-12 flex-grow"
              placeholder="1 G"
            />
          </div>
          <div className="flex mx-16 items-center mb-4">
            <div className="w-28">儲存空間</div>
            <TextInput
              className="h-12 flex-grow"
              placeholder="30 G"
            />
          </div>
          <div className="flex mx-16 mb-4">
            <div className="w-28">說明</div>
            <TextArea
              className="flex-grow flex p-2 h-32"
              placeholder={cx(' · ', '1 個資料庫', '\n', '· ', '流量每月 25Ｇ',
                '\n', '· ', '每月最高5000名訪客', '\n', '· ',
                '全天候監控網路安全性和 DDOS 防護')}
            />
          </div>
          <hr className="mt-4 mb-8 mx-16" />
          <div className="flex mx-16 items-center mb-4">
            <div className="w-28">主機商</div>
            <div className="h-12 flex-grow">
              <Select<number>
                className="bg-gray-100 text-black h-12 relative"
                value = {target}
                onChange={setTarget}
                options= {[
                  {
                    value:1,
                    label:'Godaddy'
                  },
                ]} />
            </div>
          </div>
          <div className="flex mx-16 items-center mb-4">
            <div className="w-28">帳號</div>
            <TextInput
              className="h-12 flex-grow"
              placeholder="abc123"
            />
          </div>
          <div className="flex mx-16 items-center mb-4">
            <div className="w-28">密碼</div>
            <TextInput
              className="h-12 flex-grow"
              placeholder="abc123"
            />
          </div>
          <Button
            type="circle"
            onClick={() => { setIsShowLinkTwo(false); }}
            className="w-1/4 text-sm font-medium mt-4 mb-10 h-12 self-center"
          >儲存
          </Button>
        </div>
      </div>}
      <Button
        className="mt-12 self-center"
        type="circle"
        onClick={() => navigate('./../third-party')}
      >
        下一步
      </Button>
    </div>
  );
}

function Plan(props:Props) {
  const [isShowLink, setIsShowLink] = useState(false);
  const [target, setTarget] = useState(1);
  return (
    <div className="flex w-full h-64 bg-gray-100 my-4 rounded-lg">
      <div className="self-center w-1/4 space-y-4">
        <div className="text-xl font-bold text-center">{props.title}</div>
        <div className="text-3xl font-bold text-center">{props.money}</div>
      </div>
      <div className="w-px bg-gray-300"></div>
      <div className="flex flex-grow flex-col p-8">
        <div className="flex w-full place-content-between">
          <div className="font-bold text-xl mb-10">
            CPU{props.cpu}｜{props.ram} RAM｜{props.room} 儲存空間</div>
          <div>
            <img
              className="cursor-pointer"
              src="/images/pen.svg"
              alt="pen"
              onClick={()=>{setIsShowLink(true);}} />
          </div>
        </div>
        <div className="text-gray-600 space-y-1">
          <p>· {props.info1}</p>
          <p>· {props.info2}</p>
          <p>· {props.info3}</p>
          <p>· {props.info4}</p>
        </div>
      </div>
      {isShowLink &&
      <div className="fixed top-0 bottom-0 left-0 right-0 z-30">
        <div
          className="w-full h-full bg-gray-500
              opacity-40 z-10"></div>
        <div
          className="w-5/12 max-h-[80vh] bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto overflow-y-auto
          rounded-xl shadow-xl flex flex-col pt-12" >
          <p className="font-semibold text-lg self-center">編輯主機</p>
          <div className="flex ml-12 my-4">
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-400 mr-3"
            >小型方案</Button>
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-400 mr-3"
            >中型方案</Button>
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-400 mr-3"
            >無限吃到飽方案</Button>
            <Button
              type="cancel"
              onClick={() => { }}
              className="text-sm font-medium h-10 text-gray-400 mr-3"
            >超高級電商方案</Button>
          </div>
          <div className="flex mx-16 items-center my-4">
            <div className="w-28">方案名稱</div>
            <TextInput
              className="h-12 flex-grow"
              placeholder={props.title}
            />
          </div>
          <div className="flex mx-16 items-center mb-4">
            <div className="w-28">價格</div>
            <TextInput
              className="h-12 flex-grow"
              placeholder={props.money}
            />
          </div>
          <div className="flex mx-16 items-center mb-4">
            <div className="w-28">CPU</div>
            <TextInput
              className="h-12 flex-grow"
              placeholder={props.cpu}
            />
          </div>
          <div className="flex mx-16 items-center mb-4">
            <div className="w-28">RAM</div>
            <TextInput
              className="h-12 flex-grow"
              placeholder={props.ram}
            />
          </div>
          <div className="flex mx-16 items-center mb-4">
            <div className="w-28">儲存空間</div>
            <TextInput
              className="h-12 flex-grow"
              placeholder={props.room}
            />
          </div>
          <div className="flex mx-16 mb-4">
            <div className="w-28">說明</div>
            <TextArea
              className="flex-grow flex p-2 h-32"
              placeholder={cx(' · ', props.info1, '\n', '· ', props.info2,
                '\n', '· ', props.info3, '\n', '· ', props.info4)}
            />
          </div>
          <hr className="mt-4 mb-8 mx-16" />
          <div className="flex mx-16 items-center mb-4">
            <div className="w-28">主機商</div>
            <div className="h-12 flex-grow">
              <Select<number>
                className="bg-gray-100 text-black h-12 relative"
                value = {target}
                onChange={setTarget}
                options= {[
                  {
                    value:1,
                    label:'Godaddy'
                  },
                ]} />
            </div>
          </div>
          <div className="flex mx-16 items-center mb-4">
            <div className="w-28">帳號</div>
            <TextInput
              className="h-12 flex-grow"
              placeholder="abc123"
            />
          </div>
          <div className="flex mx-16 items-center mb-4">
            <div className="w-28">密碼</div>
            <TextInput
              className="h-12 flex-grow"
              placeholder="abc123"
            />
          </div>
          <Button
            type="circle"
            onClick={() => { setIsShowLink(false); }}
            className="w-1/4 text-sm font-medium mt-4 mb-10 h-12 self-center"
          >儲存
          </Button>
        </div>
      </div>}
    </div>
  );
}
