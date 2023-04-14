import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-no-repeat bg-center h-screen z-0 w-full items-center">
      <div className="h-screen w-full bg-[#2118a01c]">
        <div className="w-[70%] text-center mx-auto py-auto text-white py-[220px] sm:w-[50%]">
          <h1 className="text-[30px] sm:text-[50px] xs:text-[42px] font-bold">
            We Love Cleaning for our Customers
          </h1>
          <p className="py-5 md:text-[19px] text-[10px]">
            We are LavaJet, a company that has more than 20 years of experience
            in the cleaning business
          </p>
          <button className="bg-blue px-10 py-3 text-[15px] xs:text-[18px] rounded-sm">
            <a href="#contact">Contact</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
