import React,{ useState} from "react";
import ReactDOM from "react-dom";
import ArriveImg from "../assets/Arrive.webp";
import ImmerseImg from "../assets/Immerse.webp";
import SharpenImg from "../assets/Sharpen.webp";
import WanderImg from "../assets/Wander.webp";
import TheRevealImg from "../assets/TheReveal.webp";
import Return from "../assets/Return.webp";
import Button from "../common/Button";
import CrossLines from "../common/CrossLines";
import Form from "../common/Form";
import { IoMdClose } from "react-icons/io";

const Steps = () => {
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

  const HERO_CROSS_POINTS = {
    base: { x: "88%", y: "65%" },
    sm: { x: "88%", y: "80%" },
    md: { x: "93%", y: "75%" },
    lg: { x: "94%", y: "85%" },
  };

    const [isFormOpen, setIsFormOpen] = useState(false);
  
    const handleOpenForm = () => {
      setIsFormOpen(true);
    };
  
    const closeForm = () => {
      setIsFormOpen(false);
    };

    const formModal = isFormOpen
    ? ReactDOM.createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-sm px-4"
          onClick={closeForm}
        >
          <div
            className="relative bg-black text-white w-full max-w-2xl max-h-[90vh] scrollbar-hide p-6 sm:p-8 border border-white/10 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-white/70 hover:text-white cursor-pointer"
            >
              <IoMdClose size={24} />
            </button>
            <Form />
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <section
      id="steps"
      className="w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory "
    >
      <div className="flex">
        {stepsData.map((data, index) => (
          <div
            key={index}
            className="bg-cover bg-center text-white shrink-0 snap-start w-[90%] h-screen relative isolate before:absolute before:inset-0 before:bg-[image:var(--bg-image)] before:bg-cover before:bg-center before:-z-10 after:absolute after:inset-0 after:bg-black/50 after:-z-[5]"
            style={{
              backgroundImage: `url(${data.image})`,
            }}
          >
            <div className="max-w-360 mx-auto h-full flex flex-col gap-6 items-start justify-end text-white pb-10 sm:pb-14 lg:pb-20 pl-5 sm:pl-10 lg:pl-20">
              <div className="flex flex-col items-start w-full max-w-157.5 gap-5 sm:gap-6 lg:gap-8 pr-5 sm:pr-8 lg:pr-0">
                <div className="flex flex-col items-start leading-tight">
                  <h1>{data.id}</h1>
                  <h1>{data.heading}</h1>
                </div>
                <p>{data.info}</p>
                <Button onClick={handleOpenForm} />
              </div>
              {/* Cross Divider */}
              <CrossLines
                crossPoints={HERO_CROSS_POINTS}
                horizontalCrossPosition="50%"
                verticalCrossPosition="80%"
              />
            </div>
          </div>
        ))}
      </div>
            {/* Form */}
      {formModal}
    </section>
  );
};

export default Steps;
