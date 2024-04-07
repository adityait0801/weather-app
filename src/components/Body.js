import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../utils/Contants";

const Body = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/city');
  };

  return (
    <div className="">
      <div>
        <img 
        className="h-full w-full absolute"
        src={IMG_URL}
        alt="Weather Image"
        />
      </div>
      <div className="absolute h-screen flex flex-col justify-center items-center right-0 left-0 text-black bg-opacity-10">
        <h1 className="text-5xl font-bold text-center m-">Welcome to the Weather App</h1>
        <h5 className="text-xl">Here you can find the weather of different cities</h5>
        <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2">
          Here We Go  !!
        </button>
      </div>
    </div>
  );
};

export default Body;
