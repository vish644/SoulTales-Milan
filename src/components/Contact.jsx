import React from "react";
import Button from "../common/Button";
import ContactImg from "../assets/Contact.jpg";
import CrossDivider from "../common/CrossDivider";
import { fluid } from "../utils/Fluid";
import Reveal from "../common/Reveal";
import CrossLines from "../common/CrossLines";

const CONTACT_CROSS_POINTS = {
  base: { x: "20%", y: "50%" },
  sm: { x: "5%", y: "50%" },
  md: { x: "5%", y: "50%" },
  lg: { x: "5%", y: "50%" },
};

const H_LENGTHS = { base: 140, sm: 180, md: 220, lg: 200 };
const V_LENGTHS = { base: 30, sm: 40, md: 55, lg: 70 };

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-cover bg-center text-white w-full h-screen relative isolate before:absolute before:inset-0 before:bg-[image:var(--bg-image)] before:bg-cover before:bg-center before:-z-10 after:absolute after:inset-0 after:bg-black/50 after:-z-[5]"
      style={{
        backgroundImage: `url(${ContactImg})`,
      }}
    >
      <div className="max-w-360 mx-auto h-full flex flex-col gap-6 items-start justify-center text-white pb-10 sm:pb-14 lg:pb-20 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start w-full max-w-157.5 gap-4 sm:gap-6 lg:gap-8">
          <Reveal from="left" delay={0.75}>
            <div className="flex flex-col items-start w-full max-w-157.5 gap-5 sm:gap-6 lg:gap-8">
              <h1 className="leading-tight text-start">
                The World Is Ready To See Your Work.
              </h1>
              <h3 className="text-start">Are you ready to be seen?</h3>
            </div>
          </Reveal>

          {/* <CrossDivider
            orientation="horizontal"
            length="70%"
            crossLength={fluid(35, 70)}
            crossPosition="15%"
            thickness="1px"
            color="#fff"
          /> */}

          {/* Cross Divider */}
          <div className="relative w-full h-10 sm:h-12 lg:h-14">
            <CrossLines
              crossPoints={CONTACT_CROSS_POINTS}
              horizontalLengths={H_LENGTHS}
              verticalLengths={V_LENGTHS}
              horizontalCrossPosition="15%"
              verticalCrossPosition="50%"
              horizontalSweepFrom="end"
            />
          </div>
          <Reveal from="left" delay={0.75}>
            <p className="text-start max-w-4xl leading-relaxed">
              The work is already yours. The only thing missing is the room that
              proves its worth. Twenty places. One conversation stands between
              you and the global stage.
            </p>
          </Reveal>
          <Reveal from="left" delay={0.75}>
            <Button />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
