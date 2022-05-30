import { useState } from 'react';

interface Props {

}

export default function (props: Props) {
  const [value, setValue] = useState('');
  return (
    <div className="w-full h-10 rounded-lg relative flex items-center">
      <input
        type="text"
        placeholder="回覆訊息"
        className="w-full h-full px-2 rounded-lg
        bg-gray-200 text-sm text-gray-400"
        onChange={(e)=>setValue(e.target.value)}
      />
      <img
        src={'/icons/arrow.svg'}
        alt="arrow"
        className= "absolute h-4 bottom-3 right-3 cursor-pointer z-10"
      />
      {value &&
        <div
          className="absolute bottom-1 right-1 h-8 w-8
        rounded-full bg-primary-blue"
        >
        </div>}
    </div>
  );
}
