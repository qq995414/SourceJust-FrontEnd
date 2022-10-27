import Button from '~/components/common/Button';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-4 mt-2">
      <h4 className="text-gray-500">＊完成日不得超過 2021年 10 月 31</h4>
      <Button
        className="self-center w-32 h-12"
        type="circle"
        onClick={() => navigate('./../ui')}
      >
        下一步
      </Button>
    </div>
  );
}
