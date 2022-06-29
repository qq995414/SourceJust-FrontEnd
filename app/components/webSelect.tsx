import cx from 'classnames';
import { useState } from 'react';

interface Props<T> {
  className?: string;
  value: T;
  onChange: (value: T) => void;
  options: Array<{ value: T; label: string }>;
}

function Select<T>(props: Props<T>) {
  const [isExpanded, setIsExpanded] = useState(false);
  return <div className="relative cursor-pointer w-64">
    <button
      style={{ backgroundColor: '#EBEBEB' }}
      onBlur={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      className={cx('border border-zinc-300 w-full max-w-64 py-2',
        'rounded-lg absolute top-0 bg-white focus:border-zinc-400',
        props.className)}>
      <p className="text-center">
        {props.options.find(i => i.value === props.value)?.label}
      </p>
    </button>
    <img src="/images/select.svg" alt="▽" className="absolute right-5 top-5" />
    <div
      style={{ backgroundColor:'#F4F4F4',maxHeight: isExpanded ? (props.options.length * 48) + 64 : 0 }}
      className="transition-all overflow-hidden bg-zinc-100 w-full max-w-64
      rounded-lg absolute top-12 duration-500 z-20 shadow">
      <div>
        {props.options.map(option => <div key={option.label}>
          <p
            className="text-center text-zinc-600 transition-all
             border-t py-3 border-b-gray-200 hover:bg-zinc-50"
            onClick={() => {
              props.onChange(option.value);
              setIsExpanded(false);
            }}>
            {option.label}
          </p>
        </div>)}
      </div>
    </div>
  </div>;
}

export default Select;
