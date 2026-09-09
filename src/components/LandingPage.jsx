// pages/LandingPage.jsx
import Home from "../components/Hero";
import FourPillars from "../components/TheFourPillars";
import Debut from "../components/TheDebut";
import Founder from "../components/Founder";
import Circle from "../components/TheCircle";
import Investment from "../components/TheInvestment";
import FAQ from "../components/FAQ";
import TheTension from "./TheTension";
import Steps from "./Steps";
import Proof from "./Proof";
import Credibility from "./Credibility";
import Contact from "./Contact";
import Navbar from "../Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="tension">
        <TheTension />
      </section>
      <section id="four-pillars">
        <FourPillars />
      </section>
      <section id="steps">
        <Steps />
      </section>
      <section id="the-debut">
        <Debut />
      </section>
      <section id="proof">
        <Proof />
      </section>
      <section id="founder-preeti">
        <Founder />
      </section>
      <section id="credibility">
        <Credibility />
      </section>
      <section id="the-circle">
        <Circle />
      </section>
      <section id="the-investment">
        <Investment />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default LandingPage;
