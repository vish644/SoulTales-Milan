import React from "react";
import { TermsAndConditionsData } from "../data/TermsAndConditionsData";

const TermsAndConditions = () => {
  return (
    <section className="max-w-360 mx-auto min-h-screen flex flex-col gap-6 items-center justify-center pb-10 sm:pb-14 ">
      <div className="bg-black w-full text-center flex justify-center px-10">
        <div className="flex flex-col items-center gap-4 sm:gap-5 text-white max-w-210 py-20 px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl  font-oswald">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-base leading-relaxed font-syne">
            These terms govern your use of this website and your participation
            in journeys, retreats and programs operated by Soltale Potential
            Exploration Pvt Ltd, Flat 8, Puja Apt, S No 95, Plot No 50, Paud
            Road, Bhusari Colony, Pune City, Pune – 411038, Maharashtra, India
            (“SoulTales”, “we”, “us”). By using this website or confirming a
            booking, you accept them. We’ve written these in plain English on
            purpose. They are still a contract. Last updated: July 2026
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-8 w-full max-w-322.5 px-5 sm:px-8 lg:px-10  sm:py-5 ">
        {TermsAndConditionsData.map((data, index) => (
          <div key={index} className="flex flex-col gap-2 sm:gap-3">
            <h1 className="text-lg sm:text-xl font-semibold font-oswald text-start">
              {data.heading}
            </h1>
            <p className="text-xs sm:text-base text-black leading-relaxed font-syne">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermsAndConditions;
