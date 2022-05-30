import { ChatModel } from './Models';

export default function (props: ChatModel) {
  // 预览的内容就是最新的一个chat的内容和时间，user的信息，
  const { user, chats, id } = props;
  return (
    <div
      className="w-full h-40 flex flex-row items-center
    border-b-2 relative cursor-pointer">
      <img
        src={user.avatarUrl}
        alt="avatar"
        className="w-16 h-16"
      />
      <div className="flex flex-col ml-2">
        <div className="font-bold mb-4">{user.name}</div>
        <div className="text-sm text-gray-500">{chats[0].content}</div>
      </div>

      <div
        className="absolute top-2 right-2 text-center text-white text-sm
      w-5 h-5 rounded-full bg-primary-red">
        {chats.length}
      </div>

      <div
        className="absolute right-2 bottom-2
      text-xs text-gray-400">
        06/17 13:00
      </div>
    </div>
  );
}
