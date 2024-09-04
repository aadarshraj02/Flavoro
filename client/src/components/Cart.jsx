import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full sm:w-[60vw] md:w-[40vw] lg:w-[25vw] 2xl:w-[20vw] bg-white h-full p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 ease-linear z-50`}
      >
        <div className="flex justify-between items-center my-3 ">
          <h2 className="text-2xl font-bold text-gray-700">My Orders</h2>
          <IoCloseSharp
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-2xl rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer"
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((food) => (
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          ))
        ) : (
          <h2 className="text-center text-2xl font-bold text-gray-700">
            Your Cart is empty
          </h2>
        )}
        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-700">Items:{totalQty}</h3>
          <h3 className="font-semibold text-gray-700">
            Total Amount:{totalPrice}
          </h3>
          <hr className="my-2" />
          <button
            onClick={() => {
              navigate("/success");
            }}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg flex items-center gap-2 mb-5"
          >
            Checkout
            <MdOutlineShoppingCartCheckout className="text-xl font-bold" />{" "}
          </button>
        </div>
      </div>
      <MdOutlineShoppingCartCheckout
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer ${
          totalQty > 0 && "animate-bounce delay-500 transition-all "
        }`}
      />
    </>
  );
};

export default Cart;
