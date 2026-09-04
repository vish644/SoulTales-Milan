import React from "react";
import { PrivacyPolicyData } from "../data/PrivacyPolicyData";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-360 mx-auto min-h-screen flex flex-col gap-6 items-center justify-center pb-10 sm:pb-14 ">
      <div className="bg-black w-full text-center flex justify-center px-10">
        <div className="flex flex-col items-center gap-4 sm:gap-5 text-white max-w-210 py-20 px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-oswald">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-base leading-relaxed font-syne">
            SoulTales is operated by Soltale Potential Exploration Pvt Ltd, Flat
            8, Puja Apt, S No 95, Plot No 50, Paud Road, Bhusari Colony, Pune
            City, Pune – 411038, Maharashtra, India (“SoulTales”, “we”, “us”).
            We ask for very little of your data, we use it only to do our work,
            and we never sell it. This page says the same thing in the detail
            the law rightly requires. It is written to comply with India’s
            Digital Personal Data Protection Act, 2023. Last updated: July 2026
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-8 w-full max-w-322.5 px-5 sm:px-8 lg:px-10 py-5">
        {PrivacyPolicyData.map((data, index) => (
          <div key={index} className="flex flex-col gap-2 sm:gap-3">
            <h2 className="text-lg sm:text-xl font-semibold font-oswald">
              {data.heading}
            </h2>
            <p className="text-xs sm:text-base text-black leading-relaxed font-syne">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicy;
