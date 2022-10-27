import TextInput from '~/components/common/TextInput';
import Button from '~/components/common/Button';
import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-center h-screen items-center overflow-hidden">
      <div className="flex flex-row w-full h-full">
        <div className="w-1/2 p-4 flex flex-col justify-center items-center">
          <img className="mb-5" src={'/images/logo.svg'} alt="" />
          <div className="flex text-lg m-2">
            <div className="tracking-[1em]">索爾斯科</div>
            <div>技</div>
          </div>
          <p
            className="text-center text-sm m-2
          text-primary-red tracking-widest">
            Source Solution
          </p>
          <p
            style={{ color: '#717274' }}
            className="text-center tracking-widest text-lg mt-3">客戶資料快速填寫</p>
          <div className="w-1/2 flex flex-col">
            <TextInput
              className="mt-16 mx-auto w-full"
              type="sign"

              placeholder="密碼"
            />
            <div className="text-right mt-4 mr-1">
            </div>
            <Button
              className="mt-28 self-center w-36 h-12"
              type="circle"
              onClick={() => navigate('./../create-project')}>
              進入
            </Button>
          </div>
        </div>
        <div className="h-screen w-1/2">
          <img
            className="w-full h-screen object-cover"
            src={'/images/login-bg.svg'}
            alt="" />
        </div>
      </div>
    </div>
  );
}
