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
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
        magni!
      </p>
      <div>
        <span>Star Icon Rating</span>
        <button>All to cART</button>
      </div>
    </div>
  );
};

export default FoodCard;
