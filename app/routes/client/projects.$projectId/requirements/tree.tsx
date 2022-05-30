import Button from '~/components/common/Button';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (<div className="h-screen w-full">
    <p className="text-center text-primary-red font-bold text-xl">樹狀圖</p>
    <div className="w-full flex items-end">
      <img
        className="w-11/12 mt-12"
        src={'/images/client-webReq-Tree.svg'}
        alt="" />
      <p className="ml-2 font-semibold tracking-widest text-primary-red">1/2</p>
      <button className=" bg-white shadow-xl rounded-full w-8 h-8">
        <div className="flex justify-center">
          <img src={'/images/client-treeBtn.svg'} alt="" />
        </div>
      </button>
    </div>
    <div className="mt-16 w-full h-20 text-center">
      <Button
        className="w-32"
        onClick={() => {
          navigate('../requirements/note');
        }}>下一步</Button>
    </div>
  </div>);
}
