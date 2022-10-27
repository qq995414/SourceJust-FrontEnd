import Button from '~/components/common/Button';
import { Link } from 'remix';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col pt-12 mx-36 h-screen ">
      <div className="flex mb-10 place-content-between">
        <Link
          className="flex justify-start items-center w-1/4"
          to="./../new-quotation">
          <div><img src="/images/xiaoyuhao.svg" alt="" /></div>
          <div className="text-primary-red ml-8 font-bold text-lg">
            回到上頁查看需求</div>
        </Link>
        <div>XXX專案 需求新增 報價合約</div>
        <div className="w-1/4"></div>
      </div>

      <Button
        className="mt-8 self-center"
        type="circle"
        onClick={() => navigate('./../requirements')}
      >
        送出
      </Button>
    </div>
  );
}
