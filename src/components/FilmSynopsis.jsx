import Aurora from "./Aurora";
import ShinyText from "./ShinyText";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function FilmSynopsis() {
  //   const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="w-full mb-10">
      <div>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      {/* Responsive layout */}
      <div className="w-full flex flex-col lg:flex-row items-start justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-8 md:mt-12 gap-10 ">
        {/* Synopsis Section */}
        <motion.div
          className="relative z-10 max-w-3xl mb-10 lg:mb-0 flex-1"
          initial={{ opacity: 0, x: -90 }}
          //   animate={inView ? { opacity: 1, x: 0 } : {}}
          whileInView={{ opacity: 1, x: 0 }}
          //   viewport={{ amount: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black leading-none mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl">
              <ShinyText text="Film" disabled={false} speed={3} />
              <br />
              <ShinyText text="Synopsis" disabled={false} speed={3} />
            </span>
          </h1>
          <div className="space-y-6 text-left">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Clark Kent, a humble reporter, embraces his destiny as Superman to
              protect Earth from an ancient evil. As darkness looms, he must
              face both external threats and the burden of being humanity’s
              hope, ultimately proving that true heroism goes beyond powers.
            </p>
          </div>
        </motion.div>
        {/* Trailer Section */}
        <motion.div
          className="w-full max-w-2xl flex-[2] mx-auto lg:mx-0"
          initial={{ opacity: 0, x: 40 }}
          //   animate={inView ? { opacity: 1, x: 0 } : {}}
          whileInView={{ opacity: 1, x: 0 }}
          //   viewport={{ amount: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black border border-white/20 shadow-2xl">
            {/* YouTube Embed */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Ox8ZLF6cGM0?si=ej0My3t9cEQa7v1l"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          {/* Trailer Stats */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-black/40 rounded-lg border border-white/10 transition transform hover:scale-105 hover:bg-black/60 hover:shadow-xl cursor-pointer">
              <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1">
                31M+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">Views</div>
            </div>
            <div className="text-center p-4 bg-black/40 rounded-lg border border-white/10 transition transform hover:scale-105 hover:bg-black/60 hover:shadow-xl cursor-pointer">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-1">
                536k
              </div>
              <div className="text-gray-300 text-sm sm:text-base">Likes</div>
            </div>
            <div className="text-center p-4 bg-black/40 rounded-lg border border-white/10 transition transform hover:scale-105 hover:bg-black/60 hover:shadow-xl cursor-pointer">
              <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-1">
                98%
              </div>
              <div className="text-gray-300 text-sm sm:text-base">Positive</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FilmSynopsis;
