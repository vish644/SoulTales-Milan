import React, { useEffect, useState } from "react";
import TheTensionImg from "../assets/TheTension.webp";
import Button from "../common/Button";
import CrossDivider from "../common/CrossDivider";
import Reveal from "../common/Reveal";
import { useLocation } from "react-router-dom";
import CrossLines from "../common/CrossLines";
import Form from "../common/Form";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";


const CROSS_POINTS = {
  base: { x: "88%", y: "45%" },
  sm: { x: "80%", y: "10%" },
  md: { x: "93%", y: "52%" },
  lg: { x: "9%", y: "30%" },
};

// This page wants the opposite proportions from Hero:
// a short vertical (80px) and a long horizontal (200px).
const H_LENGTHS = { base: 120, sm: 160, md: 180, lg: 300 };
const V_LENGTHS = { base: 40, sm: 55, md: 65, lg: 80 };

const TheTension = () => {
  const location = useLocation();

    const [isFormOpen, setIsFormOpen] = useState(false);
  
    const handleOpenForm = () => {
      setIsFormOpen(true);
    };
  
    const closeForm = () => {
      setIsFormOpen(false);
    };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      el?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

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
      id="tension"
      className="bg-cover bg-center w-full text-white h-screen relative isolate before:absolute before:inset-0 before:bg-[image:var(--bg-image)] before:bg-cover before:bg-center before:-z-10 after:absolute after:inset-0 after:bg-black/50 after:-z-[5]"
      style={{
        backgroundImage: `url(${TheTensionImg})`,
      }}
    >
      {/* Cross Divider */}
      <CrossLines
        crossPoints={CROSS_POINTS}
        horizontalLengths={H_LENGTHS}
        verticalLengths={V_LENGTHS}
        horizontalCrossPosition="28%"
        verticalCrossPosition="50%"
      />

      <div className="max-w-360 mx-auto h-full flex flex-col gap-6 items-start justify-end text-white pb-10 sm:pb-14 lg:pb-20 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start w-full max-w-157.5 gap-4 sm:gap-6 lg:gap-8">
          <Reveal from="right" delay={0.75}>
            <div>
              <h1 className="leading-tight text-start max-w-md lg:max-w-xl">
                Same hands. Same craft. A different price.
              </h1>

              <div className="flex flex-col gap-2 sm:gap-4 mt-4 sm:mt-5 max-w-xl">
                <p className="text-start max-w-4xl leading-relaxed">
                  Luxury has always known a quiet truth: where a piece is seen
                  decides what it's worth.
                  <span className="text-white/80">
                    The atelier. The city. The name in the room.
                  </span>
                </p>
                <p className="text-start max-w-4xl leading-relaxed">
                  Your work is already world-class. Your pricing is still
                  domestic.{" "}
                  <span className="italic">
                    And every season you wait, that gap is a discount you hand
                    the world for free.
                  </span>
                </p>
                <p className="text-start max-w-4xl leading-relaxed">
                  That gap isn't your talent -{" "}
                  <span className="italic text-white/80">
                    it's your provenance. This is how you close it.
                  </span>
                </p>
              </div>
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

export default TheTension;
