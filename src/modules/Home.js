import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
// import Contact from "../components/Contact"
import React, {useEffect} from "react";
import EstimateButton from "../components/EstimateButton";
import FreeQuote from "../components/FreeQuote";
import ScrollReveal from "scrollreveal";

export default function Home() {

  useEffect(() => {
    const sr = ScrollReveal({
        origin: "top",
        distance: "80px",
        duration: 2000,
        reset: false,
    });
    sr.reveal(
        `
        #card,
        #card2
        `,
        {
          opacity: 0,
          interval: 300
        }
    );
    sr.reveal(
        `
        #topbutton
        `,
        {
          origin: "left",
          duration: 2000,
          distance: "200px",
          delay: 500
        }
    );
    sr.reveal(
      `
      #bottombutton`,
      {
        origin: "right",
        duration: 2000,
        distance: "200px",
        delay: 500
      }
    );
    sr.reveal(
      `
      #card3`,
      {
        origin: "bottom",
        duration: 2000,
        distance: "200px",
        delay: 500
      }
    );
  }, []);

  return (
    <div>
      <Hero />
      <div className="-mt-4 md:-mt-10 lg:-mt-20 xl:-mt-32 pb-6 md:pb-10 lg:pb-20" id='topbutton'>
        <EstimateButton />
      </div>
      <Hero2 />
      <FreeQuote />
      {/* <Contact /> */}
    </div>
  );
}