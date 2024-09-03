import FoodCard from "./FoodCard";
import foodData from "../data/foodData";
import toast, { Toaster } from "react-hot-toast";

const FoodItems = () => {
  return (
    <>
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
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
