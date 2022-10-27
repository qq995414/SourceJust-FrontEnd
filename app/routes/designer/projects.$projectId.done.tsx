import { useNavigate } from 'remix';

export default function () {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/2">
        <img
          className="w-3/5 mr-5"
          src={'/images/client-caseclose.svg'}
          alt="" />
      </div>

      <div className="flex flex-col tracking-[0.12em]">
        <p className="text-3xl mb-4">你已完成</p>
        <div className="flex items-center">
          <p className="text-primary-red my-5 mr-5">專案名稱XXX</p>
          <p className="text-black font-bold">專案设计</p>
        </div>

        <div className="flex flex-col tracking-[0.12em] mt-4">
          <p className="font-bold">若有問題，請洽索爾斯</p>
          <div className="flex text-sm w-72 mt-16">
            <button
              className="bg-primary-red text-white h-9
              rounded-l-full rounded-r-full mr-5 w-28"
              onClick={() => navigate('./../../')}>
              回到專案列表
            </button>
            <button
              className="bg-primary-red text-white h-9
              rounded-l-full rounded-r-full w-28"
              onClick={() => {}}>
              回報問題
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
