import { ChatModel } from './Models';
import Bubble from './Bubble';
import TextInput from '../common/TextInput';

export default function (props: ChatModel) {
  const { id, user, chats } = props;
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex flex-col flex-1 mt-20 mx-6">
        {chats.map(chat => {
          return <Bubble
            key={chat.id}
            content={chat.content}
            user={chat.user}
            time={chat.time}
            id={chat.id}
            isSendByMe={chat.isSendByMe}
          />;
        })}
      </div>
      <TextInput
        placeholder="填寫內容"
      />
    </div>
  );
}
