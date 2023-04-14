import React, { useState } from "react";
import { arrow } from "../assets";
import { motion, AnimatePresence } from "framer-motion";

const Faqs = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-[70%] mx-auto py-2">
      {/* Question Sections */}
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center animate-pulse bg-sky-50 p-5 cursor-pointer"
      >
        <h1 className="text-xl font-semibold text-black">{question}</h1>
        <img src={arrow} alt="" className={`transition-all duration-500 ${show ? 'rotate-180' : ''} h-[30px]`} />
      </div>
      {/* Answer Section */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 200 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-y-auto bg-sky-100"
          >
            <p className="px-5 py-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Faqs;
