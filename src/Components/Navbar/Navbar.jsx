
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiShoppingCart } from "react-icons/hi";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/home");
  };

  return (
    <div className="sticky-navbar  bg-white h-24 px-10">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>

              <li>
                <AnchorLink href="#price-menu">
                  <button>Menu</button>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#contact">
                  <button>Contact</button>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#blog">
                  <button>Blog</button>
                </AnchorLink>
              </li>
            </ul>
          </div>
          <a href="/">
            <button className=" h-20 w-28">
              <img className="h-20 w-16 ml-5" src={logo} alt="" />
            </button>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <AnchorLink href="#homee">
                <button onClick={handle}>Home</button>
              </AnchorLink>
            </li>

            <li>
              <AnchorLink href="#price-menu">
                <button onClick={handle}>Menu</button>
              </AnchorLink>
            </li>
            <li>
              <Link to="/contact-us">
                <button onClick={handle}>Contact</button>
              </Link>
            </li>
            <li>
              <AnchorLink href="#blog">
                <button onClick={handle}>Blog</button>
              </AnchorLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/cart">
            <HiShoppingCart className="mr-2 w-6 h-6 hover:text-lime-400" />
          </Link>

          <Link to="/login">
            <button className="bg-orange-400 hover:bg-lime-400 px-2 py-1 rounded-md text-white font-medium">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
