const Navbar = () => {
  return (
    <nav>
      <div>
        <h3 className="">{new Date().toUTCString().slice(0, 16)}</h3>
        <h1>Flavoro Foods</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search foods..."
        />
      </div>
    </nav>
  );
};

export default Navbar;
