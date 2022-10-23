
import Button from '~/components/common/Button';
import Select from '~/components/Select';
import { MetaFunction, useNavigate, Link, Form, json, useLoaderData } from 'remix';
import { SetStateAction, useState } from 'react';
import cx from 'classnames';
import Nav from '~/components/Nav';
import { ActionFunction, LoaderFunction } from 'remix';
import { ApiClient, OpenAPI } from 'app/ApiClient';
import authenticator from "~/services/auth.server";
import { className } from '~/mocks/template';

export const loader: LoaderFunction = async ({ request }) => {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "login",
  });
  OpenAPI.HEADERS = { "Authorization": user.data.token };
  const apiClient = new ApiClient(OpenAPI);
  const pages = await apiClient.api.listTemplate('', '', '', '', 1, 99, 'asc');
  //for (var i = 0; i <= pages.length; i++)
  const lodervalue = { pages: pages, key: user }
  return lodervalue;
};

export const meta: MetaFunction = () => {
  return { title: '總後台 ｜ 索爾斯科技', };
};

export default function Index() {
  const templateRequest = useLoaderData();
  let templatedata = templateRequest?.pages?.data?.records;
  const [template, setTemplate] = useState(templatedata);
  console.log(template);
  
  const [tab, setTab] = useState(0);
  const [number, setNumber] = useState(9);
  const [page, setPage] = useState(1);
  let length = template.length
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
      OpenAPI.HEADERS = { "Authorization": templateRequest?.key?.data?.token };
      const apiClient = new ApiClient(OpenAPI);
      const templateChange = await apiClient.api.listTemplate(word, '', '', '', 1, 99, 'asc');
      let newTemplate = templateChange?.data?.records;
      setTemplate(newTemplate)
    }
    else {
      OpenAPI.HEADERS = { "Authorization": templateRequest?.key?.data?.token };
      const apiClient = new ApiClient(OpenAPI);
      const templateChange = await apiClient.api.listTemplate(word, e, '', '', 1, 99, 'asc');
      let newTemplate = templateChange?.data?.records;
      setTemplate(newTemplate)
    }
  }

  const [keywords, setKeywords] = useState('');
  let keywordApi = async event => {
    if (tab == 0) {
      OpenAPI.HEADERS = { "Authorization": templateRequest?.key?.data?.token };
      const apiClient = new ApiClient(OpenAPI);
      const templateChange = await apiClient.api.listTemplate(event.target.value, '', '', '', 1, 99, 'asc');
      let newTemplate = templateChange?.data?.records;
      setTemplate(newTemplate)
    }
    else {
      OpenAPI.HEADERS = { "Authorization": templateRequest?.key?.data?.token };
      const apiClient = new ApiClient(OpenAPI);
      const templateChange = await apiClient.api.listTemplate(event.target.value, tab, '', '', 1, 99, 'asc');
      let newTemplate = templateChange?.data?.records;
      setTemplate(newTemplate)
    }
    setKeywords(event.target.value)
  }
  const quantitylimit = (e: any) => {
    setNumber(e.target.value)
    setPage(1)
  };

  return (
    <div className="grid w-full">
      <Nav titleGray='' title="模板管理" titleBlack=""></Nav>
      <div className="h-screen w-full  login-background  pt-4">

        <div className="flex items-center mt-10 webpage-title pt-5  w-full" style={{ zIndex: "1" }} >
          {/**<div  style={{ fontSize: '14px' }}
            className="flex w-8/12 place-content-center justify-around mx-10">
           
              </div>*/}
          <div style={{ fontSize: '14px' }}
            className="flex w-full place-content-center justify-end  mx-10" >
            <div className='w-10/12 pl-1 pt-2 pr-1 flex '>
              {className.map((className: { name: any; value: any; }) => {
                const {
                  name, value
                } = className;
                return <p
                  onClick={function (event) { changeTab(value, ''); setTab(value); setPage(1); setKeywords('') }}
                  className={cx(
                    tab === value
                      ? 'text-primary-red border-b-primary-red'
                      : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                    'border-b-4 pb-2 font-semibold transition-all' +
                    ' px-2 ml-4 tracking-widest cursor-pointer')}
                >
                  {name}
                </p>
              })}
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
          <div className="flex flex-col items-center w-full pl-5 px-10 pb-5">

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
                to="/admin/newtemplate"
                prefetch="intent"
              ><button className='table-insert-btn mr-4' >+ 新增</button></Link>
            </div>
            <div className='DataTable-body  w-full mt-5 '>
              <div className='table-body px-8 py-8 flex flex-wrap'>
                {template.slice(((page - 1) * number), shownumber).map((template: { id: any; titleImg: any; name: any; category: any; smallImg: any; subTitle: any; select: any; }) => {
                  const {
                    id,  name, smallImg,  category } = template;
                  const editUrl = "/admin/edittemplate?template=" + id
                  return <div className='w-4/12 px-6'><Link
                    to={editUrl}
                    prefetch="intent">
                    <img src={smallImg}></img>
                    <div className='flex py-3'>
                      <a className='table-tag-class px-2'>{className[category].name}</a>
                      <div className="flex-grow"></div>
                      <div className='table-state-green flex w-2/12 pl-2'>
                        <div className='table-state-green-bell mr-2'></div>
                        <a>已發布</a>
                      </div>
                    </div>
                    <div className='table-tag-title mb-5'>{name}</div>
                  </Link>
                  </div>
                })}
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
