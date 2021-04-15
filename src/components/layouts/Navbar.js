import React, { useState } from "react";
import { Link } from "gatsby";
import NavLinks from "../../constants/navLinks";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="max-h-full px-4 py-4 bg-gray-900 text-white sm:flex sm:justify-between">
      <div className="flex items-center justify-between">
        <Link to="/" className="font-anton uppercase">
          Josef Molz
        </Link>
        <button
          onClick={() => setToggle(!toggle)}
          className="sm:hidden block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </button>
      </div>
      {toggle && (
        <NavLinks
          styleLinkContainer="bg-gray-200 px-2 pt-2 pb-4 sm:hidden"
          styleLinks="block text-gray-900 hover:text-white hover:bg-gray-600 px-2 py-1 rounded"
        />
      )}
      <NavLinks
        styleLinkContainer="hidden items-center sm:flex"
        styleLinks="ml-6 p-0 btn"
      />
    </nav>
  );
};

export default Navbar;

// <nav className="h-44 bg-gray-900 text-white sm:flex sm:justify-between">
//   <div className="flex items-center justify-between">
//     {/* TODO: CHECK IF "KEY" NECESSARY */}
//     <Link to="/">Josef Molz</Link>
//     <button
//       onClick={() => setToggle(!toggle)}
//       className="sm:hidden block text-gray-500 hover:text-white focus:text-white focus:outline-none"
//     >
//       <svg
//         className="h-6 w-6 fill-current"
//         viewBox="0 0 100 80"
//         width="40"
//         height="40"
//       >
//         <rect width="100" height="20"></rect>
//         <rect y="30" width="100" height="20"></rect>
//         <rect y="60" width="100" height="20"></rect>
//       </svg>
//     </button>
//   </div>
//   {toggle && (
//     <NavLinks
//       styleLinkContainer="bg-gray-200 px-2 pt-2 pb-4 sm:hidden"
//       styleLinks="block text-gray-900 hover:text-white hover:bg-gray-600 px-2 py-1 rounded"
//     />
//   )}
//   <NavLinks
//     styleLinkContainer="hidden items-center sm:flex"
//     styleLinks="ml-2 btn"
//   />
// </nav>;
