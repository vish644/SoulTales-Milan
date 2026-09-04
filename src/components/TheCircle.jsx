import React from "react";
import Button from "../common/Button";
import TheCircleImg from "../assets/TheCircle.jpg";
import CrossDivider from "../common/CrossDivider";
import { fluid } from "../utils/Fluid";
import Reveal from "../common/Reveal";

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
            <div className="flex flex-col items-start w-full max-w-157.5 gap-5 sm:gap-6 lg:gap-8">
              <h1>The Circle</h1>
              <h2>Twenty designers. Once a year. By invitation.</h2>
            </div>
          </Reveal>
          <CrossDivider
            orientation="horizontal"
            length="65%"
            crossLength={fluid(35, 60)}
            crossPosition="10%"
            thickness="1px"
            color="#fff"
          />
          <Reveal from="bottom" delay={0.5}>
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
