import TextInput from '~/components/common/TextInput';
import Button from '~/components/common/Button';
import { useNavigate } from 'remix';
import { useState } from 'react';

export default function Index() {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [bank, setBank] = useState('');
  const [sideBank, setSideBank] = useState('');
  const [account, setAccount] = useState('');
  const [name, setName] = useState('');

  const finish = () => {
    localStorage.setItem('back', 'true');
    if (code && bank && sideBank && account && name) {
      localStorage.setItem('finish-infor', 'true');
    }
  };
  return (
    <div className="my-12 flex flex-col items-center font-semibold text-xl">
      <h1 className="text-black font-black text-2xl mb-12">匯款資料</h1>
      <div className="flex items-center w-full px-32 my-4">
        <div className="w-20">代碼：</div>
        <TextInput
          className="mr-14"
          value={code}
          placeholder=""
          onChange={(text) => {
            setCode(text);
          }} />
        <div className="w-20">銀行：</div>
        <TextInput
          className="mr-14"
          value={bank}
          placeholder=""
          onChange={(text) => {
            setBank(text);
          }} />
        <div className="w-20">分行：</div>
        <TextInput
          className=""
          value={sideBank}
          placeholder=""
          onChange={(text) => {
            setSideBank(text);
          }} />
      </div>
      <div className="flex items-center w-full px-32 my-4">
        <div className="w-20">帳號：</div>
        <TextInput
          className="w-7/12"
          value={account}
          placeholder=""
          onChange={(text) => {
            setAccount(text);
          }} />
      </div>
      <div className="flex items-center w-full px-32 my-4">
        <div className="w-20">戶名：</div>
        <TextInput
          className="w-7/12"
          value={name}
          placeholder=""
          onChange={(text) => {
            setName(text);
          }} />
      </div>
      <Button
        className="mt-24 font-normal text-base w-32 h-12"
        type="circle"
        onClick={() => {
          finish();
          navigate('./../outsourcing-contract');
        }}
      >
        下一步
      </Button>
    </div>
  );
}
