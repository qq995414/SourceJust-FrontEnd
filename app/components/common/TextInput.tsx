import classNames from 'classnames';
import { useState } from 'react';

interface Props {
  type?: 'sign' | 'normal' | 'number'| 'password';
  placeholder?: string;
  value?: string;
  className?: string;
  itemName?: string;
  show?: boolean;
  onChange?: (s: string) => void;
}

export default function (props: Props) {
  let style =
    `  font-sans border-2 w-96
  outline-none focus:border-gray-400 transition-all focus:border-2`;

  return (
    props.type === 'number' ?
      <div>
        <input
          type="number"
          min={0}
          max={9}
          onChange={e => props.onChange && props.onChange(e.target.value)}
          name={props.itemName}
          className={classNames(
            'text-black font-bold text-center rounded-md',
            style, props.className)}
        />
      </div>
      :
      
      <input
        className={classNames(props.type === 'sign'  ? `rounded-md 
     p-2 text-sm tracking-widest`
          : 'rounded-md text-left p-3 text-md text-zinc-500',
          style, props.className)}
        placeholder={props.placeholder}
        value={props.value}
        name={props.itemName}
        type={classNames(props.itemName === 'password' && props.show ? `password` : `sign` )}
        onChange={e => props.onChange && props.onChange(e.target.value)}
      />
      
  );

}
