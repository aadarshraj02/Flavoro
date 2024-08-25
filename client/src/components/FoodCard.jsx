const FoodCard = () => {
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg ">
      <img
        src=""
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-300 ease-linear"
      />
      <div>
        <h2>Onion Pizza</h2>
        <span>₹180</span>
      </div>
    </div>
  );
};

export default FoodCard;
