import { Faqs, Title } from "../components";

const FaqsSection = () => {
  return (
    <div id="faqs" className="py-20">
      <Title colorT={"text-black-100"} colorL={"bg-[#d8d8d8]"} title={"FAQ's"} />
      <Faqs
        question="Why should I have my trash bin cleaned?"
        answer=" Of course doing it yourself is always a chore. And when it is done, there is a lot of wasted water and harmful detergents used.
            And it has really not been sanitized effectively to remove the germs.
            We not only clean your bin, we disinfect, sanitize and deodorize."
      />
      <Faqs
        question="Do I need to be at home while my bin is being cleaned?            "
        answer="No, Just ensure the bin is empty and visible for the technician to clean."
      />
      <Faqs
        question="What if your technician is not able to clean my bin due to bad weather or street closures?"
        answer="No Worries! We will simply reschedule and arrange a new cleaning date."
      />
      <Faqs
        question="Do you provide this service all year long?"
        answer="No, for the bin's cleaning service, we operate, April to October."
      />
    </div>
  );
};

export default FaqsSection;
