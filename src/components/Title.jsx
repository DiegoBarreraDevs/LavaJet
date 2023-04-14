import React from "react";

const Title = ({ colorT, colorL, title }) => {
  return (
    <div className="pb-20">
      <h2 className={`${colorT} sm:text-[30px] text-[28px] text-center py-2 font-semibold`}>
        {title}
      </h2>
      <div className={`${colorL} w-[100px] h-[2px] mx-auto`}></div>
    </div>
  );
};

export default Title;