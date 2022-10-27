import Button from '~/components/common/Button';
import { useNavigate } from 'remix';
import { useState } from 'react';

export default function Index() {
  const navigate = useNavigate();
  const [isShowLink, setIsShowLink] = useState(false);
  const [isReady, setIsReady] = useState(false);
  return (
    <div>
      {!isReady &&
        <div className="px-32 flex flex-col items-center py-6">
          <div> <img src="/images/contracting.svg" alt="contracting" /></div>
          <div className="mt-4 text-gray-600">正在等待客戶簽署.....</div>
          <div onClick={()=>{setIsReady(true);}}>
          </div>
          <div
            className="font-semibold text-lg text-primary-red mt-6
             cursor-pointer"
            onClick={()=>{setIsShowLink(true);}}>查看客戶流程</div>
          <Button
            className="mt-12 self-center w-32 bg-usual-gray"
            type="circle"
            onClick={() => {}}
          >
            下一步
          </Button>
        </div>
      }
      {isReady &&
      <div className="px-32 flex flex-col items-center py-6">
        <div> <img src="/images/contracted.svg" alt="contracted" /></div>
        <div className="mt-4 text-gray-600">客戶已簽署完畢</div>
        <div
          className="font-semibold text-lg text-primary-red mt-6 cursor-pointer"
          onClick={()=>{setIsShowLink(true);}}>查看客戶流程</div>
        <Button
          className="mt-12 self-center w-32"
          type="circle"
          onClick={() => navigate('./../milestone')}
        >
          下一步
        </Button>
      </div>
      }
      {isShowLink &&
        <div className="fixed top-0 bottom-0 left-0 right-0">
          <div
            className="w-screen h-screen bg-gray-500
              opacity-40 z-10"></div>
          <div
            className="w-1/2 h-1/3 bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col items-center pt-6" >
            <p
              className="font-semibold text-xl self-center
          mb-6 text-primary-red">客戶進度</p>
            <img src="/images/進度條.svg" alt="進度條" />
            <Button
              onClick={() => { setIsShowLink(false); }}
              className="w-32 text-sm font-medium mt-8 h-10 self-center"
            >確認
            </Button>
          </div>
        </div>}
    </div>
  );
}

