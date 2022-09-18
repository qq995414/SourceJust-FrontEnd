import { MetaFunction, useNavigate, Link, Form, useLoaderData } from 'remix';
import { SetStateAction, useState, Component, useRef } from 'react';
import Nav from '~/components/Nav';
import { Editor } from './components/react-draft-wysiwyg.client';
import { ClientOnly } from "remix-utils";
import styles from "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ActionFunction, LoaderFunction, json } from 'remix';
import authenticator from "~/services/auth.server";
import { FormStrategy } from 'remix-auth-form';
import { Authenticator, AuthorizationError } from 'remix-auth';
import { sessionStorage, User } from '~/services/session.server';

import { ApiClient, OpenAPI } from 'app/ApiClient';
import { ArticleRequest } from 'app/ApiClient/models/ArticleRequest';
import { FileUploader } from "react-drag-drop-files";

export const loader: LoaderFunction = async ({ request }) => {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "login",
  });
  OpenAPI.HEADERS = { "Authorization": user.data.token };
  const apiClient = new ApiClient(OpenAPI);
  const Class = await apiClient.api.listChannel('ARTICLE');
  const lodervalue = { Class: Class, key: user }
  return lodervalue;
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

  };
  const [des, setDes] = useState('');
  const deschange = event => {
    setDes(event.target.value);

  };
  const [state, setState] = useState(true);
  const statechange = event => {
    setState(event.target.value);

  };
  const [classId, setClassId] = useState(0);
  const classIdchange = event => {
    setClassId(event.target.value);
  };

  const [context, setContext] = useState('ertert');

  const blogapi = useLoaderData();
  const blogClassSelect = blogapi?.Class?.data?.records;

  const insrnt = async ({ request }) => {
    //alert(classId+','+title+','+des+','+key+','+state)
    OpenAPI.HEADERS = { "Authorization": blogapi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    let articleRequest: ArticleRequest = {
      channelId: classId,//
      smallImg: 'test',//跟YAP確認
      title: title,
      content: context,
      subTitle: '1',//跟YAP確認
      metaDes: des,
      metaKeyword: key,
      onlineDate: '', //上架日期(前台無)
      offlineDate: '',//下架日期(前台無)
      isDisable: state,

    };
    const pages = await apiClient.api.createArticle(articleRequest);
    return json(pages);

  }
  const fileTypes = ["JPG", "PNG", "GIF"];
  const handleChange = async (file) => {
    OpenAPI.HEADERS = { "Authorization": blogapi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    const test = await apiClient.api.uploadFileInfo('BLOG', 0, '', '', file);
    //  document coje note multipartformdata
  };
  async function uploadImageCallBack(file: File) {
    let imgrequest = {
      file: file,
    };
    const formData = new FormData()
    formData.append('file', file);
    console.log(formData);

    OpenAPI.HEADERS = { "Authorization": blogapi?.key?.data.token,"mimeType":"multipart/form-data"};
    const apiClient = new ApiClient(OpenAPI);
    const fileupload = await apiClient.api.uploadChatFile(formData);

    console.log(fileupload);

    /* alert('123')
     authenticator.use(
       new FormStrategy(async ({ form }) => {
         OpenAPI.HEADERS = { "Authorization": blogapi?.key?.data.token, "content-type": 'multipart/form-data' };
         let imgrequest = {
           file: file,//
         };
         const apiClient = new ApiClient(OpenAPI);
         const fileupload = await apiClient.api.uploadChatFile(imgrequest);
         console.log(fileupload);
         
       }),
       "user-login"
     );*/

    /*   let imgrequest = {
         file: file,//
       };
       OpenAPI.HEADERS = { "Authorization": blogapi?.key?.data.token };
       const apiClient = new ApiClient(OpenAPI);
       const fileupload = await apiClient.api.uploadChatFile(imgrequest);
       console.log('123');
     })*/

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
        <form className="flex flex-col mt-8">
          <div className="flex flex-col   pl-5 w-full px-10 ">
            <a className="blog-class-text">類別 <a className='functional-Error-3-text'>*</a></a>
            <select value={classId} onChange={classIdchange} className='neutral-colors-4-grey-text mt-1 blog-class-input' name='classId'  >
              <option style={{ display: "none" }} >請選擇類別</option>
              {blogClassSelect.map((blogClassSelect: { name: any; id: any; }) => {
                const {
                  name, id
                } = blogClassSelect;
                return <option className='text-black' value={id}>{name}</option>
              })}

            </select>
          </div>
          <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
            <a className="blog-class-text">標題 <a className='functional-Error-3-text'>*</a></a>
            <input value={title} onChange={titlechange} name='title' className="blog-class-input mt-1  pl-3" placeholder="請輸入標題"></input>
          </div>
          <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
            <a className="blog-class-text pb-2">SEO</a>
            <a className="blog-class-text">網頁敘述 <a className='functional-Error-3-text'> * </a></a>

            <input value={des} onChange={deschange} name='key' className="blog-class-input mt-1 pl-3" placeholder="請請輸入網頁敘述"></input>
          </div>
          <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
            <a className="blog-class-text">網頁關鍵字 <a className='functional-Error-3-text'>*</a></a>
            <input value={key} onChange={keychange} name='key' className="blog-class-input mt-1 pl-3" placeholder="請輸入網頁關鍵字"></input>
          </div>
          <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
            <a className="blog-class-text">狀態 <a className='functional-Error-3-text'>*</a></a>
            <select value={state} onChange={statechange} className='neutral-colors-4-grey-text mt-1 blog-class-input' name="state">
              <option style={{ display: "none" }} >請選擇狀態(已發布、草稿)</option>
              <option className='text-black' value="ture">已發布</option>
              <option className='text-black' value="false">草稿</option>
            </select>
          </div>
          <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
            <a className="blog-class-text">案例縮圖 <a className='functional-Error-3-text'>*</a></a>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
          </div>
          <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
            <ClientOnly>
              {() => <Editor name='context'
                value={context}
                toolbar={{
                  inline: { inDropdown: true },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: true },
                  image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
                }} />}
            </ClientOnly>
          </div>
        </form>
      </div >
    </div >
  );
}
