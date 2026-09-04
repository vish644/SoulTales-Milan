import React,{ useState} from "react";
import ReactDOM from "react-dom";
import Button from "../common/Button";
import ItalianAteliers from "../assets/ItalianItelier.svg";
import GlobalMarket from "../assets/GlobalMarket.svg";
import CircleOfTwenty from "../assets/CircleOfTwenty.svg";
import Collections from "../assets/Collections.svg";
import CrossDivider from "../common/CrossDivider";
import vintage from "../assets/vintage 1.svg";
import vintage2 from "../assets/vintage 2.svg";
import { fluid } from "../utils/Fluid";
import Reveal from "../common/Reveal";
import { IoMdClose } from "react-icons/io";
import Form from "../common/Form";


const PillarPoint = ({ image, heading, description, divider }) => (
  <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
    {divider && (
      <CrossDivider
        orientation={divider.orientation || "vertical"}
        length={divider.length}
        crossLength={divider.crossLength}
        crossPosition={divider.crossPosition}
        thickness={divider.thickness || "1px"}
        color={divider.color || "#fff"}
      />
    )}
    <img src={image} alt="" className="h-10 w-auto sm:h-auto" />
    <h2>{heading}</h2>
    <p className="text-xs sm:text-sm">{description}</p>
  </div>
);

const TheFourPillars = () => {
  const sectionOne = [
    {
      image: ItalianAteliers,
      heading: "Inside Italian ateliers",
      description:
        "Behind doors that don't open to visitors - the craft rooms that dress the world's great houses. You see how the best hold their work, and where yours already stands.",
      divider: {
        length: fluid(120, 200),
        crossLength: fluid(35, 60),
        crossPosition: fluid(95, 160),
      },
    },
    {
      image: CircleOfTwenty,
      heading: "A founding circle of twenty",
      description:
        "Not a crowd. A curated circle of India's finest, walking into the global market together - the first, and the fewest.",
      divider: {
        length: fluid(120, 200),
        crossLength: "0px",
        crossPosition: "0px",
      },
    },
  ];
  const sectionTwo = [
    {
      image: GlobalMarket,
      heading: "A day reading the global market",
      description:
        "A private masterclass with a leading Milan fashion institute - how the world proces work like yours, and where it belongs. You leave certified.",
      divider: {
        length: fluid(120, 200),
        crossLength: "0px",
        crossPosition: "0px",
      },
    },
    {
      image: Collections,
      heading: "Your collection, presented & filmed",
      description:
        "Your pieces shown on professional models in a curated Milan salon, captured on cinematic film. The proof you carry home.",
      divider: {
        length: fluid(120, 200),
        crossLength: fluid(35, 60),
        crossPosition: fluid(25, 40),
      },
    },
  ];

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
    <section id="four-pillars" className="bg-black w-full">
      <div className="max-w-360 mx-auto text-white grid grid-cols-1 md:grid-cols-3 gap-10 items-center md:gap-5 text-center py-12 md:py-10 px-5 sm:px-8 lg:px-10">
        <Reveal from="top" delay={0.59} className="order-2 md:order-1">
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
            {sectionOne.map((data, index) => (
              <PillarPoint key={index} {...data} />
            ))}
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal from="top" delay={0.59}>
            <div className="flex flex-col items-center justify-center sm:gap-4">
              <img src={vintage} alt="" />
              <h1 className="text-center">The Four Pillars Of Distinction</h1>
              <img src={vintage2} alt="" className="rotate-180" />
              <Button
                title="Request Your Invitation"
                className="hidden sm:inline-flex"
                onClick={handleOpenForm}
              />
            </div>
          </Reveal>
        </div>

        <Reveal from="bottom" delay={0.59} className="order-3">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
            {sectionTwo.map((data, index) => (
              <PillarPoint key={index} {...data} />
            ))}
          </div>
        </Reveal>
        <div className="order-4 flex justify-center sm:hidden">
                    <Reveal from="bottom" delay={0.75}>
                      <Button onClick={handleOpenForm} />
                    </Reveal>
        </div>
      </div>
       {/* Form */}
      {formModal}
    </section>
  );
};

export default TheFourPillars;
