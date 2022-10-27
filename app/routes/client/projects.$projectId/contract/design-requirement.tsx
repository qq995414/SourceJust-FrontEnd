import Button from '~/components/common/Button';
import SideButtons from '~/components/SideButtons';
import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'remix';

interface Props{
  name:string;
}

export default function Index(){
  const navigate = useNavigate();
  return(
    <div className="w-full h-screen">
      <SideButtons type="client"/>
      <p className="text-[#D11329] font-bold mb-4">選擇部分模板</p>
      <div className="flex items-center mb-8">
        <p className="font-bold text-xl mr-7">選單樣式 header</p>
        <a href="./" className="text-xs underline text-[#0752E3]">
          什麼是header ?</a>
      </div>
      <div className="w-full flex my-2 flex-wrap">
        <HeaderCard name="/images/client-header1.svg"/>
        <HeaderCard name="/images/client-header2.svg"/>
        <HeaderCard name="/images/client-header3.svg"/>
        <HeaderCard name="/images/client-header4.svg"/>
        <HeaderCard name="/images/client-header5.svg"/>
        <HeaderCard name="/images/client-header6.svg"/>
        <HeaderCard name="/images/client-header7.svg"/>
        <HeaderCard name="/images/client-header8.svg"/>
        <HeaderCard name="/images/client-header9.svg"/>
        <HeaderCard name="/images/client-header10.svg"/>
        <HeaderCard name="/images/client-header11.svg"/>
        <HeaderCard name="/images/client-header12.svg"/>
      </div>
      <div className="flex items-center mb-5">
        <p className="font-bold text-xl mr-10">頁腳樣式 footer</p>
        <a href="./" className="text-xs underline text-[#0752E3]">
          什麼是folder ?</a>
      </div>
      <div className="w-full flex my-2 flex-wrap">
        <FooterCard name="/images/client-footer1.svg"/>
        <FooterCard name="/images/client-footer2.svg"/>
        <FooterCard name="/images/client-footer3.svg"/>
        <FooterCard name="/images/client-footer4.svg"/>
        <FooterCard name="/images/client-footer5.svg"/>
        <FooterCard name="/images/client-footer6.svg"/>
      </div>
      <div className="flex items-center">
        <p className="font-bold text-xl mr-7 my-4">字體選擇</p>
      </div>
      <div className="w-full flex my-2 flex-wrap justify-center">
        <FontCard name="Roboto"/>
        <FontCard name="Noto San"/>
        <FontCard name="Noto San"/>
        <FontCard name="Roboto San"/>
        <FontCard name="Noto San"/>
        <FontCard name="Noto San"/>
      </div>
      <div className="w-full h-80">
        <div className="flex items-center">
          <p className="font-bold text-xl my-4">按鈕選擇</p>
        </div>
        <div className="w-full h-12 flex my-2 flex-wrap tracking-[0.12em]">
          <div className="w-1/4 flex justify-center mx-4">
            <div className="w-full flex flex-col">
              <div
                className="w-3/4 h-12 flex bg-primary-gray cursor-pointer
          justify-center items-center">
                button
              </div>
              <div
                className="w-3/4 h-12 flex bg-white cursor-pointer
          justify-center items-center mt-8 border-[1px] border-black">
                button
              </div>
              <div className="w-3/4 flex justify-center mt-12">
                <input
                  type="radio"
                  id="true"
                  value="true"
                  name="ChooseRadioBtn"
                  className="appearance-none h-4 w-4 border bg-primary-gray
                      rounded-full checked:bg-primary-red my-2" />
              </div>
            </div>
          </div>
          <div className="w-1/4 flex justify-center mx-4">
            <div className="w-full flex flex-col">
              <div
                className="w-3/4 h-12 flex bg-primary-gray cursor-pointer
          justify-center items-center rounded-lg">
                button
              </div>
              <div
                className="w-3/4 h-12 flex cursor-pointer border-[1px]
          justify-center items-center rounded-lg mt-8 border-black">
                button
              </div>
              <div className="w-3/4 flex justify-center mt-12">
                <input
                  type="radio"
                  id="true"
                  value="true"
                  name="ChooseRadioBtn"
                  className="appearance-none h-4 w-4 border bg-primary-gray
                      rounded-full checked:bg-primary-red my-2" />
              </div>
            </div>
          </div>
          <div className="w-1/4 flex justify-center mx-4">
            <div className="w-full flex flex-col h-rull">
              <div
                className="w-3/4 h-12 flex bg-primary-gray cursor-pointer
          justify-center items-center rounded-l-full rounded-r-full">
                button
              </div>
              <div
                className="w-3/4 h-12 flex border-[1px] cursor-pointer border-black
          justify-center items-center rounded-l-full rounded-r-full mt-8">
                button
              </div>
              <div className="w-3/4 flex justify-center mt-12">
                <input
                  type="radio"
                  id="true"
                  value="true"
                  name="ChooseRadioBtn"
                  className="appearance-none h-4 w-4 border bg-primary-gray
                      rounded-full checked:bg-primary-red my-2" />
              </div>
            </div>
          </div>
          <div className="w-1/12 flex justify-center">
            <div className="w-full flex flex-col">
              <button
                className="w-12 h-12 flex bg-primary-gray cursor-pointer
          justify-center items-center rounded-full">
                <img className="h-6 w-6" src="/images/client-arrow.svg" alt=""/>
              </button>
              <button
                className="w-12 h-12 flex border-[1px] cursor-pointer
          justify-center items-center rounded-full mt-8 border-black">
                <img className="h-6 w-6" src="/images/client-arrow.svg" alt=""/>
              </button>
              <div className="w-12 flex justify-center mt-12">
                <input
                  type="radio"
                  id="true"
                  value="true"
                  name="ChooseRadioBtn"
                  className="appearance-none h-4 w-4 border bg-primary-gray
                      rounded-full checked:bg-primary-red my-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center h-20">
        <Button
          className="h-10 w-28"
          onClick={()=>{navigate('../milestone');}}>下一步
        </Button>
      </div>
    </div>
  );
}

function HeaderCard(props:Props){
  return (
    <div className="w-1/5 flex flex-col items-center mb-4">
      <img src={props.name} alt="" className="w-40 h-32"/>
      <input
        type="radio"
        id="true"
        value="true"
        name="radioBtn"
        className="appearance-none h-4 w-4 border bg-primary-gray
       rounded-full checked:bg-primary-red my-2" />
    </div>
  );
}
function FooterCard(props:Props){
  return (
    <div className="w-1/5 flex flex-col items-center mb-4">
      <img src={props.name} alt="" className="w-40 h-32"/>
      <input
        type="radio"
        id="true"
        value="true"
        name="FootRadioBtn"
        className="appearance-none h-4 w-4 border bg-primary-gray
       rounded-full checked:bg-primary-red my-2" />
    </div>
  );
}

function FontCard(props:Props){
  const [isShowLink, setIsShowLink] = useState(false);
  return (
    <div className="w-1/3 cursor-pointer">
      <div
        className="w-11/12 rounded-lg h-60 border-2 mx-2 my-2
      hover:border-3 hover:border-red-400"
        onClick={()=>setIsShowLink(!isShowLink)}>
        <div
          className="flex justify-between bg-primary-gray
           h-12 items-center p-3 text-usual-gray">
          <p>{props.name}</p>
          <p>12 種風格</p>
        </div>
        <div className="p-5 w-full">
          <p>Almost before we knew it, we had left the ground.</p>
          <p className="mt-5">文字展示，中文展示中文展示中文展示中文展示</p>
        </div>
      </div>
      {isShowLink &&
        <div className="fixed top-0 bottom-0 left-0 right-0">
          <div className="w-screen h-screen bg-gray-500 opacity-40 z-10"></div>
          <div
            className="w-5/12 h-[800px] bg-white z-20
          fixed top-10 left-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col p-5" >
            <div className="flex justify-between text-xs items-center">
              <div className="flex items-end">
                <p className="text-3xl font-bold">Roboto</p>
                <p className="mx-2 text-[#11C00E]">免費</p>
              </div>
              <button
                className="text-primary-red rounded-full shadow-md p-2"
                onClick={()=>{setIsShowLink(!isShowLink);}}>
                選擇字體</button>
            </div>
            <div className="w-full text-xl">
              <div className="my-4">
                <p className="text-sm">Thin</p>
                <p className="px-4 py-2 font-thin">
                  Almost before we knew it, we had left the ground.</p>
              </div>
              <div className="my-4">
                <p className="text-sm">Extra light</p>
                <p className="px-4 py-2 font-extralight">
                  Almost before we knew it, we had left the ground.</p>
              </div>
              <div className="my-4">
                <p className="text-sm">light</p>
                <p className="px-4 py-2 font-light">
                  Almost before we knew it, we had left the ground.</p>
              </div>
              <div className="my-4">
                <p className="text-sm">Regular</p>
                <p className="px-4 py-2 font-base">
                  Almost before we knew it, we had left the ground.</p>
              </div>
              <div className="my-4">
                <p className="text-sm">Medium</p>
                <p className="px-4 py-2 font-medium">
                  Almost before we knew it, we had left the ground.</p>
              </div>
              <div className="my-4">
                <p className="text-sm">SemiBold</p>
                <p className="px-4 py-2 font-semibold">
                  Almost before we knew it, we had left the ground.</p>
              </div>
              <div className="my-4">
                <p className="text-sm">Bold</p>
                <p className="px-4 py-2 font-bold">
                  Almost before we knew it, we had left the ground.</p>
              </div>
              <div className="my-4">
                <p className="text-sm">Extra Bold</p>
                <p className="px-4 py-2 font-extrabold">
                  Almost before we knew it, we had left the ground.</p>
              </div>
              <div className="my-4">
                <p className="text-sm">Black</p>
                <p className="px-4 py-2 font-black">
                  Almost before we knew it, we had left the ground.</p>
              </div>
            </div>

          </div>
        </div>
      }
    </div>
  );
}
