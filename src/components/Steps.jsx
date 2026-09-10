// import React, { useEffect, useState, useRef } from "react";
// import ArriveImg from "../assets/ArriveImg.jpg";
// import ImmerseImg from "../assets/ImmerseImg.jpg";
// import SharpenImg from "../assets/SharpenImg.jpg";
// import WanderImg from "../assets/WanderImg.jpg";
// import TheRevealImg from "../assets/TheRevealImg.jpg";
// import Return from "../assets/ReturnImg.jpg";
// import Button from "../common/Button";
// import CrossLines from "../common/CrossLines";
// import { IoMdClose } from "react-icons/io";
// import ReactDOM from "react-dom";
// import Form from "../common/Form";

// const Steps = () => {
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   const containerRef = useRef(null);
//   const [currentStep, setCurrentStep] = useState(0);
//   const isScrolling = useRef(false);

//   useEffect(() => {
//     const container = containerRef.current;

//     if (!container) return;

//     const handleWheel = (e) => {
//       if (window.innerWidth < 768) return;

//       e.preventDefault();

//       if (isScrolling.current) return;

//       const direction = e.deltaY > 0 ? 1 : -1;

//       const nextStep = Math.max(
//         0,
//         Math.min(stepsData.length - 1, currentStep + direction),
//       );

//       if (nextStep === currentStep) return;

//       const slides = container.querySelectorAll(":scope > div > div");

//       const targetSlide = slides[nextStep];

//       if (!targetSlide) return;

//       isScrolling.current = true;
//       setCurrentStep(nextStep);

//       targetSlide.scrollIntoView({
//         behavior: "smooth",
//         block: "nearest",
//         inline: "start",
//       });

//       setTimeout(() => {
//         isScrolling.current = false;
//       }, 900);
//     };

//     container.addEventListener("wheel", handleWheel, { passive: false });

//     return () => {
//       container.removeEventListener("wheel", handleWheel);
//     };
//   }, [currentStep]);

//   const handleOpenForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };
//   useEffect(() => {
//     if (location.state?.scrollTo) {
//       const el = document.getElementById(location.state.scrollTo);
//       el?.scrollIntoView({ behavior: "smooth" });
//       window.history.replaceState({}, document.title);
//     }
//   }, [location.state]);
//   const formModal = isFormOpen
//     ? ReactDOM.createPortal(
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-sm px-4"
//           onClick={closeForm}
//         >
//           <div
//             className="relative bg-black text-white w-full max-w-2xl max-h-[90vh] scrollbar-hide p-6 sm:p-8 border border-white/10 overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={closeForm}
//               className="absolute top-4 right-4 text-white/70 hover:text-white cursor-pointer"
//             >
//               <IoMdClose size={24} />
//             </button>
//             <Form />
//           </div>
//         </div>,
//         document.body,
//       )
//     : null;

//   const stepsData = [
//     {
//       image: ArriveImg,
//       id: "01.",
//       heading: "Arrive",
//       info: "Milan on the first evening, the city settling around you. A base in the centre, and a first dinner with the few you'll walk these days beside - a circle chosen to travel well toghether. No agenda beyond the table, and the first sense of a shift already beginning.",
//     },
//     {
//       image: ImmerseImg,
//       id: "02.",
//       heading: "Immerse",
//       info: "Into the rooms where Italian craft actually lives - not the windows, the hands behind them. A day among artisans who have held their standards for generations, and a closer look at how the best treat their own work. Nothing here is about learning to make. It is about seeing what you've already made in a different light. Evening:yours.",
//     },
//     {
//       image: SharpenImg,
//       id: "03.",
//       heading: "Sharpen",
//       info: "A day with people who read the world's markets for a living. You learn to see your own collection the way the world will - its language, its worth, the room it belongs in. The work doesn't change. Your sense of it does. By evening, something has quietly shifted in how you speak about what you do.",
//     },
//     {
//       image: WanderImg,
//       id: "04.",
//       heading: "Wander",
//       info: "Milan on your own terms. Walk it, sit it, let it work on you - the streets, the light, the ease of a city with nothing to prove. The day before you've seen is left unhurried on purpose: room to arrive fully, before the light finds you.",
//     },
//     {
//       image: TheRevealImg,
//       id: "05.",
//       heading: "The Reveal.",
//       info: "Your collection, presented in Milan - on models, in a room arranged for it, under lights, and filmed. For one evening, the work you made at home, in your own fabric, becomes something you can carry back as proof, not memory. Then the circle gathers to make it. Each designer names what they now know their work is worth, and where they're taking it next - not vague, not borrowed, theirs. A promise, said out loud.",
//     },
//     {
//       image: Return,
//       id: "06.",
//       heading: "Return",
//       info: "A last slow morning before the airport. Breakfast, a final circle, the goodbye. You leave lighter and heavier at once - lighter in doubt, heavier with what you now hold: a body of work seen, and a belief in it that wasn't there when you landed. You leave slower than you arrived. That's the point.",
//     },
//   ];

//   const HERO_CROSS_POINTS = {
//     base: { x: "80%", y: "85%" },
//     sm: { x: "88%", y: "85%" },
//     md: { x: "93%", y: "65%" },
//     lg: { x: "94%", y: "68%" },
//   };

//   return (
//     <section
//       ref={containerRef}
//       id="steps"
//       className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory"
//     >
//       <div className="flex w-max">
//         {stepsData.map((data, index) => (
//           <div
//             key={index}
//             className="

//             shrink-0
//             snap-start
//             w-screen
//             md:w-[90vw]
//             md:h-screen
//             relative
//             isolate
//             text-white
//             md:bg-cover
//             md:bg-center
//             md:before:absolute
//             md:before:inset-0
//             md:before:bg-[image:var(--bg-image)]
//             md:before:bg-cover
//             md:before:bg-center
//             md:before:bg-center
//             md:before:-z-10
//             md:after:absolute
//             md:after:inset-0
//             md:after:-z-[5]
//             md:after:bg-[linear-gradient(280deg,rgba(0,0,0,0)_0%,#000000_100%)]
//             max-md:bg-black
//             "
//             style={{
//               "--bg-image": `url(${data.image})`,
//             }}
//           >
//             {/* ================= MOBILE ================= */}
//             <div className="md:hidden flex flex-col w-full bg-black">
//               {/* IMAGE */}
//               <div className="relative w-full h-[55vh] isolate overflow-hidden">
//                 <img
//                   src={data.image}
//                   alt={data.heading}
//                   className="absolute inset-0 w-full h-full object-cover object-top"
//                 />

//                 {/* Same mobile overlay */}
//                 <div className="absolute inset-0 bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]" />

//                 {/* TITLE ON IMAGE */}
//                 <div className="absolute bottom-8 left-5 z-10 flex flex-col items-start leading-tight">
//                   <h1>{data.id}</h1>
//                   <h1>{data.heading}</h1>
//                 </div>

//                 {/* CROSS ON IMAGE */}

//                 <CrossLines
//                   crossPoints={HERO_CROSS_POINTS}
//                   horizontalCrossPosition="50%"
//                   verticalCrossPosition="80%"
//                 />
//               </div>

//               {/* CONTENT BELOW IMAGE */}
//               <div className="flex flex-col items-start gap-7 px-5 pt-7 pb-10 bg-black">
//                 <p className="text-base leading-relaxed text-white">
//                   {data.info}
//                 </p>

//                 <Button onClick={handleOpenForm} />
//               </div>
//             </div>

//             {/* ================= DESKTOP ================= */}
//             <div className="hidden md:flex max-w-360 mx-auto h-full flex-col gap-6 items-start justify-end text-white pb-10 sm:pb-14 lg:pb-20 pl-5 sm:pl-10 lg:pl-20">
//               <div className="flex flex-col items-start w-full max-w-157.5 gap-5 sm:gap-6 lg:gap-8 pr-5 sm:pr-8 lg:pr-0">
//                 <div className="flex flex-col items-start leading-tight">
//                   <h1>{data.id}</h1>
//                   <h1>{data.heading}</h1>
//                 </div>

//                 <p className="text-base md:text-lg">{data.info}</p>

//                 <Button onClick={handleOpenForm} />
//               </div>

//               <CrossLines
//                 crossPoints={HERO_CROSS_POINTS}
//                 horizontalCrossPosition="50%"
//                 verticalCrossPosition="80%"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       {formModal}
//     </section>
//   );
// };

// export default Steps;

import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import ArriveImg from "../assets/ArriveImg.jpg";
import ImmerseImg from "../assets/ImmerseImg.jpg";
import SharpenImg from "../assets/SharpenImg.jpg";
import WanderImg from "../assets/WanderImg.jpg";
import TheRevealImg from "../assets/TheRevealImg.jpg";
import Return from "../assets/ReturnImg.jpg";
import Button from "../common/Button";
import CrossLines from "../common/CrossLines";
import { IoMdClose } from "react-icons/io";
import ReactDOM from "react-dom";
import Form from "../common/Form";

const Steps = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const containerRef = useRef(null);

  const currentStepRef = useRef(0);
  const isAnimatingRef = useRef(false);

  // Touch
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const touchStartedOnInteractiveRef = useRef(false);

  // Animation timeout
  const animationTimeoutRef = useRef(null);

  const location = useLocation();

  /*
   * =========================================================
   * DATA
   * =========================================================
   */

  const stepsData = [
    {
      image: ArriveImg,
      id: "01.",
      heading: "Arrive",
      info: "Milan on the first evening, the city settling around you. A base in the centre, and a first dinner with the few you'll walk these days beside - a circle chosen to travel well toghether. No agenda beyond the table, and the first sense of a shift already beginning.",
    },
    {
      image: ImmerseImg,
      id: "02.",
      heading: "Immerse",
      info: "Into the rooms where Italian craft actually lives - not the windows, the hands behind them. A day among artisans who have held their standards for generations, and a closer look at how the best treat their own work. Nothing here is about learning to make. It is about seeing what you've already made in a different light. Evening:yours.",
    },
    {
      image: SharpenImg,
      id: "03.",
      heading: "Sharpen",
      info: "A day with people who read the world's markets for a living. You learn to see your own collection the way the world will - its language, its worth, the room it belongs in. The work doesn't change. Your sense of it does. By evening, something has quietly shifted in how you speak about what you do.",
    },
    {
      image: WanderImg,
      id: "04.",
      heading: "Wander",
      info: "Milan on your own terms. Walk it, sit it, let it work on you - the streets, the light, the ease of a city with nothing to prove. The day before you've seen is left unhurried on purpose: room to arrive fully, before the light finds you.",
    },
    {
      image: TheRevealImg,
      id: "05.",
      heading: "The Reveal.",
      info: "Your collection, presented in Milan - on models, in a room arranged for it, under lights, and filmed. For one evening, the work you made at home, in your own fabric, becomes something you can carry back as proof, not memory. Then the circle gathers to make it. Each designer names what they now know their work is worth, and where they're taking it next - not vague, not borrowed, theirs. A promise, said out loud.",
    },
    {
      image: Return,
      id: "06.",
      heading: "Return",
      info: "A last slow morning before the airport. Breakfast, a final circle, the goodbye. You leave lighter and heavier at once - lighter in doubt, heavier with what you now hold: a body of work seen, and a belief in it that wasn't there when you landed. You leave slower than you arrived. That's the point.",
    },
  ];

  /*
   * =========================================================
   * CROSS POINTS
   * =========================================================
   */

  const HERO_CROSS_POINTS = {
    base: { x: "80%", y: "85%" },
    sm: { x: "88%", y: "85%" },
    md: { x: "93%", y: "65%" },
    lg: { x: "94%", y: "68%" },
  };

  /*
   * =========================================================
   * CURRENT STEP REF
   * =========================================================
   */

  const updateCurrentStep = (step) => {
    currentStepRef.current = step;
    setCurrentStep(step);
  };

  /*
   * =========================================================
   * GET SLIDE
   * =========================================================
   */

  const getSlide = (index) => {
    const container = containerRef.current;

    if (!container) return null;

    return container.querySelector(`[data-step="${index}"]`);
  };

  /*
   * =========================================================
   * GO TO STEP
   * =========================================================
   */

  const goToStep = (requestedStep) => {
    const container = containerRef.current;

    if (!container) return;

    if (isAnimatingRef.current) return;

    const maxStep = stepsData.length - 1;

    const targetStep = Math.max(0, Math.min(requestedStep, maxStep));

    if (targetStep === currentStepRef.current) {
      return;
    }

    const targetSlide = getSlide(targetStep);

    if (!targetSlide) return;

    isAnimatingRef.current = true;

    updateCurrentStep(targetStep);

    container.scrollTo({
      left: targetSlide.offsetLeft,
      behavior: "smooth",
    });

    clearTimeout(animationTimeoutRef.current);

    animationTimeoutRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
    }, 800);
  };

  /*
   * =========================================================
   * NEXT / PREVIOUS
   * =========================================================
   */

  const moveNext = () => {
    const current = currentStepRef.current;

    if (current >= stepsData.length - 1) {
      return;
    }

    goToStep(current + 1);
  };

  const movePrevious = () => {
    const current = currentStepRef.current;

    if (current <= 0) {
      return;
    }

    goToStep(current - 1);
  };

  /*
   * =========================================================
   * CHECK IF STEPS IS VISIBLE
   * =========================================================
   */

  const isStepsVisible = () => {
    const container = containerRef.current;

    if (!container) return false;

    const rect = container.getBoundingClientRect();

    const viewportHeight = window.innerHeight;

    /*
     * Steps must actually be inside the viewport.
     *
     * We require at least a meaningful portion
     * of the section to be visible.
     */
    const visibleHeight =
      Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

    return visibleHeight > viewportHeight * 0.5;
  };

  /*
   * =========================================================
   * DESKTOP WHEEL
   *
   * IMPORTANT:
   * Listener is attached ONLY to the Steps container.
   *
   * It does NOT listen on window.
   * =========================================================
   */

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleWheel = (event) => {
      /*
       * Desktop only
       */
      if (window.innerWidth < 768) {
        return;
      }

      /*
       * Don't affect the rest of the website.
       */
      if (!isStepsVisible()) {
        return;
      }

      /*
       * Ignore horizontal trackpad movement.
       */
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        return;
      }

      /*
       * Ignore tiny movement.
       */
      if (Math.abs(event.deltaY) < 10) {
        return;
      }

      const direction = event.deltaY > 0 ? 1 : -1;

      const current = currentStepRef.current;

      /*
       * FIRST SLIDE
       *
       * If user scrolls UP,
       * allow page to continue normally.
       */
      if (current === 0 && direction === -1) {
        return;
      }

      /*
       * LAST SLIDE
       *
       * If user scrolls DOWN,
       * allow page to continue normally.
       */
      if (current === stepsData.length - 1 && direction === 1) {
        return;
      }

      /*
       * We only prevent default when
       * Steps itself is controlling the wheel.
       */
      event.preventDefault();

      /*
       * Ignore additional wheel events
       * during animation.
       */
      if (isAnimatingRef.current) {
        return;
      }

      if (direction === 1) {
        moveNext();
      } else {
        movePrevious();
      }
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  /*
   * =========================================================
   * MOBILE SWIPE
   * =========================================================
   */

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleTouchStart = (event) => {
      if (window.innerWidth >= 768) {
        return;
      }

      const touch = event.touches[0];

      if (!touch) return;

      touchStartXRef.current = touch.clientX;

      touchStartYRef.current = touch.clientY;

      /*
       * Don't treat button/form interaction
       * as a swipe.
       */
      const target = event.target;

      touchStartedOnInteractiveRef.current =
        target.closest(
          "button, a, input, textarea, select, [role='button']",
        ) !== null;
    };

    const handleTouchEnd = (event) => {
      if (window.innerWidth >= 768) {
        return;
      }

      if (touchStartedOnInteractiveRef.current) {
        return;
      }

      const touch = event.changedTouches[0];

      if (!touch) return;

      const deltaX = touch.clientX - touchStartXRef.current;

      const deltaY = touch.clientY - touchStartYRef.current;

      /*
       * Vertical movement = normal page scroll.
       */
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        return;
      }

      /*
       * Minimum swipe distance.
       */
      if (Math.abs(deltaX) < 50) {
        return;
      }

      if (isAnimatingRef.current) {
        return;
      }

      /*
       * LEFT -> NEXT
       */
      if (deltaX < 0) {
        moveNext();
      } else {
        /*
         * RIGHT -> PREVIOUS
         */
        movePrevious();
      }
    };

    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    container.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);

      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  /*
   * =========================================================
   * DESKTOP CLICK
   *
   * LEFT HALF  -> PREVIOUS
   * RIGHT HALF -> NEXT
   * =========================================================
   */

  const handleSlideClick = (event, index) => {
    /*
     * Desktop only.
     */
    if (window.innerWidth < 768) {
      return;
    }

    /*
     * Ignore buttons, links, inputs etc.
     */
    const target = event.target;

    if (target.closest("button, a, input, textarea, select, [role='button']")) {
      return;
    }

    if (isAnimatingRef.current) {
      return;
    }

    const slide = event.currentTarget;

    const rect = slide.getBoundingClientRect();

    const clickX = event.clientX - rect.left;

    const middle = rect.width / 2;

    /*
     * LEFT SIDE
     */
    if (clickX < middle) {
      if (index > 0) {
        movePrevious();
      }

      return;
    }

    /*
     * RIGHT SIDE
     */
    if (index < stepsData.length - 1) {
      moveNext();
    }
  };

  /*
   * =========================================================
   * FORM
   * =========================================================
   */

  const handleOpenForm = (event) => {
    event?.stopPropagation();

    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  /*
   * =========================================================
   * ROUTER SCROLL
   * =========================================================
   */

  useEffect(() => {
    if (!location.state?.scrollTo) {
      return;
    }

    const el = document.getElementById(location.state.scrollTo);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }

    window.history.replaceState({}, document.title);
  }, [location.state]);

  /*
   * =========================================================
   * CLEANUP
   * =========================================================
   */

  useEffect(() => {
    return () => {
      clearTimeout(animationTimeoutRef.current);
    };
  }, []);

  /*
   * =========================================================
   * FORM MODAL
   * =========================================================
   */

  const formModal = isFormOpen
    ? ReactDOM.createPortal(
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-white/20
            backdrop-blur-sm
            px-4
          "
          onClick={closeForm}
        >
          <div
            className="
              relative
              bg-black
              text-white
              w-full
              max-w-2xl
              max-h-[90vh]
              scrollbar-hide
              p-6
              sm:p-8
              border
              border-white/10
              overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeForm}
              className="
                absolute
                top-4
                right-4
                text-white/70
                hover:text-white
                cursor-pointer
                z-20
              "
            >
              <IoMdClose size={24} />
            </button>

            <Form />
          </div>
        </div>,
        document.body,
      )
    : null;

  /*
   * =========================================================
   * RENDER
   * =========================================================
   */

  return (
    <section
      ref={containerRef}
      id="steps"
      className="
        w-full
        overflow-x-auto
        overflow-y-hidden
        scrollbar-hide
        snap-x
        snap-mandatory
        touch-pan-y
      "
    >
      <div className="flex w-max">
        {stepsData.map((data, index) => (
          <div
            key={index}
            data-step={index}
            onClick={(event) => handleSlideClick(event, index)}
            className="
              shrink-0
              snap-start
              
                w-[85vw]
              md:w-[90vw]
              md:h-screen
              relative
              isolate
              overflow-hidden
              text-white
              bg-black
              cursor-pointer
            "
          >
            {/* ================================================= */}
            {/* DESKTOP BACKGROUND IMAGE */}
            {/* ================================================= */}

            <div className="hidden md:block absolute inset-0 z-0">
              <img
                src={data.image}
                alt={data.heading}
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />
            </div>

            {/* ================================================= */}
            {/* DESKTOP BLACK GRADIENT */}
            {/* ================================================= */}

            <div
              className="
                hidden
                md:block
                absolute
                inset-0
                z-[1]
                pointer-events-none
                bg-[linear-gradient(280deg,rgba(0,0,0,0)_0%,#000000_100%)]
              "
            />

            {/* ================================================= */}
            {/* MOBILE */}
            {/* ================================================= */}

            <div
              className="
                md:hidden
                flex
                flex-col
                w-full
                bg-black
              "
            >
              {/* IMAGE */}

              <div
                className="
                  relative
                  w-full
                  h-[55vh]
                  isolate
                  overflow-hidden
                "
              >
                <img
                  src={data.image}
                  alt={data.heading}
                  className="
                    absolute
                    inset-0
                     w-full
                    h-full
                    object-cover
                    object-top
                  "
                />

                {/* MOBILE OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]
                    pointer-events-none
                  "
                />

                {/* TITLE */}

                <div
                  className="
                    absolute
                    bottom-8
                    left-5
                    z-10
                    flex
                    flex-col
                    items-start
                    leading-tight
                  "
                >
                  <h1>{data.id}</h1>

                  <h1>{data.heading}</h1>
                </div>

                {/* CROSS */}

                <CrossLines
                  crossPoints={HERO_CROSS_POINTS}
                  horizontalCrossPosition="50%"
                  verticalCrossPosition="80%"
                />
              </div>

              {/* CONTENT */}

              <div
                className="
                  flex
                  flex-col
                  items-start
                  gap-7
                  px-5
                  pt-7
                  pb-10
                  bg-black
                "
              >
                <p
                  className="
                    text-base
                    leading-relaxed
                    text-white
                  "
                >
                  {data.info}
                </p>

                <Button onClick={handleOpenForm} />
              </div>
            </div>

            {/* ================================================= */}
            {/* DESKTOP */}
            {/* ================================================= */}

            <div
              className="
                hidden
                md:flex
                relative
                z-10
                max-w-360
                mx-auto
                h-full
                flex-col
                gap-6
                items-start
                justify-end
                text-white
                pb-10
                sm:pb-14
                lg:pb-20
                pl-5
                sm:pl-10
                lg:pl-20
              "
            >
              <div
                className="
                  flex
                  flex-col
                  items-start
                  w-full
                  max-w-157.5
                  gap-5
                  sm:gap-6
                  lg:gap-8
                  pr-5
                  sm:pr-8
                  lg:pr-0
                "
              >
                {/* TITLE */}

                <div
                  className="
                    flex
                    flex-col
                    items-start
                    leading-tight
                  "
                >
                  <h1>{data.id}</h1>

                  <h1>{data.heading}</h1>
                </div>

                {/* INFO */}

                <p className="text-base md:text-lg">{data.info}</p>

                {/* BUTTON */}

                <Button onClick={handleOpenForm} />
              </div>

              {/* CROSS */}

              <CrossLines
                crossPoints={HERO_CROSS_POINTS}
                horizontalCrossPosition="50%"
                verticalCrossPosition="80%"
              />
            </div>
          </div>
        ))}
      </div>

      {formModal}
    </section>
  );
};

export default Steps;
