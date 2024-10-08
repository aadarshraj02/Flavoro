import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlices";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-3 gap-3 mb-10">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold mt-2">Flavoro Foods</h1>
      </div>
      <div>
        <input
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-[80vw] md:w-[30vw]"
          type="search"
          name="search"
          id="search"
          placeholder="Search foods..."
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};

export default Navbar;
