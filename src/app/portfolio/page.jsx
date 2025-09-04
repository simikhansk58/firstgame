"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Portfolio = ()=>{
  const ref = useRef(null);                                // mark the tall section
  const { scrollYProgress } = useScroll({ target: ref });  // 0 → 1
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]); // map to CSS

  return (
    <div className="h-[500vh]">
      <div className="h-screen flex items-center justify-center text-5xl">
        My Works
      </div>

      <section ref={ref} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="w-screen h-screen grid place-items-center bg-gray-200">A</div>
            <div className="w-screen h-screen grid place-items-center bg-gray-300">B</div>
            <div className="w-screen h-screen grid place-items-center bg-gray-400">C</div>
            <div className="w-screen h-screen grid place-items-center bg-gray-500">D</div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio