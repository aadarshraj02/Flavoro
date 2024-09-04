import { useEffect, useState } from "react";
import FoodData from "../data/foodData";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best Food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth sm:overflow-x-hidden">
        <button className="px-3 py-2 text-center bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
          All
        </button>
        <button className="px-3 py-2 text-center bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
          Lunch
        </button>
        <button className="px-3 py-2 text-center bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
          Breakfast
        </button>
        <button className="px-3 py-2 text-center bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
          Dinner
        </button>
        <button className="px-3 py-2 text-center bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
          Snacks
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
