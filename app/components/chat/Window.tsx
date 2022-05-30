import ChatPreview from './ChatPreview';
import Chat from './Chat';
import { BubbleModel, ChatModel, UserModel } from './Models';
import { useState } from 'react';
import Calendar from 'rc-calendar';

export default function () {
  const users: Array<UserModel> = [
    {
      id: 0,
      name: '客戶',
      avatarUrl: '/icons/chat/chat-person.png'
    },
    {
      id: 1,
      name: '合作群組',
      avatarUrl: '/icons/chat/chat-group.png'
    },
    {
      id: 2,
      name: '索爾斯',
      avatarUrl: '/icons/chat/chat-logo.png'
    }
  ];
  const bubbles: Array<BubbleModel> = [
    {
      user: users[0],
      content: '內文內文內文內文內文內文內文內文內文內文文內文內文內文內文內文內文內文內文內文文內文內文內文內文內文內文內文內文內文0000',
      time: new Date(),
      id: 0
    },
    {
      user: users[1],
      content: '內文內文內文內文內文內文內文內文內文內文文內文內文內文內文內文內文內文內文內文文內文內文內文內文內文內文內文內文內文111',
      time: new Date(),
      isSendByMe: true,
      id: 1
    },
    {
      user: users[2],
      content: '內文內文內文內文內文內文內文內文內文內文文內文內文內文內文內文內文內文內文內文文內文內文內文內文內文內文內文內文內文222',
      time: new Date(),
      id: 2
    }
  ];
  const chats: Array<ChatModel> = [
    {
      id: 0,
      user: users[0],
      chats: bubbles
    },
    {
      id: 1,
      user: users[1],
      chats: bubbles
    },
    {
      id: 2,
      user: users[2],
      chats: bubbles
    },
  ];

  const [selectedChat, setSelectedChat] = useState(chats[0]);

  return (
    <div className="flex flex-row w-full rounded-2xl">

      <div className="flex flex-col w-1/4 border-r-2">
        <div className="font-bold text-lg ml-4 my-4">
          對話聊天室
        </div>

        {chats.map(chat => {
          return (
            <div
              className="w-full"
              onClick={() => setSelectedChat(chat)}
              key={chat.id}
            >
              <ChatPreview
                id={chat.id}
                user={chat.user}
                chats={chat.chats}
              />
            </div>
          );
        }
        )}

        <div className="w-full flex items-center justify-center">
          <Calendar showToday={false} />
        </div>

      </div>

      <div className="flex-1">
        <Chat
          id={selectedChat.id}
          chats={selectedChat.chats}
          user={selectedChat.user}
        />
      </div>

    </div>
  );
}
