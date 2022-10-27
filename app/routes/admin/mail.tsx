
import { MetaFunction,  Link, useLoaderData } from 'remix';
import { useState } from 'react';
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
  const pages = await apiClient.api.listContact('', '', '', '', '', 1, 99, 'asc');
  //for (var i = 0; i <= pages.length; i++)
  const lodervalue = { pages: pages, key: user }
  return lodervalue;
};

export const meta: MetaFunction = () => {
  return { title: '總後台 ｜ 索爾斯科技', };
};

export default function Index() {
  const mailRequest = useLoaderData();
  let mailData = mailRequest?.pages?.data?.records;
  const [mail, setMail] = useState(mailData);
  const [tab, setTab] = useState(0);
  const [number, setNumber] = useState(10);
  const [page, setPage] = useState(1);
  const [removePage, setRemovePage] = useState(false);
  const [allChecked, setChecked] = useState(false);
  let length = mail.length
  const shownumber = number * page
  const lengthpage = Math.floor(((length - 1) / number)) + 1
  const [isReply, setIsReply] = useState(false);
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
    OpenAPI.HEADERS = { "Authorization": mailRequest?.key?.data?.token };
    const apiClient = new ApiClient(OpenAPI);
    if (tab == 0) {
      const mailChange = await apiClient.api.listContact(keywords, '', isReply, '', '', 1, 99, 'asc');
      let newblog = mailChange?.data?.records;
      setMail(newblog)
    } else {
      const mailChange = await apiClient.api.listContact(keywords, '', isReply, '', '', 1, 99, 'asc');
      let newblog = mailChange?.data?.records;
      setMail(newblog)
    }

  };

  let changeTab = async (e, word) => {

    OpenAPI.HEADERS = { "Authorization": mailRequest?.key?.data?.token };
    const apiClient = new ApiClient(OpenAPI);
    const mailChange = await apiClient.api.listContact('', '', e, '', '', 1, 99, 'asc');
    let newblog = mailChange?.data?.records;
    setMail(newblog)

    setNames(['n']);
    setChecked(false)

  }
  const allcheckbox = async (e: any) => {
    const first = ((page - 1) * number)
    if (e.target.checked) {
      for (var i = first; i < mail.length; i++) {
        names.push(mail[i].id)

      }
      setChecked(true)

    }
    else {
      setNames(['n']);
      setChecked(false)
    }
    OpenAPI.HEADERS = { "Authorization": mailRequest?.key?.data?.token };
    const apiClient = new ApiClient(OpenAPI);
    if (tab == 0) {
      const mailChange = await apiClient.api.listContact(keywords, '', isReply, '', '', 1, 99, 'asc');
      let newblog = mailChange?.data?.records;
      setMail(newblog)
    } else {
      const mailChange = await apiClient.api.listContact(keywords, '', isReply, '', '', 1, 99, 'asc');
      let newblog = mailChange?.data?.records;
      setMail(newblog)
    }
  }

  const [keywords, setKeywords] = useState('');
  let keywordApi = async event => {
    if (tab == 0) {
      const mailChange = await apiClient.api.listContact(keywords, '', isReply, '', '', 1, 99, 'asc');
      let newblog = mailChange?.data?.records;
      setMail(newblog)
    } else {
      const mailChange = await apiClient.api.listContact(keywords, '', isReply, '', '', 1, 99, 'asc');
      let newblog = mailChange?.data?.records;
      setMail(newblog)
    }
    setNames(['n']);
    setChecked(false)
    setKeywords(event.target.value)
  }
  const quantitylimit = (e: any) => {
    setNumber(e.target.value)
    setPage(1)
  };
  const removeapi = async () => {

    OpenAPI.HEADERS = { "Authorization": mailRequest?.key?.data?.token };
    const apiClient = new ApiClient(OpenAPI);
    for (var i = 1; i < names.length; i++) {
      const mailChange = await apiClient.api.deleteContact1(names[i]);
    }
    if (tab == 0) {
      const mailChange = await apiClient.api.listContact(keywords, '', isReply, '', '', 1, 99, 'asc');
      let newblog = mailChange?.data?.records;
      setMail(newblog)
    } else {
      const mailChange = await apiClient.api.listContact(keywords, '', isReply, '', '', 1, 99, 'asc');
      let newblog = mailChange?.data?.records;
      setMail(newblog)
    }
    setNames(['n']);
    setChecked(false)
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

      <Nav titleGray='' title="信件管理" titleBlack=""></Nav>
      <div className="h-screen w-full  login-background  pt-4">

        <div className="flex items-center mt-10 webpage-title pt-5  w-full" style={{ zIndex: "1" }} >
          {/**<div  style={{ fontSize: '14px' }}
            className="flex w-8/12 place-content-center justify-around mx-10">
           
              </div>*/}
          <div style={{ fontSize: '14px' }}
            className="flex w-full place-content-center justify-end  mx-10" >
            <div className='w-10/12 pl-1 pt-2 pr-1 flex '>
              <p

                onClick={function (event) { changeTab('', ''); setTab(0); setPage(1); setKeywords(''); }}
                className={cx(
                  tab === 0
                    ? 'text-primary-red border-b-primary-red'
                    : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                  'border-b-4 pb-2 font-semibold transition-all' +
                  ' px-2 ml-4 tracking-widest cursor-pointer')}
              >
                所有信件
              </p>
              <p
                onClick={function (event) { changeTab(true, ''); setTab(1); setPage(1); setKeywords(''); setIsReply(true) }}
                className={cx(
                  tab === 1
                    ? 'text-primary-red border-b-primary-red'
                    : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                  'border-b-4 pb-2 font-semibold transition-all' +
                  ' px-2 ml-4 tracking-widest cursor-pointer')}
              >
                已讀訊息
              </p>
              <p
                onClick={function (event) { changeTab(false, ''); setTab(2); setPage(1); setKeywords(''); setIsReply(false) }}
                className={cx(
                  tab === 2
                    ? 'text-primary-red border-b-primary-red'
                    : 'hover:text-red-900 border-b-[rgba(0,0,0,0)]',
                  'border-b-4 pb-2 font-semibold transition-all' +
                  ' px-2 ml-4 tracking-widest cursor-pointer')}
              >
                未讀訊息
              </p>
            </div>
            <div className="flex-grow"></div>

          </div>


        </div>
        <div className="flex flex-col mt-10">
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
                  公司名稱
                </div>
                <div className='w-1/12'>
                  聯絡人
                </div>
                <div className='w-1/12'>
                  狀態
                </div>
                <div className='w-1/12'>
                  聯絡電話
                </div>
                <div className='w-1/12'>
                  需要的服務
                </div>
                <div className='w-1/12'>
                  電子信箱
                </div>
                <div className='w-2/12'>
                  網頁需求
                </div>
                <div className='w-1/12'>
                  操作
                </div>
              </div>
              <div className='table-body pl-1'>
                {mail.slice(((page - 1) * number), shownumber).map((mail: { id: any; status: any; select: any; remark: any; createTime: any; company: any; name: any; service: any; email: any; mobile: any; select: any; }) => {
                  const {
                    id, company, name, service, email, mobile, remark, createTime, status,
                    select } = mail;
                  let i = false
                  const editUrl = "/admin/editmail?mail=" + id
                  names.map(names => {
                    const checkid = names;
                    if (checkid == id) {
                      i = true
                    }
                  });
                  if (i == true) {
                    return <div className='flex  table-list-checked table-list w-full' style={{minHeight:"80px"}}>
                      <div className={select === true ? 'flex  table-list-checked table-list w-full pt-2' : 'table-list flex w-full pt-2'} >
                        <div className='w-1/12 pl-2 pr-2 pt-3 text-center'>
                          <input name={id} type="checkbox" className={select === true ? 'table-checkbox Primary-Primary' : 'table-checkbox '} value={id} onChange={handleChange} checked="checked" />
                        </div>
                        <div className='w-2/12 pt-3'>
                          {createTime}
                        </div>
                        <div className='w-1/12 pt-3'>
                          {company}
                        </div>
                        <div className='w-1/12 pt-3'>
                          {name}
                        </div>
                        {status == "DONE" &&
                          <div className='w-1/12 pt-3 '>
                            <div className='table-state-green flex w-8/12 pl-2'>
                              <div className='table-state-green-bell mr-2'></div>
                              已回覆
                            </div>

                          </div>
                        }
                        {status === "READ" &&
                          <div className='w-1/12 pt-3'>
                            <div className=' table-state-red flex w-8/12  pl-2'>
                              <div className='table-state-red-bell mr-2'></div>
                              待回覆
                            </div>
                          </div>
                        }
                        {status === "INIT" &&
                          <div className='w-1/12 pt-3 '>
                            <div className=' table-state-yello flex w-8/12  pl-2'>
                              <div className='table-state-yello-bell mr-2'></div>
                              待處理
                            </div>
                          </div>
                        }
                        <div className='w-1/12 pt-3 '>
                          {mobile},
                        </div>
                        <div className='w-1/12 pt-3'>
                          {service}
                        </div>
                        <div className='w-1/12 pt-3 '>
                          {email}
                        </div>
                        <div className='w-2/12 pt-3 '>
                          {remark}
                        </div>
                        <div className='w-1/12 grid'>
                          <div className='flex items-center'>
                            <Link
                              className='w-4/12 mx-1'
                              to={editUrl}
                              prefetch="intent"
                            >
                              <img
                                className='w-full'
                                src="/icons/webpage-table-pan.svg"
                                alt=""
                              /></Link>
                            <a className='w-4/12 mx-1'>  <img
                              className='w-full'
                              src="/icons/webpage-table-remove.svg"
                              alt=""
                              onClick={() => setRemovePage(true)}
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  } else {
                    return <div className='table-list flex w-full' style={{minHeight:"80px"}}>
                      <div className={select === true ? 'flex  table-list-checked table-list w-full pt-2' : 'table-list flex w-full pt-2'}>
                        <div className='w-1/12 pt-3 text-center pl-2 pr-2'> <input name={id} type="checkbox" className={select === true ? 'table-checkbox Primary-Primary' : 'table-checkbox '} value={id} onChange={handleChange} />
                        </div>
                        <div className='w-2/12 pt-3'>
                          {createTime}
                        </div>
                        <div className='w-1/12 pt-3'>
                          {company}
                        </div>
                        <div className='w-1/12 pt-3'>
                          {name}
                        </div>
                        {status == "DONE" &&
                          <div className='w-1/12 pt-3'>
                            <div className='table-state-green flex w-8/12 pl-2'>
                              <div className='table-state-green-bell mr-2'></div>
                              已回覆
                            </div>

                          </div>
                        }
                        {status === "READ" &&
                          <div className='w-1/12 pt-3'>
                            <div className=' table-state-red flex w-8/12  pl-2'>
                              <div className='table-state-red-bell mr-2'></div>
                              待回覆
                            </div>
                          </div>
                        }
                        {status === "INIT" &&
                          <div className='w-1/12 pt-3 '>
                            <div className=' table-state-yello flex w-8/12  pl-2'>
                              <div className='table-state-yello-bell mr-2'></div>
                              待處理
                            </div>
                          </div>
                        }

                        <div className='w-1/12 pt-3 '>
                          {mobile},
                        </div>
                        <div className='w-1/12 pt-3'>
                          {service}
                        </div>
                        <div className='w-1/12 pt-3 '>
                          {email}
                        </div>
                        <div className='w-2/12 pt-3 '>
                          {remark}
                        </div>
                        <div className='w-1/12 grid'>
                          <div className='flex items-center'>
                            <Link
                              className='w-4/12 mx-1 '
                              to={editUrl}
                              prefetch="intent"
                            >
                              <img
                                className='w-full'
                                src="/icons/webpage-table-pan.svg"
                                alt=""
                              /></Link>
                            <a className='w-4/12 mx-1 '>  <img
                              className='w-full'
                              src="/icons/webpage-table-remove.svg"
                              alt=""
                              onClick={() => setRemovePage(true)}
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  }

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
