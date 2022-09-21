import { MetaFunction, useLoaderData } from 'remix';
import { useState, useEffect } from 'react';
import Nav from '~/components/Nav';
import styles from "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { LoaderFunction, json } from 'remix';
import authenticator from "~/services/auth.server";
import { ApiClient, TemplateRequest, OpenAPI } from 'app/ApiClient';
import { FileUploader } from "react-drag-drop-files";


export const loader: LoaderFunction = async ({ request }) => {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "login",
  });
  OpenAPI.HEADERS = { "Authorization": user.data.token };
  const apiClient = new ApiClient(OpenAPI);
  const Class = await apiClient.api.listChannel('ARTICLE');
  const url = new URL(request.url);
  const templateId = url.search.replace("?template=", "")
  const templateData = await apiClient.api.findTemplateById(templateId);
  const lodervalue = { Class: Class, key: user, templateId: templateId, templateData: templateData };
  return lodervalue;
};

export const meta: MetaFunction = () => {
  return { title: '總後台 ｜ 索爾斯科技', };
};
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  const templateApi = useLoaderData();
  const templateData = templateApi?.templateData?.data;
  const [templateName, setTemplateName] = useState(templateData.name);
  const templateNameChange = event => {
    setTemplateName(event.target.value);

  };
  const [classId, setClassId] = useState(templateData.category);
  const classIdchange = event => {
    setClassId(event.target.value);
  };
  const [url, setUrl] = useState(templateData.url);
  const urlChange = event => {
    setUrl(event.target.value);
  };




  const [coverImg, setCoverImg] = useState(templateData.coverImg);
  const [smallImg, setSmallImg] = useState(templateData.smallImg);
  const [coverImgId, setCoverImgId] = useState('');
  const [smallImgId, setSmallImgId] = useState('');
  const [coverImgState, setCoverImgState] = useState(false);
  const [smallImgState, setSmallImgState] = useState(false);
  const [coverImgName, setCoverImgName] = useState('');
  const [smallImgName, setSmallImgName] = useState('');
  const insert = async ({ request }) => {
    //alert(classId+','+title+','+des+','+key+','+state)
    OpenAPI.HEADERS = { "Authorization": templateApi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    let TemplateRequest: TemplateRequest = {
      name: templateName,
      mainImg: coverImg,
      smallImg: smallImg,
      category: classId,
      url: url,
      header: '',
      footer: '',
      fileId: 0,
    };
    console.log(TemplateRequest);
    
    const pages = await apiClient.api.updateTemplate(templateApi.templateId, TemplateRequest);
    window.location.href = "/admin/template";
    return json(pages);
  }
  const fileTypes = ["JPG", "PNG", "GIF"];
  const smallImgChange = async (file) => {
    let imgrequest = {
      file: file,
    };
    setSmallImgName(file.name)
    OpenAPI.HEADERS = { "Authorization": templateApi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    const fileupload = await apiClient.api.uploadFile('BLOG', imgrequest);
    console.log(fileupload);
    setSmallImg(fileupload.data?.url)
    setSmallImgId(fileupload.data?.id)
    setSmallImgState(true)

  };
  const coverImgChange = async (file) => {
    let imgrequest = {
      file: file,
    };
    setCoverImgName(file.name)
    OpenAPI.HEADERS = { "Authorization": templateApi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    const fileupload = await apiClient.api.uploadFile('BLOG', imgrequest);
    setCoverImg(fileupload.data?.url)
    setCoverImgId(fileupload.data?.id)
    setCoverImgState(true)

  };


  return (
    <div className="grid w-full flex-row">
      <Nav titleGray='' title="部落格管理" titleBlack=""></Nav>
      <div className="h-screen w-full  login-background  pt-4 w-full" >
        <div className='flex'>
          <div className='w-10/12'>
            <div className="flex items-center mt-10 webpage-title pt-5  w-full pb-3" style={{ zIndex: "1" }} >
              <div style={{ fontSize: '14px' }}
                className="flex w-full place-content-center justify-end  mx-10" style={{ float: "right" }}>
                <button
                  className="border-2   w-20 text-white
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary blog-clear-btn"
                  onClick={() => {
                    window.location.href = "/admin/webpage";
                  }}>
                  取消</button>
                <button
                  className="border-2  w-20 text-white
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary blog-view-btn"
                >
                  預覽</button>
                <button
                  className="border-2  w-20 text-white
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary"
                  onClick={insert} >
                  儲存</button>
              </div>

            </div>
            <div className="flex flex-col mt-8">
              <div className="flex flex-col   pl-5 w-full px-10 ">
                <a className="blog-class-text">類別 <a className='functional-Error-3-text'>*</a></a>
                <select value={classId} onChange={classIdchange} className={classId == 0 ? 'neutral-colors-4-grey-text mt-1 blog-class-input' : ' mt-1 blog-class-input-black'} name='classId'  >
                  <option style={{ display: "none" }} >請選擇類別</option>
                  <option className='text-black' value='1'>商城</option>
                  <option className='text-black' value='2'>企業</option>
                  <option className='text-black' value='3'>公司</option>
                  <option className='text-black' value='4'>創意</option>
                  <option className='text-black' value='5'>個人</option>
                  <option className='text-black' value='6'>部落格</option>
                  <option className='text-black' value='7'>電商平台</option>
                </select>
              </div>
              <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
                <a className="blog-class-text">模板名稱 <a className='functional-Error-3-text'>*</a></a>
                <input value={templateName} onChange={templateNameChange} name='title' className="blog-class-input mt-1  pl-3" placeholder="請輸入模板名稱"></input>
              </div>
              <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
                <a className="blog-class-text">連結 <a className='functional-Error-3-text'>*</a></a>
                <input value={url} onChange={urlChange} name='client' className="blog-class-input mt-1  pl-3" placeholder="請輸入連結"></input>
              </div>
              <div className="flex flex-row   pl-5 w-full px-10 mt-5 ">
                <div className='w-1/2 imgUpload'>
                  <a className="blog-class-text">案例縮圖 <a className='functional-Error-3-text'>*</a></a>
                  <FileUploader handleChange={coverImgChange} name="file" types={fileTypes} />
                  {coverImgState == false && <p className='file-upload-drop-text pt-3'>已成功上傳檔案 ( 0 / 1 )</p>}
                  {coverImgState == true &&
                    <div className='w-full'><p className='file-upload-drop-text-red pt-3'>已成功上傳檔案 ( 1 / 1 )</p>
                      <div className='file-upload-drop-state w-10/12 flex items-center'>
                        <img className='h-full w-auto' src={coverImg}></img> <a>{coverImgName}</a>
                      </div>
                    </div>}
                </div>
                <div className='w-1/2 imgUpload'>
                  <a className="blog-class-text">封面縮圖 <a className='functional-Error-3-text'>*</a></a>
                  <FileUploader handleChange={smallImgChange} name="file" types={fileTypes} />
                  {smallImgState == false && <p className='file-upload-drop-text pt-3'>已成功上傳檔案 ( 0 / 1 )</p>}
                  {smallImgState == true &&
                    <div className='w-full'><p className='file-upload-drop-text-red pt-3'>已成功上傳檔案 ( 1 / 1 )</p>
                      <div className='file-upload-drop-state w-10/12 flex items-center'>
                        <img className='h-full w-auto' src={smallImg}></img> <a>{smallImgName}</a>
                      </div>
                    </div>}
                </div>

              </div>

            </div>
          </div>
          <div className='w-2/12 blog-details h-screen px-8 pt-20 fixed' style={{ right: '0px' }}>
            <div className='px-2' >
              <a>詳細資料</a>
            </div>
            <div className='grid pt-5 px-2'>
              <a>ID</a>
              <a>{templateData.id}</a>
            </div>
            <div className='grid pt-5 px-2'>
              <a>資料狀態</a>
              <div className='table-state-green flex w-4/12 pl-2'>
                <div className='table-state-green-bell mr-2'></div>
                <a>已發布</a>
              </div>
            </div>
            <div className='grid pt-5 px-2'>
              <a>建立時間</a>
              <a>{templateData.createTime}</a>
            </div>
            <div className='grid pt-5 px-2'>
              <a>最後更新時間</a>
              <a>{templateData.modifyTime}</a>
            </div>
            <hr
              className='mt-8'
              style={{
                color: 'red',
                width: '90%',
                border: '1px solid #F2F3F5',
              }}
            />
            <button
              className="border-2  mt-8 w-10/12 text-white
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary blog-clear-btn"
            >
              已發佈</button>
          </div>
        </div>
      </div >

    </div >
  );
}
