function Cards() {
  return (
    <div className="w-full h-screen flex py-20 px-10 gap-5 items-center bg-zinc-900">
      <div className="card-container h-96 w-1/2">
        <div className="card flex justify-center items-center w-full rounded-xl h-full  bg-[#004D43]">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
        </div>
      </div>
      <div className="card-container h-96 flex gap-5 w-1/2">
        <div className="flex justify-center items-center card w-1/2 rounded-xl h-full  bg-[#052e28]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center card w-1/2 rounded-xl h-full  bg-[#212121]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
