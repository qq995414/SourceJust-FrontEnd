import Popup from '~/components/common/Popup';
import { useNavigate } from 'remix';
import { useState } from 'react';

export default function Index() {
  const [signature, setSignature] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="p-4 mt-2">
          <div className="p-4 mt-2 flex flex-col items-center relative">
            <img
              src={'/images/contract-sjbjd.svg'}
              alt=""
              className="relative"
            />
            <div
              className="absolute right-36 bottom-12
            w-48 h-24 cursor-pointer"
              onClick={() => {setSignature(true);}}
            >
            </div>
          </div>
        </div>
      </div>

      {signature &&
        <Popup
          type="signature"
          onClickButton={() => {
            navigate('../outsourcing-contract');
          }}/>}
    </div>

  );
}
