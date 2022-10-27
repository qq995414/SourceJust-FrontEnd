import Button from '~/components/common/Button';
import Popup from '~/components/common/Popup';
import { useNavigate } from 'remix';
import { useEffect, useState } from 'react';

export default function Index() {
  const navigate = useNavigate();
  const [signature, setSignature] = useState(false);
  const [signature1, setSignature1] = useState(false);
  const [signature2, setSignature2] = useState(false);

  useEffect(() => {
    setSignature(signature1 && signature2);
  }, [signature1, signature2]);
  return (
    <div
      className="pb-36 px-36 flex flex-col items-center relative"
    >
      <img
        src={'/images/contract-lwbjd.svg'}
        alt=""
        className=""
      />
      <Button
        className="mt-8"
        type="circle"
        onClick={() => {
          if (signature)
          {
            localStorage.setItem('labor-quotation-signature', 'true');
          }
          navigate('../contract/web-contract');
        }}
      >
        下一步
      </Button>

      <div
        className="absolute w-40 h-10 cursor-pointer
        top-48 left-80"
        onClick={() => {setSignature1(true);}}
      >
      </div>

      <div
        className="absolute w-40 h-16 cursor-pointer
        bottom-64 left-80"
        onClick={() => {setSignature2(true);}}
      >
      </div>

      {signature1 &&
        <Popup
          type="signature"
          onClickButton={() => {
            setSignature1(true);
          }} />}
      {signature2 &&
        <Popup
          type="signature"
          onClickButton={() => {
            setSignature2(true);
          }} />}

    </div>
  );
}
