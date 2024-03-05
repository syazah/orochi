import { FaLongArrowAltUp } from "react-icons/fa";
function Landing() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        <div className="masker">
          <h1 className="uppercase tracking-tighter font-medium text-[7.5vw] font-['Founders_Grotesk']">
            WE CREATE
          </h1>
        </div>
        <div className="masker mt-[-60px]">
          <h1 className="uppercase tracking-tighter font-medium text-[7.5vw] font-['Founders_Grotesk']">
            EYE OPENING
          </h1>
        </div>
        <div className="masker   mt-[-60px]">
          <h1 className="uppercase tracking-tighter font-medium text-[7.5vw] font-['Founders_Grotesk']">
            PRESENTATIONS
          </h1>
        </div>
      </div>

      <div className="border-t-[1px] border-zinc-800 flex justify-between items-center py-5 px-20">
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
