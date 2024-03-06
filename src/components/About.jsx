function About() {
  return (
    <div className="w-full p-10 rounded-t-3xl bg-[#CDEA68] text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] mt-20 flex  pt-10 gap-5 border-[#9fb54f]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach:</h1>
          <button className="px-10 items-center justify-center mt-10 py-6 bg-zinc-900 rounded-full text-white flex gap-10 uppercase">
            Read More<div className="w-3 h-3 bg-zinc-100  rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 rounded-xl h-[70vh] bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')] bg-center bg-cover"></div>
      </div>
    </div>
  );
}

export default About;
