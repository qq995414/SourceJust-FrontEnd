import { MetaFunction, useLoaderData } from 'remix';
import { useState, useEffect } from 'react';
import Nav from '~/components/Nav';
import styles from "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { LoaderFunction, json } from 'remix';
import authenticator from "~/services/auth.server";
import { ApiClient, ContactsRequest,  OpenAPI } from 'app/ApiClient';


export const loader: LoaderFunction = async ({ request }) => {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "login",
  });
  OpenAPI.HEADERS = { "Authorization": user.data.token };
  const apiClient = new ApiClient(OpenAPI);
  const Class = await apiClient.api.listChannel('ARTICLE');
  const url = new URL(request.url);
  const mailId = url.search.replace("?mail=", "")
  const mailData = await apiClient.api.findOneContact(mailId);
  const lodervalue = { Class: Class, key: user, mailId: mailId, mailData: mailData };
  return lodervalue;
};

export const meta: MetaFunction = () => {
  return { title: '總後台 ｜ 索爾斯科技', };
};
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  const mailApi = useLoaderData();
  const mailData = mailApi?.mailData?.data;
  const [apiId, setApiId] = useState(mailData.id);
  const [companyName, setCompanyName] = useState(mailData.company);
  const [clientName, setClientName] = useState(mailData.name);
  const [gender, setGender] = useState(mailData.gender);
  const [service, setService] = useState(mailData.service);
  const [mobile, setMobile] = useState(mailData.mobile);
  const [email, setEmail] = useState(mailData.email);
  const [remark, setRemark] = useState(mailData.remark);
  const [status, setstatus] = useState(mailData.status);
  const [isReply, setisReply] = useState(mailData.isReply);

  const doneState = async ({ request }) => {
    //alert(classId+','+title+','+des+','+key+','+state)
   OpenAPI.HEADERS = { "Authorization": mailApi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);

    let ContactsRequest: ContactsRequest = {
      "company": companyName,
      "name": clientName,
      "gender": gender,
      "service":service,
      "mobile":mobile,
      "email": email,
      "remark": remark,
      "status":  'DONE',
      "isReply": isReply

    };    
    const pages = await apiClient.api.updateContact(apiId, ContactsRequest);
    window.location.href = "/admin/mail";
    return json(pages);
  }
  const initState = async ({ request }) => {
    OpenAPI.HEADERS = { "Authorization": mailApi?.key?.data.token };
    const apiClient = new ApiClient(OpenAPI);
    let ContactsRequest: ContactsRequest = {
      "company": companyName,
      "name": clientName,
      "gender": gender,
      "service":service,
      "mobile":mobile,
      "email": email,
      "remark": remark,
      "status": "INIT",
      "isReply": isReply
      
    };
    console.log(ContactsRequest);
    
    const pages = await apiClient.api.updateContact(apiId, ContactsRequest);
    window.location.href = "/admin/mail";
    return json(pages);
  }


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
                  className="border-2  w-20 text-white
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary"
                >
                  確定</button>
              </div>

            </div>
            <div className="flex flex-col mt-8 ">
              <div className='mx-10 bg-white px-5 py-5'>
                <div className="flex flex-col  pt-3 pl-5 w-full px-10 ">
                  <a className='font-bold'>公司名稱</a>
                  <a className="mt-1">{companyName}</a>
                  <hr className='mt-3'></hr>
                </div>
                <div className="flex flex-col  pt-8 pl-5 w-full px-10 ">
                  <a className='font-bold'>聯絡人姓名</a>
                  <a className="mt-1">{clientName}</a>
                  <hr className='mt-3'></hr>
                </div>
                <div className="flex flex-col  pt-8 pl-5 w-full px-10 ">
                  <a className='font-bold'>性別</a>
                  <a className="mt-1">{gender}</a>
                  <hr className='mt-3'></hr>
                </div>
                <div className="flex flex-col  pt-8 pl-5 w-full px-10 ">
                  <a className='font-bold'>需要的服務</a>
                  <a className="mt-1">{service}</a>
                  <hr className='mt-3'></hr>
                </div>
                <div className="flex flex-col  pt-8 pl-5 w-full px-10 ">
                  <a className='font-bold'>聯絡電話</a>
                  <a className="mt-1">{mobile}</a>
                  <hr className='mt-3'></hr>
                </div>
                <div className="flex flex-col  pt-8 pl-5 w-full px-10 ">
                  <a className='font-bold'>電子信箱</a>
                  <a className="mt-1">{email}</a>
                  <hr className='mt-3'></hr>
                </div>
                <div className="flex flex-col  pt-8 pl-5 w-full px-10 ">
                  <a className='font-bold'>網頁需求</a>
                  <a className="mt-1">{remark}</a>
                </div>
              </div>

            </div>
          </div>
          <div className='w-2/12 blog-details h-screen px-8 pt-20 fixed' style={{ right: '0px' }}>
            <div className='px-2' >
              <a>詳細資料</a>
            </div>
            <div className='grid pt-5 px-2'>
              <a>資料狀態</a>
              {status == "DONE" &&
                <div className='w-7/12 pl-1 pt-2 pr-1 '>
                  <div className='table-state-green flex w-8/12 pl-2'>
                    <div className='table-state-green-bell mr-2'></div>
                    已回覆
                  </div>

                </div>
              }
              {status === "READ" &&
                <div className='w-7/12 pl-1 pt-3 pr-2 '>
                  <div className=' table-state-red flex w-8/12  pl-2'>
                    <div className='table-state-red-bell mr-2'></div>
                    待回覆
                  </div>
                </div>
              }
              {status === "INIT" &&
                <div className='w-7/12 pl-1 pt-3 pr-2 '>
                  <div className=' table-state-yello flex w-8/12  pl-2'>
                    <div className='table-state-yello-bell mr-2'></div>
                    待處理
                  </div>
                </div>
              }
            </div>
            <div className='grid pt-5 px-2'>
              <a>建立時間</a>
              <a>{mailData.createTime}</a>
            </div>
            <div className='grid pt-5 px-2'>
              <a>最後更新時間</a>
              <a>{mailData.modifyTime}</a>
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
              onClick={doneState}>
              已回覆</button>
            <button
              className="border-2  mt-8 w-10/12 text-white
h-8 rounded-lg ml-3  font-semibold bg-Primary-3-Primary blog-clear-btn"
              onClick={initState}>
              待處理</button>
          </div>
        </div>
      </div >

    </div >
  );
}
