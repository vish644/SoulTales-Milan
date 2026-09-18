import React, { useEffect, useState, useRef } from "react";
import Button from "../common/Button";
import ContactImg from "../assets/ContactImg.jpg";
import CrossDivider from "../common/CrossDivider";
import { fluid } from "../utils/fluid.js";
import Reveal from "../common/Reveal";
import CrossLines from "../common/CrossLines";
import { IoMdClose } from "react-icons/io";
import ReactDOM from "react-dom";
import Form from "../common/Form";
import AnchoredCross from "../common/AnchoredCross";

const Contact = () => {
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
    // <section
    //   id="contact"
    //   ref={containerRef}
    //   className="
    //     bg-cover bg-center text-white w-full h-screen relative isolate

    //     before:absolute before:inset-0
    //     before:bg-[image:var(--bg-image)]
    //     before:bg-cover
    //     before:bg-center
    //     before:-z-10

    //     after:absolute after:inset-0
    //     after:bg-[linear-gradient(90deg,#000000_0%,rgba(0,0,0,0)_100%)]
    //     after:-z-[5]

    //     max-md:after:bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]
    //   "
    //   style={{
    //     backgroundImage: `url(${ContactImg})`,
    //     backgroundPosition: "60%",
    //   }}
    // >

    <section
      id="contact"
      ref={containerRef}
      className="
        text-white w-full h-screen relative isolate

        before:absolute before:inset-0
        before:bg-image:var(--bg-image-desktop)
        before:bg-cover
        before:bg-position-[60%]
        before:-z-10

        after:absolute after:inset-0
        after:bg-[linear-gradient(90deg,#000000_0%,rgba(0,0,0,0)_100%)]
        after:z-[-5]

        max-md:before:bg-image:var(--bg-image-mobile)
        max-md:after:bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]
      "
      style={{
        "--bg-image-desktop": `url(${ContactImg})`,
        "--bg-image-mobile": `url(${ContactImg})`,
      }}
    >
      <div className="max-w-360 mx-auto h-full flex flex-col gap-6 items-start justify-center max-md:justify-end text-white pb-10 sm:pb-14 lg:pb-20 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start w-full max-w-157.5 gap-4 sm:gap-6 lg:gap-8">
          <Reveal from="left" delay={0.75}>
            <div className="flex flex-col items-start w-full max-w-157.5 gap-5 sm:gap-6 lg:gap-8">
              <h1 className="leading-tight text-start">
                The World Is Ready To See Your Work.
              </h1>
              <h3 className="text-start">Are you ready to be seen?</h3>
            </div>
          </Reveal>

          {/* Cross Divider */}
          <div className="relative w-full h-10 sm:h-12 lg:h-14">
            <AnchoredCross
              containerRef={containerRef}
              anchorRef={headingRef}
              xAlign="left" // anchor from the LEFT edge, not right
              horizontalCrossPosition="20%" // horizontal line starts AT crossing → extends right
              verticalCrossPosition="50%" // vertical roughly centered on crossing point
              xInsetFraction={0} // sit right at the anchor's left edge, no inward pull
              extraOffset={{ base: 13, sm: 15, md: 27, lg: 20, xl: 69 }}
              gapAbove={{ base: 60, sm: 60, md: 60, lg: 60, xl: 50 }}
              hLength={{ base: 140, sm: 200, md: 250, lg: 180, xl: 250 }}
              vLength={{ base: 50, sm: 70, md: 70, lg: 50, xl: 60 }}
            />
          </div>
          <Reveal from="left" delay={0.75}>
            <p
              ref={headingRef}
              className="text-base sm:text-lg leading-relaxed"
            >
              The work is already yours. The only thing missing is the room that
              proves its worth. Twenty places. One conversation stands between
              you and the global stage.
            </p>
          </Reveal>
          <Reveal from="left" delay={0.75}>
            <Button onClick={handleOpenForm} />
          </Reveal>
        </div>
      </div>
      {formModal}
    </section>
  );
};

export default Contact;
