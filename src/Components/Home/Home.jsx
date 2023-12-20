
import "./Home.css";

import bannerPhoto from "../../../public/images/burger4.jpg";
import Footer from "../Footer/Footer";
// import PriceBoard from "../PriceBoard/PriceBoard";

import Welcome from "../Welcome/Welcome";

// import MenuList from "../MenuList/MenuList";
import OurFlavours from "../OurFlavours/OurFlavours";

import Menu from "../Menu/Menu";
import Reviews from "../Reviews/Reviews";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {





  return (
    <div id="homee" >
      <div className="w-full h-full bg-[#F4F3EF]">
        <div className="px-4 xl:px-6 pb-12 container mx-auto ">
          <div className="flex flex-col md:flex-row md:gap-10 justify-between items-center ">
            <div className="mt-5 lg:mt-0 ">
              <h2 className="text-3xl md:text-5xl text-start  lg:text-[80px] font-extrabold text-[#E21B70]">
                {`It's Clucking Delicious`}<span className="lg:text-[60px] ml-1">!!</span>
              </h2>
              {/* <p className="pt-2">Special deal on only Friday</p>
            <p className="text-2xl font-medium">Buy 2 Get 1 Free</p>
            <AnchorLink href="#menu">
              <button className="bg-orange-400 mt-10 p-2 hover:bg-lime-400 rounded-md  text-white text-xs font-semibold">
                ORDER NOW
              </button>
            </AnchorLink> */}
            </div>
            <div className="w-full flex justify-end">
              <img
                className=" h-[200px] w-[250px] sm:h-[300px]  sm:w-[365px] md:h-[250px] md:w-[300px] lg:h-[550px] lg:w-[550px]  mt-10  img-size"
                src={bannerPhoto}

                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Welcome></Welcome>

      {/* <PriceBoard></PriceBoard> */}
      <Menu/>
      <OurFlavours></OurFlavours>
      
      
      {/* <MenuList ></MenuList> */}
      <Reviews></Reviews>
      {/* <Blog></Blog> */}
      <ContactUs/>
      <Footer></Footer>
    </div>
  );
};

export default Home;
