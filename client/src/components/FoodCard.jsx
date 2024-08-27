import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, rating, img }) => {
  const description = typeof desc === "string" ? desc : "";

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        price,
        img,
        rating,
        qty: 1,
      })
    );
  };

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg">
      <img
        src={img}
        alt={name}
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-300 ease-linear overflow-hidden"
      />
      <div className="text-sm flex justify-between items-center">
        <h2>{name}</h2>
        <span className="text-green-500">₹ {price}</span>
      </div>
      <p className="text-sm font-normal text-gray-600">
        {description.slice(0, 50)}...
      </p>
      <div className="flex justify-between items-center">
        <span className="flex gap-1 items-center justify-center">
          <FaStar className="text-yellow-400" /> {rating}
        </span>
        <button
          onClick={handleAddToCart}
          className="p-1 text-white bg-green-500 hover:bg-green-600 transition-all duration-300 ease-linear flex items-center gap-1 rounded-lg text-sm"
        >
          Add to cart <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
