import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import logo from '../data/logo.png';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-gray-700  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  // const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-0 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <div className="flex justify-center items-center w-20 h-20 ">
                <img src={logo} alt="Logo"/> 
              </div><span>Promp.az</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-white m-3 mt-4 mb-6 uppercase flex justify-between items-center cursor-pointer"
                onClick={() =>
                  subHeading !== item.title
                    ? setSubHeading(item.title)
                    : setSubHeading("")
                }
                >
                  <div className="flex items-center"><span className='inline-block text-lg'>{item.icon}</span><span className="ml-4 capitalize"><Link to="/" className='text-md'>{item.title}</Link></span></div>
                  {item.links && (
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                        <ion-icon
                          name={`${
                            subHeading === item.title
                              ? "chevron-down"
                              : "chevron-forward-outline"
                          }`}
                        ></ion-icon>
                      </span>
                    )}
                </p>
                {item.links && (
                  <div
                      className={`${
                        subHeading === item.title ? "block" : "hidden"
                      }`}
                  >
                    {item.links.map((link) => (
                      <NavLink
                        to={`/${link.url}`}
                        key={link.name}
                        onClick={handleCloseSideBar}
                        style={({ isActive }) => ({
                          backgroundColor: isActive ? currentColor : '',
                        })}
                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                      >
                        <span className="capitalize pl-5">{link.name}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
