import cx from 'classnames';
import { PropsWithChildren } from 'react';

interface Props {
  type?: 'circle' | 'square' | 'deactivated' | 'cancel' | 'login';
  color?: string;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;

  onClick(): void;
}

export default function (props: PropsWithChildren<Props>) {

  const {
    type,
    color,
    onClick,
    className,
    isDisabled,
    isLoading
  } = props;

  let style: string;
  switch (type) {
    case 'square':
      style = 'rounded-lg bg-white border-2 border-gray-300';
      break;
    case 'circle':
      style = 'bg-primary-red rounded-full text-white';
      break;
    case 'deactivated':
      style = 'rounded-full border-2 border-primary-red' +
        ' bg-white text-primary-red';
      break;
    case 'cancel':
      style = 'rounded-full text-gray-700 border-2 border-gary-200 bg-white';
      break;
    case 'login':
      style = 'rounded-lg w-full primary-3-Primary-bk text-white';
      break;
    default:
      style = 'bg-primary-red rounded-full text-white';
      break;
  }

  return (
    <button
      className={cx(style, color,
        'text-center px-6 py-2 whitespace-nowrap', className)}
      onClick={(!isLoading && !isDisabled) ? onClick : () => null}
    >
      {props.children}
    </button>
  );
}

