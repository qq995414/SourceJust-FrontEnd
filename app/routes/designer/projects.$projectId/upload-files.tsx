import Button from '~/components/common/Button';
import TextArea from '~/components/common/TextArea';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-8">
      <div className="p-4 bg-primary-gray text-gray-400 rounded-md h-60">
        <div className="h-12"> 設計檔</div>
        <div className="grid place-items-center">
          <img className="mb-6" src="/images/vector.svg" alt="" />
          點擊或拖移檔案至此
        </div>
      </div>
      <div className="p-4 bg-primary-gray text-gray-400 rounded-md h-60">
        <div className="h-12"> 字型檔</div>
        <div className="grid place-items-center">
          <img className="mb-6" src="/images/vector.svg" alt="" />
          點擊或拖移檔案至此
        </div>
      </div>
      <div className="p-4 bg-primary-gray text-gray-400 rounded-md h-60">
        <div className="h-12"> 其他資料（可上傳多個檔案）</div>
        <div className="grid  place-items-center">
          <img className="mb-6" src="/images/vector.svg" alt="" />
          點擊或拖移檔案至此
        </div>
      </div>
      <div className="col-span-3 relative">
        <div className="text-gray-400 absolute top-4 left-4">備註說明</div>
        <TextArea
          className="w-full pt-12 px-4 rounded-md bg-primary-gray h-60"
        />
      </div>
      <Button
        className="col-span-3 place-self-center mb-10"
        type="circle"
        onClick={() => navigate('../done')}
      >
        下一步
      </Button>
    </div>
  );
}
