const CategoryMenu = () => {
  return (
    <div>
      <h3>Find the best Food</h3>
      <div>
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
