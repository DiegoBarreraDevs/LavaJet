import React from "react";

const Card = ({ title, description, img, alt }) => {
  return (
    <div className="sm:w-[32%] w-[90%] h-[100%] text-center text-black-100 mx-auto sm:py-0 py-8">
      <div className="w-[90%] h-[250px] overflow-hidden mx-auto">
        <img src={img} alt={alt} className="object-cover h-[300px] w-[100%]"/>
      </div>
      <h3 className="sm:text-[20px] font-medium text-[20px] py-5">{title}</h3>
      <p className="text-[18px] px-5">
        {description}
      </p>
    </div>
  );
};

export default Card;
