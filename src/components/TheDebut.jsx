import React, { useEffect, useState, useRef } from "react";
import Button from "../common/Button";
import TheDebutImg from "../assets/WebpImages-SoulTales-Milan/TheDebut.webp";
import Reveal from "../common/Reveal";
import { IoMdClose } from "react-icons/io";
import ReactDOM from "react-dom";
import Form from "../common/Form";
import AnchoredCross from "../common/AnchoredCross";

const TheDebut = () => {
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
    //   <section
    //     id="the-debut"
    //     ref={containerRef}
    //     className="
    //   bg-image:var(--bg-image-desktop) bg-cover bg-position-[25%]
    //   w-full text-white h-screen relative isolate

    //   before:absolute before:inset-0
    //   before:bg-[linear-gradient(280deg,#000000_0%,rgba(0,0,0,0)_100%)]
    //   before:z-0

    //   after:absolute after:inset-0
    //   after:bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]
    //   after:z-[-5]

    //   max-md:bg-image:var(--bg-image-mobile)
    //   max-md:before:bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%)]
    // "
    //     style={{
    //       "--bg-image-desktop": `url(${TheDebutImg})`,
    //       "--bg-image-mobile": `url(${TheDebutImg})`,
    //     }}
    //   >

    <section
      id="the-debut"
      ref={containerRef}
      className="
    bg-[image:var(--bg-image-desktop)] bg-cover bg-[position:25%]
    w-full text-white h-screen relative isolate

    before:absolute before:inset-0
    before:bg-[linear-gradient(280deg,#000000_0%,rgba(0,0,0,0)_100%)]
    before:z-0

    after:absolute after:inset-0
    after:bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]
    after:-z-[5]

    max-md:bg-[image:var(--bg-image-mobile)]
    max-md:before:bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%)]
  "
      style={{
        "--bg-image-desktop": `url(${TheDebutImg})`,
        "--bg-image-mobile": `url(${TheDebutImg})`,
      }}
    >
      <AnchoredCross
        containerRef={containerRef}
        anchorRef={headingRef}
        xAlign="right" // anchor from the LEFT edge, not right
        horizontalCrossPosition="80%" // horizontal line starts AT crossing → extends right
        verticalCrossPosition="50%" // vertical roughly centered on crossing point
        xInsetFraction={0} // sit right at the anchor's left edge, no inward pull
        extraOffset={{ base: 28, sm: 28, md: 50, lg: 50, xl: 0 }}
        gapAbove={{ base: 50, sm: 50, md: 60, lg: 60, xl: 50 }}
        hLength={{ base: 140, sm: 200, md: 260, lg: 200, xl: 250 }}
        vLength={{ base: 60, sm: 70, md: 80, lg: 70, xl: 60 }}
      />

      <div className="relative z-10 max-w-360 mx-auto h-full flex flex-col gap-6 items-end justify-end text-white pb-10 sm:pb-14 lg:pb-20 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-end gap-5 sm:gap-6 lg:gap-8">
          <Reveal from="right" delay={0.75}>
            <div
              ref={headingRef}
              className="flex flex-col gap-2 sm:gap-4 max-w-xl"
            >
              <h1 className="leading-tight text-end max-w-xl">
                The Evening The Journey Is Built Around
              </h1>

              <h2 className="leading-tight text-end">The Debut</h2>

              <p className="text-end max-w-4xl leading-relaxed text-base md:text-lg">
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
      {formModal}
    </section>
  );
};

export default TheDebut;
