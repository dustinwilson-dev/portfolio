"use client";

import React from "react";

const ContactForm = () => {
  return (
    <section className="flex flex-col items-center gap-2">
      <span className="text-2xl font-bold">Lets Talk</span>
      <form action="" className="flex flex-col items-center gap-6 w-[75%]">
        <input
          className="border-b-1 w-full border-white/50 p-2"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className="border-b-1 w-full border-white/50 p-2"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="border-b-1 w-full border-white/50 p-2"
          name="message"
          placeholder="Your Message"
          required
        />
        <button type="submit" className="w-full m-4 border-2 rounded-2xl p-3 backdrop-blur-3xl hover:cursor-pointer hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition-all">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
