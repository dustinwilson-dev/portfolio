"use client";

import { useEffect, useState } from "react";
import { useScrollSpy } from "./useScrollSpy";
import Image from "next/image";
import Link from "next/link";

const sections = ["about", "experience", "projects", "education"];

export default function Home() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.pageX, y: e.pageY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const active = useScrollSpy(sections);

  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 relative">
      {/* top cutoff */}
      {/* <div className="fixed top-[35%] left-0 right-0 h-0.5 bg-red-500 z-[9999] pointer-events-none" /> */}

      {/* bottom cutoff */}
      {/* <div className="fixed bottom-[60%] left-0 right-0 h-0.5 bg-blue-500 z-[9999] pointer-events-none" /> s*/}

      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${coords.x}px ${coords.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 lg:flex">
        <header className="flex-1 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <Link href="/">Dustin Wilson</Link>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Full Stack Web Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              Creating fast, secure, and scalable web experiences from frontend
              to backend.
            </p>
            <nav className="mt-16 w-max nav hidden lg:block">
              <ul>
                <li>
                  <a
                    href="#about"
                    className={`group flex items-center py-3 ${
                      active === "about" ? "active" : ""
                    }`}
                  >
                    <span className="nav-indicator block mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none group-[.active]:w-16 group-[.active]:bg-slate-200"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 group-[.active]:text-slate-200">
                      About
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="#experience"
                    className={`group flex items-center py-3 ${
                      active === "experience" ? "active" : ""
                    }`}
                  >
                    <span className="nav-indicator block mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none group-[.active]:w-16 group-[.active]:bg-slate-200"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 group-[.active]:text-slate-200">
                      Experience
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="#projects"
                    className={`group flex items-center py-3 ${
                      active === "projects" ? "active" : ""
                    }`}
                  >
                    <span className="nav-indicator block mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none group-[.active]:w-16 group-[.active]:bg-slate-200"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 group-[.active]:text-slate-200">
                      Projects
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="#education"
                    className={`group flex items-center py-3 ${
                      active === "education" ? "active" : ""
                    }`}
                  >
                    <span className="nav-indicator block mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none group-[.active]:w-16 group-[.active]:bg-slate-200"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 group-[.active]:text-slate-200">
                      Education
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Dustin Wilson</h1>
            <h2 className="text-2xl font-semibold mt-3">
              Full Stack Web Developer
            </h2>
            <p className="mt-4 text-[rgba(255,255,255,.6)]">
              I build web apps that are super cool.
            </p>
            <nav className="mt-16 w-max">
              <ul>
                <li>
                  <a
                    href="#about"
                    className={`group flex items-center py-3 ${
                      active === "about" ? "active" : ""
                    }`}
                  >
                    <span className="nav-indicator block mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none group-[.active]:w-16 group-[.active]:bg-slate-200"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 group-[.active]:text-slate-200">
                      About
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="#experience"
                    className={`group flex items-center py-3 ${
                      active === "experience" ? "active" : ""
                    }`}
                  >
                    <span className="nav-indicator block mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none group-[.active]:w-16 group-[.active]:bg-slate-200"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 group-[.active]:text-slate-200">
                      Experience
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#projects" className="group flex items-center py-3">
                    <span className="nav-indicator block mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Projects
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#education" className="group flex items-center py-3">
                    <span className="nav-indicator block mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Education
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div> */}
          <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            {/* <li className="mr-5 shrink-0 text-xs">
              <a
                className="block hover:text-slate-200"
                href="https://github.com/bchiang7"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub (opens in a new tab)"
                title="GitHub"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </li> */}
            <li className="mr-5 shrink-0 text-xs">
              <a
                className="block hover:text-slate-200"
                href="https://www.linkedin.com/in/dustinwilson-dev/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn (opens in a new tab)"
                title="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
            </li>
            <li className="mr-5 shrink-0 text-xs">
              <a
                className="block hover:text-slate-200"
                href="mailto:dustinwilson.dev@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn (opens in a new tab)"
                title="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </header>

        <main className="flex-1 flex gap-8 md:gap-12 lg:gap-18 flex-col text-[rgba(255,255,255,.6)] pt-24 lg:w-[50%] lg:py-24">
          <section
            id="about"
            className="scroll-mt-16 lg:scroll-mt-24"
            aria-label="About"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                About
              </h2>
            </div>
            <div>
              <p className="mb-4">
                I&apos;m a full-stack web developer with a focus on building
                clean, responsive, and secure web applications. I&apos;ve worked
                with modern technologies like React, Next.js, TypeScript,
                Node.js, and AWS to create performant and scalable solutions. I
                enjoy solving real-world problems through code and constantly
                look for ways to improve both user experience and code quality.
              </p>
              <p>
                I&apos;m a fast learner, a great listener, and thrive in
                collaborative environments where feedback and teamwork drive
                better results. Whether I&apos;m working on frontend components,
                backend logic, or deploying to production, I take pride in
                writing code that&apos;s efficient, maintainable, and impactful.
              </p>
            </div>
          </section>
          <hr className="opacity-30" />

          <section
            id="experience"
            className="scroll-mt-16 lg:scroll-mt-24"
            aria-label="Experience"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Experience
              </h2>
            </div>
            <ol className="group/list flex flex-col gap-12">
              <li>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    2023 — Present
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      Web/Application Lead Developer · Blue Ribbon IT Services
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Led the full-stack redevelopment of a legacy
                      JavaScript/React website into a modern, responsive
                      multi-page web application using Next.js, TypeScript, and
                      AWS Amplify. Rebuilt frontend architecture for
                      maintainability and performance. Configured cloud
                      infrastructure and implemented security measures including
                      rate limiting (Upstash), Cloudflare proxy protection, and
                      honeypot-based bot mitigation. Deployed to production with
                      improved reliability, load times, and long-term
                      scalability.
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        React
                      </li>
                      <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Next.js
                      </li>
                      <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        HTML & CSS
                      </li>
                      <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Node.js
                      </li>
                      <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        JavaScript
                      </li>
                      <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        TypeScript
                      </li>
                      <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Tailwind CSS
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    2022 — 2024
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      React Web Developer · Involution AI
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Developed responsive React interfaces and reusable
                      components for client-facing web apps. Integrated frontend
                      with backend APIs, implemented state management with
                      Redux/Context, and optimized performance for smooth UX.
                      Delivered features on tight timelines, maintained code
                      quality through reviews and testing, and provided
                      post-launch support.
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        JavaScript
                      </li>
                      <li className="items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        TypeScript
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ol>
            <div className="mt-12">
              <a
                className="inline-flex items-baseline leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base"
                href="/DustinWilson-Resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="View Full Résumé (opens in a new tab)"
              >
                <span>
                  View Full&nbsp;
                  <span className="inline-block">
                    Resume
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      strokeWidth={1.5}
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    >
                      <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"></path>
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </section>
          <hr className="opacity-30" />

          <section
            id="projects"
            className="scroll-mt-16 lg:scroll-mt-24"
            aria-label="Projects"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Projects
              </h2>
            </div>
            <div>
              <ul className="group/list flex flex-col gap-12">
                <li>
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="https://brits-llc.com/"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Build a Spotify Connected App (opens in a new tab)"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Blue Ribbon IT Services Website Redevelopment
                            <span className="inline-block">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                strokeWidth={1.5}
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              >
                                <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        Built a conversion-focused marketing homepage for an IT services firm—clarified offerings, added social proof, and streamlined the contact flow to turn visits into leads.
                      </p>
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Technologies used:"
                      >
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            React
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            Next.js
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            Typescript
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            Node.js
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            AWS
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            Tailwind CSS
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            Cloudflare
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            Resend
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            Upstash
                          </div>
                        </li>
                      </ul>
                    </div>
                    <Image
                      src="/britsllc.png"
                      alt="Brits Landing Page Project"
                      className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      width={200}
                      height={48}
                      priority
                    />
                    {/* <img
                      alt="Build a Spotify Connected App Newline course marketing card"
                      loading="lazy"
                      width="200"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      style="color: transparent"
                      srcset="
                        /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x,
                        /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x
                      "
                      src="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75"
                    /> */}
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <hr className="opacity-30" />

          <section
            id="education"
            className="scroll-mt-16 lg:scroll-mt-24"
            aria-label="education"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
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
                      Associate of Computer Science · Anne Arundle Community
                      College
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Completed a series of computer science courses focused on
                      object-oriented programming, secure software design, and
                      data structures using Java and C++. Gained hands-on
                      experience with recursion, exception handling, file I/O,
                      and algorithm development. Learned to analyze
                      specifications, design UML diagrams, and apply best
                      practices in modular, secure coding. Built and implemented
                      common data structures like stacks, queues, linked lists,
                      and trees. Emphasis was placed on maintainable, efficient
                      solutions and real-world problem-solving.
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
                      Completed web development coursework covering both
                      frontend and backend technologies. Built projects using
                      HTML, CSS, JavaScript, and Bootstrap, and learned backend
                      development with Python and Flask. Integrated databases,
                      implemented user authentication, and built RESTful APIs to
                      support full-stack applications. Emphasized practical
                      skills in real-world app development and secure coding
                      best practices.
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
          <hr className="opacity-30" />

          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
              Design inspired by{" "}Brittany Chiang
              {/* <a
                href="https://brittanychiang.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brittany Chang Website (opens in a new tab)"
              >
                Brittany Chiang
              </a> */}
              . Coded in{" "}
              <a
                href="https://code.visualstudio.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Visual Studio Code (opens in a new tab)"
              >
                Visual Studio Code
              </a>
              . Built with{" "}
              <a
                href="https://nextjs.org/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Next.js (opens in a new tab)"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Tailwind CSS (opens in a new tab)"
              >
                Tailwind CSS
              </a>
              , deployed with{" "}
              <a
                href="https://vercel.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Vercel (opens in a new tab)"
              >
                Vercel
              </a>
              . All text is set in the{" "}
              <a
                href="https://vercel.com/font"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Geist (opens in a new tab)"
              >
                Geist
              </a>{" "}
              typeface.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
