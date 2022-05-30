import Input from './Input';
import Bubble from './Bubble';
import { CommentModel } from './Model';
import cx from 'classnames';
import { useState } from 'react';

interface Props {
  comment: CommentModel,
  index: number
}

export default function (props: Props) {
  const { comment, index } = props;
  const bubbles = comment.bubbles;

  const [isChosen, setIsChosen] = useState(false);
  return (
    <div
      className={cx(
        comment.isRead && !isChosen && 'opacity-30',
        'bg-primary-gray rounded-lg w-full p-4 mb-4 flex-col text-xs font-bold'
      )}
    >

      <div
        className="flex flex-col w-full mb-4 cursor-pointer"
        onClick={() => {
          setIsChosen(!isChosen);
          comment.isRead = true;
        }}
      >
        <div className="flex mb-2 items-center">
          <div
            className="w-8 h-8 mr-4 text-center leading-8 rounded-full
            text-white bg-primary-red">
            {index+1}
          </div>
          <div className="text-gray-600 text-sm">
            {/* {bubbles[0].time.toDateString()} */}
            昨天 5:25 p.m
          </div>
        </div>
        <div>{bubbles[0].content}</div>
      </div>

      {isChosen &&
        <div
          className="h-60 flex w-full flex-col
        pt-2 border-t-2 justify-between">
          <div>
            {bubbles?.map(bubble => <Bubble
              bubble={bubble}
              key={bubble.content} />)}
          </div>
          <Input/>
        </div>
      }

    </div>
  );
}
