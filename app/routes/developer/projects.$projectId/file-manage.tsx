import SideButtons from '~/components/SideButtons';
import Button from '~/components/common/Button';
import TextArea from '~/components/common/TextArea';
import cx from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'remix';

export default function Index() {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();
  const [isShowLink, setIsShowLink] = useState(false);
  return (
    <div className="flex flex-col tracking-[0.12em]">
      <SideButtons type="developer"/>
      <div className="flex items-center mt-12">
        <div className="flex place-content-center justify-around w-1/4">
          <p
            onClick={() => setTab(0)}
            className={cx(
              tab === 0
                ? 'text-primary-red border-b-primary-red'
                : 'hover:text-red-900 border-b-[rgba(0,0,0,0)] text-usual-gray',
              'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
          >
            一般檔案
          </p>
          <p
            onClick={() => setTab(1)}
            className={cx(
              tab === 1
                ? 'text-primary-red border-b-primary-red'
                : 'hover:text-red-900 border-b-[rgba(0,0,0,0)] text-usual-gray',
              'border-b-4 pb-2 font-semibold transition-all' +
                ' px-2 tracking-widest cursor-pointer')}
          >
            憑證、模板
          </p>
        </div>
        <div className="flex-grow"></div>
        <div>
          <Button
            className="border-2 border-primary-red mx-1"
            type="deactivated"
            onClick={() => {setIsShowLink(true);}}
          >
            備註
          </Button>
          <Button
            className="border-2 border-primary-red mx-1"
            type="deactivated"
            onClick={() => {}}
          >
            全部下載
          </Button>
        </div>
        {isShowLink &&
        <div className="fixed top-0 bottom-0 left-0 right-0">
          <div className="w-screen h-screen bg-gray-500 opacity-40 z-10"></div>
          <div
            className="w-5/12 h-96 bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col items-center" >
            <div className="w-full flex justify-end p-3">
              <img
                className="w-4 cursor-pointer"
                src="/images/client-cross.svg"
                alt=""
                onClick={()=>setIsShowLink(false)}/>
            </div>
            <p className="font-semibold text-lg text-primary-red mt-5">備註</p>
            <textarea
              className="font-base text-usual-gray mt-5 bg-white w-4/5 h-60
             outline-none rounded-md p-5"
              placeholder="輸入文字輸入文字輸入文字輸入文字輸入文字輸入文字輸入文字"/>

          </div>
        </div>}
      </div>
      <div
        className="flex divide-x h-14 font-bold text-gray-500 mt-5 w-full
      divide-gray-300 text-center bg-primary-gray text-lg">
        <div className="p-4 w-20">No.</div>
        <div className="p-4 w-1/4">檔案名稱</div>
        <div className="p-4 w-32">文件大小</div>
        <div className="p-4 w-1/4 text-center">更新時間</div>
        <div className="p-4 w-1/4"></div>
      </div>
      <div
        className="flex divide-x h-14 text-gray-500 w-full
      divide-gray-300 text-center bg-white tracking-[0.12em]">
        <div className="p-4 w-20">1</div>
        <div className="p-4 w-1/4 text-left text-[#036EEB] underline">
          原始檔.pdf</div>
        <div className="p-4 w-32">100MB</div>
        <div className="p-4 w-1/4 text-center">05-18 12:00</div>
        <div className="p-4 w-1/4 text-primary-red cursor-pointer">下載</div>
      </div>
      <div
        className="flex divide-x h-14 text-gray-500 w-full
      divide-gray-300 text-center bg-primary-gray">
        <div className="p-4 w-20">2</div>
        <div className="p-4 w-1/4 text-left text-[#036EEB] underline">
          原始檔.pdf</div>
        <div className="p-4 w-32">100MB</div>
        <div className="p-4 w-1/4 text-center">05-18 12:00</div>
        <div className="p-4 w-1/4 text-primary-red cursor-pointer">下載</div>
      </div>
      <div
        className="flex divide-x h-14 text-gray-500 w-full
      divide-gray-300 text-center bg-white">
        <div className="p-4 w-20">3</div>
        <div className="p-4 w-1/4 text-left text-[#036EEB] underline">
          原始檔.pdf</div>
        <div className="p-4 w-32">100MB</div>
        <div className="p-4 w-1/4 text-center">05-18 12:00</div>
        <div className="p-4 w-1/4 text-primary-red cursor-pointer">下載</div>
      </div>
      <div
        className="flex divide-x h-14 text-gray-500 w-full
      divide-gray-300 text-center bg-primary-gray">
        <div className="p-4 w-20">4</div>
        <div className="p-4 w-1/4 text-left text-[#036EEB] underline">
          原始檔.pdf</div>
        <div className="p-4 w-32">100MB</div>
        <div className="p-4 w-1/4 text-center">05-18 12:00</div>
        <div className="p-4 w-1/4 text-primary-red cursor-pointer">下載</div>
      </div>
      <div
        className="flex divide-x h-14 text-gray-500 w-full
      divide-gray-300 text-center bg-white">
        <div className="p-4 w-20">5</div>
        <div className="p-4 w-1/4 text-left text-[#036EEB] underline">
          原始檔.pdf</div>
        <div className="p-4 w-32">100MB</div>
        <div className="p-4 w-1/4 text-center">05-18 12:00</div>
        <div className="p-4 w-1/4 text-primary-red cursor-pointer">下載</div>
      </div>
      <div
        className="flex divide-x h-14 text-gray-500 w-full
      divide-gray-300 text-center bg-primary-gray">
        <div className="p-4 w-20"></div>
        <div className="p-4 w-1/4 text-left text-[#036EEB] underline">
        </div>
        <div className="p-4 w-32"></div>
        <div className="p-4 w-1/4 text-center"></div>
        <div className="p-4 w-1/4 text-primary-red"></div>
      </div>
      <div
        className="flex divide-x h-14 text-gray-500 w-full
      divide-gray-300 text-center bg-white">
        <div className="p-4 w-20"></div>
        <div className="p-4 w-1/4 text-left text-[#036EEB] underline">
        </div>
        <div className="p-4 w-32"></div>
        <div className="p-4 w-1/4 text-center"></div>
        <div className="p-4 w-1/4 text-primary-red"></div>
      </div>
      <div
        className="flex divide-x h-14 text-gray-500 w-full
      divide-gray-300 text-center bg-primary-gray">
        <div className="p-4 w-20"></div>
        <div className="p-4 w-1/4 text-left text-[#036EEB] underline">
        </div>
        <div className="p-4 w-32"></div>
        <div className="p-4 w-1/4 text-center"></div>
        <div className="p-4 w-1/4 text-primary-red"></div>
      </div>
    </div>
  );
}
