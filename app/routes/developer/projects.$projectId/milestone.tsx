import Button from '~/components/common/Button';
import { useNavigate } from 'react-router';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="border-2 border-gray-300 p-4 mt-2">
      <p>Milestone</p>
      <Button
        type="circle"
        onClick={() => navigate('./../contract/amount')}
      >
        下一步
      </Button>
    </div>
  );
}
