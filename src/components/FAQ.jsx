import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import vintage from "../assets/vintage 1.svg";
import vintage2 from "../assets/vintage 2.svg";
import CrossDivider from "../common/CrossDivider";
import { fluid } from "../utils/Fluid";
import { FAQOptions } from "../data/FAQOptions";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black text-white w-full h-screen">
      <div className="max-w-360 mx-auto h-full flex flex-col items-center justify-center text-white pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center w-full gap-6 sm:gap-8">
          <div className="flex flex-col items-center w-full">
            <img src={vintage} alt="" />
            <h1 className="text-center max-w-xl ">
              What To Know Before You Cross The Threshold
            </h1>
            <img src={vintage2} alt="" className="rotate-180" />
          </div>

          <div className="w-full flex flex-col items-center gap-4 sm:gap-5">
            {FAQOptions.map((data, index) => (
              // <div
              //   key={index}
              //   className="max-w-5xl w-full mx-auto flex flex-col items-center gap-3"
              // >
              //   <h3
              //     className={`flex items-center cursor-pointer justify-between gap-4 text-sm sm:text-lg lg:text-xl w-full ${openIndex === index ? "" : ""}`}
              //     onClick={() => handleToggle(index)}
              //   >
              //     {data.que}
              //     <span
              //       className={`shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 " : "rotate-0"}`}
              //     >
              //       <IoIosArrowDown />
              //     </span>
              //   </h3>
              //   <p
              //     className={`text-start ${openIndex === index ? "visible text-xs sm:text-sm" : "hidden"}`}
              //   >
              //     {data.ans}
              //   </p>
              // </div>

              <div
                key={index}
                className="max-w-5xl w-full mx-auto flex flex-col items-center gap-3"
              >
                <h3
                  className={`flex items-center cursor-pointer justify-between gap-4 text-sm sm:text-lg lg:text-xl w-full`}
                  onClick={() => handleToggle(index)}
                >
                  {data.que}
                  <span
                    className={`shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <IoIosArrowDown />
                  </span>
                </h3>
                <p
                  className={`w-full m-0 text-start ${
                    openIndex === index ? "block text-xs sm:text-sm" : "hidden"
                  }`}
                >
                  {data.ans}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex items-end justify-end">
        <CrossDivider
          orientation="horizontal"
          length="50%"
          crossLength={fluid(40, 80)}
          crossPosition="40%"
          thickness="1px"
          color="#fff"
        />
      </div>
    </section>
  );
};

export default FAQ;
