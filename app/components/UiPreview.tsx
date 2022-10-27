import { useNavigate } from 'remix';
interface Props {
    commentCount?: number,
    name: string,
    imgUrl: string,
    platform: 'designer' | 'developer'
}

export default function(props: Props) {
  const { commentCount, name, imgUrl, platform } = props;
  const navigate = useNavigate();
  const link = platform === 'designer' ?
    '../ui/' + Math.round(Math.random() * 1000) :
    '../../ui/' + Math.round(Math.random() * 1000);
  return (
    <div
      onClick={() => navigate(link)}
      className="cursor-pointer"
    >
      <div
        className="w-80 h-64 flex justify-center
      bg-white shadow-lg rounded-lg relative">
        {commentCount != 0 &&
        <div
          className="w-6 h-6 bg-primary-red rounded-full text-white text-sm
      absolute right-0 top-0 text-center leading-6">
          {commentCount}
        </div>
        }
        <img src={imgUrl} alt="name" className="h-full pt-4"/>
      </div>
      <div className="text-gray-600 text text-center w-80 mt-2">
        {name}
      </div>
    </div>
  );
};
