import TextInput from '~/components/common/TextInput';
import Button from '~/components/common/Button';
import { useState } from 'react';
import { useNavigate } from 'remix';

export default function Index() {
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-center
    h-screen items-center overflow-hidden">
      <div className="flex flex-row w-full h-full">
        <div
          className="w-1/2 p-4 flex flex-col
        justify-center items-center">
          {!isSuccess && <div
            className="w-full flex flex-col
          justify-center items-center">
            <p className="text-center text-zinc-500 text-lg">忘記密碼</p>
            <div className="w-1/2">
              <TextInput
                className="mt-10 mx-auto w-full"
                type="sign"
                placeholder="名稱"
              />
              <p className="text-xs text-zinc-300 mt-3 mb-12">請填寫真實姓名或公司姓名</p>
              <TextInput
                className="mt-10 mx-auto w-full"
                type="sign"
                placeholder="電子郵件" />
              <div className="mt-28 text-center">
                <Button
                  type="circle"
                  onClick={() => {
                    setIsSuccess(true);
                  }}
                >
                  提交
                </Button>
              </div>
            </div>
          </div>}
          {isSuccess && <div
            className="w-full flex
        flex-col justify-center items-center">
            <p className="text-zinc-300">已收到您的回覆, 會有專人與你聯絡,</p>
            <p className="text-zinc-300 mb-28">再給您新的密碼！</p>
            <Button
              type="circle"
              onClick={() => navigate('/designer/login')}>返回登入頁</Button>
          </div>}
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

