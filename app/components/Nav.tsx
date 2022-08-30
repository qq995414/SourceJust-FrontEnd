export function Nav() {
    return <div className="w-full mx-auto" style={{ zIndex:"50"}}>
        <div className=" flex flex-row w-full h-16 px-8 fixed top-0 pt-5 nav-title"
            style={{ boxShadow: 'inset 0px -1px 0px #F0F0F0;',backgroundColor:'#FFFFFF' }}>
            總覽
        </div>
    </div>;
}

export default Nav;