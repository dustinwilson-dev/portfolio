"use client";

import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-2xl font-bold">Lets Talk</span>
      <form action="" className="flex flex-col items-center gap-2 w-[75%]">
        <input
          className="border-1 w-full rounded-3xl border-[rgba(255,255,255,.5)] p-2"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className="border-1 w-full rounded-3xl border-[rgba(255,255,255,.5)] p-2"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="border-1 w-full rounded-3xl border-[rgba(255,255,255,.5)] p-2"
          name="message"
          placeholder="Your Message"
          required
        />
        <button type="submit" className="hover:cursor-pointer">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
