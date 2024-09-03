import FoodCard from "./FoodCard";
import foodData from "../data/foodData";
import toast, { Toaster } from "react-hot-toast";

const FoodItems = () => {
  const handleToast = () => {
    toast.success("Item added to cart");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder="false" />
      <div className="flex flex-wrap gap-10 justify-center md:justify-start mx-6 my-10">
        {foodData.map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
