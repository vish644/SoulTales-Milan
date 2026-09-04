import React, { useState } from "react";
import Logo from "../src/assets/Final Soul Tales Logo.svg";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { navOptions } from "./utils/scrollToSection";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (id === "home") {
      if (location.pathname === "/") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        navigate("/");
      }

      return;
    }

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
    <section className="absolute top-0 left-0 z-20 w-full">
      <div className="fixed top-0 left-1/2 w-full z-50 bg-white/4 -translate-x-1/2">
        <div className="   mx-auto flex max-w-360 items-center justify-between gap-6 px-5 py-2 sm:px-8 lg:gap-14 lg:px-10">
          {/* Logo */}
          <NavLink to="/">
            <img src={Logo} alt="Soul Tales" className="h-14 w-auto lg:h-12" />
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-10 text-sm tracking-wide lg:flex">
            {navOptions.map((option) => (
              <li key={option.id} className="text-nowrap text-md">
                <a
                  href={`#${option.id}`}
                  onClick={handleNavClick(option.id)}
                  className="cursor-pointer text-gray-300 transition-colors hover:text-white"
                >
                  {option.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="cursor-pointer text-2xl text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="flex w-full flex-col items-start gap-5 bg-black/80 px-5 py-6 text-sm tracking-wide backdrop-blur-sm sm:px-8 lg:hidden">
          {navOptions.map((option) => (
            <li key={option.id} className="w-full text-nowrap">
              <a
                href={`#${option.id}`}
                onClick={handleNavClick(option.id)}
                className="block cursor-pointer text-gray-300 transition-colors hover:text-white"
              >
                {option.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Navbar;
