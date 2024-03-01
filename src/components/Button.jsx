import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, secondColor, bgHoverColor, size, text, borderRadius, width, display, gap }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius, display }}
      className={` text-${size} pr-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor} gap-${gap} items-center justify-between`}
    >
      <span style={{backgroundColor: secondColor,}} className={`p-3`}>{icon}</span> <span>{text}</span>
    </button>
  );
};

export default Button;
