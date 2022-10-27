import Button from '~/components/common/Button';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="p-4 mt-2">
      <div className="p-4 mt-2 flex flex-col items-center">
        <img className="mt-8" src={'/images/ui-check.svg'} alt="" />
        <Button
          className="mt-16 w-32"
          type="circle"
          onClick={() => navigate('./../ui')}
        >
          登入
        </Button>
      </div>

    </div>
  );
}
