import Button from '~/components/common/Button';
import SideButtons from '~/components/SideButtons';
import Select from '~/components/Select';
import TextInput from '~/components/common/TextInput';
import TextArea from '~/components/common/TextArea';
import { useState } from 'react';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  const [target, setTarget] = useState(1);
  const [isLeft, setIsLeft] = useState(true);
  const [provided, setProvided] = useState(0);
  return (
    <div className="flex flex-col py-6">
      <div className="flex items-center mb-10">
        <SideButtons type="client"/>
        {provided == 0 &&
        <div
          className="grid grid-cols-3 bg-shallow-red w-1/3 h-12 cursor-pointer
        rounded-full">
          <div
            className="bg-primary-red flex items-center place-content-center
          text-white rounded-full"
          >公司提供</div>
          <div
            className="flex items-center place-content-center text-primary-red"
            onClick={() => {setProvided(1);setIsLeft(true);}}>客戶提供</div>
          <div
            className="flex items-center  place-content-center text-primary-red"
            onClick={() => {setProvided(2);setIsLeft(true);}}>不需要</div>
        </div>}
        {provided == 1 &&
        <div
          className="grid grid-cols-3 bg-shallow-red w-1/3 h-12 cursor-pointer
        rounded-full">
          <div
            className="flex items-center place-content-center text-primary-red"
            onClick={() => {setProvided(0);setIsLeft(true);}}>公司提供</div>
          <div
            className="bg-primary-red flex items-center place-content-center
        text-white rounded-full">
            客戶提供</div>
          <div
            className="flex items-center  place-content-center text-primary-red"
            onClick={() => {setProvided(2);setIsLeft(true);}}>不需要</div>
        </div>}
        {provided == 2 &&
        <div
          className="grid grid-cols-3 bg-shallow-red w-1/3 h-12 cursor-pointer
        rounded-full">
          <div
            className="flex items-center place-content-center text-primary-red"
            onClick={() => {setProvided(0);setIsLeft(true);}}>公司提供</div>
          <div
            className="flex items-center  place-content-center text-primary-red"
            onClick={() => {setProvided(1);setIsLeft(true);}}>
            客戶提供</div>
          <div
            className="bg-primary-red flex items-center place-content-center
          text-white rounded-full" >不需要</div>
        </div>}
      </div>
      <div className="w-full">
        {isLeft && provided == 0 &&
        <div>
          <div className="grid grid-cols-2 w-1/4 bg-shallow-red  rounded-full cursor-pointer">
            <div
              className="bg-primary-red h-12 flex items-center text-center
          text-white rounded-full place-content-center"
            >主機雲端管理
            </div>
            <div
              className="h-12 flex items-center text-center place-content-center
          text-primary-red "
              onClick={() => {
                setIsLeft(false);
              }}>網域
            </div>
          </div>
          <div className="flex w-full h-52 bg-white my-4 rounded-lg">
            <div className="self-center w-1/5">
              <div className="text-2xl font-bold text-center text-gray-500">
                小型方案
              </div>
            </div>
            <div
              className="flex flex-col items-center place-content-around py-12
             w-1/5">
              <div className="font-bold text-center text-gray-500">
                CPU雙核心
              </div>
              <div className="font-bold text-center text-gray-500">
                1G RAM
              </div>
              <div className="font-bold text-center text-gray-500">
                30GB 儲存空間
              </div>
            </div>
            <div className="flex flex-grow flex-col p-8">
              <div
                className="flex h-full place-content-between pr-12
              items-center">
                <div className="text-gray-600 space-y-1">
                  <p>· 1 個資料庫</p>
                  <p>· 流量每月 25Ｇ</p>
                  <p>· 每月最高5000名訪客</p>
                  <p>· 全天候監控網路安全性和 DDOS 防護</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <Button
                    className="w-32 h-12"
                    type="circle"
                    onClick={() => {}}
                  >
                    已選擇
                  </Button>
                  <p className="text-primary-red text-sm">到期日：2022.03.05</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p> 1.本服務因資安考量，無法開發FTP或其他主機存取權限予甲方，亦無法放置非乙方撰寫之程式。</p>
            <p>2.本服務內容依附件『報價單』記載之規格說明提供於甲方使用，不含版面與程式變動費用。</p>
            <p>3.本合約自甲方網站系統自簽約日於主機後始生效，期限為一年。繼續使用則依雙方議定主機規格及價格收費。
              若合約到期經乙方通知後，若甲方無續約須求則自動終止合約。</p>
            <p>4.甲方充分了解本服務，因主機在進行更新、使用者增加、地區連線不穩
              會耗用大量資源而造成服務有不穩定或中斷的現象。前述事項為不可歸責於乙方情事，
              惟乙方仍應盡善良管理之責，調節主機使用資源，並向甲方提出解決方案。
            </p>
          </div>
        </div>
        }
        {!isLeft && provided == 0 &&
        <div>
          <div className="grid grid-cols-2 w-1/4 bg-shallow-red  rounded-full cursor-pointer">
            <div
              className="h-12 flex items-center text-center place-content-center
          text-primary-red "
              onClick={() => {
                setIsLeft(true);
              }}>主機雲端管理
            </div>
            <div
              className="bg-primary-red h-12 flex items-center text-center
          text-white rounded-full place-content-center"
            >網域
            </div>
          </div>
          <div
            className="flex w-full h-52 bg-white my-4 rounded-lg
           items-center">
            <div className="font-medium text-xl mr-56">sourcejust.com</div>
            <div className="text-primary-red">到期日：2022.03.05</div>
          </div>
          <div>
            <p> 1.本服務因資安考量，無法開發FTP或其他主機存取權限予甲方，亦無法放置非乙方撰寫之程式。</p>
            <p>2.本服務內容依附件『報價單』記載之規格說明提供於甲方使用，不含版面與程式變動費用。</p>
            <p>3.本合約自甲方網站系統自簽約日於主機後始生效，期限為一年。繼續使用則依雙方議定主機規格及價格收費。
              若合約到期經乙方通知後，若甲方無續約須求則自動終止合約。</p>
            <p>4.甲方充分了解本服務，因主機在進行更新、使用者增加、地區連線不穩
              會耗用大量資源而造成服務有不穩定或中斷的現象。前述事項為不可歸責於乙方情事，
              惟乙方仍應盡善良管理之責，調節主機使用資源，並向甲方提出解決方案。
            </p>
          </div>
        </div>
        }
        {isLeft && provided == 1 &&
        <div>
          <div className="grid grid-cols-2 w-1/4 bg-shallow-green rounded-full">
            <div
              className="bg-deep-green h-12 flex items-center
         text-white rounded-full place-content-center"
            >主機雲端管理
            </div>
            <div
              className="h-12 flex items-center place-content-center
               text-deep-green "
              onClick={() => {
                setIsLeft(false);
              }}>網域
            </div>
          </div>
          <div>
            <div className="flex my-8 items-center text-gray-500 text-center">
              <div className="text-lg font-semibold w-52">主機商</div>
              <div className="w-full h-12">
                <Select<number>
                  className="bg-gray-100 text-black h-12 relative"
                  value = {target}
                  onChange={setTarget}
                  options= {[
                    {
                      value:1,
                      label:''
                    },
                  ]} />
              </div>
            </div>
            <div className="flex my-8 items-center text-gray-500 text-center">
              <div className="text-lg font-semibold w-52">主機商網址</div>
              <TextInput
                className="w-full h-12"
              />
            </div>
            <div className="flex my-8 items-center text-gray-500 text-center">
              <div className="text-lg font-semibold w-52">帳號</div>
              <TextInput
                className="w-full h-12"
              />
            </div>
            <div className="flex my-8 items-center text-gray-500 text-center">
              <div className="text-lg font-semibold w-52">密碼</div>
              <TextInput
                className="w-full h-12"
              />
            </div>
            <div className="flex my-8 text-gray-500 text-center">
              <div className="text-lg font-semibold w-52">備註</div>
              <TextArea
                className="w-full text-left bg-primary-gray h-48
                rounded-lg p-2 mx-auto"
                placeholder="" />
            </div>
          </div>
          <hr />
          <div className="text-lg font-semibold w-44 text-center my-12">
            開通權限</div>
          <div className="w-full pl-56 self-center">
            <div className="flex my-12 text-gray-500 font-semibold text-lg">
              <div className="w-1/3 ">電子郵件</div>
              <div className="w-64 text-center">審核狀態</div>
              <div className="w-64 text-center">操作</div>
            </div>
            <div className="flex my-12 items-center">
              <div className="w-1/3 flex place-content-between pr-6">
                <div> abcdefghijk@gmail.com</div>
                <div
                  className="text-primary-red cursor-pointer"
                  onClick={()=>{}}>複製</div>
              </div>
              <div className="w-64 text-center flex place-content-center">
                <div className="flex text-green-400 space-x-4 font-semibold">
                  <img src="/images/green√.svg" alt="√" />
                  <div>已開通</div>
                </div>
              </div>
              <div className="w-64 text-center">
                <Button
                  className="bg-usual-gray shadow-md w-28 cursor-default"
                  type="circle"
                  onClick={() => { }}>已寄送</Button>
              </div>
            </div>
            <div className="flex my-12 items-center">
              <div className="w-1/3 flex place-content-between pr-6">
                <div> abcdefghijk@gmail.com</div>
                <div
                  className="text-primary-red cursor-pointer"
                  onClick={()=>{}}>複製</div>
              </div>
              <div className="w-64 text-center flex place-content-center">
                <div className="flex text-green-400 space-x-4 font-semibold">
                  <img src="/images/green√.svg" alt="√" />
                  <div>已開通</div>
                </div>
              </div>
              <div className="w-64 text-center">
                <Button
                  className="bg-usual-gray shadow-md w-28 cursor-default"
                  type="circle"
                  onClick={() => { }}>已寄送</Button>
              </div>
            </div>
            <div className="flex my-12 items-center">
              <div className="w-1/3 flex place-content-between pr-6">
                <div> abcdefghijk@gmail.com</div>
                <div
                  className="text-primary-red cursor-pointer"
                  onClick={()=>{}}>複製</div>
              </div>
              <div className="w-64 text-center flex place-content-center">
                <div className="flex text-red-400 space-x-4 font-semibold">
                  <img src="/images/red×.svg" alt="×" />
                  <div>未開通</div>
                </div>
              </div>
              <div className="w-64 text-center">
                <Button
                  className="shadow-md w-28"
                  type="circle"
                  onClick={() => {}}>寄送邀請</Button>
              </div>
            </div>
          </div>
        </div>
        }
        {!isLeft && provided == 1 &&
        <div>
          <div className="grid grid-cols-2 w-1/4 bg-shallow-green rounded-full">
            <div
              className="h-12 flex items-center place-content-center
               text-deep-green "
              onClick={() => {
                setIsLeft(true);
              }}>主機雲端管理
            </div>
            <div
              className="bg-deep-green h-12 flex items-center
         text-white rounded-full place-content-center"
            >網域
            </div>
          </div>
          <div>
            <div className="flex my-8 items-center text-gray-500 text-center">
              <div className="text-lg font-semibold w-52">網域商</div>
              <div className="w-full h-12">
                <Select<number>
                  className="bg-gray-100 text-black h-12 relative"
                  value = {target}
                  onChange={setTarget}
                  options= {[
                    {
                      value:1,
                      label:''
                    },
                  ]} />
              </div>
            </div>
            <div className="flex my-8 items-center text-gray-500 text-center">
              <div className="text-lg font-semibold w-52">網域商網址</div>
              <TextInput
                className="w-full h-12"
              />
            </div>
            <div className="flex my-8 items-center text-gray-500 text-center">
              <div className="text-lg font-semibold w-52">使用的網址</div>
              <TextInput
                className="w-full h-12"
              />
            </div>
            <div className="flex my-8 items-center text-gray-500 text-center">
              <div className="text-lg font-semibold w-52">帳號</div>
              <TextInput
                className="w-full h-12"
              />
            </div>
            <div className="flex my-8 items-center text-gray-500 text-center">
              <div className="text-lg font-semibold w-52">密碼</div>
              <TextInput
                className="w-full h-12"
              />
            </div>
            <div className="flex my-8 text-gray-500 text-center">
              <div className="text-lg font-semibold w-52">備註</div>
              <TextArea
                className="w-full text-left bg-primary-gray h-48
                rounded-lg p-2 mx-auto"
                placeholder="" />
            </div>
          </div>
          <hr />
          <div className="text-lg font-semibold w-44 text-center my-12">
            開通權限</div>
          <div className="w-full pl-56 self-center">
            <div className="flex my-12 text-gray-500 font-semibold text-lg">
              <div className="w-1/3 ">電子郵件</div>
              <div className="w-64 text-center">審核狀態</div>
              <div className="w-64 text-center">操作</div>
            </div>
            <div className="flex my-12 items-center">
              <div className="w-1/3 flex place-content-between pr-6">
                <div> abcdefghijk@gmail.com</div>
                <div
                  className="text-primary-red cursor-pointer"
                  onClick={()=>{}}>複製</div>
              </div>
              <div className="w-64 text-center flex place-content-center">
                <div className="flex text-green-400 space-x-4 font-semibold">
                  <img src="/images/green√.svg" alt="√" />
                  <div>已開通</div>
                </div>
              </div>
              <div className="w-64 text-center">
                <Button
                  className="bg-usual-gray shadow-md w-28 cursor-default"
                  type="circle"
                  onClick={() => { }}>已寄送</Button>
              </div>
            </div>
            <div className="flex my-12 items-center">
              <div className="w-1/3 flex place-content-between pr-6">
                <div> abcdefghijk@gmail.com</div>
                <div
                  className="text-primary-red cursor-pointer"
                  onClick={()=>{}}>複製</div>
              </div>
              <div className="w-64 text-center flex place-content-center">
                <div className="flex text-green-400 space-x-4 font-semibold">
                  <img src="/images/green√.svg" alt="√" />
                  <div>已開通</div>
                </div>
              </div>
              <div className="w-64 text-center">
                <Button
                  className="bg-usual-gray shadow-md w-28 cursor-default"
                  type="circle"
                  onClick={() => { }}>已寄送</Button>
              </div>
            </div>
            <div className="flex my-12 items-center">
              <div className="w-1/3 flex place-content-between pr-6">
                <div> abcdefghijk@gmail.com</div>
                <div
                  className="text-primary-red cursor-pointer"
                  onClick={()=>{}}>複製</div>
              </div>
              <div className="w-64 text-center flex place-content-center">
                <div className="flex text-red-400 space-x-4 font-semibold">
                  <img src="/images/red×.svg" alt="×" />
                  <div>未開通</div>
                </div>
              </div>
              <div className="w-64 text-center">
                <Button
                  className="shadow-md w-28"
                  type="circle"
                  onClick={() => {}}>寄送邀請</Button>
              </div>
            </div>
          </div>
        </div>
        }
        {provided == 2 &&
          <div className="flex flex-col w-full items-center pt-12">
            <img src="/images/host-info.svg" alt="" />
            <div className="text-lg text-gray-500 mt-16 mb-24">
              客戶自行提供主機
            </div>
            <Button
              className="shadow-md w-32 h-12 self-center"
              type="circle"
              onClick={() => {}}>登入</Button>
            {/* 不知道登入到哪 */}
          </div>
        }
      </div>
    </div>
  );
}
