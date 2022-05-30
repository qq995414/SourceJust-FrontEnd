import { useNavigate } from 'remix';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/2">
        <img
          className="w-3/4 mr-5"
          src={'/images/client-caseclose.svg'}
          alt="" />
      </div>

      <div className="flex flex-col tracking-[0.12em]">
        <p className="text-2xl">你已完成</p>
        <p className="text-primary-red my-5">專案名稱XXX</p>
        <div className="flex mb-5">
          <p>保固已啟動，剩餘 </p>
          <p className="text-primary-red">1 年 5個月</p>
        </div>
        <div className="flex flex-col tracking-[0.12em] mt-24">
          <p>若有問題，請隨時通知我們</p>
          <div className="flex text-sm w-72 my-5">
            <button
              className="bg-primary-red text-white h-9
              rounded-l-full rounded-r-full mr-3 w-28"
              onClick={() => navigate('../../projects')}>
              回到專案列表
            </button>
            <button
              className="bg-primary-red text-white h-9
              rounded-l-full rounded-r-full ml-3 w-28"
              onClick={() => {
              }}>
              回報問題
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

