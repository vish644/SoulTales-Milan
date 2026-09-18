import React, { useEffect, useState, useRef } from "react";
import Button from "../common/Button";
import TheCircleImg from "../assets/TheCircleImg.jpg";
import CrossDivider from "../common/CrossDivider";
import { fluid } from "../utils/fluid.js";
import Reveal from "../common/Reveal";
import CrossLines from "../common/CrossLines";
import { IoMdClose } from "react-icons/io";
import ReactDOM from "react-dom";
import Form from "../common/Form";
import AnchoredCross from "../common/AnchoredCross";

const TheCircle = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const containerRef = useRef(null);
  const headingRef = useRef(null);

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
    //     id="the-circle"
    //     ref={containerRef}
    //     className="
    //   text-white w-full h-screen relative isolate bg-black

    //   before:absolute before:bg-cover before:bg-[position:58%_center] before:-z-10
    //   before:bg-[image:var(--bg-image)]
    //   before:inset-x-0
    //   before:inset-y-16
    //   sm:before:inset-y-12
    //   md:before:inset-y-8
    //   lg:before:inset-y-4
    //   xl:before:inset-y-0

    //   after:absolute after:inset-0
    //   after:bg-[linear-gradient(90deg,#000000_0%,rgba(0,0,0,0)_100%)]
    //   after:-z-[5]
    //   max-md:after:bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]
    // "
    //     style={{
    //       "--bg-image": `url(${TheCircleImg})`,
    //     }}
    //   >

    <section
      id="the-circle"
      ref={containerRef}
      className="
    text-white w-full h-screen relative isolate bg-black

    before:absolute before:bg-cover before:bg-position-[58%_center] before:-z-10
    before:bg-image:var(--bg-image-desktop)
    before:inset-x-0
    before:inset-y-16
    sm:before:inset-y-12
    md:before:inset-y-8
    lg:before:inset-y-4
    xl:before:inset-y-0

    after:absolute after:inset-0
    after:bg-[linear-gradient(90deg,#000000_0%,rgba(0,0,0,0)_100%)]
    after:z-[-5]
    max-md:after:bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]

    max-md:before:bg-image:var(--bg-image-mobile)
  "
      style={{
        "--bg-image-desktop": `url(${TheCircleImg})`,
        "--bg-image-mobile": `url(${TheCircleImg})`,
      }}
    >
      <div className="max-w-360 mx-auto h-full flex flex-col gap-6 items-start justify-center max-md:justify-end text-white pb-10 sm:pb-14 lg:pb-20 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start w-full max-w-157.5 gap-5 sm:gap-6 lg:gap-8">
          <Reveal from="top" delay={0.5}>
            <div
              ref={headingRef}
              className="flex flex-col items-start w-full max-w-157.5 gap-5 sm:gap-6 lg:gap-8 pb-5 md:pb-10"
            >
              <h1>The Circle</h1>
              <h2>Twenty designers. Once a year. By invitation.</h2>
            </div>
          </Reveal>

          <AnchoredCross
            containerRef={containerRef}
            anchorRef={headingRef}
            xAlign="left" // anchor from the LEFT edge, not right
            horizontalCrossPosition="20%" // horizontal line starts AT crossing → extends right
            verticalCrossPosition="50%" // vertical roughly centered on crossing point
            xInsetFraction={0} // sit right at the anchor's left edge, no inward pull
            extraOffset={{ base: 28, sm: 28, md: 50, lg: 40, xl: 0 }}
            gapAbove={{ base: 29, sm: 50, md: 40, lg: 50, xl: 50 }}
            hLength={{ base: 140, sm: 200, md: 260, lg: 200, xl: 250 }}
            vLength={{ base: 40, sm: 70, md: 60, lg: 50, xl: 60 }}
          />

          <Reveal from="bottom" delay={0.5}>
            <p ref={headingRef} className="text-base sm:text-lg">
              This is Edition I - the founding circle. The first names to carry
              "Milan-shown" home, and the fewest. As a founder, you're named
              among the originals, with first access to every edition that
              follows.
              <br />
              This isn't a trip you take. It's the beginning of your global
              chapter - and we walk it with you beyond Milan.
            </p>
          </Reveal>

          <Reveal from="bottom" delay={0.5}>
            <Button onClick={handleOpenForm} />
          </Reveal>
        </div>
      </div>
      {formModal}
    </section>
  );
};

export default TheCircle;
