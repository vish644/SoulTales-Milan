import React, { useEffect, useState, useRef } from "react";
import TheTensionImg from "../assets/TheTensionImg.jpg";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import { useLocation } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import ReactDOM from "react-dom";
import Form from "../common/Form";
import AnchoredCross from "../common/AnchoredCross";

const TheTension = () => {
  const location = useLocation();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const containerRef = useRef(null);
  const headingRef = useRef(null); // now wraps the WHOLE title block

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
    // <section
    //   id="tension"
    //   ref={containerRef}
    //   className="
    //   bg-cover bg-center w-full text-white h-screen relative isolate
    //   before:absolute before:inset-0
    //   before:bg-image:var(--bg-image-desktop)
    //   before:bg-cover before:bg-center
    //   before:-z-10
    //   after:absolute after:inset-0
    //   after:bg-[linear-gradient(90deg,#000000_0%,rgba(0,0,0,0)_100%)]
    //   after:z-[-5]
    //   max-md:before:bg-image:var(--bg-image-mobile)
    //   max-md:after:bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]
    // "
    //   style={{
    //     "--bg-image-desktop": `url(${TheTensionImg})`,
    //     "--bg-image-mobile": `url(${TheTensionImg})`,
    //   }}
    // >

    <section
      id="tension"
      ref={containerRef}
      className="
      bg-cover bg-center w-full text-white h-screen relative isolate
      before:absolute before:inset-0
      before:bg-[image:var(--bg-image-desktop)]
      before:bg-cover before:bg-center
      before:-z-10
      after:absolute after:inset-0
      after:bg-[linear-gradient(90deg,#000000_0%,rgba(0,0,0,0)_100%)]
      after:-z-[5]
      max-md:before:bg-[image:var(--bg-image-mobile)]
      max-md:after:bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]
    "
      style={{
        "--bg-image-desktop": `url(${TheTensionImg})`,
        "--bg-image-mobile": `url(${TheTensionImg})`,
      }}
    >
      <AnchoredCross
        containerRef={containerRef}
        anchorRef={headingRef}
        xAlign="left" // anchor from the LEFT edge, not right
        horizontalCrossPosition="20%" // horizontal line starts AT crossing → extends right
        verticalCrossPosition="50%" // vertical roughly centered on crossing point
        xInsetFraction={0} // sit right at the anchor's left edge, no inward pull
        extraOffset={{ base: 28, sm: 20, md: 40, lg: 40, xl: 0 }}
        gapAbove={{ base: 50, sm: 50, md: 70, lg: 50, xl: 50 }}
        hLength={{ base: 140, sm: 200, md: 200, lg: 180, xl: 250 }}
        vLength={{ base: 50, sm: 70, md: 60, lg: 50, xl: 60 }}
      />

      <div className="max-w-360 mx-auto h-full flex flex-col gap-6 items-start justify-end text-white pb-10 sm:pb-14 lg:pb-20 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start w-full max-w-157.5 gap-4 sm:gap-6 lg:gap-8">
          <Reveal from="right" delay={0.75}>
            <div ref={headingRef}>
              <h1 className="leading-tight text-start max-w-md lg:max-w-xl">
                Same hands. Same craft. A different price.
              </h1>

              <div className="flex flex-col gap-2 sm:gap-4 mt-4 sm:mt-5 max-w-xl">
                <p className="text-start max-w-4xl leading-relaxed text-base md:text-lg">
                  Luxury has always known a quiet truth: where a piece is seen
                  decides what it's worth.
                  <span className="text-white">
                    The atelier. The city. The name in the room.
                  </span>
                </p>
                <p className="text-start max-w-4xl leading-relaxed text-base md:text-lg">
                  Your work is already world-class. Your pricing is still
                  domestic.{" "}
                  <span className="italic">
                    And every season you wait, that gap is a discount you hand
                    the world for free.
                  </span>
                </p>
                <p className="text-start max-w-4xl leading-relaxed text-base md:text-lg">
                  That gap isn't your talent -{" "}
                  <span className="italic text-white">
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
      {formModal}
    </section>
  );
};

export default TheTension;
