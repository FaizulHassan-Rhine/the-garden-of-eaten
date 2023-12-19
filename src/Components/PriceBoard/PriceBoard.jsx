
import "./Price.css";
import rotateLogo from "../../images/rotate-logo2.png"
import priceBoard from "../../images/priceCard.jpg"

const PriceBoard = () => {
  return (
    <div id="price" className="mt-16 mb-1  ">
      <div className="container mx-auto h-full  w-full hidden md:block">
        <img className="rounded-md" src={priceBoard} />
      </div>

      <div className="container mx-auto  text-white relative block md:hidden ">

        <div className="absolute top-3 left-1">
          <img className=" h-20 w-16 sm:h-28 sm:w-24 lg:h-64 lg:w-52 lg:-ml-5" src={rotateLogo} />
        </div>

        <h2 className="text-center pl-4 font-bold text-4xl pt-12  ">
          {`Frenzy's Menu`}
        </h2>
        <div className="md:grid  md:grid-cols-2 lg:grid lg:grid-cols-3  justify-items-center  ">
          <div className="card md:w-96    lg:ml-56 lg:mt-20">
            <div className="card-body ">
              <h2 className=" font-extrabold text-orange-400 text-xl lg:text-3xl">
                Chicken Fry
              </h2>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-xl ">
                    Signature
                  </p>
                  <p className="font-bold text-xl ">
                    TangyTingle
                  </p>
                  <p className="font-bold text-xl ">
                    Parmaroma
                  </p>
                  <p className="font-bold text-xl ">
                    Kashmiri Spice
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl ">
                    139 tk
                  </p>
                  <p className="font-bold text-xl ">
                    149 tk
                  </p>
                  <p className="font-bold text-xl ">
                    149 tk
                  </p>
                  <p className="font-bold text-xl ">
                    149 tk
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card md:w-96  lg:ml-36 lg:mt-20">
            <div className="card-body ">
              <h2 className=" font-extrabold text-orange-400 text-xl lg:text-3xl">
                Chicken Lollypop
              </h2>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-xl ">
                    Signature
                  </p>
                  <p className="font-bold text-xl ">
                    TangyTingle
                  </p>
                  <p className="font-bold text-xl ">
                    Kashmiri Spice
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl ">
                    199 tk
                  </p>
                  <p className="font-bold text-xl ">
                    239 tk
                  </p>
                  <p className="font-bold text-xl ">
                    239 tk
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div className="card md:w-96    lg:mt-20">
            <div className="card-body ">
              <h2 className=" font-extrabold text-orange-400 text-xl lg:text-3xl">
                Burgers
              </h2>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-xl ">
                    Signature
                  </p>
                  <p className="font-bold text-xl ">
                    TangyTingle
                  </p>

                  <p className="font-bold text-xl ">
                    Kashmiri Spice
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl ">
                    299 tk
                  </p>
                  <p className="font-bold text-xl ">
                    399 tk
                  </p>
                  <p className="font-bold text-xl ">
                    399 tk
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div className="card md:w-96   lg:ml-36 ">
            <div className="card-body ">
              <h2 className=" font-extrabold text-orange-400 text-xl lg:text-3xl">
                Strips
              </h2>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-xl ">
                    Signature
                  </p>
                  <p className="font-bold text-xl ">
                    TangyTingle
                  </p>
                  <p className="font-bold text-xl ">
                    Parmaroma
                  </p>
                  <p className="font-bold text-xl ">
                    Kashmiri Spice
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl ">
                    289 tk
                  </p>
                  <p className="font-bold text-xl ">
                    309 tk
                  </p>
                  <p className="font-bold text-xl ">
                    309 tk
                  </p>
                  <p className="font-bold text-xl ">
                    309 tk
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card md:w-96  ">
            <div className="card-body ">
              <h2 className=" font-extrabold text-orange-400 text-xl lg:text-3xl">
                Sides
              </h2>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-xl ">
                    Coleslaw
                  </p>
                  <p className="font-bold text-xl ">
                    Hot Fries
                  </p>
                  <p className="font-bold text-xl ">
                    OG Fries
                  </p>
                  <p className="font-bold text-xl ">
                    Hot Wedges
                  </p>
                  <p className="font-bold text-xl ">
                    OG Wedges
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl ">
                    85 tk
                  </p>
                  <p className="font-bold text-xl ">
                    145 tk
                  </p>
                  <p className="font-bold text-xl ">
                    129 tk
                  </p>
                  <p className="font-bold text-xl ">
                    155 tk
                  </p>
                  <p className="font-bold text-xl ">
                    139 tk
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card md:w-96  lg:-mt-10  lg:ml-56 ">
            <div className="card-body ">
              <h2 className=" font-extrabold text-orange-400 text-xl lg:text-3xl">
                Wings
              </h2>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-xl ">
                    Signature
                  </p>
                  <p className="font-bold text-xl ">
                    TangyTingle
                  </p>
                  <p className="font-bold text-xl ">
                    Kashmiri Spice
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl ">
                    199 tk
                  </p>
                  <p className="font-bold text-xl ">
                    239 tk
                  </p>
                  <p className="font-bold text-xl ">
                    239 tk
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div className="card md:w-96   lg:ml-56 ">
            <div className="card-body ">
              <h2 className=" font-extrabold text-orange-400 text-xl lg:text-3xl">
                Dips
              </h2>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-xl ">
                    Honey Mustered
                  </p>
                  <p className="font-bold text-xl ">
                    Garlic Mayo
                  </p>
                  <p className="font-bold text-xl ">
                    Spicy Mayo

                  </p>

                </div>
                <div>
                  <p className="font-bold text-xl ">
                    45 tk
                  </p>
                  <p className="font-bold text-xl ">
                    45 tk
                  </p>
                  <p className="font-bold text-xl ">
                    45 tk
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBoard;
