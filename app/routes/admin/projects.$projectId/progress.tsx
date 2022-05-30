import Button from '~/components/common/Button';
import SideButtons from '~/components/SideButtons';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="px-32 flex flex-col py-6">
      <h1 className="text-primary-red font-black text-2xl">專案人員進度</h1>
      <div className="w-full h-52 bg-gray-50 flex items-center my-6">
        <div className="flex items-center ml-12">
          <img src="/images/round-portrait.svg" alt="portrait" />
          <div className="flex flex-col font-medium w-28 items-center">
            <div className="text-primary-red">設計師</div>
            <div>李小花</div>
          </div>
          <div>
            <img src="/images/進度條.svg" alt="進度條" />
          </div>
        </div>
      </div>
      <div className="w-full h-52 bg-gray-50 flex items-center my-6">
        <div className="flex items-center ml-12">
          <img src="/images/round-portrait.svg" alt="portrait" />
          <div className="flex flex-col font-medium w-28 items-center">
            <div className="text-primary-red">設計師</div>
            <div>李小花</div>
          </div>
          <div>
            <img src="/images/進度條.svg" alt="進度條" />
          </div>
        </div>
      </div>
      <div className="w-full h-52 bg-gray-50 flex items-center my-6">
        <div className="flex items-center ml-12">
          <img src="/images/round-portrait.svg" alt="portrait" />
          <div className="flex flex-col font-medium w-28 items-center">
            <div className="text-primary-red">設計師</div>
            <div>李小花</div>
          </div>
          <div>
            <img src="/images/進度條.svg" alt="進度條" />
          </div>
        </div>
      </div>
      <Button
        className="mt-12 self-center"
        type="circle"
        onClick={() => navigate('./../done')}
      >
        下一步
      </Button>
      <SideButtons type="admin"/>
    </div>
  );
}

