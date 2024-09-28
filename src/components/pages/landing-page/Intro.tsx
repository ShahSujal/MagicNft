import React, { useRef, RefObject } from "react";
import Image from "next/image";
import Background from "../../../../public/video/cloth.gif";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Intro() {
  const container: RefObject<HTMLDivElement> = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-screen overflow-hidden" ref={container}>
      <motion.div style={{ y }} className="relative h-full flex flex-col justify-center items-center">
        <Image
          src={Background}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        />
        <h1
          className=" text-[126px] z-10 text-white uppercase font-fragment font-bold"
          style={{ textShadow: "10px 10px 40px rgba(0,0,0,0.8)" }}
        >
          {" "}
          Magic Nft{" "}
        </h1>
        <button className=" bg-[#ffffff2b] backdrop-blur-xl px-10 py-3 rounded-full text-black font-bold uppercase border shadow-sm shadow-black">
          {" "}
          Explore{" "}
        </button>
      </motion.div>
    </div>
  );
}
