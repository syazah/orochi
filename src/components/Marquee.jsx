import { motion } from "framer-motion";
function Marquee() {
  return (
    <div className="w-full py-20 rounded-t-3xl bg-[#004d43]">
      <div className="text border-t-2 border-b-2 flex gap-10 overflow-hidden whitespace-nowrap border-zinc-300">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[12vw] leading-none font-semibold uppercase -mb-8 pt-8 font-['Founders_Grotesk']"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[12vw] leading-none font-semibold uppercase -mb-8 pt-8 font-['Founders_Grotesk']"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[12vw] leading-none font-semibold uppercase -mb-8 pt-8 font-['Founders_Grotesk']"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
