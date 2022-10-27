import Button from '~/components/common/Button';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mx-64 my-12 relative">
      <img src="/images/contract-cancel.svg" alt="contract-cancel"/>
      <Button
        className="self-center w-32 h-12 absolute bottom-6"
        type="circle"
        onClick={() => navigate('./../contract-cancel-done')}
      >
        送出
      </Button>
    </div>
  );
}
