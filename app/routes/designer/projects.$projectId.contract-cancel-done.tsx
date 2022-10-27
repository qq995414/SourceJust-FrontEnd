import Button from '~/components/common/Button';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center pt-48">
      <p className="text-xl text-gray-500 tracking-widest">您已簽署完畢，與
        <span className="text-primary-red">專案名稱XXX </span>
        正式解約，請下載合約以保存，</p>
      <p className="text-xl text-gray-500 tracking-widest">避免造成其爭議，其他文字文字</p>
      <div
        className="flex w-1/3 h-24 shadow-md rounded-lg py-8 items-center
       text-xl pl-6 mt-24 mb-44">
        <div
          className="text-blue-500 underline w-2/3 cursor-pointer"
          onClick={()=>{}}>解約合約.pdf</div>
        <div className="h-full border-l-2 border-gray-300 mr-4"></div>
        <div
          className="flex-grow text-primary-red text-center cursor-pointer"
          onClick={()=>{}}>下載</div>
      </div>
      <Button
        className="w-36 h-12"
        type="circle"
        onClick={() => navigate('./../../')}
      >
        回到專案列表
      </Button>
    </div>
  );
}
