import React, { useState} from "react";
import ReactDOM from "react-dom";
import Button from "../common/Button";
import TheDebutImg from "../assets/TheDebut.webp";
import Reveal from "../common/Reveal";
import CrossLines from "../common/CrossLines";
import Form from "../common/Form";
import { IoMdClose } from "react-icons/io";

const CROSS_POINTS = {
  base: { x: "88%", y: "45%" },
  sm: { x: "80%", y: "10%" },
  md: { x: "93%", y: "52%" },
  lg: { x: "93%", y: "34%" },
};

// This page wants the opposite proportions from Hero:
// a short vertical (80px) and a long horizontal (200px).
const H_LENGTHS = { base: 120, sm: 160, md: 180, lg: 250 };
const V_LENGTHS = { base: 40, sm: 55, md: 65, lg: 80 };

const TheDebut = () => {
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
      id="the-debut"
className="bg-cover bg-[position:30%_center] sm:bg-center w-full text-white h-screen relative isolate"
      style={{
        backgroundImage: `url(${TheDebutImg})`,
      }}
    >
      {/* Cross Divider */}
      <CrossLines
        crossPoints={CROSS_POINTS}
        horizontalLengths={H_LENGTHS}
        verticalLengths={V_LENGTHS}
        horizontalCrossPosition="80%"
        verticalCrossPosition="50%"
      />

      <div className="max-w-360 mx-auto h-full flex flex-col gap-6 items-end justify-end text-white pb-10 sm:pb-14 lg:pb-20 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-end gap-5 sm:gap-6 lg:gap-8">
          <Reveal from="right" delay={0.75}>
            <div className="flex flex-col gap-2 sm:gap-4 max-w-xl">
              <h1 className="leading-tight text-end max-w-xl">
                The Evening The Journey Is Built Around
              </h1>
              <h2 className="leading-tight text-end">The Debut</h2>

              <p className="text-end max-w-4xl leading-relaxed">
                For one night, your collection stops being something you make at
                home and becomes something the world has seen. Presented on
                professional models, in an intimate Milan salon, under lights -
                and filmed.
              </p>
            </div>
          </Reveal>
          <Reveal from="right" delay={0.75}>
             <Button onClick={handleOpenForm} />
          </Reveal>
        </div>
      </div>
      
      {/* Form */}
      {formModal}
    </section>
  );
};

export default TheDebut;
