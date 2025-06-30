import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ShinyText from "./ShinyText";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);
  const [isOut, setIsOut] = useState(false);

  useEffect(() => {
    setMounted(true);

    const targetDate = new Date("2025-07-11T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsOut(false);
      } else {
        setIsOut(true);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days, color: "from-red-500 to-red-600" },
    {
      label: "Hours",
      value: timeLeft.hours,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Seconds",
      value: timeLeft.seconds,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="w-full mb-10 mt-16">
      <div className="max-w-4xl mx-auto">
        {isOut ? (
          <div className="text-center text-4xl font-bold text-yellow-400 mb-12">
            IT&apos;S OUT ALREADY!!
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {timeUnits.map((unit) => (
                <div key={unit.label} className="text-center">
                  <motion.div
                    className={`relative bg-gradient-to-br ${unit.color} rounded-lg p-6 shadow-2xl border border-white/20 group hover:scale-105 transition-transform duration-300`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-br ${unit.color} rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                    />

                    <div className="relative">
                      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tabular-nums">
                        {unit.value.toString().padStart(2, "0")}
                      </div>
                      <div className="text-sm md:text-base text-white/80 uppercase tracking-wider font-semibold">
                        {unit.label}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Release Date Info */}
            <motion.div
              className="text-center bg-black/60 backdrop-blur-sm border border-white/20 rounded-lg p-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-yellow-400 font-semibold text-lg">
                  RELEASE DATE
                </span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                July 11, 2025
              </div>
              <div className="text-gray-300">In theaters worldwide</div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

export default Countdown;
