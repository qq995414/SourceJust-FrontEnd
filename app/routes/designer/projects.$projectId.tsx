import ProgressBar from '~/components/ProgressBar';
import { Outlet } from 'remix';

export async function loader({ params }: any) {
  return params;
}

const phases = [
  {
    label: '設計需求',
    link: './requirements',
    id: 'requirements'
  },
  {
    label: '線上合約',
    link: './contract',
    id: 'contract'
  },
  {
    label: 'Milestone',
    link: './milestone',
    id: 'milestone'
  },
  {
    label: '上傳 UI',
    link: './ui',
    id: 'ui'
  },
  {
    label: '上傳設計檔',
    link: './upload-files',
    id: 'upload-files'
  }
];

export default function Index() {
  return (
    <div className="w-full flex justify-center">
      <div className="container mx-64 mt-24">
        <ProgressBar phases={phases} currentPhase="milestone" />
        <Outlet />
      </div>
    </div>
  );
}
