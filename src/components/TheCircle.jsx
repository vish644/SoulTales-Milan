import React from "react";
import Button from "../common/Button";
import TheCircleImg from "../assets/TheCircle.jpg";
import CrossDivider from "../common/CrossDivider";
import { fluid } from "../utils/Fluid";
import Reveal from "../common/Reveal";
import CrossLines from "../common/CrossLines";

const CROSS_POINTS = {
  base: { x: "11%", y: "45%" },
  sm: { x: "8%", y: "10%" },
  md: { x: "8%", y: "45%" },
  lg: { x: "8%", y: "40%" },
};

// This page wants the opposite proportions from Hero:
// a short vertical (80px) and a long horizontal (200px).
const H_LENGTHS = { base: 120, sm: 160, md: 180, lg: 250 };
const V_LENGTHS = { base: 40, sm: 55, md: 65, lg: 80 };

const TheCircle = () => {
  return (
    <section
      id="the-circle"
      className="bg-cover bg-center text-white w-full h-screen relative isolate before:absolute before:inset-0 before:bg-[image:var(--bg-image)] before:bg-cover before:bg-center before:-z-10 after:absolute after:inset-0 after:bg-black/50 after:-z-[5]"
      style={{
        backgroundImage: `url(${TheCircleImg})`,
      }}
    >
      <div className="max-w-360 mx-auto h-full flex flex-col gap-6 items-start justify-center text-white pb-10 sm:pb-14 lg:pb-20 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start w-full max-w-157.5 gap-5 sm:gap-6 lg:gap-8">
          <Reveal from="top" delay={0.5}>
            <div className="flex flex-col items-start w-full max-w-157.5 gap-5 sm:gap-6 lg:gap-8 pb-5 md:pb-10">
              <h1>The Circle</h1>
              <h2>Twenty designers. Once a year. By invitation.</h2>
            </div>
          </Reveal>
          {/* <CrossDivider
            orientation="horizontal"
            length="65%"
            crossLength={fluid(35, 60)}
            crossPosition="10%"
            thickness="1px"
            color="#fff"
          /> */}

          <div>
            {/* Cross Divider */}
            <CrossLines
              crossPoints={CROSS_POINTS}
              horizontalLengths={H_LENGTHS}
              verticalLengths={V_LENGTHS}
              horizontalCrossPosition="18%"
              verticalCrossPosition="50%"
              horizontalSweepFrom="right"
            />
          </div>

          <Reveal from="bottom" delay={0.5} className={"pt-5"}>
            <p>
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
            <Button />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default TheCircle;
