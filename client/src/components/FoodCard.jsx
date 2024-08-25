import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const FoodCard = () => {
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg">
      <img
        src=""
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-300 ease-linear"
      />
      <div className="text-sm flex justify-between items-center">
        <h2>Onion Pizza</h2>
        <span className="text-green-500">₹180</span>
      </div>
      <p className="text-sm font-normal text-gray-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
        magni!
      </p>
      <div className="flex justify-between items-center">
        <span className="flex gap-1 items-center justify-center">
          <FaStar className="yellow-400" /> 4.5
        </span>
        <button className="p-1 text-white bg-green-500 hover:bg-green-600 transition-all duration-300 ease-linear flex items-center gap-1 rounded-lg text-sm">
          Add to cart <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
