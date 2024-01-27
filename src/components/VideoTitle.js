const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-slate-950 aspect-video w-screen ">
      <h1 className="font-bold text-6xl ">{title}</h1>
      <p className="p-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className=" font-bold text-lg bg-white px-10 text-black p-4 hover:opacity-80 rounded-lg ">
          ▶ Play
        </button>
        <button className="font-bold text-lg mx-2 bg-gray-500 px-10 text-white p-4  rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
