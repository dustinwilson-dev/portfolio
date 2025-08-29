"use client";

import React from "react";
import { useScrollSpy } from "./useScrollSpy";
import Link from "next/link";
import Links from "./Links";

const sections = ["about", "experience", "projects", "education"];

const Header = () => {
  const active = useScrollSpy(sections);

  return (
    <header className="flex-1 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">Dustin Wilson</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full Stack Web Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Creating fast, secure, and scalable web experiences from frontend to
          backend.
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
      <div>
        <Links />

        {/* <ul className="ml-1 mt-8 flex items-center mb-4" aria-label="Social media">
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
              aria-label="Contact me via email"
              title="Email"
            >
              <span className="sr-only">Mail</span>
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
          </li> */}
        {/* </ul> */}
        {/* <p className="ml-1">dustinwilson.dev@gmail.com</p> */}
      </div>
    </header>
  );
};

export default Header;
