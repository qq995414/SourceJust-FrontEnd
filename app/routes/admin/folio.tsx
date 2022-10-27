
import Button from '~/components/common/Button';
import Select from '~/components/Select';
import { MetaFunction, useNavigate, Link, Form, json, useLoaderData } from 'remix';
import {  useState } from 'react';
import cx from 'classnames';
import Nav from '~/components/Nav';
import {  LoaderFunction } from 'remix';
import { ApiClient, OpenAPI } from 'app/ApiClient';
import authenticator from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "login",
  });
  OpenAPI.HEADERS = { "Authorization": user.data.token };
  const apiClient = new ApiClient(OpenAPI);

  const pages = await apiClient.api.listPortfolio('', '', '', '', 1, 99, 'asc');
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
  const [number, setNumber] = useState(9);
  const [page, setPage] = useState(1);
  const [removePage, setRemovePage] = useState(false);
  let length = blog.length
  const shownumber = number * page
  const lengthpage = Math.floor(((length - 1) / number)) + 1
  const PreviousPage = () => {
    if (page >= 2) {
      setPage(page - 1)
    }
  };

  const NextPage = () => {
    if (page <= lengthpage - 1) {
      setPage(page + 1)
    }
  };


  let changeTab = async (e, word) => {
    if (word == null)
      word = ''
    if (e == 0) {
      OpenAPI.HEADERS = { "Authorization": blogRequest?.key?.data?.token };
      const apiClient = new ApiClient(OpenAPI);
      const blogChange = await apiClient.api.listPortfolio('', word, '', '', 1, 99, 'asc');
      let newblog = blogChange?.data?.records;
      setBlog(newblog)
    }
    else {
      OpenAPI.HEADERS = { "Authorization": blogRequest?.key?.data?.token };
      const apiClient = new ApiClient(OpenAPI);
      const blogChange = await apiClient.api.listPortfolio(e, word, '', '', 1, 99, 'asc');
      let newblog = blogChange?.data?.records;
      setBlog(newblog)
    }
  }

  const [keywords, setKeywords] = useState('');
  let keywordApi = async event => {
    if (tab == 0) {
      OpenAPI.HEADERS = { "Authorization": blogRequest?.key?.data?.token };
      const apiClient = new ApiClient(OpenAPI);
      const blogChange = await apiClient.api.listPortfolio('', event.target.value, '', '', 1, 99, 'asc');
      let newblog = blogChange?.data?.records;
      setBlog(newblog)
    }
    else {
      OpenAPI.HEADERS = { "Authorization": blogRequest?.key?.data?.token };
      const apiClient = new ApiClient(OpenAPI);
      const blogChange = await apiClient.api.listPortfolio(tab, event.target.value, '', '', 1, 99, 'asc');
      let newblog = blogChange?.data?.records;
      setBlog(newblog)
    }
    setKeywords(event.target.value)
  }
  const quantitylimit = (e: any) => {
    setNumber(e.target.value)
    setPage(1)
  };


  return (
    <div className="grid w-full">
      <Nav titleGray='' title="作品集管理" titleBlack=""></Nav>
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
                所有作品
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
                網頁設計與開發
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
                Wordpass架站
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
                APP開發
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
                程式軟體設計
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
                UIUX設計
              </p>
              <p
                onClick={function (event) { changeTab(6, ''); setTab(6); setPage(1); setKeywords('') }}
                className={cx(
                  tab === 6
                    ? 'text-primary-red border-b-primary-red'
                    : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                  'border-b-4 pb-2 font-semibold transition-all' +
                  ' px-2 ml-4 tracking-widest cursor-pointer')}
              >
                全方位EPR
              </p>
              <p
                onClick={function (event) { changeTab(7, ''); setTab(7); setPage(1); setKeywords('') }}
                className={cx(
                  tab === 7
                    ? 'text-primary-red border-b-primary-red'
                    : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                  'border-b-4 pb-2 font-semibold transition-all' +
                  ' px-2 ml-4 tracking-widest cursor-pointer')}
              >
                LINE機器人
              </p>
            </div>
            <div className="flex-grow"></div>

          </div>


        </div>
        <div className="flex flex-col mt-10">
          {/**<div
            className="web-add-box flex mb-4 w-2/6  text-left
           bg-white rounded-2xl shadow-md  mx-32" >
            <Link className="flex" to='/admin/insertpage'>
              <img src="/images/add.svg" alt="" />

              <p className='web-add-text'>建立文章
              </p></Link>
                  </div>**/}
          <div className="flex flex-col items-center w-full pl-5 px-10">

            <div className='DataTable-title w-full pt-5 pb-5 pl-5  flex' >
              <div className='pt-2'>
                顯示 {((page - 1) * number) + 1} -
                {number * page < length ? shownumber : length}  筆，共 {length} 筆資料
              </div>

              <div className='flex-grow'></div>
              <div className=' mr-2'>
                <input onChange={keywordApi} className='table-sreach' placeholder="請輸入文字" />
              </div>
              <Link
                to="/admin/newfolio"
                prefetch="intent"
              ><button className='table-insert-btn mr-4' >+ 新增</button></Link>
            </div>
            <div className='DataTable-body  w-full mt-5 '>
              <div className='table-body px-8 py-8 flex flex-wrap'>
                {blog.slice(((page - 1) * number), shownumber).map((blog: { id: any; titleImg: any; title: any; tag: any; smallImg: any; subTitle: any; select: any; }) => {
                  const {
                    id, titleImg, title, tag, smallImg, subTitle,
                    select } = blog;
                  const editUrl = "/admin/editfolio?folio=" + id
                  const showTag = tag.replace(","," #")
                  return <div className='w-4/12 px-6'><Link
                    to={editUrl}
                    prefetch="intent">
                    <img src={titleImg}></img>
                    <div className='flex py-3'>
                      <a className='table-tag'>#{showTag}</a>
                      <div className="flex-grow"></div>
                      <div className='table-state-green flex w-2/12 pl-2'>
                        <div className='table-state-green-bell mr-2'></div>
                        <a>已發布</a>
                      </div>
                    </div>
                    <div className='table-tag-title mb-5'>{title}</div>
                  </Link>
                  </div>
                })}
                {/**tab === 1 && progressCards.map(progressCard => {
                const {
                  id, state, date, name, type,
                  amount, outsourceAmount, people
                } = progressCard;
                return <Progress
                  key={id}
                  state={state}
                  date={date}
                  name={name}
                  type={type}
                  amount={amount}
                  outsourceAmount={outsourceAmount}
                  people={people}
                />;
              })}
              {tab === 2 && warrantyCards.map(warrantyCard => {
                const {
                  id, date, state, hostDate, netDate, name, type, leftWarranty,
                  businessPerson
                } = warrantyCard;
                return <Warranty
                  key={id}
                  date={date}
                  state={state}
                  name={name}
                  type={type}
                  hostDate={hostDate}
                  netDate={netDate}
                  leftWarranty={leftWarranty}
                  businessPerson={businessPerson}
                />;
              })}
              {tab === 3 && maintainCards.map(maintainCard => {
                const {
                  id, date, state, hostDate, netDate,
                  name, type, businessPerson
                } = maintainCard;
                return <Maintain
                  key={id}
                  date={date}
                  state={state}
                  name={name}
                  type={type}
                  hostDate={hostDate}
                  netDate={netDate}
                  businessPerson={businessPerson}
                />;
              })}
              {tab === 4 && cancelCards.map(cancelCard => {
                const {
                  id, date, state, hostDate, netDate,
                  name, type, businessPerson
                } = cancelCard;
                return <Cancel
                  key={id}
                  date={date}
                  state={state}
                  name={name}
                  type={type}
                  hostDate={hostDate}
                  netDate={netDate}
                  businessPerson={businessPerson}
                />;
              })**/}
              </div>

              <div className='table-footer flex pt-2 pb-2 pl-10'>
                顯示筆數
                <select name="cars" className='DataTable-quantitylimit' id="cars" onChange={quantitylimit}>
                  <option value="9">9</option>
                  <option value="18">18</option>
                  <option value="27">27</option>
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
  );
}
