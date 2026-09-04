

import React, { useState} from "react";
import ReactDOM from "react-dom";
import Button from "../common/Button";
import TheInvestmentImg from "../assets/TheInvestmentImg.webp";
import CrossDivider from "../common/CrossDivider";
import { fluid } from "../utils/Fluid";
import Form from "../common/Form";
import { IoMdClose } from "react-icons/io";
import CrossLines from "../common/CrossLines";

const CROSS_POINTS = {
  base: { x: "11%", y: "45%" },
  sm: { x: "8%", y: "10%" },
  md: { x: "93%", y: "52%" },
  lg: { x: "8%", y: "40%" },
};

// This page wants the opposite proportions from Hero:
// a short vertical (80px) and a long horizontal (200px).
const H_LENGTHS = { base: 120, sm: 160, md: 180, lg: 250 };
const V_LENGTHS = { base: 40, sm: 55, md: 65, lg: 80 };

const TheInvestment = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
  
    const handleOpenForm = () => {
      setIsFormOpen(true);
    };
  
    const closeForm = () => {
      setIsFormOpen(false);
    };

    const formModal = isFormOpen
      ? ReactDOM.createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-sm px-4"
            onClick={closeForm}
          >
            <div
              className="relative bg-black text-white w-full max-w-2xl max-h-[90vh] scrollbar-hide p-6 sm:p-8 border border-white/10 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeForm}
                className="absolute top-4 right-4 text-white/70 hover:text-white cursor-pointer"
              >
                <IoMdClose size={24} />
              </button>
              <Form />
            </div>
          </div>,
          document.body,
        )
      : null;
  return (
    <section
      id="the-investment"
      className="bg-black text-white w-full h-screen"
    >
      <div className="max-w-360 mx-auto h-full text-white pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-10 py-5 md:py-10">
        <div className="flex flex-col items-start max-w-full lg:max-w-198 gap-4">
          <p>
            The Milan Edition is a significant investment in your label's global
            future - and in the price your work commands the moment you return.
          </p>
          <p>
            So is another year of pricing your work below what the world would
            pay for it.
          </p>
          <h2>The full details are shared in your personal conversation.</h2>
          <div className="mt-5">
            <Button onClick={handleOpenForm}/>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-end justify-end w-full mt-8 lg:mt-0 gap-4">
          <CrossDivider
            orientation="horizontal"
            length="60%"
            crossLength={fluid(40, 80)}
            crossPosition="10%"
            thickness="1px"
            color="#fff"
          />

          {/* Cross Divider */}
          {/* <CrossLines
            crossPoints={CROSS_POINTS}
            horizontalLengths={H_LENGTHS}
            verticalLengths={V_LENGTHS}
            horizontalCrossPosition="18%"
            verticalCrossPosition="50%"
            horizontalSweepFrom="right"
          /> */}

          <div className="w-11/12 h-56 sm:h-72 md:h-96 lg:w-300">
            <img
              src={TheInvestmentImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
            {/* Form */}
      {formModal}
    </section>
  );
};

export default TheInvestment;
