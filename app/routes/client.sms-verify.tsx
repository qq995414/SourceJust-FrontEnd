import TextInput from '~/components/common/TextInput';
import Button from '~/components/common/Button';
import { useNavigate } from 'remix';
import React, { useState } from 'react';

function Reminder() {
  const [counter, setCounter] = useState(180);
  return (
    <div>
      驗證碼已寄出，<span>{counter}</span>秒後失效
    </div>
  );
}

export default function Index() {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(0);
  return (
    <div
      className="flex justify-center h-screen items-center overflow-hidden">
      {isSuccess == 0 && <div className="flex flex-row w-full h-full">
        <div className="flex flex-row w-full h-full">
          <div className="w-1/2 p-4 flex flex-col justify-center items-center">
            <p
              style={{ color: '#717274' }}
              className="text-center tracking-widest text-lg mb-5">手機驗證</p>
            <div className="w-1/2">
              <TextInput
                className="my-16 mx-auto w-full"
                type="sign"

                placeholder="輸入手機號碼"
              />
              <div className="mt-2 text-center">
                <Button
                  type="circle"
                  onClick={() => {
                    setIsSuccess(1);
                  }}>
                  寄送驗證碼
                </Button>
              </div>
            </div>
          </div>
          <div className="h-full w-1/2">
            <img className="w-full" src={'/images/login-bg.svg'} alt="" />
          </div>
        </div>
      </div>}
      {isSuccess == 1 && <div className="flex flex-row w-full h-full">
        <div className="flex flex-row w-full h-full">
          <div className="w-1/2 p-4 flex flex-col justify-center items-center">
            <p
              style={{ color: '#717274' }}
              className="text-center tracking-widest text-lg mb-5 mt-24">
              手機驗證</p>
            <div className="w-1/2">
              <TextInput
                className="my-16 mx-auto w-full"
                type="sign"

                placeholder="驗證碼"
              />
              <div className="text-center text-primary-red">
                <Reminder></Reminder>
              </div>
              <div className="mt-16 mb-4 text-center">
                <Button
                  type="circle"
                  onClick={() => {
                    setIsSuccess(2);
                  }}>
                  提交
                </Button>
              </div>
            </div>
          </div>
          <div className="h-full w-1/2">
            <img className="w-full" src={'/images/login-bg.svg'} alt="" />
          </div>
        </div>
      </div>}
      {isSuccess == 2 && <div className="flex flex-row w-full h-full">
        <div className="flex flex-row w-full h-full">
          <div className="w-1/2 p-4 flex flex-col justify-center items-center">
            <p
              style={{ color: '#717274' }}
              className="text-center tracking-widest text-lg">
              手機驗證成功!</p>
            <div className="w-1/2">
              <div className="mt-16 mb-24 text-center">
                <Button
                  type="circle"
                  onClick={() =>
                    navigate('./../account')
                  }>
                  進入客戶後台
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
      </div>}
    </div>
  );
}

