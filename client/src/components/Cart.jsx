import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import ItemCard from "./ItemCard";

const Cart = () => {
  return (
    <>
      <div className="fixed right-0 top-0 w-full sm:w-[60vw] md:w-[40vw] lg:w-[20vw] bg-white h-full p-5">
        <div className="flex justify-between items-center my-3 ">
          <h2 className="text-2xl font-bold text-gray-700">My Orders</h2>
          <IoCloseSharp className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-2xl rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer" />
        </div>
        <ItemCard/>
        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-700">Items</h3>
          <h3 className="font-semibold text-gray-700">Total</h3>
          <hr className="my-2" />
          <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg flex items-center gap-2 mb-5">
            Checkout
            <MdOutlineShoppingCartCheckout className="text-xl font-bold" />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
