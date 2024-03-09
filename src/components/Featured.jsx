function Featured() {
  return (
    <div className="w-full py-20">
      <div className="featured w-full px-10 border-b-2 border-zinc-700 pb-20">
        <h1 className="text-6xl tracking-tight font-['Neue Montreal']">
          Featured
        </h1>
      </div>
      <div className="px-10">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="relative w-1/2 h-[75vh] card-container ">
            <h1 className="absolute text-[#CDEA68] z-10 text-8xl leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 font-bold">
              {"FYDE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card rounded-2xl w-full h-full  overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
                className="w-full h-full object-fit"
              />
            </div>
          </div>
          <div className="card-container relative w-1/2 h-[75vh]">
            <h1 className="absolute text-[#CDEA68] z-10 text-8xl leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 font-bold">
              {"TRAWA".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card rounded-2xl w-full h-full overflow-hidden bg-zinc-200">
              <img
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
