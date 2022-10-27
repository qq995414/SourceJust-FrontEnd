import ProgressBar from '~/components/ProgressBar';
import { Outlet, useLoaderData } from 'remix';

export async function loader({ params }: any) {
  return params;
}

export default function Index() {
  const { projectId } = useLoaderData();
  console.log(projectId);
  return (
    <div className="w-full flex justify-center">
      <div className="container mx-64 mt-24">
        <ProgressBar
          phases={[
            {
              label: '專案需求',
              link: './requirements/info',
              id: 'requirements'
            },
            {
              label: '線上合約',
              link: './contract/contract',
              id: 'contract'
            },
            {
              label: '匯款資訊',
              link: './contract/web-contract',
              id: 'payment'
            },
            {
              label: '設計需求',
              link: './contract/design-requirement',
              id: 'design'
            },
            {
              label: 'Milestone',
              link: './milestone',
              id: 'milestone'
            },
            {
              label: '查看 UI',
              link: './ui',
              id: 'ui'
            },
            {
              label: 'SEO',
              link: './seo-setup',
              id: 'seo'
            },
            {
              label: '測試伺服器',
              link: './test-server',
              id: 'test-server'
            },
            {
              label: '測試除錯',
              link: './test-debug',
              id: 'test-debug'
            },
            {
              label: '正式伺服器',
              link: './real-server',
              id: 'prod-server'
            },
            {
              label: '正式除錯',
              link: './real-debug',
              id: 'prod-debug'
            },
            {
              label: '結案與保固',
              link: './case-close',
              id: 'done'
            },
          ]}
          currentPhase="prod-server" />
        <Outlet />
      </div>
    </div>
  );
}
