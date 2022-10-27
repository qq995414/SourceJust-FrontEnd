import { useState } from 'react';
import { Link } from 'remix';

interface Props<T> {
    className?: string;
    background: string,
    date: string,
    name: string,
    type: string,
    url: string
}

function Customer<T>(props: Props<T>) {
    const [isExpanded, setIsExpanded] = useState(false);
    const back = props.background
    return <div className='hover-button' style={{ width: '100%' }} ><Link
        to={props.url}
        className="relative">
        <img style={{ width: '100%' }} src={back} alt="" />

        <div
            className="absolute w-full  bottom-0 from-black rounded-lg hover-button--off"
            style={{ height: '100%' }}></div>

        <div
            className="absolute w-full  bottom-0 from-black rounded-lg hover-button--on"
            style={{ height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}>
            <p style={{fontSize:'36px', lineHeight: '320px' }} className='text-white text-center'>{props.name}</p>
            <p style={{fontSize:'16px', lineHeight: '5px' }} className='text-white text-center'>了解更多→</p>
        </div>

    </Link></div >
}

export default Customer;
