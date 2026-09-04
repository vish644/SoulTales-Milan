import React,{useState} from "react";
import ReactDOM from "react-dom";
import Button from "../common/Button";
import CinematicFilm from "../assets/CinematicFilm.svg";
import EditionMark from "../assets/MilanEditionMark.svg";
import Certification from "../assets/Certificate.svg";
import Declartion from "../assets/Declaration.svg";
import CrossDivider from "../common/CrossDivider";
import vintage from "../assets/vintage 1.svg";
import vintage2 from "../assets/vintage 2.svg";
import { fluid } from "../utils/Fluid";
import Reveal from "../common/Reveal";
import Form from "../common/Form";
import { IoMdClose } from "react-icons/io";

const ProofPoint = ({ image, heading, description, divider }) => (
  <div className="flex flex-col items-center justify-center gap-2 sm:gap-4">
    <img src={image} alt="" />
    <h2>{heading}</h2>
    <p className="text-sm">{description}</p>
    {divider && (
      <CrossDivider
        orientation={divider.orientation || "horizontal"}
        length={divider.length}
        crossLength={divider.crossLength}
        crossPosition={divider.crossPosition}
        thickness={divider.thickness || "1px"}
        color={divider.color || "#fff"}
      />
    )}
  </div>
);

const Proof = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
  
    const handleOpenForm = () => {
      setIsFormOpen(true);
    };
  
    const closeForm = () => {
      setIsFormOpen(false);
    };
  
  const sectionOne = [
    {
      image: CinematicFilm,
      heading: "A Cinematic Film An Editorial Lookbook",
      description:
        "High-resolution images ready for buyers, press, and your own clients.",
      divider: {
        length: fluid(120, 200),
        crossLength: fluid(35, 60),
        crossPosition: fluid(95, 160),
      },
    },
    {
      image: EditionMark,
      heading: 'The Milan Edition Mark - "Class Of 2027"',
      description:
        "A verified seal for your website, lookbook and store. Proof, portable, that the world has seen your work. (Verifiable on our public Class of 2027 roster.)",
      divider: {
        length: fluid(120, 200),
        crossLength: "0px",
        crossPosition: "0px",
      },
    },
  ];

  const sectionTwo = [
    {
      image: Certification,
      heading: "A Certificate Of Participation",
      description:
        "From a leading Milan fashion institute - the credential that repositions how your market reads you.",
      divider: {
        length: fluid(120, 200),
        crossLength: "0px",
        crossPosition: "0px",
      },
    },
    {
      image: Declartion,
      heading: "The Declaration",
      description:
        "A closing dinner where each designer names what their work is now worth, and where it goes next.",
      divider: {
        length: fluid(120, 200),
        crossLength: fluid(35, 60),
        crossPosition: fluid(95, 160),
      },
    },
  ];

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
    <div id="proof" className="bg-black w-full">
      <section className="max-w-360 mx-auto text-white grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-center px-5 sm:px-8 lg:px-10 py-12 md:py-10">
        <div className="flex flex-col items-center md:items-start justify-center sm:gap-4 max-w-sm mx-auto text-center md:text-start">
          <img src={vintage} alt="" />
          <h1 className="text-center md:text-start text-xl">
            What You Carry Home - Your Proof:
          </h1>
          <img src={vintage2} alt="" className="rotate-180" />
          <p className="text-center md:text-start pb-10 md:pb-5">
            This is the bridge between private craft and public value. You don't
            come back with photos of a holiday. You come back with the evidence
            that changes your price.
          </p>
          <Button onClick={handleOpenForm}/>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 max-w-sm mx-auto">
          {sectionOne.map((data, index) => (
            <Reveal key={index} from="top" delay={0.35}>
              <ProofPoint {...data} />
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-10 sm:gap-16 max-w-sm mx-auto  ">
          {sectionTwo.map((data, index) => (
            <Reveal key={index} from="top" delay={0.35}>
              <ProofPoint {...data} />
            </Reveal>
          ))}
        </div>
      </section>
            {/* Form */}
      {formModal}
    </div>
  );
};

export default Proof;
