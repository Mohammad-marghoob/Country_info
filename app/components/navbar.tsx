import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="p-5 flex gap-2 bg-blue-950 mb-2">
      <button className="flex items-center justify-center px-6 py-2 text-lg text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
        <NavLink to="/">Home</NavLink>
      </button>
      <button className="flex items-center justify-center px-6 py-2 text-lg text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
        <NavLink to="/countries">Countries</NavLink>
      </button>
      <button className="flex items-center justify-center px-6 py-2 text-lg text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
        <NavLink to="/about">About</NavLink>
      </button>
    </div>
  );
};

export default Navbar;
