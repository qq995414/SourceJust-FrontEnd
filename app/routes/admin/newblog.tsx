import { MetaFunction, useNavigate, Link, Form, useLoaderData } from 'remix';
import { SetStateAction, useState, Component, useRef } from 'react';
import Nav from '~/components/Nav';
import { Editor } from './components/react-draft-wysiwyg.client';
import { ClientOnly } from "remix-utils";
import styles from "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ActionFunction, LoaderFunction, json } from 'remix';
import authenticator from "~/services/auth.server";
import { ApiClient, OpenAPI } from 'app/ApiClient';
import { ArticleRequest } from 'app/ApiClient/models/ArticleRequest';



export let loader: LoaderFunction = async ({ request }) => {

  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "login",
  });
  return user;
};
export const meta: MetaFunction = () => {
  return { title: '總後台 ｜ 索爾斯科技', };
};
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function Index() {
  const [title, setTitle] = useState('');
  const titlechange = event => {
    setTitle(event.target.value);

  };
  const [key, setKey] = useState('');
  const keychange = event => {
    setKey(event.target.value);
    console.log(title);

  };
  const [state, setState] = useState('');
  const statechange = event => {
    setState(event.target.value);
    console.log(title);

  };
  const [classId, setClassId] = useState(0);
  const classIdchange = event => {
    setClassId(event.target.value);
    console.log(title);

  };
  console.log('123');
  const blogData = useLoaderData();

  const insrnt = async ({ request }) => {
    /* let user = await authenticator.isAuthenticated(request, {
      failureRedirect: "login",
    });*/
    OpenAPI.HEADERS = { "Authorization": blogData?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    let articleRequest: ArticleRequest = {
      channelId: classId,//只能打1 其他數字都進不去
      title: title,
      content: "requesttest12",
      category: "requesttest12",
      subTitle: '1',
      metaDes: 'requesttest12',
      metaKeyword: key,
      onlineDate: '2022-09-11', //上架日期(前台無)
      offlineDate: '2022-09-11'//下架日期(前台無)
    };
    const pages = await apiClient.api.createArticle(articleRequest);
    return json(pages);

  }
  return (
    <div className="grid w-full" >
      <Nav titleGray='' title="部落格管理" titleBlack=""></Nav>
      <div className="h-screen w-full  login-background  pt-4 w-full" method="post" name='form' >

        <div className="flex items-center mt-10 webpage-title pt-5  w-full pb-3" style={{ zIndex: "1" }} >
          <div style={{ fontSize: '14px' }}
            className="flex w-full place-content-center justify-end  mx-10" style={{ float: "right" }}>
            <button
              className="border-2   w-20 text-white
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary blog-clear-btn">
              取消</button>
            <button
              className="border-2  w-20 text-white
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary blog-view-btn">
              預覽</button>
            <button
              className="border-2  w-20 text-white
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary"
              onClick={insrnt} >
              新增</button>
          </div>

        </div>
        <div className="flex flex-col mt-8">
          <div className="flex flex-col   pl-5 w-full px-10 ">
            <a className="blog-class-text">類別 <a className='functional-Error-3-text'>*</a></a>
            <select value={classId} onChange={classIdchange} className='neutral-colors-4-grey-text mt-1 blog-class-input' name='classId'  >
              <option style={{ display: "none" }} >請選擇類別</option>
              <option className='text-black' value="1">SEO</option>
              <option className='text-black' value="2">網頁設計常見問題</option>
              <option className='text-black' value="3">網頁須知</option>
              <option className='text-black' value="4">網站工具說明</option>
              <option className='text-black' value="5">數位行銷</option>
            </select>
          </div>
          <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
            <a className="blog-class-text">標題 <a className='functional-Error-3-text'>*</a></a>
            <input value={title} onChange={titlechange} name='title' className="blog-class-input mt-1  pl-3" placeholder="請輸入標題"></input>
          </div>
          <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
            <a className="blog-class-text">關鍵字 <a className='functional-Error-3-text'>*</a></a>
            <input value={key} onChange={keychange} name='key' className="blog-class-input mt-1 pl-3" placeholder="請輸入關鍵字"></input>
          </div>
          <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
            <a className="blog-class-text">狀態 <a className='functional-Error-3-text'>*</a></a>
            <select value={state} onChange={statechange} className='neutral-colors-4-grey-text mt-1 blog-class-input' name="state">
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
