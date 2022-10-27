import Button from '~/components/common/Button';
import TextInput from '~/components/common/TextInput';
import SideButtons from '~/components/SideButtons';
import TextArea from '~/components/common/TextArea';
import { useNavigate } from 'remix';
import { useState } from 'react';

export default function Index() {
  const navigate = useNavigate();
  const [backAcclist, setBackAcclist] = useState([
    {
      id: '',
      contact: ''
    },
  ]);
  const newObject = {
    id: '',
    contact: ''
  };
  return (
    <div className="w-full h-screen">
      <div
        className="shadow-md rounded-md p-5 w-full tracking-[0.12em]
      text-primary-red">
        <div className="flex items-center">
          <p className="font-bold w-3/5">
            是否已上傳測試環境(TestFlight、Googleplay、伺服器)
          </p>
          <input
            type="radio"
            id="true"
            value="true"
            name="radioBtn"
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red" />
          <label className="text-black mx-5" htmlFor="true">是</label>
          <input
            type="radio"
            id="false"
            value="false"
            name="radioBtn"
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red" />
          <label className="mx-5 text-black" htmlFor="false">否</label>
        </div>
        <div className="flex items-center my-4">
          <p className="font-bold w-3/5">
            是否已上傳更新 Github
          </p>
          <input
            type="radio"
            id="true"
            value="true"
            name="radioBtn2"
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red" />
          <label className="text-black mx-5" htmlFor="true">是</label>
          <input
            type="radio"
            id="false"
            value="false"
            name="radioBtn2"
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red" />
          <label className="mx-5 text-black" htmlFor="false">否</label>
        </div>
      </div>
      <div
        className="shadow-md rounded-md
      p-5 h-[580px] w-full tracking-[0.12em] mt-5">
        <div className="h-[120px] w-full flex items-start ml-10 mb-4">
          <p className="w-40">W3C Validation Service</p>
          <button className="font-bold text-primary-red mx-5 w-20">
            點擊測試
          </button>
          <TextArea
            className="w-[550px] h-full p-5"
            placeholder="請測試樹狀圖所有主頁網址，並且不可測出erro以上的錯誤" />
        </div>
        <div className="h-[120px] w-full flex items-start ml-10 my-4">
          <p className="w-40">Ranking SEO 測試</p>
          <button className="font-bold text-primary-red mx-5 w-20">
            點擊測試
          </button>
          <TextArea
            className="w-[550px] h-full p-5"
            placeholder="請測試樹狀圖所有主頁網址，並且不可測出erro以上的錯誤" />
        </div>
        <div className="h-[120px] w-full flex items-start ml-10 my-4">
          <p className="w-40 text-right">瀏覽器相容性測試</p>
          <button className="font-bold text-primary-red mx-5 w-20">
            點擊測試
          </button>
          <TextArea
            className="w-[550px] h-full p-5"
            placeholder="請測試樹狀圖所有主頁網址，並且不可測出erro以上的錯誤" />
        </div>
        <div className="h-[120px] w-full flex items-start ml-10 my-4">
          <p className="w-40 text-right">速度測試</p>
          <button className="font-bold text-primary-red mx-5 w-20">
            點擊測試
          </button>
          <TextArea
            className="w-[550px] h-full p-5"
            placeholder="請測試樹狀圖所有主頁網址，並且不可測出erro以上的錯誤" />
        </div>

      </div>
      <div className="text-sm shadow-md rounded-md p-5 mt-5">
        <div className="w-full h-24">
          <p className="text-primary-red font-bold text-base mb-4">測試網址</p>
          <p className="text-primary-red my-4">前台網址</p>
          <div className="flex text-usual-gray my-4">
            <TextInput
              className="w-full h-10"
            />
          </div>
        </div>

        <div className="w-full mt-9">
          <div className="items-center tracking-[0.1em]">
            <p className="text-sm text-primary-red ">後台網址</p>
            <div className="flex flex-col text-usual-gray">
              {backAcclist.map((i) =>
                <TextInput
                  key={i.id}
                  className="w-full h-10 my-4"
                />)}
            </div>
          </div>
        </div>

        <div
          className="w-full mt-9 border-dashed
        border-2 h-10 rounded-lg flex justify-center items-center">
          <button
            onClick={() => setBackAcclist([...backAcclist, newObject])}
            className="w-6 h-6 bg-primary-gray rounded-full flex
            justify-center items-center">
            <img className="w-3 h-3" src="/images/button+.svg" alt="" />
          </button>
        </div>

      </div>

      <div className="text-sm shadow-md rounded-md p-5 h-1/5 mt-5">
        <p className="text-base text-primary-red mt-2 font-bold">備註</p>
        <TextArea
          className="p-2 w-full text-left mt-4 text-usual-gray h-20"
          placeholder="輸入文字" />
      </div>

      <div className="w-full text-center mt-10">
        <Button
          className="h-12 w-32 mb-20"
          onClick={() => {
            navigate('../real-debug');
          }}>下一步</Button>
      </div>
      <SideButtons type="developer" />

    </div>

  );
}
