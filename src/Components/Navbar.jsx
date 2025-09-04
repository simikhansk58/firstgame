"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { easeIn, motion, stagger } from "framer-motion";

const links = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
];

const Navbar = () => {
  const topmotion = {
    closed: { rotate: 0 },
    opened: { rotate: 55, backgroundColor: "rgb(255,255,255)" },
  };
  const centermotion = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottommotion = {
    closed: { rotate: 0 },
    opened: { rotate: -55, backgroundColor: "rgb(255,255,255)" },
  };

  const mobileMenuContainer = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      opacity: 1,
      transition: { easeIn, when: "beforeChildren", staggerChildren: 0.3 },
    },
  };

  const mobileMenuLinks = {
    closed: { x: 10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 items-center h-full text-xl justify-between">
      {/*LINKS*/}
      <div className="hidden md:flex gap-5">
        {links.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      {/*LOGO*/}
      <div className="hidden">
        <Link
          href="/"
          className="flex bg-black text-white p-2 rounded-lg items-center gap-2"
        >
          <span>Lama</span>
          <span className="bg-white text-black p-2 rounded-lg">Dev</span>
        </Link>
      </div>
      {/*SOCIAL ICONS*/}
      <div className="flex gap-3">
        <Link href="#">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/*Responsive Menu*/}
      <div className="md:hidden">
        <button
          className="flex flex-col gap-2 right-0 z-50 items-center relative origin-left"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topmotion}
            animate={open ? "opened" : "closed"}
            className="w-10 h-2 rounded bg-black origin-left"
          ></motion.div>
          <motion.div
            variants={centermotion}
            animate={open ? "opened" : "closed"}
            className="w-10 h-2 rounded bg-black origin-left"
          ></motion.div>
          <motion.div
            variants={bottommotion}
            animate={open ? "opened" : "closed"}
            className="w-10 h-2 rounded bg-black origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={mobileMenuContainer}
            initial="closed"
            animate="opened"
            className=" absolute top-0 left-0 w-screen h-screen bg-black text-white text-4xl z-40 text-white flex flex-col items-center justify-center gap-4"
          >
            {links.map((link) => (
              <motion.div
                key={link.title}
                variants={mobileMenuLinks}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
