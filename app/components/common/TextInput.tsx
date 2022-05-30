import classNames from 'classnames';

interface Props {
  type?: 'sign' | 'normal' | 'number';
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: (s: string) => void;
}

export default function (props: Props) {
  let style =
    `bg-primary-gray font-sans border-2 border-gray-100 
  outline-none focus:border-gray-400 transition-all focus:border-2`;

  return (
    props.type === 'number' ?
      <div>
        <input
          type="number"
          min={0}
          max={9}
          onChange={e => props.onChange && props.onChange(e.target.value)}
          className={classNames(
            'text-black font-bold text-center rounded-md',
            style, props.className)}
        />
      </div> :
      <input
        className={classNames(props.type === 'sign' ? `rounded-3xl 
    text-center p-3.5 text-sm tracking-widest`
          : 'rounded-md text-left p-3 text-md text-zinc-500',
        style, props.className)}
        placeholder={props.placeholder}
        value={props.value}
        onChange={e => props.onChange && props.onChange(e.target.value)}
      />
  );

}
