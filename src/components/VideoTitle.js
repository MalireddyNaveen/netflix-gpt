const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-6  md:px-12 absolute text-white bg-gradient-to-r from-black  aspect-video w-screen  ">
      <h1 className="text-lg font-bold md:text-6xl w-1/2 ">{title}</h1>
      <p className="hidden md:inline-block p-6 text-lg w-2/4">{overview}</p>
      <div className="">
        <button className="my-2 md:my-0 font-bold text-sm bg-white px-4 md:px-10 text-black py-1 md:py-4 hover:opacity-80 rounded-lg ">
          ▶ Play
        </button>
        <button className="hidden md:inline-block font-bold text-lg mx-2 bg-gray-500 px-10 text-white p-4  rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
