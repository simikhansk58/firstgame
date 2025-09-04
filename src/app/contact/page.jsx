"use client";

import { useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Replace with your images in /public
const SECTIONS = [
  {
    src: "/img1.jpg",
    alt: "One",
    title: "First Section",
    desc: "This is the description for the first section.",
    href: "/about",
  },
  {
    src: "/img22.jpg",
    alt: "Two",
    title: "Second Section",
    desc: "This is the description for the first section.",
    href: "/experiment",
  },
  {
    src: "/img4.jpg",
    alt: "Three",
    title: "Fourth Section",
    desc: "This is the description for the first section.",
    href: "/about",
  },
  {
    src: "/img7.jpg",
    alt: "Four",
    title: "Fifth Section",
    desc: "This is the description for the first section.",
    href: "/about",
  },
  {
    src: "/img8.jpg",
    alt: "Five",
    title: "Six Section",
    desc: "This is the description for the first section.",
    href: "/about",
  },
];

// Tunables
const MIN_VH = 35; // smallest height when far from center
const MAX_VH = 100; // largest height when centered
const PARALLAX_PX = 150; // overlay upward movement

function Panel({ item, priority, isFirst = false }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isFirst ? ["start start", "end start"] : ["start end", "end start"],
  });

  // Base transforms (follow scroll exactly)
  const heightRaw = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isFirst
      ? [`${MAX_VH}vh`, `${MIN_VH}vh`, `${MIN_VH}vh`]
      : [`${MIN_VH}vh`, `${MAX_VH}vh`, `${MIN_VH}vh`]
  );
  const yRaw = useTransform(
    scrollYProgress,
    [0, 1],
    ["50px", `-${PARALLAX_PX}px`]
  );

  // Gentle, overdamped smoothing (no bounce)
  const springConfig = {
    stiffness: 2200,
    damping: 220,
    mass: 0.3,
    restDelta: 0.001,
    restSpeed: 0.01,
  };
  const height = useSpring(heightRaw, springConfig);
  const y = useSpring(yRaw, springConfig);

  return (
    <motion.section
      ref={ref}
      className="relative w-screen"
      style={{ height }}
    >
      {/* Background image */}
      
        <Image
  src={item.src}
  alt={item.alt}
  fill
  className="object-cover hidden sm:block md:block"
  priority={priority}
/>
{/* Mobile Image */}

   <motion.div 
  className="relative w-full overflow-hidden block lg:hidden" 
  style={{ height }}
>
  <Image
    src={item.src}
    alt={item.alt}
    fill
    className="object-contain object-center transform scale-330" // 3.5× zoom
    priority
  />
</motion.div>
{/* md Screen Image */}

<motion.div 
  className="relative w-full overflow-hidden hidden lg:hidden" 
  style={{ height }}
>
  <Image
    src={item.src}
    alt={item.alt}
    fill
    className="object-contain object-center transform scale-120" // 3.5× zoom
    priority
  />
</motion.div>




      {/* Text overlay */}
      <motion.div
        className="absolute inset-0 flex items-center p-6 sm:p-10 will-change-transform"
        style={{ y }}
      >
        <div className="relative z-20 flex flex-col max-w-xl text-white drop-shadow gap-10">
          <Link href={item.href} className="sm:text-4xl lg:text-4xl underline">
            {item.title}
          </Link>
          <p className="mt-2 text-base sm:text-lg">{item.desc}</p>
          <div className="w-30 h-2 bg-red-500 rounded"></div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default function Page() {
  const panels = useMemo(() => SECTIONS, []);
  return (
    <main>
      {panels.map((item, idx) => (
        <Panel key={idx} item={item} priority={idx === 0} isFirst={idx === 0}/>
      ))}
      <div className="h-[50vh]" />
    </main>
  );
}
