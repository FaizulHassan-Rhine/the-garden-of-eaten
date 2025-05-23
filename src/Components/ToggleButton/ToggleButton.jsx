
import React, { useContext } from "react";
import { ThemeContext } from "../../Theme";

const ToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="">
     
      <div className="flex items-center justify-center  " >
        <button className="text-white bg-[#E52491] hover:bg-[#E52491] focus:ring-4 focus:outline-none focus:ring-[#E52491] font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => toggleTheme()}>{theme}</button>
      </div>
    </div>
  );
};

export default ToggleButton;