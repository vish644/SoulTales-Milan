import React from "react";
import FounderImg from "../assets/Founder.svg";
import CrossDivider from "../common/CrossDivider";
import { fluid } from "../utils/Fluid";
import Reveal from "../common/Reveal";
import CrossLines from "../common/CrossLines";

const FOUNDER_CROSS_POINTS = {
  base: { x: "8%", y: "50%" },
  sm: { x: "6%", y: "50%" },
  md: { x: "5%", y: "50%" },
  lg: { x: "5%", y: "50%" },
};

const H_LENGTHS = { base: "100%", sm: "100%", md: "100%", lg: "100%" };
const V_LENGTHS = { base: 40, sm: 50, md: 65, lg: 80 };

const Founder = () => {
  return (
<section
  id="founder-preeti"
  className="bg-black py-12 sm:py-16 px-0 sm:px-8 lg:px-10"
>
<div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-0 sm:gap-10 lg:gap-16">
<div className="flex flex-col items-center text-center gap-5 sm:gap-6 max-w-7xl lg:pt-6 px-5 sm:px-0">
          <h1 className="text-center text-white">Why I Built This</h1>
          <Reveal from="left" delay={0.75}>
            <div className="flex flex-col gap-4 leading-relaxed">
              <p className="text-xs sm:text-sm">
                I spent eighteen years designing spaces - until I understood the
                space people needed most wasn't a room. It was permission.
              </p>
              <p className="text-xs sm:text-sm">
                I've watched extraordinary Indian designers stay quietly
                underpriced at home, not because their work wasn't world-class,
                but because the world had never seen it. That gap is what this
                closes.
              </p>
              <p className="text-xs sm:text-sm">
                I hold a Master's in Expressive Movement Therapy and have
                studied with some of the world's leading minds in how we hold
                what we can't yet say. On this journey, I don't teach you to
                design - you've mastered that. I walk beside you while the world
                finally sees what you've made.
              </p>
            </div>
          </Reveal>
          {/* <div className="relative w-full flex items-center justify-center mt-4 sm:mt-6 ">
            <CrossLines
              crossPoints={HERO_CROSS_POINTS}
              horizontalLengths={H_LENGTHS}
              verticalLengths={V_LENGTHS}
              horizontalCrossPosition="50%"
              verticalCrossPosition="80%"
            />

            <div className="absolute px-4 sm:px-6 py-2 bg-black">
              <span className="text-base sm:text-lg text-white ">
                Preeti Toraskar, Founder
              </span>
            </div>
          </div> */}
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
              <span className="text-base sm:text-lg text-white">
                Preeti Toraskar, Founder
              </span>
            </div>
          </div>{" "}
          <Reveal from="left" delay={0.75}>
            <div>
              <h2 className="italic font-bold text-white text-xl sm:text-2xl mt-4">
                "I don't give you answers. I help you remember your own."
              </h2>
            </div>
          </Reveal>
        </div>

<div className="relative w-full h-[420px] sm:w-64 sm:h-80 lg:w-102 lg:h-125 shrink-0">
  <img
    src={FounderImg}
    alt="Preeti Toraskar"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black sm:hidden" />
</div>
      </div>
    </section>
  );
};

export default Founder;
