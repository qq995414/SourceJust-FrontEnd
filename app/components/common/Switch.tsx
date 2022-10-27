import cx from 'classnames';

interface Props {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export default function (props: Props) {
  const {
    isChecked,
    onChange
  } = props;
  return (
    <div
      className={cx(
        'w-12 h-6 flex items-center rounded-full ',
        'py-1 px-1 cursor-pointer',
        isChecked ? 'bg-primary-red' : 'bg-gray-700',
      )}
      onClick={() => onChange(!isChecked)}
    >
      <div
        className={cx(
          'h-5 w-5 rounded-full shadow-md ',
          'transition transform bg-white',
          isChecked && 'translate-x-5',
        )}
      />
    </div>
  );
}
