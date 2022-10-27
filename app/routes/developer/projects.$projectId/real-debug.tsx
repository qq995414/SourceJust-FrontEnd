import Button from '~/components/common/Button';
import SideButtons from '~/components/SideButtons';
import { useNavigate } from 'remix';
import { useState } from 'react';

interface Props{
    name:string;
    contact:string;
}

export default function Index(){
  const newObject = {
    name:'問題標題',
    contact:'內文字內文字內文字內文字內文字...'
  };
  const navigate = useNavigate();
  const [problemList, setProblemList] = useState([
    {
      name:'問題標題',
      contact:'內文字內文字內文字內文字內文字...'
    }
  ]);
  const [isShowLink, setIsShowLink] = useState(false);
  return(
    <div className="w-full h-screen p-5">
      <SideButtons type="developer"/>
      <p className="ml-8 font-bold mb-5">正式伺服器除錯項目</p>
      <hr className="mx-7"/>
      <div className="w-full mx-4 my-2 flex">
        <div className="flex flex-col w-1/3">
          <div
            className="bg-[#E4111363] text-[#8C0809] flex items-center
          justify-center h-8 w-20 text-sm rounded-md text-center">代辦事項</div>
          {problemList.map((i)=><QCard
            key={i.name}
            name={i.name}
            contact={i.contact}/>)}
          <div
            className="flex mt-4 cursor-pointer"
            onClick={()=>
              setProblemList([...problemList, newObject])}>
            <img className="w-5 mx-2" src="/images/client-add.svg" alt=""/>
            <p className="text-usual-gray">新增</p>
          </div>
        </div>
        <div className="flex flex-col w-1/3 mx-10">
          <div
            className="bg-[#FBB604] text-[#C37A0C] flex items-center
          justify-center h-8 w-20 text-sm rounded-md text-center">處理中</div>
          <QCard name="問題標題" contact="內文字內文字內文字內文字內文字..."/>
          <QCard name="問題標題" contact="內文字內文字內文字內文字內文字..."/>
          <QCard name="問題標題" contact="內文字內文字內文字內文字內文字..."/>
        </div>
        <div className="flex flex-col w-1/3">
          <div
            className="bg-[#99CB98] text-[#F6FFF5] flex items-center
          justify-center h-8 w-20 text-sm rounded-md text-center">已完成</div>
          <QCard name="問題標題" contact="內文字內文字內文字內文字內文字..."/>
        </div>
      </div>
      <div className="w-full mt-32 text-center">
        <Button
          className="w-32 h-12"
          onClick={()=>{navigate('../case-close');}}>下一步</Button>
      </div>
    </div>
  );
}

function QCard(props:Props){
  const[isShowLink, setIsShowLink] = useState(false);
  return(
    <div>
      <div
        className="shadow-md h-36 mt-3 text-sm p-5 w-64
    cursor-pointer"
        onClick={()=>setIsShowLink(true)}>

        <p className="font-bold mb-1">{props.name}</p>
        <p className="my-3 text-usual-gray">{props.contact}</p>
        <div
          className="bg-[#FBB604] rounded-md w-12 h-7
            flex justify-center items-center my-2">
          <p className="text-center text-white">首頁</p>
        </div>
      </div>
      {isShowLink &&
      <div
        className="fixed top-0 bottom-0 left-0 right-0 z-20 text-sm">
        <div
          className="w-screen h-screen bg-gray-500 opacity-40 z-10
        cursor-pointer"
          onClick={()=>{setIsShowLink(false);}}/>
        <div
          className="w-3/5 h-[640px] bg-white z-20
        fixed top-0 left-0 bottom-0 right-0 m-auto
         shadow-xl flex flex-col items-center" >
          <div className="w-full h-full flex">
            <div className="w-7/12 border-r-2 p-12 tracking-[0.12em]">
              <div className="h-12 w-full flex border-b-[1px] items-center mt-5">
                <p className="w-32 text-usual-gray text-base">標題</p>
                <p className=" text-lg font-semibold">問題標題</p>
              </div>
              <div className="h-12 w-full flex border-b-[1px] items-center mt-2">
                <p className="w-32 text-usual-gray text-base">標題</p>
                <div
                  className="bg-[#FBB604] rounded-md w-12 h-7
                  flex justify-center items-center my-2">
                  <p className="text-center text-white">首頁</p>
                </div>
              </div>
              <div className="h-12 w-full flex border-b-[1px] items-center mt-2">
                <p className="w-32 text-usual-gray text-base">系統</p>
                <p className=" text-lg font-semibold">IOS</p>
              </div>
              <div className="h-12 w-full flex border-b-[1px] items-center mt-2">
                <p className="w-32 text-usual-gray text-base">瀏覽器</p>
                <p className="text-lg font-semibold">Chrome</p>
              </div>
              <div className="h-12 w-full flex items-center mt-2">
                <p className="text-usual-gray text-base">內容</p>
              </div>
              <div className="w-3/4 text-xs mt-1">
                <p>文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</p>
              </div>
              <div className="w-full mt-2">
                <img src="/images/photo.svg" alt=""/>
              </div>

            </div>
            <div className="w-5/12">
              <div className="h-5/6 p-5">
                <p className="text-base text-[#BBBBBB] mt-2 mb-7">留言</p>
                <div className="flex w-full items-center h-16 border-b-[1px]">
                  <img src="/images/personal-avator.svg" alt=""/>
                  <p className="ml-4 text-[#BBBBBB] w-3/5">
                    文字文字文字文字文字文字文字文字文字文字文字文字文字</p>
                  <div className="flex flex-col ml-5">
                    <p className="text-[#BBBBBB] text-xs text-right">02-07</p>
                    <p className="text-[#BBBBBB] text-xs text-right">16:20</p>
                  </div>
                </div>
                <div className="flex w-full items-center h-16 border-b-[1px] mt-2">
                  <img src="/images/personal-avator.svg" alt=""/>
                  <p className="ml-4 text-[#BBBBBB] w-3/5">
                    文字文字文字文字文字文字文字文字文字文字文字文字文字</p>
                  <div className="flex flex-col ml-5">
                    <p className="text-[#BBBBBB] text-xs text-right">02-07</p>
                    <p className="text-[#BBBBBB] text-xs text-right">16:20</p>
                  </div>
                </div>
                <div className="flex w-full items-center h-16 mt-2">
                  <img src="/images/personal-avator.svg" alt=""/>
                  <p className="ml-4 text-[#BBBBBB] w-3/5">
                    文字文字文字文字文字文字文字文字文字文字文字文字文字</p>
                  <div className="flex flex-col ml-5">
                    <p className="text-[#BBBBBB] text-xs text-right">02-07</p>
                    <p className="text-[#BBBBBB] text-xs text-right">16:20</p>
                  </div>
                </div>
                <div>
                </div>

              </div>
              <div className="h-1/6 border-t-[1px] flex items-center text-xs">
                <div className="p-5 flex w-full">
                  <img src="/images/personal-avator.svg" alt=""/>
                  <input
                    className="ml-4 bg-white outline-none w-full"
                    placeholder="輸入文字"/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>}
    </div>
  );
}
