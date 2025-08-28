import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-16 lg:scroll-mt-24"
      aria-label="About"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          I&apos;m a full-stack web developer with a focus on building clean,
          responsive, and secure web applications. I&apos;ve worked with modern
          technologies like React, Next.js, TypeScript, Node.js, and AWS to
          create performant and scalable solutions. I enjoy solving real-world
          problems through code and constantly look for ways to improve both
          user experience and code quality.
        </p>
        <p>
          I&apos;m a fast learner, a great listener, and thrive in collaborative
          environments where feedback and teamwork drive better results. Whether
          I&apos;m working on frontend components, backend logic, or deploying
          to production, I take pride in writing code that&apos;s efficient,
          maintainable, and impactful.
        </p>
      </div>
    </section>
  );
};

export default About;
