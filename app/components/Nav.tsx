interface Props<T> {
    title: string;
    titleBlack: string;
    titleGray: string;
}
export function Nav<T>(props: Props<T>) {
    return <div className="w-full mx-auto ml-1" style={{ zIndex: "50" }}>
        <div className=" flex flex-row w-full h-16 px-8 fixed top-0 pt-5 "
            style={{ boxShadow: 'inset 0px -1px 0px #F0F0F0;', backgroundColor: '#FFFFFF' }}>
            <a className="nav-title">{props.title}</a>
            <a className="nav-title-gray">{props.titleGray}</a>
            {props.titleGray != "" && <a className="px-2 pt-1">  <img src="/icons/nav-title.svg" alt="" /> </a>}
            <a className="nav-title-black">{props.titleBlack}</a>
        </div>
    </div>;
}

export default Nav;