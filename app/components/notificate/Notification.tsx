import React from 'react';
import cx from 'classnames';
interface Props {
  isRead?: boolean,
  name: string,
  content: string,
  date: string,
  bgcolor:string
}

// 注意点：未读有绿点，已读未读用isRead控制

export default function (props: Props) {
  return (
    <div className="flex w-full h-16 ">
      <div className="flex-none w-64 self-center">
        {!props.isRead &&
        // eslint-disable-next-line max-len
        <div className="bg-green-500 w-2 h-2 my-1.5 rounded-full ml-48"></div>}
        {props.isRead &&
        // eslint-disable-next-line max-len
        <div className="bg-white w-2 h-2 my-1.5 rounded-full ml-48"></div>}
      </div>
      <div className={cx('flex flex-grow', props.bgcolor)}>
        <div
          className="text-primary-red self-center
           font-medium text-center w-40">
          {props.name}
        </div>
        <div className="text-gray-600 self-center font-medium text-left pl-12">
          {props.content}
        </div>
        <div className="flex-grow"></div>
        <div className="text-gray-500 self-center text-center w-36 text-sm">
          {props.date}</div>
      </div>
      <div className="w-64"></div>
    </div>
  );
}

