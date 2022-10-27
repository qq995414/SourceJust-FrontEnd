import Button from '~/components/common/Button';
import React from 'react';
import { useNavigate } from 'remix';

interface Props {
  state: 'negotiation' | 'unSigned' | 'unBuilt' | string;
  date: string;
  name: string;
  type: string;
  responsiblePerson: string;
  telephone: string;
  businessPerson: string;
}

export default function (props: Props) {
  const navigate = useNavigate();

  let state = 0;
  switch (props.state) {
    case 'negotiation':
      state = 0;
      break;
    case 'unSigned':
      state = 1;
      break;
    case 'unBuilt':
      state = 2;
      break;
    default:
      break;
  }
  const stateColor = [
    'bg-state-proposal',
    'bg-state-finish',
    'bg-gray-300',
  ];

  const stateName = [
    '需求洽談',
    '尚未簽約',
    '尚未建立'
  ];

  return (
    <div>
      <div
        className="w-5/6 h-32 bg-primary-white flex items-center justify-between
      my-2 ">
        <div className="flex flex-row items-center mr-12">
          <div className="text-gray-400  w-32 whitespace-nowrap">
            {/* {props.date} */}
            <p style={{
              width: '74px',
              height: '64px',
              left: '57px',
              top: '51px',
              fontStyle: 'normal',
              fontWeight: '1000',
              fontSize: '40px',
              lineHeight: '160%',
              /* identical to box height, or 64px */

              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '0.05em',
              color: '#D11329',
            }}>09</p>
            <p className='mb-5' style={{
              width: '121px',
              height: '38px',
              left: '57px',
              top: '115px',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '24px',
              lineHeight: '160%',
              /* identical to box height, or 64px */
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '0.05em',
              color: '#636262',
            }}>Oct. 20</p>
          </div>
          <div className="text-gray-400   " style={{ maxWidth: '791px' }}>
            {/* {props.date} */}
            <p className='whitespace-nowrap' style={{
              width: '74px',
              height: '64px',
              left: '57px',
              top: '51px',
              fontStyle: 'normal',
              fontWeight: '1000',
              fontSize: '32px',
              lineHeight: '160%',
              /* identical to box height, or 64px */

              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '0.05em',
              color: '#000000',
            }}>為什麼SEO如此重要？三個秘密告訴你</p>
            <p className='whitespace-nowrap' style={{
              width: '791px',
              height: '62px',
              left: '202px',
              top: '102px',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '156.9%',
              /* identical to box height, or 64px */
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '0.05em',
              color: '#848484',

              display: 'block',
              /*! autoprefixer: off */
              boxOrient: 'vertical',
              lineClamp: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}> 許多企業品牌在進行網頁設計服務比較與詢價時，最常為各種方案服務所提供的設計範疇煩惱，選擇套版型網頁雖然費用較低，但版面只能填鴨式上架圖但版面只能填鴨式上架圖但版面只能填鴨式上架圖片計範疇煩惱...</p>
          </div>
          <div className="text-gray-400   " >
            {/* {props.date} */}
            <p className='whitespace-nowrap mb-12' style={{
              width: '74px',
              height: '64px',
              left: '57px',
              top: '51px',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '160%',
              /* identical to box height, or 64px */

              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '0.05em',
              color: '#D11329',
            }}>閱讀更多</p>
            </div>
          </div>
        </div>
        <div
          className="w-5/6 h-14 bg-primary-white  items-center justify-between mt-4
      my-2 ">
          <ColoredLine />
        </div>
      </div>
      );
}

      const ColoredLine = ({ }) => (
      <hr
        style={{
          color: 'red',
          width: '1196px',
          border: '1px solid #C4C4C4',
          borderRadius: 'radius: 2px'
        }}
      />
      );