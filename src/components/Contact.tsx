"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 p-5 justify-center "
      >
        <div className="flex flex-row font-main gap-8 items-center justify-center">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl">quick contact</h2>
              <p className="text-sm w-[380px]">
                the best way to get in touch is by shooting me an email ! always
                keen for a chat, so please direct any queries to my email 👍
              </p>
            </div>
            <input
              type="text"
              name="name"
              placeholder="your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-[380px] h-[40px] border p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-[380px] h-[40px] border p-2"
            />
            <input
              type="text"
              name="subject"
              placeholder="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-[380px] h-[40px] border p-2"
            />
          </div>
          <Image
            src="emotes/sendMailCharacter.svg"
            alt="happy cartoon character receiving mail"
            height={210}
            width={180}
          />
        </div>
        <textarea
          name="message"
          placeholder="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border p-2"
        />
        <div className="flex flex-row w-full justify-between items-center text-xl">
          <p>
            work email:{" "}
            <a href="mailto:jebadenas@gmail.com" className="underline">
              jebadenas@gmail.com
            </a>
          </p>
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className=" bg-white text-black border px-2 py-1 text-sm w-[200px] cursor-pointer"
          >
            send
          </motion.button>
        </div>
      </form>
      <div className="absolute bottom-20 left-0 w-full rounded border border-red-300 bg-red-100 p-2 text-m text-yellow-800 shadow z-10 font-main">
        <strong>heads up!</strong>{" "}
        {`sorry — the email service isn't working right
        now. jos is fixing it! 😅 in the meantime, contact me at`}{" "}
        <a href="mailto:jebadenas@gmail.com" className="underline">
          jebadenas@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
