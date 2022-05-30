import { useState } from 'react';
import { useNavigate } from 'remix';
import cx from 'classnames';

interface SideButtonProps {
  type: string;
  onClick(): void;
  title: string;
  index: number;
  length: number;
}

interface Props {
  type: 'developer' | 'designer' | 'client' | string;
}

export default function (props: Props) {
  const navigate = useNavigate();
  let buttons;
  switch (props.type) {
    case 'developer':
      buttons = [
        {
          type: 'chat-room',
          onClick: () => {
            navigate('../chat-room');
          },
          title: '聊天室'
        },
        {
          type: 'pay-manage',
          onClick: () => navigate('../pay-requirement'),
          title: '付款管理'
        },
        {
          type: 'host-infor',
          onClick: () => navigate('../host-info'),
          title: '主機資訊'
        },
        {
          type: 'file-manage',
          onClick: () => navigate('../file-manage'),
          title: '檔案管理'
        },
        {
          type: 'developer-infor',
          onClick: () => navigate('../development-info'),
          title: '開發資訊'
        },
      ]; break;
    case 'client':
      buttons = [
        {
          type: 'chat-room',
          onClick: () => {
            navigate('../chat-room');
          },
          title: '聊天室'
        },
        {
          type: 'pay-manage',
          onClick: () => navigate('../pay-requirement'),
          title: '付款管理'
        },
        {
          type: 'host-infor',
          onClick: () => navigate('../host-info'),
          title: '主機資訊'
        },
        {
          type: 'file-manage',
          onClick: () => navigate('../file-manage'),
          title: '檔案管理'
        },
        {
          type: 'developer-infor',
          onClick: () => navigate('../development-info'),
          title: '開發資訊'
        },
      ]; break;
    case 'designer':
      buttons = [
        {
          type: 'chat-room',
          onClick: () => {
            navigate('../chat-room');
          },
          title: '聊天室'
        },
        {
          type: 'file-manage',
          onClick: () => navigate('../file-manage'),
          title: '檔案管理'
        },
        {
          type: 'pay-manage',
          onClick: () => navigate('../pay-requirement'),
          title: '付款管理'
        }
      ]; break;
    case 'admin':
      buttons = [
        {
          type: 'file-manage',
          onClick: () => navigate('./../file-manage'),
          title: '檔案管理'
        },
        {
          type: 'host-infor',
          onClick: () => navigate('./../host-infor'),
          title: '主機資訊'
        },
        {
          type: 'third-infor',
          onClick: () => navigate('./../third-infor'),
          title: '第三方資訊'
        },
        {
          type: 'chat-room',
          onClick: () => navigate('./../chat-room'),
          title: '聊天室'
        }
      ]; break;
    default: buttons = [
      {
        type: 'chat-room',
        onClick: () => {
        },
        title: '聊天室'
      },
      {
        type: 'file-manage',
        onClick: () => { },
        title: '檔案管理'
      },
      {
        type: 'pay-manage',
        onClick: () => { },
        title: '付款管理'
      }
    ];
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="h-80 w-80 rounded-full
    fixed right-0 top-0 bottom-0 my-auto">
      <div
        className="bg-primary-red rounded-full w-10 h-10
        flex justify-center items-center cursor-pointer
        m-auto z-10 absolute top-0 bottom-0 left-0 -right-48"
        onClick={() => {setIsOpen(!isOpen);}}
      >
        <img
          src={isOpen ?
            '/icons/sideButtons/close.png' :
            '/icons/sideButtons/side-button.png'}
          alt={isOpen ? 'close' : 'side-button'}
          className="h-5 w-5"
        />
      </div>

      <div
        className={cx(
          'w-full h-full bg-red-200 rounded-full absolute -right-24'
        )}
        style={isOpen ? circleShowStyle : circleHideStyle}>
        {buttons.map(
          (button, index) => {
            return (
              <Button
                key={index}
                index={index}
                onClick={button.onClick}
                type={button.type}
                title={button.title}
                length={buttons.length}
              />
            );
          })}
      </div>

    </div>

  );
}

function Button(props:SideButtonProps) {
  const { onClick, type, title, length } = props;
  const index = props.index ? props.index : 0;
  let left = '', top = '';
  if (length === 5) {
    left = (-40 *
      Math.cos(-0.5 * Math.PI + index / (length - 1) * Math.PI) - 6) + '%';
    top = (40 * Math.sin(-0.5 * Math.PI + index / (length-1) * Math.PI)) + '%';
  }
  else if (length === 3) {
    left = (-40 * Math.cos(
      -0.3 * Math.PI + index / (length - 1) * Math.PI * 0.6) - 6) + '%';
    top = (40 * Math.sin(
      -0.3 * Math.PI + index / (length - 1) * Math.PI * 0.6)) + '%';
  }
  else if (length === 2) {
    left = (-40 * Math.cos(
      -0.2 * Math.PI + index / (length - 1) * Math.PI * 0.4) - 6) + '%';
    top = (40 * Math.sin(
      -0.2 * Math.PI + index / (length - 1) * Math.PI * 0.4)) + '%';
  }
  else if (length === 4) {
    left = (-40 * Math.cos(
      -0.4 * Math.PI + index / (length - 1) * Math.PI * 0.8) - 6) + '%';
    top = (40 * Math.sin(
      -0.4 * Math.PI + index / (length - 1) * Math.PI * 0.8)) + '%';
  }

  return (
    <div
      className={cx(
        'flex flex-col items-center absolute ml-40 mt-32',
      )}
      style={{ left: left, top: top }}>
      <div
        className="bg-primary-red rounded-full w-10 h-10
    flex justify-center items-center cursor-pointer"
        onClick={onClick}
      >
        <img
          src={'/icons/sideButtons/' + type + '.png'}
          alt={type}
          className="h-5 w-5"
        />
      </div>
      <div className="text-primary-red text-xs">
        {title}
      </div>
    </div>
  );
}

const circleHideStyle = {
  transform: 'scale(0)',
  transition: 'all .4s ease-out',
  opacity: 0
};

const circleShowStyle = {
  opacity: 1,
  transfrom: 'scale(1)'
};

