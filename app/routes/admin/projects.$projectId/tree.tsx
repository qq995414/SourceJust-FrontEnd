import Button from '~/components/common/Button';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="px-32 flex flex-col py-6">
      <div
        className="flex flex-col h-screen items-center
      place-content-center bg-gray-200 mx-8">
        <img className="mb-6" src="/images/vector.svg" alt="" />
        點擊或拖移檔案至此 （ .jpg / .png / .pdf ）
      </div>
      <Button
        className="mt-12 self-center"
        type="circle"
        onClick={() => navigate('./../server')}
      >
        下一步
      </Button>
    </div>
  );
}

