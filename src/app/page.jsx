"use client"

import Image from "next/image";
import {motion} from "framer-motion"

const Home = ()=> {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
    <div className="flex flex-col gap-4 lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-5 pt-5">
      {/*ImageContainer */}
      <div className="relative h-1/2 lg:w-1/2 lg:h-full">
        <Image src="/hero.png" alt="" fill className="object-contain"/>
      </div>


      {/*TextContainer */}
      <div className="flex flex-col gap-8 h-1/2 lg:w-1/2 lg:h-full items-center justify-center">
        <h1 className="text-4xl font-bold lg:text-6xl">Crafting Digital Experiences, Designing Tomorrow.</h1>
        <p className="text-xl lg:text-2xl">Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.</p>
        <div className="flex w-full gap-5">
          <button className="ring rounded-lg p-4 text-xl bg-black text-white">View My Work</button>
          <button className="ring rounded-lg p-3 text-xl">Contact Me</button>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
export default Home