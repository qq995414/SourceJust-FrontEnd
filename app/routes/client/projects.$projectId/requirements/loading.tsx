import { useEffect } from 'react';
import { useNavigate } from 'remix';

export default function Index() {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('../contract/quotation');
    }, 2000);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-gray-600 mt-20 tracking-wider">35%</div>
      <div className="w-1/2 h-5 mt-24 mb-28 bg-[#F4F4F4] flex rounded-full">
        <div
          className="w-[35%] h-8 bg-[#89E7BA] self-center rounded-l-full
           shadow-lg">
        </div>
      </div>
      <div className="text-xl text-gray-500 tracking-wider">正在生成報價單，請稍候…</div>
    </div>
  );
}
