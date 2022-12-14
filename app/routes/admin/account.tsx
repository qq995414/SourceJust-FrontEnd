import TextInput from '~/components/common/TextInput';
import { PropsWithChildren, useState } from 'react';

export default function Index() {
  const [lanuagelist, setlanuagelist] = useState([
    {
      id: 'C+',
      select: '精通'
    }, {
      id: 'Python',
      select: '精通'
    }, {
      id: 'Java',
      select: '熟練'
    }
  ]);
  const newObject = {
    id: '',
    select: ''
  };
  const [changePass, setchangePass] = useState(false);
  const [Lanuage, setLanuage] = useState(false);
  const a = [1, 2, 3, 4, 5];
  console.log(a.push(6));
  return (
    <div className="h-screen w-full ">
      <div className=" h-full w-full container mx-auto"> {/* container */}
        <div className="flex flex-col w-full h-full">
          <div className="h-1/5 w-full flex justify-center">
            <img
              className="m-7 rounded-full"
              src="/images/personal-pic.svg"
              alt="" />
          </div>
          <div className="h-4/6 w-full flex flex-col items-center px-28 m-5">
            <AccList Id={'姓名：'} Name={'王小明'} />
            <AccList Id={'電話：'} Name={'0912-3456789'} />
            <AccList Id={'身分證字號：'} Name={'A121345678'} />
            <AccList Id={'居住地：'} Name={'台北市'} />
            <AccList Id={'電子郵件：'} Name={'abc_1234@gmail.com'} />
            {/* 密碼 */}
            {!changePass && <div
              className="w-full h-20 bg-primary-white flex items-center shadow-sm">
              <div className="p-3.5 text-left w-1/5 ">密碼設定：</div>
              <div style={{ color: '#717274' }} className="p-3.5 w-3/5">已設定
              </div>
              <img
                onClick={() => {
                  setchangePass(true);
                }}
                className="ml-auto mr-2 my-auto cursor-pointer"
                src="/images/account-rewrite.svg"
                alt="" />
            </div>}

            {changePass && <div
              className="w-full h-60 bg-primary-white flex items-center shadow-sm">
              <div
                style={{ width: '150px' }}
                className="p-3.5 text-left ">密碼設定：
              </div>
              <div className="flex flex-col w-full h-full">
                <div className="w-full flex flex-row mt-4">
                  <p
                    style={{
                      width: '120px',
                      color: '#717274'
                    }}
                    className="p-3.5 w-1/6 text-right">舊密碼</p>
                  <TextInput
                    className="p-3.5 w-2/6"
                    type="normal"

                  />
                  <div className="ml-auto">
                    <AccButton
                      onClick={() => {
                        setchangePass(false);
                      }}>完成</AccButton>
                  </div>
                </div>
                <div className="w-4/6 flex flex-row mt-4">
                  <p
                    style={{
                      width: '120px',
                      color: '#717274'
                    }}
                    className="p-3.5 w-1/6 text-right">新密碼</p>
                  <TextInput
                    className="p-3.5 w-3/6"
                    type="normal"

                  />
                </div>
                <div className="w-4/6 flex flex-row mt-4 mb-4">
                  <p
                    style={{
                      width: '120px',
                      color: '#717274'
                    }}
                    className="p-3.5 text-right">確認新密碼</p>
                  <TextInput
                    className="p-3.5 w-3/6"
                    type="normal"

                  />
                </div>
              </div>
            </div>}

            {/* 語言 */}

            {!Lanuage && <div
              className="w-full bg-primary-white flex items-center">
              <div className="p-3.5 text-left w-1/5 mb-auto mt-1">使用語言：</div>
              <div className="flex flex-col w-3/5">
                <div className="w-full flex flex-col h-full mb-auto">
                  {lanuagelist.map((i) => <UseLanuage
                    key={i.id}
                    id={i.id}
                    select={i.select} />)}
                </div>
              </div>
              <img
                onClick={() => {
                  setLanuage(true);
                }}
                className="mt-4 ml-auto mr-2 mb-auto cursor-pointer "
                src="/images/account-rewrite.svg"
                alt="" />
            </div>}

            {Lanuage && <div
              className="w-full bg-primary-white flex items-center">
              <div
                className="p-3.5 text-left w-1/5 mb-auto mt-1 ">使用語言：
              </div>
              <div className="flex flex-col w-3/5 h-full">
                {lanuagelist.map((i) => <InputList key={i.id} />)}
                <div className="w-2/3">
                  <p
                    onClick={() => setlanuagelist([...lanuagelist, newObject])}
                    className="text-sm mt-3 text-right
                 cursor-pointer text-primary-red">新增技能</p>
                </div>
              </div>
              <div className=" mt-4 ml-auto mb-auto">
                <AccButton
                  onClick={() => {
                    setLanuage(false);
                  }}>完成</AccButton>
              </div>
            </div>}

          </div>
        </div>
      </div>
    </div>
  );
}

function AccList(props: { Id: string, Name: string }) {
  const name = props.Name;
  const id = props.Id;
  const [isChanged, setIsChanged] = useState(false);
  return <div
    className="w-full h-20 bg-primary-white flex items-center shadow-sm">
    <div className="p-3.5 text-left w-1/5 ">{id}</div>
    {!isChanged &&
      <div style={{ color: '#717274' }} className="p-3.5 w-3/5">{name}</div>}
    {isChanged && <TextInput
      className="p-3.5 w-auto my-1"
      type="normal"

      placeholder={name}
    />}
    {!isChanged && <img
      onClick={() => {
        setIsChanged(true);
      }}
      className="ml-auto mr-2 my-auto cursor-pointer"
      src="/images/account-rewrite.svg"
      alt="" />}
    {isChanged && <div className="ml-auto">
      <AccButton
        onClick={() => {
          setIsChanged(false);
        }}>完成</AccButton>
    </div>}
  </div>;
}

interface Props {
  onClick(): void;
}

function AccButton(props: PropsWithChildren<Props>) {
  return <button
    className="px-6 py-2 bg-white rounded-full text-primary-red shadow-md"
    onClick={() => props.onClick()}>
    {props.children}
  </button>;
}

function UseLanuage(props: { id: string, select: string }) {
  return (<div>
    <div className="w-full flex flex-row mt-1">
      <div style={{ color: '#717274' }} className="p-3.5 w-1/2">{props.id}</div>
      <div
        style={{ color: '#717274' }}
        className="p-3.5 w-1/2">{props.select}</div>
    </div>
  </div>);
}

function InputList() {
  return (<div className="flex w-full">
    <div className="w-1/3 flex flex-row mt-4">
      <TextInput
        className="p-3.5 w-5/6"
        type="normal"

      />
    </div>
    <div className="w-1/2 flex flex-row mt-4">
      <TextInput
        className="p-3.5 w-4/6"
        type="normal"

      />
    </div>
  </div>);
}
