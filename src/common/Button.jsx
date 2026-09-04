// // import React from "react";
// // import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// // const Button = ({
// //   title = "Request Your Invitation",
// //   onclick,
// //   type,
// //   icon = true,
// //   className,
// // }) => {
// //   return (
// //     <button
// //       className={`flex items-center gap-2 bg-white text-black px-5 py-4 cursor-pointer ${className}`}
// //       onClick={onclick}
// //       type="submit"
// //     >
// //       {title}{" "}
// //       {icon && (
// //         <span>
// //           <HiOutlineArrowNarrowRight />{" "}
// //         </span>
// //       )}
// //     </button>
// //   );
// // };

// // export default Button;

// import React from "react";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// const Button = ({
//   title = "Request Your Invitation",
//   onclick,
//   type,
//   icon = true,
//   className,
// }) => {
//   return (
//     <button
//       className={`flex items-center gap-2 bg-white text-black px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base cursor-pointer ${className}`}
//       onClick={onclick}
//       type="submit"
//     >
//       {title}{" "}
//       {icon && (
//         <span>
//           <HiOutlineArrowNarrowRight />{" "}
//         </span>
//       )}
//     </button>
//   );
// };

// export default Button;

import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

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
      {title}{" "}
      {icon && (
        <span>
          <HiOutlineArrowNarrowRight />{" "}
        </span>
      )}
    </button>
  );
};

export default Button;
