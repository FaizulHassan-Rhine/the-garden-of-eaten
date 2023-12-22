
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from "../../../public/images/signIn.jpg";

const Login = () => {
  return (
    <div>
      <div className="container mx-auto">
        <section>
          <div className="px-6 h-full text-gray-800 mt-10">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div className="grow-0 pt-8 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <img src={login} className="w-full rounded-lg" alt="Sample image" />
              </div>
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form>
                  <div className="flex flex-row items-center justify-center lg:justify-start">
                    <p className="text-lg mb-0 mr-4">Sign in with</p>
                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="inline-block p-3 bg-[#E21B70] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#E21B70] hover:shadow-lg focus:bg-[#E21B70] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#E21B70] active:shadow-lg transition duration-150 ease-in-out mx-1"
                    >
                      <FaFacebookSquare className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="inline-block p-3 bg-[#E21B70] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#E21B70] hover:shadow-lg focus:bg-[#E21B70] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#E21B70] active:shadow-lg transition duration-150 ease-in-out mx-1"
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
                      className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#E21B70] focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#E21B70] focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Password"
                    />
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#E21B70] checked:border-[#E21B70] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"
                      />
                      <label
                        className="form-check-label inline-block text-sm text-gray-800"
                        htmlFor="exampleCheck2"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-gray-800 text-sm hover:text-[#E21B70]">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center lg:text-left">
                    <button
                      type="button"
                      className="inline-block px-6 py-2 bg-[#E21B70] text-white text-sm leading-snug uppercase rounded-md font-semibold shadow-md hover:bg-gray-300 border border-[#E21B70] hover:text-[E21B70] hover:shadow-lg 
                       focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#E21B70] active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Login
                    </button>
                    <p className="text-sm font-medium mt-2 pt-1  mb-0">
                      {`Don't have an account?`}
                      <Link to="/signup">
                        <a
                          href="#!"
                          className="text-[#E21B70]  focus:text-[#E21B70] transition duration-200 ease-in-out"
                        >
                          Sign up
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
    </div>
  );
};

export default Login;
