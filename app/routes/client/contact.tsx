export default function Index() {
  return (
    <div className="flex flex-row justify-center">
      <div className="container h-screen px-12 w-4/5 flex justify-center">
        <div className="w-[500px]">
          <div className="flex flex-col items-center mt-52">
            <img className="w-24" src="/images/logo.svg" alt=""/>
            <div className="flex"><p
              style={{ letterSpacing:'20px' }}
              className="h-6 mt-4 text-lg">索爾斯科</p>
              <p className="h-6 mt-4 text-lg">技</p></div>
            <p
              style={{ color:'#717274' }}
              className="h-12 text-sm">Source Solution</p>
          </div>
          <div className="flex w-[500px] h-12">
            <div className="flex items-center w-[300px]">
              <img className="w-7 h-7" src="/images/contact-phone.svg" alt=""/>
              <p
                style={{ color:'#717274' }}
                className="ml-4 w-[200px] text-left text-sm p-2.5 tracking-widest">02-1234-5678</p>
            </div>
            <div className="flex items-center w-[200px]">
              <img className="mr-2 w-7 h-7" src="/images/contact-email.svg" alt=""/>
              <p
                style={{ color:'#717274' }}
                className="ml-2 w-44 text-left text-sm p-2.5 tracking-widest">abc_1234@gmail.com</p>
            </div>
          </div>
          <div className="mt-2 flex w-[500px] h-12">
            <div className="flex items-center w-[300px]">
              <img className="w-7 h-7" src="/images/contact-ins.svg" alt=""/>
              <p
                style={{ color:'#717274' }}
                className="ml-4 w-[200px] text-left text-sm p-2.5 tracking-widest">source.solution</p>
            </div>
            <div className="flex items-center w-[200px]">
              <img className="mr-2 h-7 w-7" src="/images/contact-FB.svg" alt=""/>
              <p
                style={{ color:'#717274' }}
                className="ml-2 w-44 text-left text-sm p-2.5 tracking-widest">索爾斯科技</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
