"use client";

import React, { useState } from "react";

const Links = () => {
  const [copied, setCopied] = useState(false);
  const email = "dustinwilson.dev@gmail.com";

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <ul className="flex flex-col gap-3 mt-8">
      <li className="flex gap-3 items-center">
        <a
          className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base"
          href="/DustinWilson-Resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Resume (opens in a new tab)"
          title="Resume"
        >
          <span className="sr-only">Resume</span>
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
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
        </a>
        <div className="w-0.5 self-stretch bg-white/20"></div>
        <p>Resume</p>
      </li>
      <li className="flex gap-3 items-center">
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
        <div className="w-0.5 self-stretch bg-white/20"></div>
        <p>LinkedIn</p>
      </li>
      <li className="flex gap-3 items-center">
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
        <div className="w-0.5 self-stretch bg-white/20"></div>
        <div className="group relative">
          <button onClick={copyEmail} className="hover:cursor-pointer">dustinwilson.dev@gmail.com</button>
          <div className={`absolute left-1/2 top-full -translate-x-1/2 mt-1 text-sm ${copied ? "" : "invisible"}`}>
            <p>Copied!</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Links;
