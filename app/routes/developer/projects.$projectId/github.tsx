import Button from '~/components/common/Button';
import TextInput from '~/components/common/TextInput';
import Input from '~/components/comment/Input';
import { useNavigate } from 'remix';
import { useState } from 'react';

interface Props{
    name:string;
    contact:string;
}

export default function Index(){
  const [isState, setIsState] = useState(0);
  const navigate = useNavigate();
  return(
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full">
        <div className="w-full flex flex-col h-96  items-center">
          <TextCard name="專案名稱：" contact="ＸＸＸ專案名稱"/>
          <InputCard name="Github 帳號：" contact="abc1234"/>
        </div>
        {isState==0 && <div className="text-center w-full">
          <Button
            className="h-12 w-32"
            onClick={()=>{setIsState(isState+1);}}>下一步</Button>
        </div>}
        {isState==1 && <div className="text-center w-full">
          <Button
            className="h-12 w-32"
            onClick={()=>{setIsState(isState+1);}}>下一步</Button>
          <p className="text-[#11C00E] mt-3">
            已發送帳號給後台，待後台方確認傳送邀請給您</p>
        </div>}
        {isState==2 && <div className="text-center w-full">
          <Button
            className="h-12 w-32"
            onClick={()=>{navigate('../seo-setup');}}>下一步</Button>
          <p className="text-[#B82728] mt-3">
            後台已確認發送邀請，請確認後再進行下一步</p>
        </div>}
      </div>
    </div>
  );
}

function TextCard(props:Props){
  return (
    <div className="w-full h-20 flex text-lg justify-center tracking-[0.2em]">
      <div className="w-3/5 flex items-center">
        <p className="ml-4 w-2/5 text-right">{props.name}</p>
        <p className="ml-20 w-3/5 h-12 flex items-center">
          {props.contact}
        </p>
      </div>
    </div>
  );
}
function InputCard(props:Props){
  return (
    <div className="w-full h-20 flex text-lg justify-center tracking-[0.2em]">
      <div className="w-3/5 flex items-center">
        <p className="ml-4 w-2/5 text-right">{props.name}</p>
        <TextInput
          className="ml-20 w-3/5 h-12 flex items-center text-black
           bg-primary-gray"
          value={props.contact}
          onChange={()=>{}}
        />
      </div>
    </div>
  );
}
