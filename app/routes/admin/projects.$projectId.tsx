import ProgressBar from '~/components/ProgressBar';
import { Outlet } from 'remix';

export async function loader({ params }: any) {
  return params;
}

export default function Index() {
  return (
    <div className="w-full flex flex-col justify-center container mx-auto">
      <div className="px-64 mt-24">
        <ProgressBar
          phases={[
            {
              label: '設計需求',
              link: './requirements',
              id: 'requirements'
            },
            {
              label: '樹狀圖',
              link: './tree',
              id: 'tree'
            },
            {
              label: '主機需求',
              link: './server',
              id: 'server'
            },
            {
              label: '額外功能',
              link: './extra',
              id: 'extra'
            },
            {
              label: '第三方需求',
              link: './third-party',
              id: 'third-party'
            },
            {
              label: '報價單',
              link: './quotation',
              id: 'quotation'
            },
            {
              label: '簽約',
              link: './contract',
              id: 'contract'
            },
            {
              label: 'Milestone',
              link: './milestone',
              id: 'milestone'
            },
            {
              label: 'Github',
              link: './github',
              id: 'github'
            },
            {
              label: '專案進度',
              link: './progress',
              id: 'progress'
            },
            {
              label: '結案',
              link: './done',
              id: 'done'
            }
          ]}
          currentPhase="contract" />
      </div>
      <Outlet />
    </div>
  );
}
