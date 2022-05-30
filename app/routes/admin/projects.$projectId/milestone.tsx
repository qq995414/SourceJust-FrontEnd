import Button from '~/components/common/Button';
import SideButtons from '~/components/SideButtons';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="px-32 flex flex-col py-6">
      <SideButtons type="admin"/>
      <Button
        className="mt-12 self-center"
        type="circle"
        onClick={() => navigate('./../github')}
      >
        下一步
      </Button>
    </div>
  );
}

