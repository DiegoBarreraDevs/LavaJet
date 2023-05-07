import React, { useState } from "react";
import { arrow } from "../assets";
import { Card } from "../components";
import { styles } from "../styles";
import { money, hat, user } from "../assets";
import { motion, AnimatePresence } from "framer-motion";

const AboutImages = ({ img1, img2, img3, img4, alt1, alt2, alt3, alt4 }) => {
  return (
    <>
      <div className="flex flex-row sm:w-[80%] w-[95%] mx-auto">
        <div className="w-[50%] sm:h-[576px] h-[386px] overflow-hidden flex">
          <img src={img3} alt={alt3} className="object-cover object-center w-[100%] pr-[8px]" />
        </div>
        <div className="flex flex-col w-[50%]">
          <img src={img1} alt={alt1} className="w-[100%] sm:h-[280px] h-[185px] pl-[8px]" />
          <img
            src={img2}
            alt={alt2}
            className="w-[100%] sm:h-[280px] h-[185px] pl-[8px] mt-[16px]"
          />
        </div>
      </div>
      <div className="sm:w-[80%] w-[95%] mx-auto mt-[16px]">
        <img src={img4} alt={alt4} className="sm:h-[350px] h-[200px] w-[100%] object-cover object-bottom  " />
      </div>
      <div
        className='my-[30px] flex sm:justify-between sm:flex-row flex-col mx-auto sm:w-[80%] w-[95%]'
      >
        <Card
          img={money}
          title="Free Budget"
          description="Before starting to work, we offer every client a free budget so they could know how much are they gonna invest in the cleaning."
          alt="Budget"
        />
        <Card
          img={hat}
          title="Work and Cleaning"
          description="Once we reach an agreement with the client, we start working and cleaning, we clean and densifect the bin with all our professionalism."
          alt="Cleaning Bin"
        />
        <Card
          img={user}
          title="Customer Satisfaction"
          description="Once the job is done, we make sure that every client is happy with the final results of the cleaning."
          alt="Bin clean"
        />
      </div>
    </>
  );
};

const AboutButton = ({ img1, img2, img3, img4, alt1, alt2, alt3, alt4 }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-[100%] mx-auto mt-[16px]">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.7 }}
            className="overflow-y-auto"
          >
            <AboutImages
              img1={img1}
              img2={img2}
              img3={img3}
              img4={img4}
              alt1={alt1}
              alt2={alt2}
              alt3={alt3}
              alt4={alt4}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Button section */}
      <div
        onClick={() => setShow(!show)}
        className="mx-auto justify-center flex items-center bg-sky-100 cursor-pointer w-[200px] p-2 mt-5"
      >
        <h1
          className="text-xl
        "
        >
          {show ? "Show Less" : "Show More"}
        </h1>
        <img
          src={arrow}
          alt=""
          className={`transition-all duration-500 ${
            show ? "rotate-180" : ""
          } h-[30px]`}
        />
      </div>
    </div>
  );
};

export default AboutButton;
