import Button from '~/components/common/Button';
import SideButtons from '~/components/SideButtons';
import TextArea from '~/components/common/TextArea';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen">
      <div className="text-sm shadow-md rounded-md p-5">
        <div className="w-full h-24">
          <p className="text-primary-red font-bold text-base mb-4">測試網址</p>
          <p className="text-primary-red my-4">前台網址</p>
          <div className="flex text-usual-gray my-4">
            <p className="w-52">xxxxxxxxxxxxxxx.com</p>
            <button className="text-primary-red text-xs">複製</button>
          </div>
        </div>

        <div className="w-full mt-9">
          <div className="items-center tracking-[0.1em]">
            <p className="text-sm text-primary-red ">後台網址</p>
            <div className="flex text-usual-gray my-4">
              <p className="w-52">xxxxxxxxxxxxxxx.com</p>
              <button className="text-primary-red text-xs">複製</button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm shadow-md rounded-md p-5 h-1/4 mt-5">
        <p className="text-base text-primary-red mt-2 font-bold">備註</p>
        <TextArea
          className="w-full text-left mt-4 text-[#BBBBBB]
          bg-primary-gray h-2/3 rounded-sm p-2 mx-auto"
          placeholder="輸入文字輸入文字輸入文字輸入文字輸入文字輸入文字輸入文字" />
      </div>

      <div className="w-full text-center mt-10">
        <Button
          className="h-12 w-32 mb-20"
          onClick={() => {
            navigate('../real-debug');
          }}>下一步</Button>
      </div>
      <SideButtons type="client"/>
    </div>

  );
}
