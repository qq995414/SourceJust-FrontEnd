import Comments from '~/components/comment/Comments';
import { CommentModel } from '~/components/comment/Model';
import { Link } from 'remix';

export default function Index() {
  const comments:Array<CommentModel> = [
    {
      id: 0,
      isRead: false,
      bubbles: [
        {
          user: {
            name: 'xxx',
            id: 'xxx'
          },
          content: 'xxxxxx',
          time: new Date()
        },
        {
          user: {
            name: 'xxx',
            id: 'userId'
          },
          content: 'xxxxxx',
          time: new Date()
        }
      ]
    },
    {
      id: 1,
      isRead: false,
      bubbles: [
        {
          user: {
            name: 'xxx',
            id: 'xxx'
          },
          content: 'xxxxxx',
          time: new Date()
        },
        {
          user: {
            name: 'xxx',
            id: 'userId'
          },
          content: 'xxxxxx',
          time: new Date()
        }
      ]
    },
    {
      id: 1,
      isRead: false,
      bubbles: [
        {
          user: {
            name: 'xxx',
            id: 'xxx'
          },
          content: 'xxxxxx',
          time: new Date()
        },
        {
          user: {
            name: 'xxx',
            id: 'ss'
          },
          content: 'xxxxxx',
          time: new Date()
        }
      ]
    },
    {
      id: 1,
      isRead: false,
      bubbles: [
        {
          user: {
            name: 'xxx',
            id: 'xxx'
          },
          content: 'xxxxxx',
          time: new Date()
        },
      ]
    }
  ];

  return (
    <div className="flex flex-col pt-12 mx-36">

      <Link className="flex justify-start items-center mb-10" to="./../../ui">
        <div><img src="/images/xiaoyuhao.svg" alt="" /></div>
        <div className="text-primary-red font-bold text-lg ml-8"> 回到上一頁</div>
      </Link>

      <div className="flex w-full h-5/6">
        <div className="flex flex-col w-full h-full relative border-2">
          <img src="/images/uiSample1.png" alt="" />
          <img src="/images/uiSample2.png" alt="" />
          <div
            className="w-10 h-10 cursor-pointer rounded-full text-white
            flex items-center justify-center
            top-36 right-44 absolute z-30 bg-primary-red"
            onClick={() => { }}>
            1
          </div>
          <div
            className="w-10 h-10 cursor-pointer rounded-full text-white
            flex items-center justify-center
           top-96 left-32 absolute z-30 bg-primary-red">
            2
          </div>
          <div
            className="w-10 h-10 cursor-pointer rounded-full text-white
            flex items-center justify-center
           bottom-64 right-24 absolute z-30 bg-primary-red">
            3
          </div>
        </div>

        <div className="flex w-1/3 flex-col ml-20">
          <div
            className="grid grid-rows-2 w-full
          rounded-md border-2 divide-y-2 divide-gray-200 border-gray-200">
            <div
              className=
                "flex text-gray-400 px-6 h-24 justify-between items-center">
              <div>頁面名稱</div>
              <div className="text-gray-600 mr-4">首頁</div>
            </div>
            <div className="flex flex-col text-gray-400 px-6 h-24 py-4">
              <div > 圖片連結</div>
              <a
                href="http://google_drive/.com"
                target="_blank"
                className="mt-2 text-blue-400 underline"
                rel="noopener noreferrer">http://google_drive/.com</a>
            </div>
          </div>

          <div className="flex w-full mt-5">
            <Comments comments={comments}/>
          </div>

        </div>
      </div>

    </div>
  );
}
