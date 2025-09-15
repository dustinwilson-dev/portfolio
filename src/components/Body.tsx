import React from "react";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import About from "./About";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

const Body = () => {
  return (
    <main className="flex-1 flex gap-8 md:gap-12 lg:gap-18 flex-col text-[rgba(255,255,255,.6)] pt-24 lg:w-[50%] lg:py-24">

      <About />
      <hr className="opacity-30" />

      <Experience />
      <hr className="opacity-30" />

      <Projects />
      <hr className="opacity-30" />

      <Education />
      <hr className="opacity-30" />

      {/* <ContactForm />
      <hr className="opacity-30" /> */}

      <Footer />
    </main>
  );
};

export default Body;
