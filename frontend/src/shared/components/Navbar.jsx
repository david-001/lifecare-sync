import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth.userId) {
      axios
        .get(process.env.REACT_APP_SERVER_URL + `api/users/profile`, {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        })
        .then((resp) => {
          const first_name = resp.data.profile.first_name;
          const last_name = resp.data.profile.last_name;
          setUser(
            <>
              <span className="block py-2 pl-3 pr-4 text-white rounded">
                Welcome, {first_name} {last_name}
              </span>
            </>
          );
        })
        .catch((err) => {
          auth.logout();
          navigate("/");
        });
    } else {
      setUser(null);
    }
  }, [auth, navigate]);

  // if (!user) {
  //   return <LoadingSpinner />;
  // }

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
            href={`${process.env.REACT_APP_SERVER_URL}profile`}
            className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-300 md:border-0 md:p-0"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            href={`${process.env.REACT_APP_SERVER_URL}patients`}
            className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-300 md:border-0 md:p-0"
          >
            Patients
          </a>
        </li>
        <li>
          <a
            href={`${process.env.REACT_APP_SERVER_URL}addpatient`}
            className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-300 md:border-0 md:p-0"
          >
            Add Patient
          </a>
        </li>
        <li>
          <a
            href={`${process.env.REACT_APP_SERVER_URL}logout`}
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
            href={`${process.env.REACT_APP_SERVER_URL}register`}
            className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-300 md:border-0 md:p-0"
          >
            Register
          </a>
        </li>
        <li>
          <a
            href={`${process.env.REACT_APP_SERVER_URL}login`}
            className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-300 md:border-0 md:p-0"
          >
            Login
          </a>
        </li>
      </ul>
    );
  }

  return (
    <nav className="bg-blue-600 py-2 px-6 fixed w-full top-0 left-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <svg
            viewBox="0 0 20 20"
            version="1.1"
            id="svg4"
            width="20"
            height="20"
          >
            <path
              d="M 4.2740326,0.89160687 C 4.4861539,1.5479049 4.1414592,2.254988 3.5088806,2.473754 L 2.5164565,2.8136226 v 4.7230023 c 0,2.0704643 1.6287881,3.7502751 3.6363641,3.7502751 2.0075747,0 3.6363628,-1.6798108 3.6363628,-3.7502751 V 2.8136226 L 8.8005474,2.473754 C 8.1641833,2.254988 7.823274,1.5479049 8.0353953,0.89160687 8.2475167,0.23530874 8.9331234,-0.11627953 9.5694874,0.1024865 l 0.9886366,0.33986864 c 0.988636,0.33986868 1.655303,1.29306336 1.655303,2.37126746 v 4.7230023 c 0,3.0158461 -2.068183,5.5316551 -4.8219703,6.1215431 0.238636,2.183754 2.0340907,3.87919 4.2159103,3.87919 2.344695,0 4.242423,-1.957174 4.242423,-4.375322 v -2.76192 C 14.777821,9.9196123 14.031608,8.8179689 14.031608,7.5366249 c 0,-1.7266889 1.356061,-3.125229 3.030304,-3.125229 1.674242,0 3.030302,1.3985401 3.030302,3.125229 0,1.281344 -0.746212,2.3829874 -1.818181,2.8634911 v 2.76192 c 0,3.797155 -2.984849,6.875506 -6.666666,6.875506 -3.518941,0 -6.3977291,-2.8088 -6.6477291,-6.371562 C 2.1831232,13.091719 0.09221377,10.568097 0.09221377,7.5366249 V 2.8136226 c 0,-1.0742974 0.66666668,-2.03139878 1.65909073,-2.37126746 L 2.7399405,0.1024865 C 3.3763046,-0.11627953 4.0619112,0.23921527 4.2740326,0.89160687 Z M 17.061912,8.7867166 a 1.2121212,1.2500916 0 1 0 0,-2.5001833 1.2121212,1.2500916 0 1 0 0,2.5001833 z"
              id="path2"
              fill="#ffff"
              fillOpacity="1"
              stroke="none"
              strokeWidth="0.0288505"
              // stroke="currentColor"
              // strokeLinecap="round"
              // strokeLinejoin="round"
              // strokeWidth="2"
              // d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
          <a
            href={
              auth.token
                ? `${process.env.REACT_APP_SERVER_URL}patients`
                : `${process.env.REACT_APP_SERVER_URL}`
            }
            className="flex items-center"
          >
            <span className="font-medium text-xl block py-2 pl-3 pr-4 text-white">
              Lifecare Sync
            </span>
          </a>
        </div>
        {user}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-blue-400 hover:bg-blue-700 focus:ring-blue-600"
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
