import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../../public/images/restaurant-logo3.png";
import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

const Navbar2 = () => {
  const [navbar, setNavbar] = useState(false);

  const [activeLink, setActiveLink] = useState("");

  function handleLinkClick(link) {
    setActiveLink(link);
  }

  // const refresh = () => {
  //     window.location.reload(true)
  // }

  return (
    <div className="w-full bg-white sticky shadow-sm top-0 z-[999]">
      <div className="container mx-auto">
        <nav className="w-full bg-white  ">
          <div className="justify-between mx-auto  lg:max-w-7xl lg:items-center lg:flex ">
            <div>
              <div className="flex items-center justify-between py-3 lg:py-2 lg:block">
                <HashLink to="/#root">
                  <img className="w-60 h-10" src={logo} />
                </HashLink>
                <div className="lg:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="flex flex-col  items-center justify-center space-y-8 lg:flex-row  lg:space-x-6 lg:space-y-0">
                  <li className="text-black font-normal">
                    <HashLink
                      smooth
                      to="/#root"
                      onClick={() => handleLinkClick("homee")}
                      className={` hover:text-[#F70083] ${
                        activeLink === "homee" ? "text-[#F70083]" : ""
                      }`}
                    >
                      Home
                    </HashLink>
                  </li>
                  <li className="text-black font-normal ">
                    <HashLink
                      smooth
                      to="/#menu"
                      onClick={() => handleLinkClick("menu")}
                      className={`hover:text-[#F70083] ${
                        activeLink === "menu" ? "text-[#F70083]" : ""
                      }`}
                    >
                      Menu
                    </HashLink>
                  </li>
                  <li className=" text-black font-normal ">
                    <Link
                      to="/contact-us"
                      onClick={() => handleLinkClick("contact")}
                      className={`  hover:text-[#F70083] ${
                        activeLink === "contact" ? "text-[#F70083]" : ""
                      }`}
                    >
                      Contact{" "}
                      <i className="fa-solid fa-chevron-down text-xs"></i>
                    </Link>
                  </li>

                  <li className="text-black font-normal">
                    <Link
                      smooth
                      to="/about-us"
                      onClick={() => handleLinkClick("about")}
                      className={`  hover:text-[#F70083] ${
                        activeLink === "about" ? "text-[#F70083]" : ""
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                </ul>

                <div className="mt-3 flex flex-col justify-center  items-center space-y-2 lg:hidden ">
                  <button id="singInButton">
                    <Link to="/cart">
                      <FaShoppingCart className="mr-2 w-6 h-6 hover:text-[#E52491]" />
                    </Link>
                  </button>
                  <Link to="/login">
                    <button className="bg-[#E52491] hover:bg-gray-300 border border-[#E52491] hover:text-[#E52491] px-4 py-1 rounded-md text-white font-medium">
                      Sign in
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden  space-x-2 lg:inline-block ">
              <div className="flex justify-center items-center gap-2">
                <button id="singInButton">
                  <Link to="/cart">
                    <FaShoppingCart className="mr-2 w-6 h-6 hover:text-[#E52491]" />
                  </Link>
                </button>
                <Link to="/login">
                <button className="bg-[#E52491] hover:bg-gray-300 border border-[#E52491] hover:text-[#E52491] px-4 py-1 rounded-md text-white font-medium">Sign in
                
                </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar2;
