import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  let linksString =
    "hidden w-full items-center justify-center md:block md:w-auto";

  if (!showMobileMenu) {
    linksString =
      "hidden w-full items-center justify-center md:block md:w-auto";
  } else {
    linksString = "w-full items-center justify-center md:block md:w-auto";
  }

  const handleClick = (e) => {
    e.preventDefault();
    showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);
  };

  return (
    <nav className="bg-blue-600 py-2 px-6">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Lifecare Sync
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handleClick}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={linksString}>
          <ul className="font-medium flex flex-col bg-blue-600 md:flex-row md:space-x-8 ">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-500 md:border-0 md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-500 md:border-0 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-500 md:border-0 md:p-0"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
