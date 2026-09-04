import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
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

  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex h-full max-w-360 flex-col items-center justify-center gap-6 pb-8 text-white px-5 sm:px-8 lg:px-10">
        <div className="flex w-full flex-col items-center justify-center gap-2 sm:gap-10">
          {/* Footer Main Content */}
          <div className="grid w-full grid-cols-1 gap-5 py-8 pt-4 text-sm md:grid-cols-8 lg:gap-10 lg:py-10">
            {/* Description */}
            <div className="md:col-span-2">
              <p className="max-w-xl text-xs md:text-sm">
                From solitary craft to global power. We bring couture designers,
                label founders, and textile artists to Milan's legacy rooms -
                where fabric commands the prestige and pricing it deserves.
              </p>

              {/* Social Links */}
              <div className="mt-4 flex items-center gap-8 text-sm">
                <button
                  type="button"
                  className="cursor-pointer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </button>

                <button
                  type="button"
                  className="cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-1 items-end justify-end gap-x-2 gap-y-3 pb-4 text-xs text-white/60 sm:grid-cols-3 md:col-span-6 md:grid-cols-6 lg:gap-x-8 lg:text-sm">
              {navOptions
                .filter((o) => o.id !== "home")
                .map((option) => (
                  <a
                    key={option.id}
                    href={`#${option.id}`}
                    onClick={handleNavClick(option.id)}
                    className="cursor-pointer transition-colors hover:text-white"
                  >
                    {option.name}
                  </a>
                ))}
            </div>
          </div>

          {/* Logo Divider */}
          <div className="relative mt-4 flex w-full items-center justify-center sm:mt-6">
            <CrossDivider
              orientation="horizontal"
              length="100%"
              crossLength={fluid(40, 80)}
              crossPosition={fluid(20, 40)}
              thickness="1px"
              color="#fff"
            />

            <div className="absolute flex items-center gap-3 bg-black px-3 sm:px-6 sm:py-2">
              <Link to="/">
                <img
                  src={Logo}
                  alt="Soul Tales"
                  className="h-12 w-auto cursor-pointer sm:h-16 lg:h-20"
                />
              </Link>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="grid w-full grid-cols-1 items-center gap-3 text-center md:grid-cols-4 md:text-left">
            {/* Copyright */}
            <p className="text-xs">
              <span>©</span> 2026 Soul Tales. All rights reserved.
            </p>

            {/* Credit */}
            <p className="text-sm md:col-span-2 md:text-center">
              Thoughtfully Curated & Marketed By Osumare
            </p>

            {/* Legal Links */}
            <div className="flex items-center justify-center gap-4 md:items-end md:justify-end">
              <Link
                to="/privacy-policy"
                className="cursor-pointer text-xs text-white/60"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-and-conditions"
                className="cursor-pointer text-xs text-white/60"
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
