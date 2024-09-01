import { GoPlus } from "react-icons/go";
import { HiMinusSm } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-2 relative">
      <MdDelete
        onClick={() => dispatch(removeFromCart({ id }))}
        className="text-red-500 text-xl cursor-pointer font-semibold absolute right-7"
      />
      <img src={img} alt={name} className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-700">{name}</h2>
        <div className="flex justify-between items-center">
          <h3 className="text-green-500 font-bold">₹{price}</h3>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <GoPlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-2xl transition-all duration-300 ease-linear cursor-pointer font-semibold hover:border-none"
            />
            <span>{qty}</span>
            <HiMinusSm
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-2xl transition-all duration-300 ease-linear cursor-pointer font-semibold hover:border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
