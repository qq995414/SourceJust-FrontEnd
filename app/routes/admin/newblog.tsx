import { MetaFunction, useNavigate, Link, Form } from 'remix';
import { SetStateAction, useState } from 'react';
import Nav from '~/components/Nav';
import { Editor } from './components/react-draft-wysiwyg.client';
import { ClientOnly } from "remix-utils";
import styles from "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { ActionFunction, LoaderFunction } from 'remix';
import authenticator from "~/services/repwd.server";

export const action: ActionFunction = async ({ request }) => {

  const user = await authenticator.isAuthenticated(request, {

    failureRedirect: "/admin/login",
  });

  const resp = await authenticator.authenticate("updataUser", request, {
    successRedirect: "/admin/newblog",
    failureRedirect: "/admin/newblog",
    throwOnError: true,
    context: user,

  });
  console.log('resp:' + resp);
  return resp;
};

export let loader: LoaderFunction = async ({ request }) => {

  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/admin/login",
  });


};
export const meta: MetaFunction = () => {
  return { title: '總後台 ｜ 索爾斯科技', };
};
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function Index() {
  const proposalCards = [
    {
      id: 0,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false
    },
    {
      id: 1,
      state: '下架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 2,
      state: '下架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false


    },
    {
      id: 3,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 4,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 5,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 6,
      state: '下架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 7,
      state: '下架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 8,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 9,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 10,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 11,
      state: '下架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 12,
      state: '下架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 13,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 14,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 15,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    }
  ];
  const [tab, setTab] = useState(0);
  const [number, setNumber] = useState(10);
  const [page, setPage] = useState(1);
  const [removePage, setRemovePage] = useState(false);
  const length = proposalCards.length
  const shownumber = number * page
  const lengthpage = Math.floor((length / number)) + 1
  const PreviousPage = () => {
    if (page >= 2)
      setPage(page - 1)
  };
  const NextPage = () => {
    if (page <= lengthpage - 1)
      setPage(page + 1)


  };
  const [names, setNames] = useState(['n', '2']);
  const nameslength = names.length

  const handleChange = (e: any) => {
    const name = e.target.getAttribute("name")

    if (e.target.checked) {
      names.push(name)
      //setNames(current => [...current, { checkid: e.target.name }]);
    } else {
      var index = names.indexOf(name);
      if (index > -1) { //Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
        names.splice(index, 1);
      }
    }
  };
  const quantitylimit = (e: any) => {
    setNumber(e.target.value)
    setPage(1)
  };



  return (
    <div className="grid w-full">
      <Nav titleGray='' title="部落格管理" titleBlack=""></Nav>
      <div className="h-screen w-full  login-background  pt-4 w-full" >

        <div className="flex items-center mt-10 webpage-title pt-5  w-full pb-3" style={{ zIndex: "1" }} >
          <div style={{ fontSize: '14px' }}
            className="flex w-full place-content-center justify-end  mx-10" style={{ float: "right" }}>
            <button
              className="border-2   w-20 text-white
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary blog-clear-btn"
              onClick={() => setFirstTimeAccess(firstTimeAccess + 1)}>
              取消</button>
            <button
              className="border-2  w-20 text-white
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary blog-view-btn"
              onClick={() => setFirstTimeAccess(firstTimeAccess + 1)}>
              預覽</button>
            <button
              className="border-2  w-20 text-white
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary"
              onClick={() => setFirstTimeAccess(firstTimeAccess + 1)}>
              新增</button>
          </div>

        </div>
        <div className="flex flex-col mt-8">
          <div className="flex flex-col   pl-5 w-full px-10 ">
            <a className="blog-class-text">類別 <a className='functional-Error-3-text'>*</a></a>
            <select className='neutral-colors-4-grey-text mt-1 blog-class-input' name="cars" id="cars" onChange={quantitylimit}>
              <option style={{ display: "none" }} >請選擇類別</option>
              <option className='text-black' value="20">20</option>
              <option className='text-black' value="30">30</option>
            </select>
          </div>
          <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
            <a className="blog-class-text">標題 <a className='functional-Error-3-text'>*</a></a>
            <input className="blog-class-input mt-1  pl-3" placeholder="請輸入標題"></input>
          </div>
          <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
            <a className="blog-class-text">關鍵字 <a className='functional-Error-3-text'>*</a></a>
            <input className="blog-class-input mt-1 pl-3" placeholder="請輸入關鍵字"></input>
          </div>
          <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
            <a className="blog-class-text">狀態 <a className='functional-Error-3-text'>*</a></a>
            <select className='neutral-colors-4-grey-text mt-1 blog-class-input' name="cars" id="cars" onChange={quantitylimit}>
              <option style={{ display: "none" }} >請選擇狀態(上架、下架)</option>
              <option className='text-black' value="0">上架</option>
              <option className='text-black' value="1">下架</option>
            </select>
          </div>
          <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
            <ClientOnly>
              {() => <Editor />}
            </ClientOnly>
          </div>


        </div>
      </div >
    </div >
  );
}
