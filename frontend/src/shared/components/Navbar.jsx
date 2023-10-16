import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { ToastContainer } from "react-toastify";
import { handleError } from "./toast";
import SERVER_URL from "../../Constants";
import axios from "axios";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const auth = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth.userId) {
      axios
        .get(SERVER_URL + `api/users/profile`, {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        })
        .then((resp) => {
          const first_name = resp.data.result.first_name;
          const last_name = resp.data.result.last_name;
          setUser(
            <>
              <span className="navbar-text mr-2">
                Welcome, {first_name} {last_name}
              </span>
            </>
          );
        })
        .catch((err) => {
          handleError(err);
        });
    } else {
      setUser(null);
    }
  }, [auth.token, auth.userId]);

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

  let options;
  if (auth.token) {
    options = (
      <ul className="font-medium flex flex-col bg-blue-600 md:flex-row md:space-x-8 ">
        <li>
          <a
            href="/profile"
            className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-300 md:border-0 md:p-0"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            href="/patients"
            className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-300 md:border-0 md:p-0"
          >
            Patients
          </a>
        </li>
        <li>
          <a
            href="/addpatient"
            className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-300 md:border-0 md:p-0"
          >
            Add Patient
          </a>
        </li>
        <li>
          <a
            href="logout"
            className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-300 md:border-0 md:p-0"
          >
            Logout
          </a>
        </li>
      </ul>
    );
  } else {
    options = (
      <ul className="font-medium flex flex-col bg-blue-600 md:flex-row md:space-x-8 ">
        <li>
          <a
            href="/"
            className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-300 md:border-0 md:p-0"
          >
            Register
          </a>
        </li>
        <li>
          <a
            href="/login"
            className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-300 md:border-0 md:p-0"
          >
            Login
          </a>
        </li>
      </ul>
    );
  }

  return (
    <nav className="bg-blue-600 py-2 px-6">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="font-medium block py-2 pl-3 pr-4 text-white">
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
        <div className={linksString}>{options}</div>
      </div>
    </nav>
  );
};

export default Navbar;
