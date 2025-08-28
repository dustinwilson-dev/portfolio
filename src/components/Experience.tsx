import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-16 lg:scroll-mt-24"
      aria-label="Experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
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
                Led the full-stack redevelopment of a legacy JavaScript/React
                website into a modern, responsive multi-page web application
                using Next.js, TypeScript, and AWS Amplify. Rebuilt frontend
                architecture for maintainability and performance. Configured
                cloud infrastructure and implemented security measures including
                rate limiting (Upstash), Cloudflare proxy protection, and
                honeypot-based bot mitigation. Deployed to production with
                improved reliability, load times, and long-term scalability.
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
                Developed responsive React interfaces and reusable components
                for client-facing web apps. Integrated frontend with backend
                APIs, implemented state management with Redux/Context, and
                optimized performance for smooth UX. Delivered features on tight
                timelines, maintained code quality through reviews and testing,
                and provided post-launch support.
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
  );
};

export default Experience;
