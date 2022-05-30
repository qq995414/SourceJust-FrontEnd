import { Link } from 'remix';
import cx from 'classnames';

interface Phase {
  id: string;
  label: string;
  link: string;
}

interface Props {
  phases: Phase[];
  currentPhase: string;
}

export default function (props: Props) {
  const width = (props.phases.length - 1) * 96;
  const currentPhaseIndex = props.phases
    .findIndex(phase => phase.id === props.currentPhase) || 0;
  return (
    <div
      className="flex flex-row w-full overflow-hidden
      justify-center relative mb-12">
      <div
        className="h-2 bg-[#E1E1E1] absolute z-10 top-0.5
         rounded-full flex flex-row justify-center"
        style={{
          width,
          left: `calc(50% - ${width / 2}px)`
        }} />
      {props.phases.map((phase, i) => <Link
        className="z-20"
        prefetch="intent"
        key={phase.id}
        to={phase.link}>
        <div
          key={phase.id}
          style={{ width: 96 }}
          className="overflow-hidden items-center flex flex-col">
          <div
            className={cx('w-3 h-3',
              'rounded-full mx-auto',
              currentPhaseIndex > i ? 'bg-[#D11329]'
                : 'border-2 border-black bg-white')} />
          <p className="mt-3 text-xs whitespace-nowrap">
            {phase.label}
          </p>
        </div>
      </Link>)}
    </div>
  );
}
