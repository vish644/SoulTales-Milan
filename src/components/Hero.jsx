import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "../common/Button";
import HeroImg from "../assets/Hero.jpg";
import Navbar from "../Navbar";
import Form from "../common/Form";
import { IoMdClose } from "react-icons/io";
import Reveal from "../common/Reveal";
import { useLocation } from "react-router-dom";
import CrossLines from "../common/CrossLines";

const HERO_CROSS_POINTS = {
  base: { x: "88%", y: "45%" },
  sm: { x: "80%", y: "10%" },
  md: { x: "93%", y: "52%" },
  lg: { x: "94%", y: "37%" },
};

const Hero = () => {
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
      id="home"
      className="relative isolate before:absolute before:inset-0 before:bg-[image:var(--bg-image)] before:bg-cover before:bg-center before:-z-10 after:absolute after:inset-0 after:bg-black/50 after:-z-[5] bg-cover bg-center w-full text-white h-screen"
      style={{ "--bg-image": `url(${HeroImg})` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Cross Divider */}
      <CrossLines
        crossPoints={HERO_CROSS_POINTS}
        horizontalCrossPosition="50%"
        verticalCrossPosition="80%"
      />

      {/* Content */}
      <div className="max-w-360 mx-auto h-full flex flex-col gap-6 items-end justify-end text-white pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-end w-full max-w-157.5 gap-5 sm:gap-6">
          <Reveal from="bottom" delay={0.75}>
            <div>
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
            <p className="text-end max-w-md lg:max-w-4xl leading-relaxed">
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

      {/* Form */}
      {formModal}
    </section>
  );
};

export default Hero;
