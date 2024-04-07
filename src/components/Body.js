import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/city');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div>
        <img src={IMG_URL} alt="Weather Image" className="mb-8" />
      </div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Welcome to the Weather App</h1>
        <h5 className="text-sm">Here you can find the weather of different cities</h5>
      </div>
      <div>
        <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300">
          Here We Go!
        </button>
      </div>
    </div>
  );
};

export default Body;
