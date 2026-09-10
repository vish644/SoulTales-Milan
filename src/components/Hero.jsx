import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Button from "../common/Button";
import HeroImg from "../assets/HeroImg.jpg";
import Form from "../common/Form";
import { IoMdClose } from "react-icons/io";
import Reveal from "../common/Reveal";
import { useLocation } from "react-router-dom";
import AnchoredCross from "../common/AnchoredCross";

const Hero = () => {
  const location = useLocation();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const containerRef = useRef(null);
  const headingRef = useRef(null); // now wraps the WHOLE title block

  const handleOpenForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

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
    //   id="home"
    //   ref={containerRef}
    //   className="
    //   relative isolate
    //   before:absolute before:inset-0
    //   before:bg-[image:var(--bg-image)]
    //   before:bg-cover before:bg-center
    //   before:-z-10
    //   after:absolute after:inset-0
    //   after:bg-[linear-gradient(280deg,#000000_0%,rgba(0,0,0,0)_100%)]
    //   after:-z-[5]
    //   max-md:after:bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]
    //   bg-contain bg-center w-full text-white h-screen
    // "
    //   style={{ "--bg-image": `url(${HeroImg})` }}
    // >

    <section
      id="home"
      ref={containerRef}
      className="
    relative isolate

    before:absolute
    before:inset-0
    before:bg-[image:var(--bg-image)]
    before:bg-cover
    before:bg-[position:40%_center]
    before:bg-no-repeat
    before:-z-10

    after:absolute
    after:inset-0
    after:bg-[linear-gradient(280deg,#000000_0%,rgba(0,0,0,0)_100%)]
    after:-z-[5]

    max-md:before:bg-cover
    max-md:before:bg-[position:35%_top]

    max-md:after:bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%),
      linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]

    bg-black
    w-full
    text-white
    h-screen
    overflow-hidden
  "
      style={{ "--bg-image": `url(${HeroImg})` }}
    >
      <AnchoredCross
        containerRef={containerRef}
        anchorRef={headingRef}
        gapAbove={{ base: 40, sm: 14, md: 70, lg: 55, xl: 55 }}
        extraOffset={{ base: 0, sm: 15, md: 5, lg: 0, xl: 0 }}
        xInsetFraction={0.1}
        hLength={{ base: 43, sm: 60, md: 72, lg: 80, xl: 70 }}
        vLength={{ base: 120, sm: 160, md: 195, lg: 180, xl: 170 }}
      />

      <div className="max-w-360 mx-auto h-full flex flex-col gap-6 items-end justify-end text-white pb-12 sm:pb-10 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-end w-full max-w-157.5 gap-5 sm:gap-6">
          <Reveal from="bottom" delay={0.75}>
            <div ref={headingRef}>
              <h1 className="leading-tight text-end">
                A Milan<span className="text-white/60">-</span>Shown Designer
              </h1>
              <h1 className="leading-tight text-end">
                Doesn't Compete On Price.
              </h1>
              <h2 className="italic text-end">She Sets It.</h2>
            </div>
          </Reveal>
          <Reveal from="bottom" delay={0.75}>
            <p className="text-end max-w-md lg:max-w-4xl leading-relaxed text-base md:text-lg">
              Six days in the world's fashion capital - where your collection is
              presented, filmed, and certified by a leading Milan institute. You
              come home with the one thing that changes how your market values
              your work: proof that it belongs on the world stage.
            </p>
          </Reveal>
          <Reveal from="bottom" delay={0.75}>
            <Button onClick={handleOpenForm} />
          </Reveal>
        </div>
      </div>

      {formModal}
    </section>

    //   <section
    //     id="home"
    //     ref={containerRef}
    //     className="
    //   relative isolate
    //   bg-black

    //   before:absolute
    //   before:inset-0
    //   before:bg-[image:var(--bg-image)]
    //   before:bg-[length:140%_auto]
    //   before:bg-center-top
    //   before:bg-no-repeat
    //   before:-z-10

    //   max-md:before:bg-[length:140%_auto]
    //   max-md:before:bg-center-top

    //   after:absolute
    //   after:inset-0
    //   after:bg-[linear-gradient(280deg,#000000_0%,rgba(0,0,0,0)_100%)]
    //   after:-z-[5]

    //   max-md:after:bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%),
    //     linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]

    //   w-full
    //   min-h-screen
    //   text-white
    //   overflow-hidden
    // "
    //     style={{ "--bg-image": `url(${HeroImg})` }}
    //   >
    //     <AnchoredCross
    //       containerRef={containerRef}
    //       anchorRef={headingRef}
    //       gapAbove={{ base: 40, sm: 14, md: 70, lg: 55, xl: 55 }}
    //       extraOffset={{ base: 0, sm: 15, md: 5, lg: 0, xl: 0 }}
    //       xInsetFraction={0.1}
    //       hLength={{ base: 43, sm: 60, md: 72, lg: 80, xl: 70 }}
    //       vLength={{ base: 120, sm: 160, md: 195, lg: 180, xl: 170 }}
    //     />

    //     <div
    //       className="
    //     max-w-360 mx-auto
    //     min-h-screen
    //     flex flex-col
    //     gap-6
    //     items-end
    //     justify-end
    //     text-white
    //     pb-12 sm:pb-10
    //     px-5 sm:px-8 lg:px-10
    //   "
    //     >
    //       <div
    //         className="
    //       flex flex-col
    //       items-end
    //       w-full
    //       max-w-157.5
    //       gap-5 sm:gap-6
    //     "
    //       >
    //         <Reveal from="bottom" delay={0.75}>
    //           <div ref={headingRef}>
    //             <h1 className="leading-tight text-end">
    //               A Milan<span className="text-white/60">-</span>Shown Designer
    //             </h1>

    //             <h1 className="leading-tight text-end">
    //               Doesn't Compete On Price.
    //             </h1>

    //             <h2 className="italic text-end">She Sets It.</h2>
    //           </div>
    //         </Reveal>

    //         <Reveal from="bottom" delay={0.75}>
    //           <p className="text-end max-w-md lg:max-w-4xl leading-relaxed text-base md:text-lg">
    //             Six days in the world's fashion capital - where your collection is
    //             presented, filmed, and certified by a leading Milan institute. You
    //             come home with the one thing that changes how your market values
    //             your work: proof that it belongs on the world stage.
    //           </p>
    //         </Reveal>

    //         <Reveal from="bottom" delay={0.75}>
    //           <Button onClick={handleOpenForm} />
    //         </Reveal>
    //       </div>
    //     </div>

    //     {formModal}
    //   </section>
  );
};

export default Hero;
