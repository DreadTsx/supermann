// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ShinyText from "./ShinyText";

function SuperMan() {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen bg-[url('/superman-wallpaper.jpg')] bg-cover bg-center flex items-center justify-start pl-4 sm:pl-8 md:pl-16 py-12"
    >
      <div className="relative z-10 max-w-full sm:max-w-2xl md:max-w-4xl">
        <motion.div
          className="text-yellow-400 text-base sm:text-lg font-medium uppercase tracking-widest mb-2 drop-shadow-lg"
          ref={subtitleRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Look! Up in the sky!
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none mb-6"
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-white via-gray-100 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl">
            <ShinyText text="IT'S" disabled={false} speed={2} />
            <br />
            <ShinyText text="SUPERMAN" disabled={false} speed={2} />
          </span>
        </motion.h1>
      </div>
    </div>
  );
}

export default SuperMan;
