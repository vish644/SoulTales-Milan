import React from "react";
import rightArrow from "../assets/ArrowRight.svg";

const Button = ({
  title = "Request Your Invitation",
  onClick,
  type,
  icon = true,
  className,
}) => {
  return (
    <button
      className={`flex items-center gap-2 bg-white text-black cursor-pointer px-4 py-2.5 text-xs md:px-5 md:py-3.5 md:text-sm lg:px-5 lg:py-4 lg:text-base ${className}`}
      onClick={onClick}
      type="submit"
    >
      <h3 className="font-heading text-xs sm:text-sm lg:text-base"> {title}</h3>
      {icon && (
        <span className="flex h-3 w-4 shrink-0 items-center justify-center">
          <img
            src={rightArrow}
            alt="arrow"
            aria-hidden="true"
            className="h-full w-full object-contain"
          />
        </span>
      )}
    </button>
  );
};

export default Button;
