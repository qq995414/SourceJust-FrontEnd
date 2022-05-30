import classNames from 'classnames';

interface Props {
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: (s: string) => void;
}

export default function (props: Props) {
  let style =
    `bg-primary-gray font-sans border-2 border-gray-100 
  outline-none focus:border-gray-400 transition-all focus:border-2
  rounded-md `;

  return <textarea
    className={classNames(style, props.className)}
    placeholder={props.placeholder}
    value={props.value}
    onChange={e => props.onChange && props.onChange(e.target.value)}
  />;

}
