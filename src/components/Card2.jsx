import React from "react";

const Card2 = ({
  title,
  description1,
  description2,
  description3,
  img,
  alt,
}) => {
  return (
    <div className=" text-black-100 bg-[#ffffffaf] py-8 px-2 mx-auto sm:my-0 my-5 sm:w-[30%] w-[80%] ">
      <img src={img} alt={alt} className="w-[55px] mx-auto" />
      <h3 className="sm:text-[20px] font-medium text-[18px] py-3 text-center">{title}</h3>
      <p className="text-[18px] text-center text-black-100 ">{description1}</p>
      <p className="text-[18px] text-center text-black-100 py-3">{description2}</p>
      <p className="text-[18px] text-center text-black-100 ">{description3}</p>
    </div>
  );
};

export default Card2;
