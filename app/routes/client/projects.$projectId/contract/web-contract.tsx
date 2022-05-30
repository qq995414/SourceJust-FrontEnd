import Button from '~/components/common/Button';
import TextInput from '~/components/common/TextInput';
import { useNavigate } from 'remix';
import { useState } from 'react';
import classNames from 'classnames';

export default function Index() {
  const navigate = useNavigate();

  const [isPop, setIsPop] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const numbers = [0, 1, 2, 3, 4];
  const [captcha, setCaptcha] = useState<number[]>([]);

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

              placeholder="013"
            />
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <p className="w-1/6">銀行：</p>
            <TextInput
              className="h-12 p-3 w-2/3 text-usual-gray "

              placeholder="國泰世華商業銀行"
            />
          </div>
          <div className="flex w-1/3 items-center">
            <p className="w-1/4">分行：</p>
            <TextInput
              className="h-12 p-3 w-3/4"

              placeholder="敦南分行"
            />
          </div>
        </div>
        <div>
          <div className="flex w-full items-center my-2">
            <p className="w-[80px]">帳號：</p>
            <TextInput
              className="h-12 p-3 w-1/2 tracking-[0.15em] text-usual-gray"

              placeholder="0001   2457    89315"
            />
          </div>
          <div className="flex w-full items-center my-6">
            <p className="w-[80px]">戶名：</p>
            <TextInput
              className="h-12 p-3 w-1/2 text-usual-gray"

              placeholder="索爾斯科技股份有限公司"
            />
          </div>
        </div>
      </div>
      <p className="ml-5 text-sm text-primary-red mt-16">
        *請在五日內填寫後五碼，如未填寫會在七天後取消此專案
      </p>

      <div className="w-full text-center mt-6">
        <Button
          className="w-32 h-12"
          onClick={() => {
            setIsPop(true);
            setCaptcha([]);
          }}>
          下一步
        </Button>
        <p
          className="text-xs text-usual-gray mt-5 tracking-[0.12em]">
          匯款完成請點選下一步填寫匯款後五碼</p>
      </div>

      {isPop &&
        <div className="fixed top-0 bottom-0 left-0 right-0">
          <div className="w-screen h-screen bg-gray-500 opacity-40 z-10"></div>

          <div
            className="w-1/4 h-96 bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col items-center justify-around">

            <div
              className="flex flex-row items-center font-bold text-lg
             w-full justify-center px-24 my-4">
              請填寫您的帳號後五碼
            </div>

            <div className="w-10/12 flex justify-between ">
              {numbers.map(number => {
                return (
                  <TextInput
                    key={number}
                    type="number"
                    className="w-16 h-16"
                    onChange={(value) => {
                      setCaptcha([...captcha, Number(value)]);
                    }}
                  />
                );
              })}

            </div>

            <div className="w-7/12">
              <div className="flex w-full justify-between mb-4">
                <Button
                  onClick={() => {
                    setIsPop(false);
                  }}
                  className="w-28 text-sm font-medium"
                  type="cancel"
                >取消</Button>

                <Button
                  onClick={() => {
                    setIsPop(false);
                    setIsFinished(true);
                  }}
                  className={classNames(
                    'w-28 text-sm font-medium',
                    captcha.length === 5 ? 'bg-primary-red' : 'bg-gray-500'
                  )}
                >下一步</Button>
              </div>
              <div className="text-sm w-full text-center text-gray-500">
                填寫完畢後我們會進行核對
              </div>
            </div>

          </div>
        </div>}

      {isFinished &&
        <div className="fixed top-0 bottom-0 left-0 right-0">
          <div className="w-screen h-screen bg-gray-500 opacity-40 z-10"></div>

          <div
            className="w-1/4 h-96 bg-white z-20
          fixed top-0 left-0 bottom-0 right-0 m-auto
          rounded-xl shadow-xl flex flex-col items-center justify-around">

            <div
              className="flex flex-row items-center font-bold text-lg
             w-full justify-center px-24 my-4">
              提醒您！
            </div>

            <div className="w-10/12 flex justify-center text-center ">
              工作日會開始啟動作業，我們會與你保持聯繫，請下一步進行填寫需求

            </div>

            <div className="w-7/12 flex justify-center">
              <Button
                onClick={() => {
                  navigate('../contract/design-requirement');
                }}
                className={classNames(
                  'w-28 text-sm font-medium'
                )}
              >下一步</Button>
            </div>

          </div>
        </div>}
    </div>
  );
}
