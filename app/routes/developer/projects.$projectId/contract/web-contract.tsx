import Button from '~/components/common/Button';
import TextInput from '~/components/common/TextInput';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen">
      <div
        className="w-full bg-primary-gray h-12 flex
      justify-center items-center">
        <p className="text-xl tracking-[0.12em]">匯款資料</p>
      </div>
      <div className="flex flex-col w-full text-xl h-96 p-5">
        <div className="w-full flex my-6 justify-between">
          <div className="w-1/3 flex items-center">
            <p className="w-1/3">代碼：</p>
            <TextInput
              className="h-12 p-3 w-3/4 text-usual-gray"

              placeholder=""
            />
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <p className="w-1/6">銀行：</p>
            <TextInput
              className="h-12 p-3 w-2/3 text-usual-gray "

              placeholder=""
            />
          </div>
          <div className="flex w-1/3 items-center">
            <p className="w-1/4">分行：</p>
            <TextInput
              className="h-12 p-3 w-3/4"

              placeholder=""
            />
          </div>
        </div>
        <div>
          <div className="flex w-full items-center my-2">
            <p className="w-[80px]">帳號：</p>
            <TextInput
              className="h-12 p-3 w-1/2 tracking-[0.15em] text-usual-gray"

              placeholder=""
            />
          </div>
          <div className="flex w-full items-center my-6">
            <p className="w-[80px]">戶名：</p>
            <TextInput
              className="h-12 p-3 w-1/2 text-usual-gray"

              placeholder=""
            />
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-6">
        <Button
          className="w-32 h-12"
          onClick={() => {
            navigate('../github');
          }}>
          下一步
        </Button>
        <p
          className="text-xs text-usual-gray mt-5 tracking-[0.12em]">
          匯款完成請點選下一步填寫匯款後五碼</p>
      </div>
    </div>
  );
}
