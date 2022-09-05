import Cancel from './components/Cancel';
import Maintain from './components/Maintain';
import Progress from './components/Progress';
import Datatables from './components/datatables';
import Warranty from './components/Warranty';
import Button from '~/components/common/Button';
import Select from '~/components/Select';
import { MetaFunction, useNavigate, Link, Form } from 'remix';
import { SetStateAction, useState } from 'react';
import cx from 'classnames';
import Nav from '~/components/Nav';


export const meta: MetaFunction = () => {
  return { title: '總後台 ｜ 索爾斯科技', };
};

export default function Index() {
  const proposalCards = [
    {
      id: 0,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false
    },
    {
      id: 1,
      state: '下架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 2,
      state: '下架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false


    },
    {
      id: 3,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 4,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 5,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 6,
      state: '下架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 7,
      state: '下架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 8,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 9,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 10,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 11,
      state: '下架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 12,
      state: '下架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 13,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 14,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    },
    {
      id: 15,
      state: '上架',
      date: '2021-05-01',
      name: '《愛之船 Vessel of love》 Release Tour',
      content: '我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新',
      imgurl: '/images/clientexam_demo_1.png',
      select: false

    }
  ];
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();
  const [target, setTarget] = useState(1);
  const [isShowLink, setIsShowLink] = useState(false);
  const [number, setNumber] = useState(10);
  const [page, setPage] = useState(1);
  const [removePage, setRemovePage] = useState(false);
  const length = proposalCards.length
  const shownumber = number * page
  const lengthpage = Math.floor((length / number)) + 1
  const PreviousPage = () => {
    if (page >= 2)
      setPage(page - 1)
  };
  const NextPage = () => {
    if (page <= lengthpage - 1)
      setPage(page + 1)


  };
  const [names, setNames] = useState(['n', '2']);
  const nameslength = names.length

  const handleChange = (e: any) => {
    const name = e.target.getAttribute("name")

    if (e.target.checked) {
      names.push(name)
      //setNames(current => [...current, { checkid: e.target.name }]);
    } else {
      var index = names.indexOf(name);
      if (index > -1) { //Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
        names.splice(index, 1);
      }
    }
  };
  const quantitylimit = (e: any) => {
    setNumber(e.target.value)
    setPage(1)
  };



  return (
    <div className="grid w-full">
      {removePage == true &&
        <div>
          <div className="w-screen h-screen bg-gray-500 opacity-40 z-100 fixed" style={{ marginLeft: "-15.5rem" }}></div>
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
                onClick={() => setFirstTimeAccess(firstTimeAccess + 1)}>
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

                onClick={() => setTab(0)}
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
                onClick={() => setTab(1)}
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
                onClick={() => setTab(2)}
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
                onClick={() => setTab(3)}
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
                onClick={() => setTab(4)}
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
                onClick={() => setTab(5)}
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
            <img
              src="/icons/webpan.svg"
              alt=""
              onClick={() => {
                setIsShowLink(true);
              }}
              className="cursor-pointer"
            />
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

            <Form>
              <div className='DataTable-title w-full pt-5 pb-5 pl-5 flex  '>
                <div className='pt-2'>
                  顯示 {((page - 1) * number) + 1} -
                  {number * page < length ? shownumber : length}  筆，共 {length} 筆資料
                </div>

                <div className='flex-grow'></div>
                <div className=' mr-2'>
                  <input name="query" type="text" className='table-sreach' placeholder="請輸入文字" />
                </div>
                <Link
                  to="/admin/newblog"
                  prefetch="intent"
                ><button className='table-insert-btn mr-4' >+ 新增</button></Link>
              </div>
              <div className='DataTable-body  w-full mt-5 '>
                <div className='table-header flex pt-2 pb-2 pl-1 pr-1'>
                  <div className='w-1/12 text-center pl-2 pr-2'> <input type="checkbox" className='table-checkbox' />
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
                  {tab === 0 && proposalCards.slice(((page - 1) * number), shownumber).map(proposalCards => {
                    const {
                      id, state, date, name, content,
                      imgurl, select } = proposalCards;
                    let i = 0
                    return <div>
                      {
                        names.map(names => {
                          const checkid = names;
                          if (checkid == id) {
                            return <div className='flex  table-list-checked table-list'>
                              <div className={select === true ? 'flex  table-list-checked table-list' : 'table-list flex '}>
                                <div className='w-1/12 pl-2 pr-2 pt-3 text-center pl-2 pr-2'> <input name={id} type="checkbox" className={select === true ? 'table-checkbox Primary-Primary' : 'table-checkbox '} value={id} onChange={handleChange} />
                                </div>
                                <div className='w-2/12 pl-2 pr-2 pt-3'>
                                  {date}{id}
                                </div>
                                {state === '上架' &&
                                  <div className='w-1/12 pl-1 pt-2 pr-1 '>
                                    <div className='table-state-green flex w-8/12 pl-2'>
                                      <div className='table-state-green-bell mr-2'></div>
                                      上架
                                    </div>

                                  </div>
                                }
                                {state === '下架' &&
                                  <div className='w-1/12 pl-1 pt-3 pr-2 '>
                                    <div className=' table-state-red flex w-8/12  pl-2'>
                                      <div className='table-state-red-bell mr-2'></div>
                                      下架
                                    </div>

                                  </div>
                                }

                                <div className='w-2/12 pl-2 pr-2 pt-3 '>
                                  {name}
                                </div>
                                <div className='w-3/12 pl-2 pr-2 pt-3'>
                                  {content}
                                </div>
                                <div className='w-2/12 pl-2 pr-2 pt-3'>
                                  <img
                                    src={imgurl}
                                    className="cursor-pointer mx-auto"
                                  />
                                </div>
                                <div className='w-1/12 pl-2 pr-2 pt-3 flex'>
                                  <img
                                    className='w-4/12 mx-1'
                                    src="/icons/webpage-table-pan.svg"
                                    alt=""
                                    onClick={NextPage}
                                  />
                                  <img
                                    className='w-4/12 mx-1'
                                    src="/icons/webpage-table-remove.svg"
                                    alt=""
                                    onClick={() => setRemovePage(true)}
                                  />
                                </div>
                              </div>
                            </div>
                          }
                          else {
                            i = i + 1;
                            if (i == nameslength) {
                              return <div className='table-list flex'>
                                <div className={select === true ? 'flex  table-list-checked table-list' : 'table-list flex '}>
                                  <div className='w-1/12 pl-2 pr-2 pt-3 text-center pl-2 pr-2'> <input name={id} type="checkbox" className={select === true ? 'table-checkbox Primary-Primary' : 'table-checkbox '} value={id} onChange={handleChange} />
                                  </div>
                                  <div className='w-2/12 pl-2 pr-2 pt-3'>
                                    {date}{id}
                                  </div>
                                  {state === '上架' &&
                                    <div className='w-1/12 pl-1 pt-2 pr-1 '>
                                      <div className='table-state-green flex w-8/12 pl-2'>
                                        <div className='table-state-green-bell mr-2'></div>
                                        上架
                                      </div>

                                    </div>
                                  }
                                  {state === '下架' &&
                                    <div className='w-1/12 pl-1 pt-3 pr-2 '>
                                      <div className=' table-state-red flex w-8/12  pl-2'>
                                        <div className='table-state-red-bell mr-2'></div>
                                        下架
                                      </div>

                                    </div>
                                  }

                                  <div className='w-2/12 pl-2 pr-2 pt-3 '>
                                    {name}
                                  </div>
                                  <div className='w-3/12 pl-2 pr-2 pt-3'>
                                    {content}
                                  </div>
                                  <div className='w-2/12 pl-2 pr-2 pt-3'>
                                    <img
                                      src={imgurl}
                                      className="cursor-pointer mx-auto"
                                    />
                                  </div>
                                  <div className='w-1/12 pl-2 pr-2 pt-3  flex'>
                                    <Link
                                      className='w-4/12 mx-1 mt-20'
                                      to="/admin/editblog"
                                      prefetch="intent"
                                    >
                                      <img
                                        className='w-full'
                                        src="/icons/webpage-table-pan.svg"
                                        alt=""
                                        onClick={NextPage}
                                      /></Link>
                                    <a className='w-4/12 mx-1 mt-20'>  <img
                                      className='w-full'
                                      src="/icons/webpage-table-remove.svg"
                                      alt=""
                                      onClick={() => setRemovePage(true)}
                                    /></a>

                                  </div>
                                </div>
                              </div>
                            }
                          }

                        })}

                    </div>
                      ;
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
                    <select name="cars" id="cars" onChange={quantitylimit}>
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
            </Form>
          </div>
        </div>
      </div >
    </div >
  );
}
