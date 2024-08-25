import FoodCard from "./FoodCard";
import foodData from "../data/foodData";

const FoodItems = () => {
  return (
    <div>
      {foodData.map((food) => (
        <FoodCard
          key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          desc={food.rating}
          rating={food.rating}
          image={food.img}
        />
      ))}
    </div>
  );
};

export default FoodItems;
