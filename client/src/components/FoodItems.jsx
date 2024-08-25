import FoodCard from "./FoodCard";
import foodData from "../data/foodData";

const FoodItems = () => {
  return (
    <div>
      {foodData.map((food) => (
        <FoodCard key={food.id} />
      ))}
    </div>
  );
};

export default FoodItems;
