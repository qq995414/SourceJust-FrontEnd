import Button from '~/components/common/Button';
import SideButtons from '~/components/SideButtons';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="px-32 grid grid-cols-2 pt-20">
      <div className="justify-self-center">
        <img src={'/images/projects-upload-files.svg'} alt="" /></div>
      <div className="flex flex-col text-xl">
        <div>
          <div> <span className="text-primary-red pr-6">專案名稱XXX</span>
            正式上線</div>
        </div>
        <div className="mt-8">保固已啟動，剩餘
          <span className="text-primary-red pl-1"> 1 年 5個月</span></div>
        <div className="flex-grow"></div>
        <Button
          className="mt-12 self-start text-base"
          type="circle"
          onClick={() => navigate('/admin/projects/progress')}
        >
          回到專案列表
        </Button>
        <SideButtons type="admin"/>
      </div>
    </div>
  );
}

