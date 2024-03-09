import { motion } from "framer-motion";
import { FaLongArrowAltUp } from "react-icons/fa";
function Landing() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-44 px-10">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end  ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-center mr-5 w-[8vw] rounded-md h-[5.3vw] relative -top-[1.2vw] bg-red-500"
                  ></motion.div>
                )}
                <h1 className="uppercase tracking-tighter -mb-[1vw] leading-[7vw] font-medium text-[7.5vw] font-['Founders_Grotesk']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 flex justify-between items-center py-5 px-10 mt-[8vw]">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-4 py-2 border-2 border-zinc-500 font-light text-md uppercase rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full py-2 border-[1px] border-zinc-400">
            <span className="rotate-45">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
