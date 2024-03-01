import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineGlobal, AiOutlineUserSwitch } from "react-icons/ai";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import english from '../data/english.jpg';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-slate-900"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">

      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex items-center gap-3">
        <TooltipComponent content="Language" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-slate-900 rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={english}
              alt="user-profile"
            />
            <p>
              <span className="text-white font-bold ml-1 text-14">
                English
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        <div className='flex items-center'>
          <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<AiOutlineGlobal />} /> <span className="text-white font-bold ml-1 text-14">Support Request</span>
        </div>
        <div className='flex items-center'>
          <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<AiOutlineUserSwitch />} /> <span className="text-white font-bold ml-1 text-14">Sign Up</span>
        </div>
        {/* <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} /> */}
        
        {/* {isClicked.notification && (<Notification />)} */}
      </div>
    </div>
  );
};

export default Navbar;
