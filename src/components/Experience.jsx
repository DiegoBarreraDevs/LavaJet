import React from "react";
import { trophy, leaf, bug } from '../assets'
import { Card2, Title } from "../components";

const Experience = () => {
  return (
    <div
      alt="solutions"
      id="solutions"
      className="bg-bubbles-bg bg-cover bg-center bg-no-repeat h-[100%] py-20 z-0 w-full items-center "
    >
      <Title
        title="Why Choose Us?"
        colorT="text-black-100"
        colorL="bg-[#d9d9d9]"
      />
      <div className="flex justify-between mt-[-20px] flex-col sm:flex-row">
        <Card2
          img={trophy}
          title="Top Rated"
          description1=". 22 yeears of experience in Professional Bin Cleaning"
          description2=". Rated #1 Bin Cleaning Service in Canada"
          alt='trophy'
        />
        <Card2
          img={leaf}
          title="Evironmentally Friendly"
          description1=". 100% environmentally friendly Cleaning process"
          description2=". Fully self-contained unit using clean water only"
          alt='leaf'
        />
        <Card2
          img={bug}
          title="Reduces Odors and Insects"
          description1=". Destroy germs and pathogens, while fully sanitizing the bin, leaving it odor free"
          description2=". Reduces the attraction of adult flies, limiting egg deposits and maggots"
          description3=". 130 hot pressure washing"
          alt='bug'
        />
      </div>
    </div>
  );
};

export default Experience;
