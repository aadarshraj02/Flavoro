const Navbar = () => {
  return (
    <nav>
      <div>
        <h3 className="">{new Date().toUTCString().slice(0, 16)}</h3>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
