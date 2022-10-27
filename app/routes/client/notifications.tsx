import Notification from '~/components/notificate/Notification';
import Switch from '~/components/common/Switch';
import { useState } from 'react';

export default function Index() {

  const [isChecked, setIsChecked] = useState(false);

  const notifications = [
    {
      id: 0,
      isRead: false,
      name: 'ＸＸ專案',
      content: '於2021-3-18 結案完成！',
      date: '13:18',
    },
    {
      id: 1,
      isRead: false,
      name: 'ＸＸＸＸ專案',
      content: '客戶有新的留言！',
      date: '2/20',
    },
    {
      id: 2,
      isRead: true,
      name: 'ＸＸ專案',
      content: '於2021-3-18 結案完成！',
      date: '13:18',
    },
    {
      id: 3,
      isRead: true,
      name: 'ＸＸ專案',
      content: '客戶有新的留言！',
      date: '2/20',
    },
    {
      id: 4,
      isRead: true,
      name: 'ＸＸ專案',
      content: '於2021-3-18 結案完成！',
      date: '13:18',
    }
  ];
  return (
    <div className="mt-24 flex flex-col justify-center">
      <div className="container">
        <div className="flex items-center px-64 w-full mb-8">
          <div className="flex flex-row ml-0 mr-36">
            <img src={'/images/line.svg'} alt="" />
            <div className="place-self-center ml-4 font-bold"> 帳號通知綁定</div>
          </div>
          <Switch
            isChecked={isChecked}
            onChange={setIsChecked} />
          <div className="text-gray-400 text-sm ml-auto mr-0">
            <p>綁定後可即時接收最新通知：</p>
            <p>1.點選進行綁定</p>
            <p>2.選擇您要接收通知的聊天室 （建議選擇 1 對 1 聊天室）</p>
            <p>3.點選同意並連動</p>
          </div>
        </div>
        <div className="px-64">
          <hr />
        </div>
        <div className="flex flex-col items-center w-full mt-12">
          {notifications.map((notification, index) => {
            const {
              id,
              isRead,
              name,
              content,
              date
            } = notification;
            return <Notification
              key={id}
              isRead={isRead}
              name={name}
              content={content}
              date={date}
              bgcolor=
                {index % 2 == 0 ? 'bg-primary-gray' : ''}
            />;
          })}
        </div>
      </div>
    </div>
  );
}

