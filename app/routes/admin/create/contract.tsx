import { Link } from 'remix';

export default function Index() {
  return(
    <div className="container px-32 mt-8">
      <div
        className="grid grid-cols-4 divide-x h-12 font-bold text-gray-500 mt-12
      divide-gray-200 text-center bg-primary-gray">
        <div className="py-3">合約</div>
        <div className="py-3">來源對象</div>
        <div className="py-3">來源身份</div>
        <div className="py-3"></div>
      </div>
      <div
        className="grid grid-cols-4 divide-x h-20  font-medium text-gray-500
      divide-gray-200 bg-white">
        <Link to="">
          <div className="py-7 text-blue-500 text-center underline">
            勞務報酬單.pdf </div>
        </Link>
        <div className="py-7 pl-12">檸檬科技有限公司</div>
        <div className="py-7 text-center">客戶</div>
        <Link to="">
          <div className="py-7 text-primary-red text-center underline">
            下載</div></Link>
      </div>
      <div
        className="grid grid-cols-4 divide-x h-20  font-medium text-gray-500
      divide-gray-200 bg-gray-50">
        <Link to="">
          <div className="py-7 text-blue-500 text-center underline">
            勞務報酬單.pdf </div>
        </Link>
        <div className="py-7 pl-12">檸檬科技有限公司</div>
        <div className="py-7 text-center">客戶</div>
        <Link to="">
          <div className="py-7 text-primary-red text-center underline">
            下載</div></Link>
      </div>
      <div
        className="grid grid-cols-4 divide-x h-20  font-medium text-gray-500
      divide-gray-200 bg-white">
        <Link to="">
          <div className="py-7 text-blue-500 text-center underline">
            勞務報酬單.pdf </div>
        </Link>
        <div className="py-7 pl-12">檸檬科技有限公司</div>
        <div className="py-7 text-center">客戶</div>
        <Link to="">
          <div className="py-7 text-primary-red text-center underline">
            下載</div></Link>
      </div>
      <div
        className="grid grid-cols-4 divide-x h-20  font-medium text-gray-500
      divide-gray-200 bg-gray-50">
        <Link to="">
          <div className="py-7 text-blue-500 text-center underline">
            勞務報酬單.pdf </div>
        </Link>
        <div className="py-7 pl-12">檸檬科技有限公司</div>
        <div className="py-7 text-center">客戶</div>
        <Link to="">
          <div className="py-7 text-primary-red text-center underline">
            下載</div></Link>
      </div>
    </div>
  );
}
