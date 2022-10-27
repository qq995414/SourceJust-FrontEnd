import Button from './Button';
import { useEffect, useState } from 'react';

interface Props {
    type?: 'basic' | 'cancel' | 'signature' | 'download' | string,
    title?: string,
    content?: string,
    cancelText?: string,
    confirmText?: string,
    files?:Array<any>,
    className?: string,
    onClickButton() :void
}

export default function (props: Props) {
  const {
    type, title, content, cancelText,
    confirmText, files, onClickButton
  } = props;
  const [showDialog, setShowDialog] = useState(true);
  const [renderDialog, setRenderDialog] = useState(true);
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setOpacity(1);
  }, []);

  if (!showDialog) {
    setTimeout(() => {
      setRenderDialog(false);
    }, 300);
  }

  return (
    renderDialog ? <div
      className=""
      style={{
        transition: 'all ease .3s',
        opacity: `${Number(showDialog) && opacity}`
      }}
    >
      <div className="w-full h-full bg-gray-500 opacity-20 z-10"></div>
      <div
        className="w-96 h-80 p-8 shadow-xl rounded-lg bg-white
      flex flex-col items-center justify-around z-20
      fixed left-0 right-0 top-0 bottom-0 m-auto"
      >
        <div className="font-bold text-black p-4 text-center">
          {type === 'signature' ? '設計師簽名' : title}
        </div>

        {content &&
        <div className="text-gray-400 text-sm">
          {content}
        </div>}

        {type === 'download' &&
        <div className="w-full flex flex-col items-center">
          {files?.map(file => {
            return (
              <div
                key={file.id}
                className="flex justify-center items-center w-full
                  my-2 text-sm"
              >
                <div
                  className="text-primary-blue text-center
                flex-1 cursor-pointer" >
                  {file.name}
                </div>
                <div className="text-primary-red w-20 font-bold cursor-pointer">
                  下载
                </div>
              </div>
            );
          })}
        </div>}

        {type === 'signature' &&
        <div className="w-full flex flex-col items-center">
          <div className="border-2 rounded-xl w-60 h-28">
          </div>
          <div
            className="text-primary-blue mt-6 mb-2
          text-sm cursor-pointer">再試一次</div>
        </div>}

        <div className="flex flex-row justify-center w-full text-sm">
          <div className="flex flex-row justify-around w-full mt-2">
            {type === 'cancel' &&
            <Button
              onClick={() => { setShowDialog(false); }}
              type="cancel"
            >
              {cancelText ? cancelText : '下次再說'}
            </Button>
            }
            <Button
              onClick={() => {
                setShowDialog(false);
                onClickButton();
              }}
            >
              {confirmText ? confirmText : '確認'}
            </Button>
          </div>
        </div>
      </div>
    </div>
      : <div></div>
  );
}

