import { MetaFunction, useLoaderData } from 'remix';
import { useState, useRef } from 'react';
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
  const lodervalue = { key: user }
  return lodervalue;
};

export const meta: MetaFunction = () => {
  return { title: '總後台 ｜ 索爾斯科技', };
};
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  const [templateName, setTemplateName] = useState('');
  const templateNameChange = event => {
    setTemplateName(event.target.value);

  };
  const [classId, setClassId] = useState(0);
  const classIdchange = event => {
    setClassId(event.target.value);
  };
  const [url, setUrl] = useState('');
  const urlChange = event => {
    setUrl(event.target.value);
  };

  const inputFile = useRef(null);

  const templateApi = useLoaderData();
  const [coverImg, setCoverImg] = useState('');
  const [smallImg, setSmallImg] = useState('');
  const [coverImgId, setCoverImgId] = useState('');
  const [smallImgId, setSmallImgId] = useState('');
  const [coverImgState, setCoverImgState] = useState(false);
  const [smallImgState, setSmallImgState] = useState(false);
  const [coverImgName, setCoverImgName] = useState('');
  const [smallImgName, setSmallImgName] = useState('');
  const [tagsArray, setTagsArray] = useState([]);
  const insrnt = async ({ request }) => {
    var urlAry = url.split(':');
    if (urlAry[0] != "http" && urlAry[0] != "https") {
      setUrl("http://" + url)
      var newUrl = "http://" + url
    } else {
      var newUrl = url
    }
    OpenAPI.HEADERS = { "Authorization": templateApi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    let TemplateRequest: TemplateRequest = {
      name: templateName,
      mainImg: coverImg,
      smallImg: smallImg,
      category: classId,
      url: newUrl,
      header: '',
      footer: '',
      fileId: 0,
    };
    const pages = await apiClient.api.crateTemplate(TemplateRequest);

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
    const fileupload = await apiClient.api.uploadFile('PORTFOLIO', imgrequest);
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
    const fileupload = await apiClient.api.uploadFile('TEMPLATE', imgrequest);
    setCoverImg(fileupload.data?.url)
    setCoverImgId(fileupload.data?.id)
    setCoverImgState(true)
  };
  const [fileZip, setFileZip] = useState(0);
  const [fileZipName, setFileZipName] = useState('');

  const fileUpload = async (file) => {

    if (file.target.files[0].type == "application/x-zip-compressed") {
      setFileZip(1)
      setFileZipName(file.target.files[0].name)
      let imgrequest = {
        file: file.target.files[0],
      };
      setCoverImgName(file.name)
      OpenAPI.HEADERS = { "Authorization": templateApi?.key?.data.token };
      const apiClient = new ApiClient(OpenAPI);
      const fileupload = await apiClient.api.uploadFile('PORTFOLIO', imgrequest);
      console.log(fileupload);

    }
  }

  return (
    <div className="grid w-full" >
      <Nav titleGray='模板管理' title="" titleBlack="編輯資料"></Nav>
      <div className="h-screen w-full  login-background  pt-4 w-full" method="post" name='form' >

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
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary"
              onClick={insrnt} >
              新增</button>
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
              {coverImgState == true && <div className='w-full'><p className='file-upload-drop-text-red pt-3'>已成功上傳檔案 ( 1 / 1 )</p>
                <div className='file-upload-drop-state w-10/12 flex items-center'>
                  <img className='h-full w-auto' src={coverImg}></img> <a>{coverImgName}</a>
                </div>
              </div>}
            </div>
            <div className='w-1/2 imgUpload'>
              <a className="blog-class-text">封面縮圖 <a className='functional-Error-3-text'>*</a></a>
              <FileUploader handleChange={smallImgChange} name="file" types={fileTypes} />
              {smallImgState == false && <p className='file-upload-drop-text pt-3'>已成功上傳檔案 ( 0 / 1 )</p>}
              {smallImgState == true && <div className='w-full'><p className='file-upload-drop-text-red pt-3'>已成功上傳檔案 ( 1 / 1 )</p>
                <div className='file-upload-drop-state w-10/12 flex items-center'>
                  <img className='h-full w-auto' src={smallImg}></img> <a>{smallImgName}</a>
                </div>
              </div>}
            </div>

          </div>
          <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
            <a className="blog-class-text">模板檔案 <a className='functional-Error-3-text'>*</a></a>
            <p className='file-upload-drop-text pt-3'>檔案限制：zip 檔案</p>
            <div className='flex'>
              <button type="button" onClick={() => inputFile.current.click()} className='Template-Fileupload mt-3'>上傳模板檔案</button>
              <input id="file" onChange={fileUpload} ref={inputFile} type="file" style={{ display: "none" }} accept="aplication/zip" /><a className='file-upload-drop-text pt-6 ml-4'>({fileZip}/1)</a>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}
