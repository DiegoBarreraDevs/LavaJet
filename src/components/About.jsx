import React from "react";

import { Card, Title } from "../components";
import { card1, card2, card3 } from "../assets";
import { styles } from "../styles";

const About = () => {
  return (
    <div alt='about' id='about' className="h-[100%] py-20">
      <Title
        colorT={'text-black-100'}
        colorL={'bg-[#d8d8d8]'}
        title={'Our Process'}
      />
      <div className={`${styles.paddingX} flex flex-col sm:justify-between sm:flex-row mx-auto w-[100%]`}>
        <Card
          img={card1}
          title="Free Budget"
          description="Before starting to work, we offer every client a free budget so they could know how much are they gonna invest in the cleaning."
          alt="Budget"
        />
        <Card
          img={card2}
          title="Work and Cleaning"
          description="Once we reach an agreement with the client, we start working and cleaning, we clean and densifect the bin with all our professionalism."
          alt='Cleaning Bin'
        />
        <Card
          img={card3}
          title="Customer Satisfaction"
          description="Once the job is donde, we make sure that every client is happy with the final results of the cleaning."
          alt='Bin clean'
        />
      </div>
    </div>
  );
};

export default About;
