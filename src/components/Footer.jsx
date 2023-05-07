import React from "react";
import {
  facebook,
  tiktok,
  instagram,
  linkedin,
  whatsapp,
  youtube,
  logo,
} from "../assets";

const Footer = () => {
  return (
    <div className="overflow-hidden h-[100%] py-20 bg-bubbles-bg bg-cover bg-center bg-no-repeat z-0 w-full items-center mt-10">
      <h3 className="text-center text-[25px] font-bold mb-[10px] text-black-100">
        LavaJet
      </h3>
      <img src={logo} alt="logo" className="h-[150px] mx-auto" />
      <div className="flex mt-[30px] justify-center gap-8">
      <div className="flex">
          <a target="_blank" href="https://www.facebook.com/people/Lavajet/100091861190678/">
            <img
              src={facebook}
              alt="facebook"
              className="h-[45px] hover:cursor-pointer"
            />
          </a>
        </div>

        <div className="flex">
          <a target="_blank" href="https://www.tiktok.com/@lavajet.net?_t=8blxQD1C4Wb&_r=1&fbclid=IwAR1wB-XdE9mV7F93_K_g8hVxU5sydR7i8zcvJqobdjzM0jIC8Hg2hQYLLW4">
            <img
              src={tiktok}
              alt="tiktok"
              className="h-[45px] hover:cursor-pointer"
            />
          </a>
        </div>

        {/* <img src={instagram} alt="" className='h-[45px] hover:cursor-pointer'/>
        <img src={linkedin} alt="" className='h-[45px] hover:cursor-pointer'/>
        <img src={whatsapp} alt="" className='h-[45px] hover:cursor-pointer'/>
        <img src={youtube} alt="" className='h-[45px] hover:cursor-pointer'/> */}
      </div>
    </div>
  );
};

export default Footer;
