"use client"

import { motion } from "framer-motion"
import Image from "next/image"



const About = () => {
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="h-full overflow-auto">
            <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 items-center justify-center py-20">
                {/* Text Bio */}
                <div className="flex flex-col gap-10 lg:w-[1000px]">
                    <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        harum quibusdam cupiditate nobis accusamus sed aut aperiam,
                        reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
                        suscipit! Vel doloremque numquam quam nihil.</p>
                    <p className="italic text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="self-end">
                        <Image src="/Tsign.svg" alt="signature" width={80} height={80} />
                    </div>
                    <motion.svg
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: "10px" }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                    >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                    </motion.svg>
                </div>
                {/* Skills */}
                <div className="flex flex-col gap-10 lg:w-[1000px]">
                    <h1 className="font-bold text-2xl">SKILLS</h1>
                    <div className="flex flex-wrap gap-4">
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">JAVASCRIPT</div>
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">HTML</div>
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">CSS</div>
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">NEXT-JS</div>
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">REACT</div>
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">TAILWIND</div>
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">TYPESCRIPT</div>
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">FIGMA</div>
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">SEO</div>
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">GOOGLE ADS</div>
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">WORDPRESS</div>
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">META ADS</div>
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">MONGODB</div>
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">EXPRESS</div>
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">NODE-JS</div>
                        <div className="text-white bg-black p-2 cursor-pointer hover:text-black hover:bg-white rounded">ELEMENTOR</div>
                    </div>
                    <motion.svg
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: "10px" }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                    >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                    </motion.svg>
                </div>
                {/* Experience */}
                <div className="flex flex-col gap-10 lg:w-[1000px]">
                    <h1 className="font-bold text-2xl">EXPERIENCE</h1>
                    <div className="flex flex-col">
                        <div className="flex justify-between h-full">
                            <div className="flex flex-col gap-5 w-1/3">
                                <div className="bg-white p-4 text-semibold text-xl rounded w-fit">Senior JavaScript Engineer</div>
                                <div className="text-black text-md italic">I led web development, offering expertise in JavaScript frameworks.{" "}</div>
                                <div className="text-red-400 text-sm">2024 - Present</div>
                                <div className="bg-black p-2 text-semibold text-sm rounded text-white w-fit">Apple</div>
                            </div>
                            <div className="w-1/6 flex justify-center ">
                            <div className="w-1 h-full relative bg-gray-400 rounded">
                                <div className="w-5 h-5 absolute rounded-full bg-white ring-5 ring-red-200 -left-2"></div>
                            </div>
                            </div>
                            <div className="w-1/3"></div>
                        </div>
                        <div className="flex justify-between h-full">
                            <div className="w-1/3">
                            </div>
                            <div className="w-1/6 flex justify-center">
                            <div className="w-1 h-full relative bg-gray-400 rounded">
                                <div className="w-5 h-5 absolute rounded-full bg-white ring-5 ring-red-200 -left-2"></div>
                            </div>
                            </div>
                            <div className=" flex flex-col gap-5 w-1/3">
                            <div className="bg-white p-4 text-semibold text-xl rounded w-fit">Freelance Engineer</div>
                                <div className="text-black text-md italic">I provided web solutions, applying a range of technologies
                    to address client requirements.</div>
                                <div className="text-red-400 text-sm">2024 - Present</div>
                                <div className="bg-black p-2 text-semibold text-sm rounded text-white w-fit">Upwork</div></div>
                        </div>
                        <div className="flex justify-between h-full">
                            <div className="flex flex-col gap-5 w-1/3">
                                <div className="bg-white p-4 text-semibold text-xl rounded w-fit">Senior React Developer</div>
                                <div className="text-black text-md italic">I spearheaded React-based application development,
                    leveraging advanced skills.</div>
                                <div className="text-red-400 text-sm">2019 - 2024</div>
                                <div className="bg-black p-2 text-semibold text-sm rounded text-white w-fit">Microsoft</div>
                            </div>
                            <div className="w-1/6 flex justify-center">
                            <div className="w-1 h-full relative bg-gray-400 rounded">
                                <div className="w-5 h-5 absolute rounded-full bg-white ring-5 ring-red-200 -left-2"></div>
                            </div>
                            </div>
                            <div className="w-1/3"></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </motion.div>
    )
}

export default About