import { IoCloseSharp } from "react-icons/io5";

const Cart = () => {
  return (
    <>
      <div className="fixed right-0 top-0 w-full sm:w-[60vw] md:w-[40vw] lg:w-[20vw] bg-white h-full p-5">
        <div className="flex justify-between items-center my-3 ">
          <h2 className="text-2xl font-bold text-gray-700">My Orders</h2>
          <IoCloseSharp className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-2xl rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Cart;
