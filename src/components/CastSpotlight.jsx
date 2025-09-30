import ShinyText from "./ShinyText";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function CastSpotlight() {
  const castMembers = [
    {
      name: "David Corenswet",
      character: "Clark Kent / Superman",
      image:
        "https://i0.wp.com/batman-news.com/wp-content/uploads/2025/06/Superman-2025-Character-Posters-Hi-Res-Superman-01.jpg?quality=80&strip=info&ssl=1",
    },
    {
      name: "KRYPTO",
      character: "KRYPTO",
      image:
        "https://i0.wp.com/batman-news.com/wp-content/uploads/2025/06/Superman-2025-Character-Posters-Hi-Res-Krypto-01.jpg?quality=80&strip=info&ssl=1",
    },
    {
      name: "Nicholas Hoult",
      character: "Lex Luthor",
      image:
        "https://deadline.com/wp-content/uploads/2025/06/SPRMAN_Character_Art_Lex_Instavert_1638x2048_DOM.jpg?w=1024",
    },
    {
      name: "Edi Gathegi",
      character: "Mister Terrific",
      image:
        "https://i0.wp.com/batman-news.com/wp-content/uploads/2025/06/Superman-2025-Character-Posters-Hi-Res-Mr-Terrific-01.jpg?quality=80&strip=info&ssl=1",
    },
    {
      name: "Nathan Fillion",
      character: "Guy Gardner / Green Lantern",
      image:
        "https://i0.wp.com/batman-news.com/wp-content/uploads/2025/06/Superman-2025-Character-Posters-Hi-Res-Guy-Gardner-01.jpg?quality=80&strip=info&ssl=1",
    },
    {
      name: "Isabela Merced",
      character: "Hawkgirl",
      image:
        "https://i0.wp.com/batman-news.com/wp-content/uploads/2025/06/Superman-2025-Character-Posters-Hi-Res-Hawkgirl-01.jpg?quality=80&strip=info&ssl=1",
    },
  ];

  return (
    <section className=" p-8 w-full mt-37 mb-10">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black leading-none mb-14 text-right"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="bg-gradient-to-r from-white via-gray-100 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl">
          <ShinyText text="Cast" disabled={false} speed={3} />
          <br />
          <ShinyText text="Spotlight" disabled={false} speed={3} />
        </span>
      </motion.h1>
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {castMembers.map((member, index) => (
          <motion.div
            key={index}
            className={`group${
              ["KRYPTO", "Nathan Fillion"].includes(member.name) ? " mt-20" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-slate-700 to-slate-900 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="aspect-[3/4] relative">
                <img
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{member.character}</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CastSpotlight;
