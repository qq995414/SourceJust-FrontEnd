import { MetaFunction, useLoaderData } from 'remix';
import { useState} from 'react';
import Nav from '~/components/Nav';
import { Editor } from './components/react-draft-wysiwyg.client';
import { EditorState, convertToRaw, ContentState, } from 'draft-js';
import { ClientOnly } from "remix-utils";
import styles from "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { LoaderFunction, json } from 'remix';
import authenticator from "~/services/auth.server";
import { ApiClient,  OpenAPI, PortfolioRequest } from 'app/ApiClient';
import { FileUploader } from "react-drag-drop-files";
import draftToHtml from "draftjs-to-html";
import { OfficalAPI } from 'app/officalAPI';


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
  const [client, setClient] = useState('');
  const clientchange = event => {
    setClient(event.target.value);

  };
  const [service, setService] = useState('');
  const servicechange = event => {
    setService(event.target.value);

  };
  const [tags, setTags] = useState('');
  const tagschange = event => {
    setTags(event.target.value);

  };
  const [tech, setTech] = useState('');
  const techchange = event => {
    setTech(event.target.value);

  };
  const [date, setDate] = useState('');
  const datechange = event => {
    setDate(event.target.value);

  };
  const [classId, setClassId] = useState(0);
  const classIdchange = event => {
    setClassId(event.target.value);
  };
  const [url, setUrl] = useState('');
  const urlchange = event => {
    setUrl(event.target.value);
  };


  const blogapi = useLoaderData();
  const blogClassSelect = blogapi?.Class?.data?.records;
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
    //alert(classId+','+title+','+des+','+key+','+state)
    const TagsSplit = tags.split(',')
    console.log(TagsSplit)
    for (var i = 0; i <= TagsSplit.length; i++) {
      tagsArray.push(TagsSplit[i])
    }
    var urlAry = url.split(':');
    if (urlAry[0] != "http" && urlAry[0] != "https") {
      setUrl("http://" + url)
      var newUrl = "http://" + url
    } else {
      var newUrl = url
    }
    OpenAPI.HEADERS = { "Authorization": blogapi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    let portfolioRequest: PortfolioRequest = {
      channelId: classId,
      titleImg: smallImg,
      title: title,
      content: context,
      tags: TagsSplit,
      client: client,
      finishDate: date,
      mainImg: coverImg,
      url: newUrl,
      service: service,
      tech: tech,
      onlineDate: '',
      offlineDate: '',
    };
    const pages = await apiClient.api.createPortfolio(portfolioRequest);

    window.location.href = "/admin/folio";
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
    const fileupload = await apiClient.api.uploadFile('BLOG', imgrequest);
    setCoverImg(fileupload.data?.url)
    setCoverImgId(fileupload.data?.id)

    console.log(fileupload);

    setCoverImgState(true)

  };
  const [state, setState] = useState(0);

  const [description, setDescription] = useState({
    htmlValue: "<p>fdsfdf</p>\n",
    editorState: EditorState.createEmpty()
  });
  const [context, setContext] = useState('');
  const onEditorStateChange = (editorValue) => {
    const editorStateInHtml = draftToHtml(
      convertToRaw(editorValue.getCurrentContent())
    );

    setDescription({
      htmlValue: editorStateInHtml,
      editorState: editorValue,
    });
    setContext(editorStateInHtml)

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
  const preview = () => {
    var urlAry = url.split(':');
    if (urlAry[0] != "http" && urlAry[0] != "https") {
      setUrl("http://" + url)
      var newUrl = "http://" + url
    } else {
      var newUrl = url
    }

    var previewUrl = OfficalAPI.BASE + "workpreview"
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "coverImg": coverImg,
      "smallImg": smallImg,
      "title": title,
      "content": context,
      "metaKeyword": tags,
      "Date": "2021-09-04 19:33:50",
      "client": client,
      "url": newUrl,
      "service": service,
      "tech": tech

    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(previewUrl, requestOptions)
      .then(response => response.text())
      .then((result) => {
        result = result.replaceAll('defer', 'async')
        var previewWindow = window.open("", "");
        previewWindow.document.write(result);
      })
      .catch(error => console.log('error', error));
  }
  return (
    <div className="grid w-full" >
      <Nav titleGray='作品集管理' title="" titleBlack="編輯資料"></Nav>
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
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary blog-view-btn"
              onClick={preview}
            >
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
              <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
              {smallImgState == false && <p className='file-upload-drop-text pt-3'>已成功上傳檔案 ( 0 / 1 )</p>}
              {smallImgState == true &&
                <div className='w-full'><p className='file-upload-drop-text-red pt-3'>已成功上傳檔案 ( 1 / 1 )</p>
                  <div className='file-upload-drop-state w-10/12 flex items-center'>
                    <img className='h-full w-auto' src={smallImg}></img> <a>{smallImgName}</a>
                  </div>
                </div>}
            </div>
            <div className='w-1/2 imgUpload'>
              <a className="blog-class-text">案例縮圖 <a className='functional-Error-3-text'>*</a></a>
              <FileUploader handleChange={handleChange2} name="file" types={fileTypes} />
              {coverImgState == false && <p className='file-upload-drop-text pt-3'>已成功上傳檔案 ( 0 / 1 )</p>}
              {coverImgState == true &&
                <div className='w-full'><p className='file-upload-drop-text-red pt-3'>已成功上傳檔案 ( 1 / 1 )</p>
                  <div className='file-upload-drop-state w-10/12 flex items-center'>
                    <img className='h-full w-auto' src={coverImg}></img> <a>{coverImgName}</a>
                  </div>
                </div>}
            </div>

          </div>
          <div className="flex flex-col   pl-5 w-full px-10 mt-5  pb-5">

            <ClientOnly>
              {() => <Editor
                editorState={description.editorState}
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
      </div >
    </div >
  );
}
