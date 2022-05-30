import { Link } from 'remix';

export default function Index() {
  return (
    <div
      className="w-screen h-screen flex flex-col
    items-center justify-evenly">
      <div>
        <div className="flex flex-col items-center">
          <img className="w-24" src="/images/logo.svg" alt="" />
          <div className="flex">
            <p
              style={{ letterSpacing: '20px' }}
              className="h-6 mt-4 text-lg">
              索爾斯科
            </p>
            <p className="h-6 mt-4 text-lg">技</p>
          </div>
          <p
            style={{ color: '#717274' }}
            className="h-12 text-sm">Source Solution</p>
        </div>
      </div>
      <div className="flex flex-col">
        <Link to={'/designer/login'}>
          <div
            className="p-8 rounded shadow w-64 transition-all
            text-center mb-4 hover:shadow-xl">
            設計師後台
          </div>
        </Link>
        <Link to={'/client/login'}>
          <div
            className="p-8 rounded shadow w-64 transition-all
            text-center mb-4 hover:shadow-xl">
            客戶後台
          </div>
        </Link>
        <Link to={'/admin/login'}>
          <div
            className="p-8 rounded shadow w-64 transition-all
            text-center mb-4 hover:shadow-xl">
            總後台
          </div>
        </Link>
        <Link to={'/developer/login'}>
          <div
            className="p-8 rounded shadow w-64 transition-all
            text-center mb-4 hover:shadow-xl">
            工程師後台
          </div>
        </Link>
        <Link to={'/sales/login'}>
          <div
            className="p-8 rounded shadow w-64 transition-all
            text-center mb-4 hover:shadow-xl">
            業務員快速操作介面
          </div>
        </Link>
      </div>
    </div>
  );
}
