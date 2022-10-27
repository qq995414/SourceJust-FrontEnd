import { MetaFunction, useNavigate, Link, Form, useLoaderData } from 'remix';
import { SetStateAction, useState, Component, useRef } from 'react';
import Nav from '~/components/Nav';
import { Editor } from './components/react-draft-wysiwyg.client';
import { EditorState, convertToRaw, ContentState, } from 'draft-js';
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
    const [title, setTitle] = useState(0);
    const titlechange = event => {
        setTitle(event.target.value);
    };
    const [subTitle, setSubTitle] = useState('');
    const subTitlechange = event => {
        setSubTitle(event.target.value);

    };
    const [key, setKey] = useState('');
    const keychange = event => {
        setKey(event.target.value);

    };
    const [des, setDes] = useState('');
    const deschange = event => {
        setDes(event.target.value);

    };
    const [isDisable, setIsDisable] = useState('');
    const isDisablechange = event => {
        setIsDisable(event.target.value);

    };
    const [classId, setClassId] = useState(0);
    const classIdchange = event => {
        setClassId(event.target.value);
    };


    const blogapi = useLoaderData();
    const blogClassSelect = blogapi?.Class?.data?.records;
    const [smallImg, setSmallImg] = useState('');
    const [smallImgState, setSmallImgState] = useState(false);
    const [smallImgName, setSmallImgName] = useState('');
    const fileTypes = ["JPG", "PNG", "GIF"];
    const handleChange = async (file) => {
        let imgrequest = {
            file: file,
        };
        OpenAPI.HEADERS = { "Authorization": blogapi?.key?.data.token };
        const apiClient = new ApiClient(OpenAPI);
        const fileupload = await apiClient.api.uploadFile('BLOG', imgrequest);

    };
    const inputFile = useRef(null);
    const [fileState, setfileState] = useState(0);
    const fileUpload = async (file) => {
        setfileState(1)
        /*    if (file.target.files[0].type == "application/x-zip-compressed") {
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
    
            }*/
        alert(file.target.files[0].type)
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
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary blog-clear-btn"
                            onClick={() => {
                                window.location.href = "/admin/webpage";
                            }}>
                            取消</button>
                        <button
                            className="border-2  w-20 text-white
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary">
                            新增</button>
                    </div>

                </div>
                <div className="flex flex-col mt-8">
                    <div className="flex flex-col   pl-5 w-full px-10 ">
                        <a className=" text-lg font-bold">廠商</a>
                        <div className='w-12/12  shadow-md px-3 mx-3 py-4  rounded-md dashboardCard'>
                            <fieldset onChange={titlechange}>
                                <input className='ml-5' type="radio" name="color" id="red" value="1" />
                                <label className='ml-2' for="red" >選擇廠商</label>

                                <input className='ml-5' type="radio" name="color" id="green" value="2" />
                                <label className='ml-2' for="green">新增廠商</label>
                            </fieldset>
                            {title == 1 &&
                                <select value={classId} onChange={classIdchange} className={classId == 0 ? 'neutral-colors-4-grey-text mt-1 blog-class-input mt-5 ml-4 w-3/12' : ' mt-1 blog-class-input-black mt-5 ml-4 w-3/12'} name='classId'  >
                                    <option style={{ display: "none" }} >請選擇廠商</option>
                                    <option className='text-black' value="1" >廠商1</option>
                                    <option className='text-black' value="2">廠商2</option>
                                </select>
                            }
                        </div>
                        {title == 2 && <div className='mt-6'>
                            <a className=" text-lg font-bold ">廠商資料</a>
                            <div className='w-12/12  shadow-md px-3 mx-3 py-4 mt-4 rounded-md dashboardCard'>
                                <div className="flex flex-col   pl-5 w-full px-10 mt-1">
                                    <a className="blog-class-text">客戶來源 </a>
                                    <input className="blog-class-input mt-1  pl-3" placeholder="EX facebook"></input>
                                </div>
                                <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
                                    <a className="blog-class-text">負責人 <a className='functional-Error-3-text'>*</a></a>
                                    <input className="blog-class-input mt-1  pl-3" placeholder="請輸入負責人"></input>
                                </div>
                                <div className="flex flex-col   pl-5 w-full px-10 mt-1">
                                    <a className="blog-class-text">統一編號 </a>
                                    <input className="blog-class-input mt-1  pl-3" placeholder="請輸入統一編號"></input>
                                </div>
                                <div className="flex flex-col   pl-5 w-full px-10 mt-1">
                                    <a className="blog-class-text">地址 </a>
                                    <input className="blog-class-input mt-1  pl-3" placeholder="請輸入地址"></input>
                                </div>
                                <div className="flex flex-col   pl-5 w-full px-10 mt-1">
                                    <a className="blog-class-text">電子郵件 </a>
                                    <input className="blog-class-input mt-1  pl-3" placeholder="請輸入電子郵件"></input>
                                </div>
                                <div className="flex flex-col   pl-5 w-full px-10 mt-1">
                                    <a className="blog-class-text">電話 </a>
                                    <input className="blog-class-input mt-1  pl-3" placeholder="請輸入電話"></input>
                                </div>
                                <div className="flex flex-col   pl-5 w-full px-10 mt-1">
                                    <a className="blog-class-text">廠商類型 </a>
                                    <select value={classId} onChange={classIdchange} className={classId == 0 ? 'neutral-colors-4-grey-text mt-1 blog-class-input  w-3/12' : ' mt-1 blog-class-input-black  w-3/12'} name='classId'  >
                                        <option style={{ display: "none" }} >個人or公司</option>
                                        <option className='text-black' value="1" >個人</option>
                                        <option className='text-black' value="2">公司</option>
                                    </select>                            </div>
                                <div className="flex flex-col   pl-5 w-full px-10 mt-1">
                                    <a className="blog-class-text">備註</a>
                                    <input className="blog-class-input mt-1  pl-3" placeholder="請輸入備註"></input>
                                </div>
                            </div>
                        </div>}
                        <a className=" text-lg font-bold mt-6">新增專案需求</a>
                        <div className='w-12/12  shadow-md px-3 mx-3 py-4 mt-4 rounded-md dashboardCard mb-5'>
                            <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
                                <a className="blog-class-text">專案需求名稱 <a className='functional-Error-3-text'>*</a></a>
                                <input className="blog-class-input mt-1  pl-3" placeholder="請輸入專案名稱"></input>
                            </div>
                            <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
                                <a className="blog-class-text">預計完成日期 <a className='functional-Error-3-text'>*</a></a>
                                <input className="blog-class-input mt-1  pl-3" placeholder="請輸入預計完成日期"></input>
                            </div>
                            <div className="flex flex-col   pl-5 w-full px-10 mt-1">
                                <a className="blog-class-text">行業類別 <a className='functional-Error-3-text'>*</a></a>
                                <input className="blog-class-input mt-1  pl-3" placeholder="請輸入行業類別"></input>
                            </div>
                            <div className="flex flex-col   pl-5 w-full px-10 mt-1">
                                <a className="blog-class-text">案件類型 <a className='functional-Error-3-text'>*</a></a>
                                <select value={classId} onChange={classIdchange} className={classId == 0 ? 'neutral-colors-4-grey-text mt-1 blog-class-input  w-3/12' : ' mt-1 blog-class-input-black  w-3/12'} name='classId'  >
                                    <option style={{ display: "none" }} >個人or公司</option>
                                    <option className='text-black' value="1" >個人</option>
                                    <option className='text-black' value="2">公司</option>
                                </select>
                            </div>
                            <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
                                <a className="blog-class-text">目標用戶 <a className='functional-Error-3-text'>*</a></a>
                                <input className="blog-class-input mt-1  pl-3" placeholder="請輸入預計目標用戶"></input>
                            </div>
                            <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
                                <a className="blog-class-text">是否有提供圖片或文案 <a className='functional-Error-3-text'>*</a></a>
                                <fieldset >
                                    <input className='ml-5' type="radio" name="color" id="red" value="1" />
                                    <label className='ml-2 pt-2' for="yes" >否</label>
                                    <input className='ml-5' type="radio" name="color" id="green" value="2" />
                                    <label className='ml-2 pt-2' for="no">是</label>
                                </fieldset>
                            </div>
                            <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
                                <a className="blog-class-text">是否有提供網址 <a className='functional-Error-3-text'>*</a></a>
                                <fieldset >
                                    <input className='ml-5' type="radio" name="color" id="red" value="1" />
                                    <label className='ml-2 pt-2' for="yes" >否</label>
                                    <input className='ml-5' type="radio" name="color" id="green" value="2" />
                                    <label className='ml-2 pt-2' for="no">是</label>
                                </fieldset>
                            </div>
                            <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
                                <a className="blog-class-text">APP 是否需要上架<a className='functional-Error-3-text'>*</a></a>
                                <fieldset >
                                    <input className='ml-5' type="radio" name="color" id="red" value="1" />
                                    <label className='ml-2 pt-2' for="yes" >否</label>
                                    <input className='ml-5' type="radio" name="color" id="green" value="2" />
                                    <label className='ml-2 pt-2' for="no">是</label>
                                </fieldset>
                            </div>
                            <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
                                <a className="blog-class-text">功能需求<a className='functional-Error-3-text'>*</a></a>
                                <input className="blog-class-input mt-1  pl-3" placeholder="請輸入功能需求"></input>
                            </div>
                            <div className="flex flex-col   pl-5 w-full px-10 mt-5 ">
                                <a className="blog-class-text">專案備註<a className='functional-Error-3-text'>*</a></a>
                                <textarea className="blog-class-input mt-1  pl-3" placeholder="請輸入功能需求"></textarea >
                            </div>
                            <div className="flex flex-col w-full pl-5  mt-5">
                                <a className="blog-class-text">附件上傳<a className='functional-Error-3-text'>*</a></a>
                                <button type="button" onClick={() => inputFile.current.click()} className='Negotiate-Fileupload mt-3'>上傳模板檔案</button>
                                <input id="file" onChange={fileUpload} ref={inputFile} type="file" style={{ display: "none" }} accept="aplication/zip" /><a className='file-upload-drop-text-red pt-1'>已成功上傳檔案({fileState}/1)</a>
                            </div>
                            <div className="flex flex-col   pl-5 w-full px-10 mt-1">
                                <a className="blog-class-text">案件類型 <a className='functional-Error-3-text'>*</a></a>
                                <select value={classId} onChange={classIdchange} className={classId == 0 ? 'neutral-colors-4-grey-text mt-1 blog-class-input  w-3/12' : ' mt-1 blog-class-input-black  w-3/12'} name='classId'  >
                                    <option style={{ display: "none" }} >已簽約、洽談中、已取消</option>
                                    <option className='text-black' value="1" >已簽約</option>
                                    <option className='text-black' value="2">洽談中</option>
                                    <option className='text-black' value="3">已取消</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}
