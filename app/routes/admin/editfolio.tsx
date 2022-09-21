import { MetaFunction, useNavigate, Link, Form, useLoaderData, useSearchParams } from 'remix';
import { SetStateAction, useState, Component, useRef, useEffect } from 'react';
import Nav from '~/components/Nav';
import { Editor } from './components/react-draft-wysiwyg.client';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { ClientOnly } from "remix-utils";
import styles from "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ActionFunction, LoaderFunction, json } from 'remix';
import authenticator from "~/services/auth.server";
import { ApiClient, PortfolioRequest, OpenAPI } from 'app/ApiClient';
import { FileUploader } from "react-drag-drop-files";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from 'html-to-draftjs';


export const loader: LoaderFunction = async ({ request }) => {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "login",
  });
  OpenAPI.HEADERS = { "Authorization": user.data.token };
  const apiClient = new ApiClient(OpenAPI);
  const url = new URL(request.url);
  const folioId = url.search.replace("?folio=", "")
  const folioData = await apiClient.api.findPortfolioById(folioId);

  const lodervalue = { key: user, folioId: folioId, folioData: folioData };

  return lodervalue;
};

export const meta: MetaFunction = () => {
  return { title: '總後台 ｜ 索爾斯科技', };
};
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  const folioApi = useLoaderData();
  const folioData = folioApi?.folioData?.data;

  const [title, setTitle] = useState(folioData.title);
  const titlechange = event => {
    setTitle(event.target.value);

  };
  const [client, setClient] = useState(folioData.client);
  const clientchange = event => {
    setClient(event.target.value);

  };
  const [service, setService] = useState(folioData.service);
  const servicechange = event => {
    setService(event.target.value);

  };
  const [tags, setTags] = useState(folioData.tag);
  const tagschange = event => {
    setTags(event.target.value);

  };
  const [tech, setTech] = useState(folioData.tech);
  const techchange = event => {
    setTech(event.target.value);

  };
  const [date, setDate] = useState(folioData.date);
  const datechange = event => {
    setDate(event.target.value);

  };
  const [classId, setClassId] = useState(folioData.channelId);
  const classIdchange = event => {
    setClassId(event.target.value);
  };
  const [url, setUrl] = useState(folioData.url);
  const urlchange = event => {
    setUrl(event.target.value);
  };
  const [coverImg, setCoverImg] = useState(folioData.coverImg);
  const [smallImg, setSmallImg] = useState(folioData.smallImgName);
  const [coverImgId, setCoverImgId] = useState('');
  const [smallImgId, setSmallImgId] = useState('');
  const [coverImgState, setCoverImgState] = useState(false);
  const [smallImgState, setSmallImgState] = useState(false);
  const [coverImgName, setCoverImgName] = useState(folioData.title);
  const [smallImgName, setSmallImgName] = useState(folioData.title);
  const [tagsArray, setTagsArray] = useState([]);

  const insert = async ({ request }) => {
    //alert(classId+','+title+','+des+','+key+','+state)
    const TagsSplit = tags.split(',')
    console.log(TagsSplit)
    for (var i = 0; i <= TagsSplit.length; i++) {
      tagsArray.push(TagsSplit[i])
    }
    OpenAPI.HEADERS = { "Authorization": folioApi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    let PortfolioRequest: PortfolioRequest = {
      channelId: classId,
      titleImg: smallImg,
      title: title,
      content: editorContent,
      tags: TagsSplit,
      client: client,
      finishDate: date,
      mainImg: coverImg,
      url: url,
      service: service,
      tech: tech,
      onlineDate: '',
      offlineDate: '',
    };

    const pages = await apiClient.api.updatePortfolio(folioData.id, PortfolioRequest);
    window.location.href = "/admin/folio";
    return json(pages);
  }
  const fileTypes = ["JPG", "PNG", "GIF"];
  const smallImgChange = async (file) => {
    let imgrequest = {
      file: file,
    };
    setSmallImgName(file.name)
    OpenAPI.HEADERS = { "Authorization": folioApi?.key?.data.token };
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
    OpenAPI.HEADERS = { "Authorization": folioApi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    const fileupload = await apiClient.api.uploadFile('PORTFOLIO', imgrequest);
    setCoverImg(fileupload.data?.url)
    setCoverImgId(fileupload.data?.id)
    setCoverImgState(true)
  };
  // 編輯器狀態
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // 編輯器內容
  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    console.log('load data:', folioData.content);
    let contentBlocksFromHTML = htmlToDraft(folioData.content);
    console.log('load stateFromHTML:', contentBlocksFromHTML);

    let editorStateFromContent = ContentState.createFromBlockArray(
      contentBlocksFromHTML.contentBlocks,
      contentBlocksFromHTML.entityMap,
    );
    // 設定編輯器的初始狀態
    setEditorContent(folioData.content);
    setEditorState(EditorState.createWithContent(editorStateFromContent));
    // setEditorState(EditorState.moveFocusToEnd(editorState));
  }, []);
  const onEditorStateChange = (editorValue) => {
    const editorStateInHtml = draftToHtml(
      convertToRaw(editorValue.getCurrentContent())
    );
    setEditorState(editorValue);
    setEditorContent(editorStateInHtml);
  };
  const uploadCallback = async (file) => {
    let imgrequest = {
      file: file,
    };
    OpenAPI.HEADERS = { "Authorization": folioApi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    const fileupload = await apiClient.api.uploadFile('PORTFOLIO', imgrequest);

    //setState({fileupload.data?.url});
    return new Promise(
      (resolve, reject) => {
        resolve({ data: { link: fileupload.data?.url } });
      }
    );
  }
  const test = "<img className='h-full w-auto' src=" + coverImg + "></img> <a>" + title + ".jpg</a>"

  return (
    <div className="grid w-full flex-row">
      <Nav titleGray='作品集管理' title="" titleBlack="編輯資料"></Nav>
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
            <div className="flex flex-col   pl-5 w-full px-10 ">
              <a className="blog-class-text">類別 <a className='functional-Error-3-text'>*</a></a>
              <select value={classId} onChange={classIdchange} className={classId == 0 ? 'neutral-colors-4-grey-text mt-1 blog-class-input' : ' mt-1 blog-class-input-black'} name='classId'  >
                <option style={{ display: "none" }} >請選擇類別</option>
                <option className='text-black' value='1'>網頁設計與開發</option>
                <option className='text-black' value='2'>Wordpress 架站</option>
                <option className='text-black' value='3'>APP 開發</option>
                <option className='text-black' value='4'>程式軟體設計</option>
                <option className='text-black' value='5'>UIUX 設計</option>
                <option className='text-black' value='6'>全方位EPR</option>
                <option className='text-black' value='7'>Line 機器人</option>
              </select>
            </div>
            <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
              <a className="blog-class-text">標題 <a className='functional-Error-3-text'>*</a></a>
              <input value={title} onChange={titlechange} name='title' className="blog-class-input mt-1  pl-3" placeholder="請輸入標題"></input>
            </div>
            <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
              <a className="blog-class-text">客戶 <a className='functional-Error-3-text'>*</a></a>
              <input value={client} onChange={clientchange} name='client' className="blog-class-input mt-1  pl-3" placeholder="請輸入客戶"></input>
            </div>
            <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
              <a className="blog-class-text">日期 <a className='functional-Error-3-text'> * </a></a>

              <input value={date} onChange={datechange} type="date" className="blog-class-input mt-1 pl-3" placeholder="請請輸入網頁敘述"></input>
            </div>
            <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
              <a className="blog-class-text">服務項目 <a className='functional-Error-3-text'>*</a></a>
              <input value={service} onChange={servicechange} name='service' className="blog-class-input mt-1 pl-3" placeholder="請輸入服務項目"></input>
            </div>
            <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
              <a className="blog-class-text">運用科技 <a className='functional-Error-3-text'>*</a></a>
              <input value={tech} onChange={techchange} name='tech' className="blog-class-input mt-1 pl-3" placeholder="請輸入運用科技"></input>
            </div>
            <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
              <a className="blog-class-text">相關標簽 <a className='functional-Error-3-text'>*</a></a>
              <input value={tags} onChange={tagschange} name='tags' className="blog-class-input mt-1 pl-3" placeholder="請輸入相關標簽"></input>
            </div>
            <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
              <a className="blog-class-text">連結 <a className='functional-Error-3-text'>*</a></a>
              <input value={url} onChange={urlchange} name='url' className="blog-class-input mt-1 pl-3" placeholder="請輸入連結"></input>
            </div>
            <div className="flex flex-row   pl-5 w-full px-10 mt-5 ">
              <div className='w-1/2 imgUpload'>
                <a className="blog-class-text">案例縮圖 <a className='functional-Error-3-text'>*</a></a>
                <FileUploader handleChange={coverImgChange} name="file" types={fileTypes} />
                {coverImgState == false && <p className='file-upload-drop-text pt-3'>已成功上傳檔案 ( 1 / 1 )</p>}
                {coverImgState == true &&
                  <div className='w-full'><p className='file-upload-drop-text-red pt-3'>已成功上傳檔案 ( 1 / 1 )</p>
                    <div className='file-upload-drop-state w-10/12 flex items-center'>
                      <img className='h-full w-auto' src={coverImg}></img> <a>{title}.jpg</a>
                    </div>
                  </div>}
              </div>
              <div className='w-1/2 imgUpload'>
                <a className="blog-class-text">封面縮圖 <a className='functional-Error-3-text'>*</a></a>
                <FileUploader handleChange={smallImgChange} name="file" types={fileTypes} />
                {smallImgState == false && <p className='file-upload-drop-text pt-3'>已成功上傳檔案 ( 1 / 1 )</p>}
                {smallImgState == true &&
                  <div className='w-full'><p className='file-upload-drop-text-red pt-3'>已成功上傳檔案 ( 1 / 1 )</p>
                    <div className='file-upload-drop-state w-10/12 flex items-center'>
                      <img className='h-full w-auto' src={smallImg}></img> <a>{title}.jpg</a>
                    </div>
                  </div>}
              </div>

            </div>
            <div className="flex flex-col pl-5 w-full px-10 mt-5 pb-5">

              <ClientOnly>
                {() => <Editor
                  localization={{ locale: 'zh_tw' }}
                  editorState={editorState}
                  onEditorStateChange={onEditorStateChange}
                  toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    image: { uploadCallback: uploadCallback },
                  }} />}
              </ClientOnly>
            </div>
          </div>

          <div className='w-2/12 blog-details h-screen px-8 pt-20 fixed' style={{ right: '0px' }}>
            <div className='px-2' >
              <a>詳細資料</a>
            </div>
            <div className='grid pt-5 px-2'>
              <a>ID</a>
              <a>{folioData.id}</a>
            </div>
            <div className='grid pt-5 px-2'>
              <a>資料狀態</a>
              <div className='table-state-green flex w-4/12 pl-2'>
                <div className='table-state-green-bell mr-2'></div>
                <a>已發布</a>
              </div>
              <div className='grid pt-5 px-2'>
                <a>建立時間</a>
                <a>{folioData.createTime}</a>
              </div>
              <div className='grid pt-5 px-2'>
                <a>最後更新時間</a>
                <a>{folioData.modifyTime}</a>
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
        </div>
      </div >

    </div >
  );
}
