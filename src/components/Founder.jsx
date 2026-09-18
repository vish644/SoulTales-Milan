import React from "react";
import FounderImg from "../assets/Founder.svg";
import CrossDivider from "../common/CrossDivider";
import { fluid } from "../utils/Fluid";
import Reveal from "../common/Reveal";

const Founder = () => {
  return (
    <section id="founder-preeti" className="bg-black py-12 sm:py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between  lg:gap-16">
        {/* Content */}
        <div className="flex flex-col items-center text-center gap-5 sm:gap-6 max-w-7xl lg:pt-6 px-5 sm:px-8 lg:px-10">
          <h1 className="text-center text-white">Why I Built This</h1>

          <Reveal from="left" delay={0.75}>
            <div className="flex flex-col gap-4 leading-relaxed">
              <p className="text-base sm:text-lg">
                I spent eighteen years designing spaces - until I understood the
                space people needed most wasn't a room. It was permission.
              </p>

              <p className="text-base sm:text-lg">
                I've watched extraordinary Indian designers stay quietly
                underpriced at home, not because their work wasn't world-class,
                but because the world had never seen it. That gap is what this
                closes.
              </p>

              <p className="text-base sm:text-lg">
                I hold a Master's in Expressive Movement Therapy and have
                studied with some of the world's leading minds in how we hold
                what we can't yet say. On this journey, I don't teach you to
                design - you've mastered that. I walk beside you while the world
                finally sees what you've made.
              </p>
            </div>
          </Reveal>

          <div className="relative w-full flex items-center justify-center mt-4 sm:mt-6">
            <CrossDivider
              orientation="horizontal"
              length="100%"
              crossLength={fluid(40, 80)}
              crossPosition={fluid(20, 40)}
              thickness="1px"
              color="#fff"
            />

            <div className="absolute px-4 sm:px-6 py-2 bg-black">
              <span className="text-base sm:text-lg text-white font-heading">
                Preeti Toraskar, Founder
              </span>
            </div>
          </div>

          <Reveal from="left" delay={0.75}>
            <div>
              <h2 className="font-normal text-white text-base sm:text-2xl mt-4 italic font-body">
                "I don't give you answers. I help you remember your own."
              </h2>
            </div>
          </Reveal>
        </div>

        {/* Image */}
        <div className="w-full h-[50vh] sm:w-64 sm:h-80 lg:w-102 lg:h-125 shrink-0 relative overflow-hidden">
          <img
            src={FounderImg}
            alt="Preeti Toraskar"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.35)_40%,rgba(0,0,0,0)_100%)]" />
        </div>
      </div>
    </section>
  );
};

export default Founder;
