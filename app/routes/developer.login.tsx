import TextInput from '~/components/common/TextInput';
import Button from '~/components/common/Button';
import { Link, useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-center h-screen items-center overflow-hidden">
      <div className="flex flex-row w-full h-full">
        <div className="w-1/2 p-4 flex flex-col justify-center items-center">
          <img className="mb-5" src={'/images/logo.svg'} alt="" />
          <p className="text-center tracking-widest text-lg m-2">索爾斯科技</p>
          <p
            className="text-center text-sm m-2
          text-primary-red tracking-widest">
            Source Solution
          </p>
          <p
            style={{ color: '#717274' }}
            className="text-center tracking-widest text-lg mt-3">工程師登入系統</p>
          <div className="w-1/2">
            <TextInput
              className="mt-10 mx-auto w-full"
              type="sign"
              placeholder="帳號"
            />
            <TextInput
              className="mt-16 mx-auto w-full"
              type="sign"
              placeholder="密碼"
            />
            <div className="text-right mt-4 mr-1">
              <Link
                style={{ color: '#983333' }}
                className="text-sm"
                to="/developer/forgot">忘記密碼</Link>
            </div>
            <div className="mt-16 text-center">
              <Button
                type="circle"
                onClick={() => navigate('/developer/sms-verify')}>
                登入
              </Button>
            </div>
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
