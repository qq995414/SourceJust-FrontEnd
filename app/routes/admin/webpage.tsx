
import Button from '~/components/common/Button';
import Select from '~/components/Select';
import { MetaFunction, useNavigate, Link, useLoaderData } from 'remix';
import {  useState } from 'react';
import cx from 'classnames';
import Nav from '~/components/Nav';
import { LoaderFunction } from 'remix';
import { ApiClient, OpenAPI } from 'app/ApiClient';
import authenticator from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "login",
  });
  OpenAPI.HEADERS = { "Authorization": user.data.token };
  const apiClient = new ApiClient(OpenAPI);

  const pages = await apiClient.api.listArticle('', '', '', '', 1, 99, 'asc');
  //for (var i = 0; i <= pages.length; i++)
    const lodervalue = { pages: pages, key: user }
  return lodervalue;
};

export const meta: MetaFunction = () => {
  return { title: '總後台 ｜ 索爾斯科技', };
};

export default function Index() {
  const blogRequest = useLoaderData();
  let blogdata = blogRequest?.pages?.data?.records;
  const [blog, setBlog] = useState(blogdata);
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();
  const [target, setTarget] = useState(1);
  const [isShowLink, setIsShowLink] = useState(false);
  const [number, setNumber] = useState(10);
  const [page, setPage] = useState(1);
  const [removePage, setRemovePage] = useState(false);
  const [allChecked, setChecked] = useState(false);
  let length = blog.length
  const shownumber = number * page

  const lengthpage = Math.floor(((length-1) / number)) + 1

  const [names, setNames] = useState(['n']);

  const PreviousPage = () => {

    if (page >= 2) {
      setNames(['n']);
      setChecked(false)
      setPage(page - 1)
    }
  };

  const NextPage = () => {
    if (page <= lengthpage - 1) {
      setNames(['n']);
      setChecked(false)
      setPage(page + 1)
    }
  };
  const handleChange = async (e: any) => {
    setChecked(false)
    const name = e.target.getAttribute("name")
    if (e.target.checked) {
      names.push(name)
    } else {
      var index = names.indexOf(name);
      if (index > -1) {
        names.splice(index, 1);
      }
    }
    OpenAPI.HEADERS = { "Authorization": blogRequest?.key?.data?.token };
    const apiClient = new ApiClient(OpenAPI);
    if (tab == 0) {
      const blogChange = await apiClient.api.listArticle('', keywords, '', '', 1, 99, 'asc');
      let newblog = blogChange?.data?.records;
      setBlog(newblog)
    } else {
      const blogChange = await apiClient.api.listArticle(tab, keywords, '', '', 1, 99, 'asc');
      let newblog = blogChange?.data?.records;
      setBlog(newblog)
    }
  };

  let changeTab = async (e, word) => {
    if (word == null)
      word = ''
    if (e == 0) {
      OpenAPI.HEADERS = { "Authorization": blogRequest?.key?.data?.token };
      const apiClient = new ApiClient(OpenAPI);
      const blogChange = await apiClient.api.listArticle('', word, '', '', 1, 99, 'asc');
      let newblog = blogChange?.data?.records;
      setBlog(newblog)
      setNames(['n']);
      setChecked(false)
    }
    else {
      OpenAPI.HEADERS = { "Authorization": blogRequest?.key?.data?.token };
      const apiClient = new ApiClient(OpenAPI);
      const blogChange = await apiClient.api.listArticle(e, word, '', '', 1, 99, 'asc');
      let newblog = blogChange?.data?.records;
      setBlog(newblog)
      setNames(['n']);
      setChecked(false)
    }
  }
  const allcheckbox = async (e: any) => {
    const first = ((page - 1) * number)
    if (e.target.checked) {
      for (var i = first; i < blog.length; i++) {
        names.push(blog[i].id)
        if (i >= length) {
          break;
        }

      }
    }
    else {
      setNames(['n']);
      setChecked(false)
    }
    OpenAPI.HEADERS = { "Authorization": blogRequest?.key?.data?.token };
    const apiClient = new ApiClient(OpenAPI);
    if (tab == 0) {
      const blogChange = await apiClient.api.listArticle('', keywords, '', '', 1, 99, 'asc');
      let newblog = blogChange?.data?.records;
      setBlog(newblog)
    } else {
      const blogChange = await apiClient.api.listArticle(tab, keywords, '', '', 1, 99, 'asc');
      let newblog = blogChange?.data?.records;
      setBlog(newblog)
    }
  }

  const [keywords, setKeywords] = useState('');
  let keywordApi = async event => {
    if (tab == 0) {
      OpenAPI.HEADERS = { "Authorization": blogRequest?.key?.data?.token };
      const apiClient = new ApiClient(OpenAPI);
      const blogChange = await apiClient.api.listArticle('', event.target.value, '', '', 1, 99, 'asc');
      let newblog = blogChange?.data?.records;
      setBlog(newblog)
      setNames(['n']);
      setChecked(false)
    }
    else {
      OpenAPI.HEADERS = { "Authorization": blogRequest?.key?.data?.token };
      const apiClient = new ApiClient(OpenAPI);
      const blogChange = await apiClient.api.listArticle(tab, event.target.value, '', '', 1, 99, 'asc');
      let newblog = blogChange?.data?.records;
      setBlog(newblog)
      setNames(['n']);
      setChecked(false)
    }
    setKeywords(event.target.value)
  }
  const quantitylimit = (e: any) => {
    setNumber(e.target.value)
    setPage(1)
  };
  const removeapi = async () => {
    
    OpenAPI.HEADERS = { "Authorization": blogRequest?.key?.data?.token };
    const apiClient = new ApiClient(OpenAPI);
    for (var i = 1; i < names.length; i++) {
      const blogChange = await apiClient.api.deleteArticle(names[i]);
    }
    if (tab == 0) {
      const blogChange = await apiClient.api.listArticle('', keywords, '', '', 1, 99, 'asc');
      let newblog = blogChange?.data?.records;
      setBlog(newblog)
      setNames(['n']);
      setChecked(false)
    } else {
      const blogChange = await apiClient.api.listArticle(tab, keywords, '', '', 1, 99, 'asc');
      let newblog = blogChange?.data?.records;
      setBlog(newblog)
      setNames(['n']);
      setChecked(false)
    }
    setRemovePage(false)
  }


  return (
    <div className="grid w-full">
      {removePage == true &&
        <div>
          <div className="w-screen h-screen bg-gray-500 opacity-40 z-100 fixed" ></div>
          <div
            className="w-2/12 h-80 bg-white z-20
fixed top-0 left-0 bottom-0 right-0 m-auto
rounded-sm shadow-xl flex flex-col items-center z-100" >
            <img
              className='w-2/12 pt-6'
              src="/icons/table-notity.svg"
              alt=""
              onClick={PreviousPage}
            />
            <p className="font-semibold text-xl pt-5 ">
              刪除文章
            </p>
            <p className="font-base text-usual-gray mt-5 tracking-[0.12em]">
              是否確認刪除文章？</p>
            <div className="mt-5 flex justify-between w-10/12 text-center  tracking-[0.12em]">
              <button
                className="border-2  w-full text-white
h-12 rounded-lg ml-3  font-semibold bg-Primary-3-Primary"
                onClick={removeapi}>
                刪除</button>
            </div>
            <div className="mt-5 flex justify-between w-10/12 text-center  tracking-[0.12em] pb-5">
              <button
                className="border-2 border-[#BBBBBB] w-full 
h-12 rounded-lg ml-3  font-semibold "
                onClick={() => setRemovePage(false)}>
                取消</button>
            </div>
          </div>

        </div>}

      <Nav titleGray='' title="部落格管理" titleBlack=""></Nav>
      <div className="h-screen w-full  login-background  pt-4">

        <div className="flex items-center mt-10 webpage-title pt-5  w-full" style={{ zIndex: "1" }} >
          {/**<div  style={{ fontSize: '14px' }}
            className="flex w-8/12 place-content-center justify-around mx-10">
           
              </div>*/}
          <div style={{ fontSize: '14px' }}
            className="flex w-full place-content-center justify-end  mx-10" >
            <div className='w-10/12 pl-1 pt-2 pr-1 flex '>
              <p

                onClick={function (event) { changeTab(0, ''); setTab(0); setPage(1); setKeywords('') }}
                className={cx(
                  tab === 0
                    ? 'text-primary-red border-b-primary-red'
                    : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                  'border-b-4 pb-2 font-semibold transition-all' +
                  ' px-2 ml-4 tracking-widest cursor-pointer')}
              >
                所有日誌
              </p>
              <p
                onClick={function (event) { changeTab(1, ''); setTab(1); setPage(1); setKeywords('') }}
                className={cx(
                  tab === 1
                    ? 'text-primary-red border-b-primary-red'
                    : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                  'border-b-4 pb-2 font-semibold transition-all' +
                  ' px-2 ml-4 tracking-widest cursor-pointer')}
              >
                SEO優化
              </p>
              <p
                onClick={function (event) { changeTab(2, ''); setTab(2); setPage(1); setKeywords('') }}
                className={cx(
                  tab === 2
                    ? 'text-primary-red border-b-primary-red'
                    : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                  'border-b-4 pb-2 font-semibold transition-all' +
                  ' px-2 ml-4 tracking-widest cursor-pointer')}
              >
                網頁設計常見問題
              </p>
              <p
                onClick={function (event) { changeTab(3, ''); setTab(3); setPage(1); setKeywords('') }}
                className={cx(
                  tab === 3
                    ? 'text-primary-red border-b-primary-red'
                    : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                  'border-b-4 pb-2 font-semibold transition-all' +
                  ' px-2 ml-4 tracking-widest cursor-pointer')}
              >
                網頁須知
              </p>
              <p
                onClick={function (event) { changeTab(4, ''); setTab(4); setPage(1); setKeywords('') }}
                className={cx(
                  tab === 4
                    ? 'text-primary-red border-b-primary-red'
                    : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                  'border-b-4 pb-2 font-semibold transition-all' +
                  ' px-2 ml-4 tracking-widest cursor-pointer')}
              >
                網頁工具說明
              </p>
              <p
                onClick={function (event) { changeTab(5, ''); setTab(5); setPage(1); setKeywords('') }}
                className={cx(
                  tab === 5
                    ? 'text-primary-red border-b-primary-red'
                    : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                  'border-b-4 pb-2 font-semibold transition-all' +
                  ' px-2 ml-4 tracking-widest cursor-pointer')}
              >
                數位行銷
              </p>
            </div>
            <div className="flex-grow"></div>
            
          </div>

          {isShowLink &&
            <div className="fixed top-0 bottom-0 left-0 right-0">
              <div
                className="w-screen h-screen bg-gray-500
              opacity-40 z-10"></div>
              <div
                className="w-5/12 h-96 bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col pt-12">
                <p className="font-semibold text-xl self-center">建立專案類型</p>
                <div className="flex self-center items-center w-1/2 mt-12">
                  <input
                    className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red  mr-4"
                    type="radio"
                    name="web" />
                  <div>空白專案</div>
                </div>
                <div className="flex self-center items-center w-1/2 mt-10">
                  <input
                    className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red mr-4"
                    type="radio"
                    name="web" />
                  <div>從現有專案複製</div>
                </div>
                <div className="w-1/2 h-12 self-center mt-5">
                  <Select<number>
                    className="bg-white text-black h-12 relative"
                    value={target}
                    onChange={setTarget}
                    options={[
                      {
                        value: 1,
                        label: '專案名稱Ａ'
                      },
                    ]} />
                </div>
                <Button
                  onClick={() => navigate('./../create/basic')}
                  className="w-32 text-sm font-medium h-12 mt-8 self-center"
                >建立</Button>
              </div>
            </div>}
        </div>
        <div className="flex flex-col mt-10 pb-5">
          <div className="flex flex-col items-center w-full pl-5 px-10">

            <div className='DataTable-title w-full pt-5 pb-5 pl-5 flex  '>
              <div className='pt-2'>
                顯示 {((page - 1) * number) + 1} -
                {number * page < length ? shownumber : length}  筆，共 {length} 筆資料
              </div>

              <div className='flex-grow'></div>
              <div className=' mr-2'>
                <input onChange={keywordApi} className='table-sreach' placeholder="請輸入文字" />
              </div>
              <Link
                to="/admin/newblog"
                prefetch="intent"
              ><button className='table-insert-btn mr-4' >+ 新增</button></Link>
            </div>
            <div className='DataTable-body  w-full mt-5 '>
              <div className='table-header flex pt-2 pb-2 pl-1 pr-1'>
                <div className='w-1/12 text-center pl-2 pr-2'>
                  {allChecked == true && <input type="checkbox" className='table-checkbox' onChange={allcheckbox} checked="checked" />}
                  {allChecked == false && <input type="checkbox" className='table-checkbox' onChange={allcheckbox} />}
                </div>
                <div className='w-2/12 '>
                  日期
                </div ><div className='w-1/12'>
                  狀態
                </div>
                <div className='w-2/12'>
                  文章名稱
                </div>
                <div className='w-3/12'>
                  文章內容
                </div>
                <div className='w-2/12'>
                  縮圖
                </div>
                <div className='w-1/12'>
                  操作
                </div>
              </div>
              <div className='table-body pl-1'>
                {blog.slice(((page - 1) * number), shownumber).map((blog: { id: any; isDisable: any; title: any; createTime: any; smallImg: any; subTitle: any; select: any; }) => {
                  const {
                    id, isDisable, title, createTime, smallImg, subTitle,
                    select } = blog;
                  let i = false
                  const editUrl="/admin/editblog?blog="+id
                  names.map(names => {
                    const checkid = names;
                    if (checkid == id) {
                      i = true
                    }
                  });
                  if (i == true) {
                    return <div className='flex  table-list-checked table-list w-full'>
                      <div className={select === true ? 'flex  table-list-checked table-list w-full pt-2' : 'table-list flex w-full pt-2'}>
                        <div className='w-1/12 pl-2 pr-2 pt-3 text-center pl-2 pr-2'>
                          <input name={id} type="checkbox" className={select === true ? 'table-checkbox Primary-Primary' : 'table-checkbox '} value={id} onChange={handleChange} checked="checked" />
                        </div>
                        <div className='w-2/12 pl-2 pr-2 pt-3'>
                          {createTime}
                        </div>
                        {isDisable === true &&
                          <div className='w-1/12 pl-1 pt-2 pr-1 '>
                            <div className='table-state-green flex w-8/12 pl-2'>
                              <div className='table-state-green-bell mr-2'></div>
                              已發布
                            </div>

                          </div>
                        }
                        {isDisable === false &&
                          <div className='w-1/12 pl-1 pt-3 pr-2 '>
                            <div className=' table-state-red flex w-8/12  pl-2'>
                              <div className='table-state-red-bell mr-2'></div>
                              草稿
                            </div>

                          </div>
                        }

                        <div className='w-2/12 pl-2 pr-2 pt-3 '>
                          {title},
                        </div>
                        <div className='w-3/12 pl-2 pr-2 pt-3'>
                          {subTitle}
                        </div>
                        <div className='w-2/12 pl-2 pr-2  '>
                          <img
                            src={smallImg}
                            className="cursor-pointer  table-img py-2"
                          />
                        </div>
                        <div className='w-1/12 pl-2 pr-2 pt-3 flex'>
                          <Link
                            className='w-4/12 mx-1 mt-4'
                            to={editUrl}
                            prefetch="intent"
                          >
                            <img
                              className='w-full'
                              src="/icons/webpage-table-pan.svg"
                              alt=""
                            /></Link>
                          <a className='w-4/12 mx-1 mt-4'>  <img
                            className='w-full'
                            src="/icons/webpage-table-remove.svg"
                            alt=""
                            onClick={() => setRemovePage(true)}
                          /></a>
                        </div>
                      </div>
                    </div>
                  } else {
                    return <div className='table-list flex w-full'>
                      <div className={select === true ? 'flex  table-list-checked table-list w-full pt-2' : 'table-list flex w-full pt-2'}>
                        <div className='w-1/12 pl-2 pr-2 pt-3 text-center pl-2 pr-2'> <input name={id} type="checkbox" className={select === true ? 'table-checkbox Primary-Primary' : 'table-checkbox '} value={id} onChange={handleChange} />
                        </div>
                        <div className='w-2/12 pl-2 pr-2 pt-3'>
                          {createTime}
                        </div>
                        {isDisable === true &&
                          <div className='w-1/12 pl-1 pt-2 pr-1 '>
                            <div className='table-state-green flex w-8/12 pl-2'>
                              <div className='table-state-green-bell mr-2'></div>
                              已發布
                            </div>

                          </div>
                        }
                        {isDisable === false &&
                          <div className='w-1/12 pl-1 pt-3 pr-2 '>
                            <div className=' table-state-red flex w-8/12  pl-2'>
                              <div className='table-state-red-bell mr-2'></div>
                              草稿
                            </div>

                          </div>
                        }

                        <div className='w-2/12 pl-2 pr-2 pt-3 '>
                          {title}
                        </div>
                        <div className='w-3/12 pl-2 pr-2 pt-3'>
                          {subTitle}
                        </div>
                        <div className='w-2/12 pl-2 pr-2  '>
                          <img
                            src={smallImg}
                            className="cursor-pointer  table-img py-2"
                          />
                        </div>
                        <div className='w-1/12 pl-2 pr-2 pt-3  flex'>
                          <Link
                            className='w-4/12 mx-1 mt-4'
                            to={editUrl}
                            prefetch="intent"
                          >
                            <img
                              className='w-full '
                              src="/icons/webpage-table-pan.svg"
                              alt=""
                            /></Link>
                          <a className='w-4/12 mx-1 mt-4'>  <img
                            className='w-full'
                            src="/icons/webpage-table-remove.svg"
                            alt=""
                            onClick={() => setRemovePage(true)}
                          /></a>

                        </div>
                      </div>
                    </div>
                  }

                })}

                <div className='table-footer flex pt-2 pb-2 pl-10'>
                  顯示筆數
                  <select name="cars" className='DataTable-quantitylimit' id="cars" onChange={quantitylimit}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </select>
                  <div className='flex-grow'></div>
                  <div className='pr-4 flex'>
                    <img
                      className='px-2'
                      src="/icons/table-previous-page.svg"
                      alt=""
                      onClick={PreviousPage}

                    />  <input type="text" className='table-page  pl-2' value={page} />
                    / {lengthpage}
                    <img
                      className=' ml-2 px-2'
                      src="/icons/table-next-page.svg"
                      alt=""
                      onClick={NextPage}
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}
