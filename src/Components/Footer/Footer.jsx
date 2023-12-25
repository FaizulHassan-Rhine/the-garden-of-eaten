
import logo from "../../../public/images/restaurant-logo.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
// import AnchorLink from "react-anchor-link-smooth-scroll";


const Footer = () => {
  return (
    <div className=" bg-[#F4F3EF]">
      <footer className="footer container mx-auto lg:justify-items-center py-5 text-black grid lg:grid-cols-4">
        <div className="lg:px-8">
          <figure>
            <img className="h-16 w-16 mb-3" src={logo} alt="" />
          </figure>
          <p className="text-sm">
            <span className="font-bold text-[#E52491] ">Hotline</span>{" "}
            01327-364140
          </p>
         <div className="flex gap-2  items-center">
         <MdEmail className=" text-sm" />
         <p className="text-xs">eat@thegardenofeaten.com</p>
          
         </div>
          <p className="text-xs"><span className="">H/O</span> : 2nd Floor, Navana DH Tower, Plot:06, Panthapath, Dhaka 1215</p>
          <p className="text-sm pt-2">{`The Garden of Eat'n`}</p>
          <div className="flex text-[#E52491] gap-2 pt-1">
            <a href="https://www.facebook.com/fryfrenzyofficial" target="_blank" className="link link-hover" rel="noreferrer">
              <FaFacebookSquare className="h-12 w-12 lg:h-6 lg:w-6" />
            </a>
            <a href="https://www.instagram.com/fryfrenzyofficial/" target="_blank" className="link link-hover" rel="noreferrer">
              <FaInstagramSquare className="h-12 w-12 lg:h-6 lg:w-6" />
            </a>
            <a href="https://wa.me/+8801327364140" target="_blank" className="link link-hover" rel="noreferrer">
              <FaWhatsappSquare className="h-12 w-12 lg:h-6 lg:w-6" />
            </a>
          </div>
        </div>
        {/* <div className="pt-10">
          <span className="text-lg font-bold text-[#E52491] ">
            Openig hours
          </span>
          <div className="flex flex-col gap-2 mt-5">
          <p className="text-[13px]">Mon.........................1:00 pm -- 10:00 pm</p>
          <p className="text-[13px]">Tue..........................1:00 pm -- 10:00 pm</p>
          <p className="text-[13px]">Wed........................1:00 pm -- 10:00 pm</p>
          <p className="text-[13px]">Thu..........................1:00 pm -- 10:00 pm</p>
          <p className="text-[13px]">Fri............................1:00 pm -- 10:00 pm</p>
          <p className="text-[13px]">Sat...........................1:00 pm -- 10:00 pm</p>
          <p className="text-[13px]">Sun..........................1:00 pm -- 10:00 pm</p>
          </div>
        </div> */}
        <div className="flex flex-col mt-5">
          <span className="text-lg font-bold text-[#E52491] mb-5">Company</span>
          <Link to="/about-us" className="link link-hover text-[13px] pb-2">Home</Link>
          <Link to="/contact-us" className="link link-hover text-[13px] pb-2">Menu</Link>
          <Link to="/contact-us" className="link link-hover text-[13px] pb-2">About us</Link>
          <Link to="/contact-us" className="link link-hover text-[13px] pb-2">Contact</Link>
          <Link to="/contact-us" className="link link-hover text-[13px]">Sign in</Link>
          
        </div>
        <div className="flex flex-col mt-5">
          <span className="text-lg font-bold text-[#E52491] mb-5">Legal</span>
          <Link to="/terms-condition" className="link link-hover text-[13px] pb-2">Terms of use</Link>
          <Link to="/privacy-policy" className="link link-hover text-[13px] pb-2">Privacy policy</Link>
          <Link to="/purchase-policy" className="link link-hover text-[13px] pb-2">Purchase and Sales Policy</Link>
          <Link to="/cookie" className="link link-hover text-[13px] pb-2">Cookie policy</Link>

        </div>
        <div className="mt-5">
            <p className="pb-5">
            <span className="text-lg font-bold text-[#E52491] ">Location</span>
            </p>
            <iframe className="rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.03912029734!2d90.375862!3d23.74703065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1684477699193!5m2!1sen!2sbd" width="200" height="120" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </footer>
      <footer className="footer px-10 py-4 border-t-2 bg-[#F4F3EF]    justify-center ">
        <div className="items-center grid-flow-col">
          <p className="text-center text-sm">
            <span className="text-[#E52491] ">{`The Garden of Eat'n`}</span> <br />
            Providing Delicious Food since 2023
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
