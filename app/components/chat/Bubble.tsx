import { BubbleModel } from './Models';
import cx from 'classnames';

export default function (props: BubbleModel) {
  const { content, user, time, isSendByMe } = props;
  return (
    <div className="flex flex-row items-start w-full">
      {!isSendByMe && <img
        className="w-14 h-14 rounded-full mr-4"
        src="/icons/chat/avatar.png"
        alt={user.name}
      />}

      <div
        className={cx(
          'flex flex-col w-full',
          isSendByMe ? 'items-end' : 'items-start'
        )}>
        <div
          className={cx(
            'bg-primary-gray text-black p-4 rounded-lg',
            isSendByMe ? 'w-96' : 'w-96'
          )}>
          {content}
        </div>
        <div
          className={
            cx(
              'text-primary-red text-sm p-2 w-96 flex flex-row',
              isSendByMe ? 'justify-start': 'justify-end'
            )
          }>
          {time.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
