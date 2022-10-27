import Button from '~/components/common/Button';
import Popup from '~/components/common/Popup';
import { useState } from 'react';
import { useNavigate } from 'remix';

export default function Index() {
  const [isSignatured, setIsSignatured] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="h-auto w-full p-3 relative">
      <img className="h-9/12" src="/images/client-contract.svg" alt=""/>
      <div className="w-full mt-5 text-center">
        <Button
          className="mt-5 w-32 h-12 mb-20"
          onClick={()=>{navigate('../contract/contract');}}>
          下一步</Button>
      </div>
      <div
        className="absolute right-24 bottom-44
            w-64 h-32 cursor-pointer"
        onClick={() => {setIsSignatured(true);}}
      >
      </div>

      {isSignatured &&
        <Popup
          type="signature"
          onClickButton={() => {
            localStorage.setItem('client-quotation', 'true');
          }}/>}
    </div>
  );
}
