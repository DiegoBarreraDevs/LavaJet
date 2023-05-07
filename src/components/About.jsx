import React from "react";

import { Title } from "../components";
import {
  brick,
  concrete,
  concrete1,
  fence,
  graff,
  truck,
  wood,
} from "../assets";
import AboutButton from "./AboutButton";

const AboutImages = ({ img1, img2, img3, alt1, alt2, alt3 }) => {
  return (
    <div className="flex flex-row sm:w-[80%] w-[95%] mx-auto">
      <div className="flex flex-col w-[50%]">
        <img src={img1} alt={alt1} className="w-[100%] sm:h-[280px] h-[185px] pr-[8px]" />
        <img
          src={img2}
          alt={alt2}
          className="w-[100%] sm:h-[280px] h-[185px] pr-[8px] mt-[16px]"
        />
      </div>
      <div className="w-[50%] sm:h-[576px] h-[386px] overflow-hidden flex">
        <img src={img3} alt={alt3} className="object-cover object-center w-[100%] pl-[8px]" />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div alt="about" id="about" className="h-[100%] py-[50px]">
      <Title
        colorT={"text-black-100"}
        colorL={"bg-[#d8d8d8]"}
        title={"Our Process"}
      />
      <AboutImages
        img1={concrete1}
        img2={concrete}
        img3={graff}
        alt1='Washing concrete'
        alt2='Cleaning Concrete'
        alt3='Cleaning Graffity'
      />
      <AboutButton
        img1={wood}
        img2={fence}
        img3={brick}
        img4={truck}
        alt1='Cleaning Wood'
        alt2='Cleaning Fence'
        alt3='Cleaning Bricks'
        alt4='Cleaning Truck'
      />
    </div>
  );
};

export default About;

{
  /* */
}
