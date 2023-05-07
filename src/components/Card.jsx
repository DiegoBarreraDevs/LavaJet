import React from "react";

const Card = ({ title, description, img, alt }) => {
  return (
    <div className="sm:w-[32%] w-[100%] h-[100%] text-center text-black-100 sm:py-0 m  y-5 bg-sky-50">
      <div className="w-[100%] flex pt-5">
        <img src={img} alt={alt} className="mx-auto h-[35px]"/>
      </div>
      <h3 className="sm:text-[20px] font-medium text-[20px] py-5">{title}</h3>
      <p className="text-[18px] px-5 pb-5">
        {description}
      </p>
    </div>
  );
};

export default Card;
