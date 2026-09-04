import React from "react";
import CrossDivider from "../common/CrossDivider";
import vintage from "../assets/vintage 1.svg";
import vintage2 from "../assets/vintage 2.svg";
import { fluid } from "../utils/Fluid";

const Credibility = () => {
  return (
    <section id="credibility" className="w-full bg-black text-white">
      <div className="max-w-360 mx-auto h-full flex flex-col gap-6 items-end justify-end text-white py-10 px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 w-full">
          <div className="text-center sm:text-left ">
            <img src={vintage} alt="" className="mx-auto sm:mx-0" />
            <h1 className="text-center sm:text-start">Credibility</h1>
            <img src={vintage2} alt="" className="rotate-180 mx-auto sm:mx-0" />
          </div>
          <div className="flex items-center gap-4 sm:gap-5">
            <CrossDivider
              orientation="vertical"
              length={fluid(120, 200)}
              crossLength={fluid(35, 60)}
              crossPosition={fluid(20, 40)}
              thickness="1px"
              color="#fff"
            />
            <h3 className="text-center">
              In Partnership With A Leading Milan Fashion Institute
            </h3>
          </div>
          <div className="flex items-center">
            <h3 className="text-center">
              Access To The Ateliers Behind Europe's Great Houses
            </h3>
          </div>
          <div className="flex items-center sm:pt-6">
            <h3 className="text-center">
              SoulTales Has Guided Over 300 People Through Private Journeys -
              Milan Is Our First Crafted For Designers
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
