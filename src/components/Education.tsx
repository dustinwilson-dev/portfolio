import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="scroll-mt-16 lg:scroll-mt-24"
      aria-label="education"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Education
        </h2>
      </div>
      <ol className="group/list flex flex-col gap-12">
        <li>
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              2021 — 2024
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                Associate of Science, Computer Science · Anne Arundle Community
                College · Summa Cum Laude, GPA: 4.0
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Completed coursework focused on object-oriented programming,
                secure software design, and data structures using Java and C++.
                Built and implemented stacks, queues, linked lists, and trees
                while applying recursion, exception handling, file I/O, and
                algorithm development. Gained experience designing UML diagrams
                with an emphasis on modular, secure, and efficient coding
                practices.
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Java
                </li>
                <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  C++
                </li>
                <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Object-Oriented Programming (OOP)
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              2020 — 2022
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                Web Development Certification · CodeWizards HQ
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Completed web development coursework covering both frontend and
                backend technologies. Built projects using HTML, CSS,
                JavaScript, and Bootstrap, and learned backend development with
                Python and Flask. Integrated databases, implemented user
                authentication, and built RESTful APIs to support full-stack
                applications. Emphasized practical skills in real-world app
                development and secure coding best practices.
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Python
                </li>
                <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  HTML & CSS
                </li>
                <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Flask
                </li>
                <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Bootstrap
                </li>
                <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Database Integration
                </li>
                <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  User Authentication
                </li>
                <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  RESTful API
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
    </section>
  );
};

export default Education;
