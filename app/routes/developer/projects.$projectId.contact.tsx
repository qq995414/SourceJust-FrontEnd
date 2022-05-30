import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'remix';

interface IUser {
    id: string;
    name: string;
}

interface IBubble {
    user: IUser;
    content: string;
    time: Date;
    id: string;
}

interface IInfor {
    inforKey: string;
    inforValue: string;
}

export default function () {

  const navigate = useNavigate();

  const [isShowOption, setIsShowOption] = useState(false);

  const bubbles: IBubble[] = [
    {
      user: {
        id: 'x',
        name: '客户'
      },
      content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內',
      time: new Date(),
      id:'1'
    },
    {
      user: {
        id: 'xx',
        name: '客户'
      },
      content: '内容内容内容内容内容',
      time: new Date(),
      id:'2'
    },
    {
      user: {
        id: 'user',
        name: '你'
      },
      content: '内容内容内容内容内容内容内容内容内容内容',
      time: new Date(),
      id:'3'
    }
  ];

  const infors: IInfor[] = [
    {
      inforKey: '專案名稱：',
      inforValue: 'source 電商網站'
    },
    {
      inforKey: '保固時間剩餘：',
      inforValue: '1 年 5 個月'
    }
  ];

  return (
    <div
      className="w-full h-screen flex flex-col items-center
     px-28 relative">

      <div
        className="w-full mt-10 relative flex items-center justify-center
      pb-6 border-b-2 border-gray-200">

        <div className="font-bold text-2xl text-primary-red">
          結案與保固
        </div>

        <img
          className="w-5 h-4 absolute top-2 right-0 cursor-pointer"
          src="/icons/option.png"
          alt="option"
          onClick={() => {setIsShowOption(true);}}
        />

      </div>

      <div className="flex-1 pb-6 border-b-2 border-gray-200">
        {bubbles.map(bubble => {
          const { user, content, time, id }=bubble;
          return <Bubble
            key={id}
            id={id}
            user={user}
            content={content}
            time={time}
          />;
        })}
      </div>

      <div className="h-40 w-full flex justify-center items-center ">
        <div className="relative w-3/4 h-3/4">
          <textarea
            className="w-full h-full bg-gray-100 rounded-lg p-6 text-xs"
            placeholder="填寫內容"
          ></textarea>
          <img
            src="/icons/chat-file.png"
            alt="chatFile"
            className="absolute w-4 h-5 right-6 bottom-4 cursor-pointer"/>
        </div>

      </div>

      {isShowOption &&
      <div
        className="h-full w-1/4 absolute border-2 right-0
        bg-white opacity-80 flex flex-col">
        <img
          className="w-5 h-5 absolute top-10 right-6 cursor-pointer"
          src="/icons/closeOption.png"
          alt="closeOption"
          onClick={() => {setIsShowOption(false);}}
        />
        <div className="w-5/6 mx-auto mt-20">
          {infors.map(infor => {
            return <Infor
              key={infor.inforKey}
              inforKey={infor.inforKey}
              inforValue={infor.inforValue}
            />;
          })}
        </div>
      </div>}

      {isShowOption &&
      <div
        className="flex absolute items-center justify-center
       cursor-pointer left-40 top-10"
        onClick={() => {navigate('../projects');}}>
        <img
          className="w-5 h-5 mr-4"
          src="/icons/backToProjects.png"
          alt="backToProjects" />
        <div className="font-bold text-lg text-primary-red">
          回到專案列表
        </div>
      </div>
      }
    </div>
  );
}

function Bubble(props: IBubble) {
  const { user, content, time, id } = props;
  return (
    <div
      className={
        classNames(
          'flex pt-10',
          user.id === 'user' ? 'flex-row-reverse' : 'justify-start'
        )
      }>

      <div
        className={
          classNames(
            'w-20 h-20 rounded-full bg-primary-red text-white font-bold',
            'flex justify-center items-center',
          )
        }>
        {user.name}
      </div>

      <div className="flex flex-col mx-6 max-w-5xl">
        <div className="bg-gray-100 text-sm rounded-lg p-6 mb-2">
          {content}
        </div>
        <div
          className={classNames(
            'text-sm text-gray-500',
            user.id === 'user' && 'w-full flex justify-end'
          )}>
          {time.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

function Infor(props: IInfor) {
  return (
    <div
      className="flex justify-between w-full my-8
    text-lg text-black font-bold">
      <div>{props.inforKey}</div>
      <div>{props.inforValue}</div>
    </div>
  );
}
