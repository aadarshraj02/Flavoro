import { GoPlus } from "react-icons/go";
import { HiMinusSm } from "react-icons/hi";

const ItemCard = () => {
  return (
    <div>
      <img src="" alt="" className="w-[50px] h-[50px]" />
      <div>
        <h2>Onion Pizza</h2>
        <div>
          <GoPlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-2xl transition-all duration-300 ease-linear cursor-pointer font-semibold hover:border-none" />
          <span>1</span>
          <HiMinusSm className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-2xl transition-all duration-300 ease-linear cursor-pointer font-semibold hover:border-none" />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
