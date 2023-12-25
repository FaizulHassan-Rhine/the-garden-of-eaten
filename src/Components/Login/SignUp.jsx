import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from "../../../public/images/signIn.jpg";

const SignUp = () => {
  return (
    <div className="mb-10 mt-10 container mx-auto">
      <section>
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src={login}
                className="w-full rounded-lg"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="text-lg mb-0 mr-4">Sign Up with</p>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-[#E52491] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#E52491] hover:shadow-lg focus:bg-[#E52491] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#E52491] active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <FaFacebookSquare className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-[#E52491] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#E52491] hover:shadow-lg focus:bg-[#E52491] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#E52491] active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <FaGoogle className="h-4 w-4"></FaGoogle>
                  </button>
                </div>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#E52491] focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#E52491] focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#E52491] focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#E52491] focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Confirm Password"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4  border border-gray-300 rounded-sm bg-white checked:bg-[#E52491] checked:border-[#E52491] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-block px-6 py-2 font-semibold bg-[#E52491] text-white  text-sm leading-snug uppercase rounded-md shadow-md hover:bg-gray-300 border border-[#E52491] hover:text-[#E52491] hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#E52491] active:shadow-lg active:text-white transition duration-150 ease-in-out"
                  >
                    Sign Up
                  </button>
                  <p className="text-sm font-medium mt-2 pt-1  mb-0">
                    Already have an account?
                    <Link to="/login">
                      <a
                        href="#!"
                        className="text-[#E52491]  focus:text-[#E52491] transition duration-200 ease-in-out"
                      >
                        Sign in
                      </a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
