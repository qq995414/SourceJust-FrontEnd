import { MetaFunction, useNavigate, Link, Form, useLoaderData, useSearchParams } from 'remix';
import { SetStateAction, useState, Component, useRef , useEffect} from 'react';
import Nav from '~/components/Nav';
import { Editor } from './components/react-draft-wysiwyg.client';
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import { ClientOnly } from "remix-utils";
import styles from "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ActionFunction, LoaderFunction, json } from 'remix';
import authenticator from "~/services/auth.server";
import { ApiClient, ArticleRequest, OpenAPI } from 'app/ApiClient';
import { FileUploader } from "react-drag-drop-files";
import draftToHtml from "draftjs-to-html";



export const loader: LoaderFunction = async ({ request }) => {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "login",
  });
  OpenAPI.HEADERS = { "Authorization": user.data.token };
  const apiClient = new ApiClient(OpenAPI);
  const Class = await apiClient.api.listChannel('ARTICLE');
  const url = new URL(request.url);
  const blogId = url.search.replace("?blog=", "")
  const blogData = await apiClient.api.findById(blogId);
  console.log(blogData);
  
  const lodervalue = { Class: Class, key: user, blogId: blogId, blogData: blogData };

  return lodervalue;
};

export const meta: MetaFunction = () => {
  return { title: '總後台 ｜ 索爾斯科技', };
};
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  const blogapi = useLoaderData();
  const blogClassSelect = blogapi?.Class?.data?.records;
  const blogData = blogapi?.blogData?.data;
  const [title, setTitle] = useState(blogData.title);
  const titlechange = event => {
    setTitle(event.target.value);

  };
  const [subTitle, setSubTitle] = useState(blogData.subTitle);
  const subTitlechange = event => {
    setSubTitle(event.target.value);

  };
  const [key, setKey] = useState(blogData.metaKeyword);
  const keychange = event => {
    setKey(event.target.value);

  };
  const [des, setDes] = useState(blogData.metaDes);
  const deschange = event => {
    setDes(event.target.value);

  };
  const [initialIsDisable, setInitialIsDisable] = useState(blogData.isDisable);
  const [isDisable, setIsDisable] = useState(blogData.isDisable);
  const isDisablechange = event => {
    setIsDisable(event.target.value);

  };
  const [classId, setClassId] = useState(blogData.channelId);
  const classIdchange = event => {
    setClassId(event.target.value);
  };



  const [coverImg, setCoverImg] = useState('');
  const [smallImg, setSmallImg] = useState('');
  const [coverImgId, setCoverImgId] = useState('');
  const [smallImgId, setSmallImgId] = useState('');
  const [coverImgState, setCoverImgState] = useState(false);
  const [smallImgState, setSmallImgState] = useState(false);
  const [coverImgName, setCoverImgName] = useState(blogData.coverImg);
  const [smallImgName, setSmallImgName] = useState(blogData.smallImgName);
  const insert = async ({ request }) => {
    //alert(classId+','+title+','+des+','+key+','+state)
    OpenAPI.HEADERS = { "Authorization": blogapi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    let articleRequest: ArticleRequest = {
      channelId: classId,//
      coverImg: coverImgName,
      caseImg: '',
      smallImg: smallImgName,
      title: title,
      content: blogData.content,
      subTitle: subTitle,
      metaDes: des,
      metaKeyword: key,
      onlineDate: '', //上架日期(前台無)
      offlineDate: '',//下架日期(前台無)
      isDisable: isDisable,
    };
    
    console.log(articleRequest);

    const pages = await apiClient.api.updateArticle(blogData.id,articleRequest);
    window.location.href = "/admin/webpage";
    return json(pages);
  }
  const fileTypes = ["JPG", "PNG", "GIF"];
  const handleChange = async (file) => {
    let imgrequest = {
      file: file,
    };
    setSmallImgName(file.name)
    OpenAPI.HEADERS = { "Authorization": blogapi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    const fileupload = await apiClient.api.uploadFile('BLOG', imgrequest);
    console.log(fileupload);

    setSmallImg(fileupload.data?.url)
    setSmallImgId(fileupload.data?.id)
    setSmallImgState(true)

  };
  const handleChange2 = async (file) => {
    let imgrequest = {
      file: file,
    };
    setCoverImgName(file.name)
    OpenAPI.HEADERS = { "Authorization": blogapi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    const fileupload = await apiClient.api.uploadFile( 'BLOG', imgrequest);
    setCoverImg(fileupload.data?.url)
    setCoverImgId(fileupload.data?.id)

    console.log(fileupload);

    setCoverImgState(true)

  };
  const [state, setState] = useState(0);
  // 編輯器狀態
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // 編輯器內容
  const [editorContent, setEditorContent] = useState('');  

  useEffect(() => {
    console.log('load data:', blogData.content);
    let contentBlocksFromHTML = convertFromHTML(blogData.content);
    console.log('load stateFromHTML:', contentBlocksFromHTML);

    let editorStateFromContent = ContentState.createFromBlockArray(
      contentBlocksFromHTML.contentBlocks,
      contentBlocksFromHTML.entityMap,
    );
    // 設定編輯器的初始狀態
    setEditorContent(blogData.content);
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
    OpenAPI.HEADERS = { "Authorization": blogapi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    const fileupload = await apiClient.api.uploadFile('BLOG', imgrequest);
    console.log(fileupload);

    //setState({fileupload.data?.url});
    return new Promise(
      (resolve, reject) => {
        resolve({ data: { link: fileupload.data?.url } });
      }
    );
  }
  const test="<img className='h-full w-auto' src="+coverImg+"></img> <a>"+title+".jpg</a>"

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
                  新增</button>
              </div>

            </div>
            <div className="flex flex-col mt-8">
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
                <a className="blog-class-text">副標題 <a className='functional-Error-3-text'>*</a></a>
                <input value={subTitle} onChange={subTitlechange} name='subTitle' className="blog-class-input mt-1  pl-3" placeholder="請輸入副標題"></input>
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
                <select value={isDisable} onChange={isDisablechange} className='neutral-colors-4-grey-text mt-1 blog-class-input' name="state">
                  <option style={{ display: "none" }} >請選擇狀態(已發布、草稿)</option>
                  <option className='text-black' value="true">已發布</option>
                  <option className='text-black' value="false">草稿</option>
                </select>
              </div>
              <div className="flex flex-row   pl-5 w-full px-10 mt-5 ">
                <div className='w-1/2 imgUpload'>
                  <a className="blog-class-text">案例縮圖 <a className='functional-Error-3-text'>*</a></a>
                  <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                  {smallImgState == false && <p className='file-upload-drop-text pt-3'>已成功上傳檔案 ( 1 / 1 )</p>}
                  {smallImgState == true &&
                    <div className='w-full'><p className='file-upload-drop-text-red pt-3'>已成功上傳檔案 ( 1 / 1 )</p>
                      <div className='file-upload-drop-state w-10/12 flex items-center'>
                      </div>
                    </div>}
                </div>
                <div className='w-1/2 imgUpload'>
                  <a className="blog-class-text">案例縮圖 <a className='functional-Error-3-text'>*</a></a>
                  <FileUploader handleChange={handleChange2} name="file" types={fileTypes} />
                  {coverImgState == false && <p className='file-upload-drop-text pt-3'>已成功上傳檔案 ( 1 / 1 )</p>}
                  {coverImgState == true &&
                    <div className='w-full'><p className='file-upload-drop-text-red pt-3'>已成功上傳檔案 ( 1 / 1 )</p>
                      <div className='file-upload-drop-state w-10/12 flex items-center'>
                        <img className='h-full w-auto' src={coverImg}></img> <a>{title}.jpg</a>
                      </div>
                    </div>}
                </div>

              </div>
              <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">

                <ClientOnly>
                  {() => <Editor
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
          </div>
          <div className='w-2/12 blog-details h-screen px-8 pt-20 fixed' style={{ right: '0px' }}>
            <div className='px-2' >
              <a>詳細資料</a>
            </div>
            <div className='grid pt-5 px-2'>
              <a>ID</a>
              <a>{blogData.id}</a>
            </div>
            <div className='grid pt-5 px-2'>
              <a>資料狀態</a>
              {initialIsDisable == true && <div className='table-state-green flex w-4/12 pl-2'>
                <div className='table-state-green-bell mr-2'></div>
                <a>已發布</a>
              </div>}
              {initialIsDisable == false && <div className='table-state-red flex w-4/12 pl-2'>
                <div className='table-state-red-bell mr-2'></div>
                <a>草稿</a>
              </div>}
            </div>
            <div className='grid pt-5 px-2'>
              <a>建立時間</a>
              <a>{blogData.createTime}</a>
            </div>
            <div className='grid pt-5 px-2'>
              <a>最後更新時間</a>
              <a>{blogData.modifyTime}</a>
            </div>
            <hr
              className='mt-8'
              style={{
                color: 'red',
                width: '90%',
                border: '1px solid #F2F3F5',
              }}
            />
            {initialIsDisable == true && <button
              className="border-2  mt-8 w-10/12 text-white
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary blog-clear-btn"
            >
              已發佈</button>}
            {initialIsDisable == false && <button
              className="border-2  mt-8 w-10/12 text-white
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary blog-clear-btn"
            >
              草稿</button>}
          </div>
        </div>
      </div >

    </div >
  );
}
