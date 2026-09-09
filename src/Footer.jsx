import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import CrossDivider from "./common/CrossDivider";
import Logo from "../src/assets/Final Soul Tales Logo.svg";
import { fluid } from "./utils/Fluid";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { navOptions } from "./utils/scrollToSection";
import CrossLines from "./common/CrossLines";

const NAV_CROSS_POINTS = {
  base: { x: "50%", y: "85%" },
  sm: { x: "50%", y: "85%" },
  md: { x: "50%", y: "85%" },
  lg: { x: "5%", y: "50%" },
};

const H_LENGTHS = { base: "100%", sm: "100%", md: "100%", lg: "100%" };
const V_LENGTHS = { base: "20cqw", sm: "20cqw", md: "20cqw", lg: "20cqw" };

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/", {
        state: { scrollTo: id },
      });
    }
  };

  // return (
  //   <section className="bg-black text-white">
  //     <div className="mx-auto flex h-full max-w-360 flex-col items-center justify-center gap-6 pb-8 text-white px-5 sm:px-8 lg:px-10">
  //       <div className="flex w-full flex-col items-center justify-center gap-2 sm:gap-10">
  //         {/* Footer Main Content */}
  //         <div className="grid w-full grid-cols-1 gap-5 py-8 pt-4 text-sm md:grid-cols-8 lg:gap-10 lg:py-10">
  //           {/* Description */}
  //           <div className="md:col-span-3">
  //             <p className="max-w-xl text-base">
  //               From solitary craft to global power. We bring couture designers,
  //               label founders, and textile artists to Milan's legacy rooms -
  //               where fabric commands the prestige and pricing it deserves.
  //             </p>

  //             {/* Social Links */}
  //             <div className="mt-4 flex items-center gap-8 text-sm">
  //               <a
  //                 href="https://www.instagram.com/soultales.explorations?stkn=MXM5bnp1bXdzajB2Mw=="
  //                 className="cursor-pointer"
  //                 aria-label="Instagram"
  //               >
  //                 {" "}
  //                 <FaInstagram />
  //               </a>
  //               <a
  //                 href="https://www.linkedin.com/company/soul-tales/"
  //                 className="cursor-pointer"
  //                 aria-label="LinkedIn"
  //               >
  //                 {" "}
  //                 <FaLinkedin />
  //               </a>
  //               {/* <a href="" className="cursor-pointer" aria-label="Twitter">
  //                 {" "}
  //                 <FaSquareXTwitter />
  //               </a> */}
  //             </div>
  //           </div>

  //           {/* Navigation */}
  //           <div className="grid grid-cols-1 items-end justify-end gap-x-2 gap-y-3 pb-4 text-xs text-white/60 sm:grid-cols-3 md:col-span-6 lg:grid-cols-6 lg:gap-x-8 lg:text-sm">
  //             {navOptions
  //               .filter((o) => o.id !== "home")
  //               .map((option) => (
  //                 <a
  //                   key={option.id}
  //                   href={`#${option.id}`}
  //                   onClick={handleNavClick(option.id)}
  //                   className="cursor-pointer transition-colors hover:text-white"
  //                 >
  //                   <span className="text-base">{option.name}</span>
  //                 </a>
  //               ))}
  //           </div>
  //         </div>

  //         {/* Logo Divider */}
  //         <div className="relative mt-4 flex w-full items-center justify-center sm:mt-6">
  //           <CrossDivider
  //             orientation="horizontal"
  //             length="100%"
  //             crossLength={fluid(40, 80)}
  //             crossPosition={fluid(20, 40)}
  //             thickness="1px"
  //             color="#fff"
  //           />

  //           <div className="absolute flex items-center gap-3 bg-black px-3 sm:px-6 sm:py-2">
  //             <Link to="/">
  //               <img
  //                 src={Logo}
  //                 alt="Soul Tales"
  //                 className="h-12 w-auto cursor-pointer sm:h-16 lg:h-20"
  //               />
  //             </Link>
  //           </div>
  //         </div>

  //         {/* Footer Bottom */}
  //         <div className="grid w-full grid-cols-1 items-center gap-3 text-center md:grid-cols-4 md:text-left">
  //           {/* Copyright */}
  //           <p className="text-xs">
  //             <span>©</span> 2026 Soul Tales. All rights reserved.
  //           </p>

  //           {/* Credit */}
  //           <p className="text-sm md:col-span-2 md:text-center text-white font-heading ">
  //             Thoughtfully Curated & Marketed By{" "}
  //             <a href="https://osumare.com/" className="hover:underline">
  //               Osumare
  //             </a>
  //           </p>

  //           {/* Legal Links */}
  //           <div className="flex items-center justify-center gap-4 md:items-end md:justify-end">
  //             <Link
  //               to="/privacy-policy"
  //               className="cursor-pointer text-xs text-white/60"
  //             >
  //               Privacy Policy
  //             </Link>

  //             <Link
  //               to="/terms-and-conditions"
  //               className="cursor-pointer text-xs text-white/60"
  //             >
  //               Terms & Conditions
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
    <section className="bg-black text-white w-full">
      <div
        className="
        mx-auto
        flex
        w-full
        max-w-360
        flex-col
        items-center
        justify-center
        px-5
        py-8
        sm:px-8
        sm:py-10
        lg:px-10
        lg:py-12
        xl:py-14
      "
      >
        <div className="flex w-full flex-col items-center justify-center">
          {/* Footer Main Content */}
          <div
            className="
            grid
            w-full
            grid-cols-1
            gap-8
            py-0
            sm:gap-10
            md:grid-cols-8
            lg:gap-12 
          "
          >
            {/* Description */}
            <div className="md:col-span-3">
              <p
                className="
                max-w-xl
                text-sm
                leading-relaxed
                sm:text-base
                lg:text-lg
              "
              >
                From solitary craft to global power. We bring couture designers,
                label founders, and textile artists to Milan's legacy rooms -
                where fabric commands the prestige and pricing it deserves.
              </p>

              {/* Social Links */}
              <div
                className="
                mt-4
                flex
                items-center
                gap-6
                text-base
                sm:mt-5
                sm:gap-7
                sm:text-lg
              "
              >
                <a
                  href="https://www.instagram.com/soultales.explorations?stkn=MXM5bnp1bXdzajB2Mw=="
                  className="cursor-pointer transition-opacity hover:opacity-70"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/company/soul-tales/"
                  className="cursor-pointer transition-opacity hover:opacity-70"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div
              className="
              grid
              grid-cols-2
              gap-x-6
              gap-y-3
              text-xs
              text-white/60
              sm:grid-cols-3
              sm:gap-x-8
              md:col-span-5
              md:grid-cols-3
              lg:grid-cols-6
              lg:gap-x-6
              lg:text-sm
          "
            >
              {navOptions
                .filter((o) => o.id !== "home")
                .map((option) => (
                  <a
                    key={option.id}
                    href={`#${option.id}`}
                    onClick={handleNavClick(option.id)}
                    className="
                    cursor-pointer
                    transition-colors
                    hover:text-white
                  "
                  >
                    <span className="text-sm sm:text-base">{option.name}</span>
                  </a>
                ))}
            </div>
          </div>

          {/* Logo Divider */}
          <div
            className="
            relative
            mt-8
            flex
            w-full
            items-center
            justify-center
            sm:mt-10
            lg:mt-12
          "
          >
            <CrossDivider
              orientation="horizontal"
              length="100%"
              crossLength={fluid(35, 70)}
              crossPosition={fluid(20, 40)}
              thickness="1px"
              color="#fff"
            />

            <div
              className="
              absolute
              flex
              items-center
              gap-2
              bg-black
              px-3
              sm:gap-3
              sm:px-5
              sm:py-1
              lg:px-6
              lg:py-2
            "
            >
              <Link to="/">
                <img
                  src={Logo}
                  alt="Soul Tales"
                  className="
                  h-10
                  w-auto
                  cursor-pointer
                  sm:h-14
                  lg:h-16
                  xl:h-18
                "
                />
              </Link>
            </div>
          </div>

          {/* Footer Bottom */}
          <div
            className="
            mt-8
            grid
            w-full
            grid-cols-1
            items-center
            gap-4
            text-center
            sm:mt-10
            md:grid-cols-4
            md:gap-3
            md:text-left
            lg:mt-10
          "
          >
            {/* Copyright */}
            <p className="text-[11px] sm:text-xs">
              <span>©</span> 2026 Soul Tales. All rights reserved.
            </p>

            {/* Credit */}
            <p
              className="
              text-xs
              text-white
              font-heading
              sm:text-sm
              md:col-span-2
              md:text-center
            "
            >
              Thoughtfully Curated & Marketed By{" "}
              <a href="https://osumare.com/" className="hover:underline">
                Osumare
              </a>
            </p>

            {/* Legal Links */}
            <div
              className="
              flex
              items-center
              justify-center
              gap-4
              md:justify-end
              lg:gap-5
            "
            >
              <Link
                to="/privacy-policy"
                className="
                cursor-pointer
                text-[11px]
                text-white/60
                sm:text-xs
              "
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-and-conditions"
                className="
                cursor-pointer
                text-[11px]
                text-white/60
                sm:text-xs
              "
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
