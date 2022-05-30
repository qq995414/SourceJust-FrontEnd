import { BubbleModel } from './Model';
import cx from 'classnames';

interface Props {
  bubble: BubbleModel
}

export default function (props: Props) {
  const { bubble } = props;
  const isUser = bubble.user.id === 'userId';
  return (
    <div className="flex flex-col">
      <div
        className={cx(
          'flex w-full mb-2',
          isUser ? 'justify-end' : 'justify-start',
        )}>
        <div className="flex items-center">
          <div
            className={cx(
              'px-3 h-8 mr-4 text-center leading-8 rounded-full',
              isUser ? 'text-primary-red bg-white' : 'text-white bg-primary-red'
            )}>
            {bubble.user.name}
          </div>
          <div className="text-gray-600 text-sm">
            {/* {bubble.time.toDateString()} */}
            昨天 5:25 p.m
          </div>
        </div>
      </div>
      <div
        className={cx(
          'flex w-full',
          isUser ? 'justify-end' : 'justify-start'
        )}>
        {bubble.content}
      </div>
    </div>
  );

}
