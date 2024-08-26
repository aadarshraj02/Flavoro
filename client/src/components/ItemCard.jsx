import { GoPlus } from "react-icons/go";
import { HiMinusSm } from "react-icons/hi";

const ItemCard = () => {
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-2">
      <img src="" alt="" className="w-[50px] h-[50px]" />
      <div>
        <h2 className="font-bold text-gray-700">Onion Pizza</h2>
        <div className="flex justify-between items-center">
          <h3 className="text-green-500 font-bold">₹120</h3>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <GoPlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-2xl transition-all duration-300 ease-linear cursor-pointer font-semibold hover:border-none" />
            <span>1</span>
            <HiMinusSm className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-2xl transition-all duration-300 ease-linear cursor-pointer font-semibold hover:border-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
