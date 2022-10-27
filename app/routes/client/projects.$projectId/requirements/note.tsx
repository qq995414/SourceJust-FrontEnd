import Button from '~/components/common/Button';
import RichTextEditor from '~/components/RichTextEditor.client';
import { useNavigate } from 'remix';
import { useState } from 'react';

export default function Index() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  return (<div className="h-screen container mx-auto px-64">
    <div className="w-full flex justify-center h-20">
      <p className="w-5/6 text-center text-primary-red font-bold text-xl">備註</p>
      <div className="text-left">
        {!isEditing&&<img
          onClick={() => setIsEditing(i => !i)}
          className="mt-1 cursor-pointer w-5 absolute"
          src={'/images/account-rewrite.svg'}
          alt="" />}
        {isEditing && <button
          className="px-6 py-2 bg-white rounded-full text-primary-red shadow-md absolute"
          onClick={() => setIsEditing(i=>!i)}>
          完成
        </button>

        }
      </div>
    </div>
    <div className="flex flex-col justify-center items-center">

      {!isEditing && <div className="mt-16 w-full h-96 text-usual-gray">
        <p>App所需要的功能:</p>
        <p>高相似度搜尋引擎(100%為目標):</p>
      </div>}

      {isEditing && <div className="w-full h-96">
        <RichTextEditor />
      </div>}

      <div className="w-full text-center mt-28">
        <Button
          className="w-32"
          onClick={() => navigate('../requirements/host-demand')}>
          下一步
        </Button>
      </div>
    </div>
  </div>);
}
