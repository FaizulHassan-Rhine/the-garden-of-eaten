
import logo from "../../images/logo.png";
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
    <div className=" bg-black">
      <footer className="footer container mx-auto lg:justify-items-center p-10 text-white grid lg:grid-cols-4">
        <div className="">
          <figure>
            <img className="h-20 w-16 -mt-1 ml-12" src={logo} alt="" />
          </figure>
          <p>
            <span className="font-bold text-orange-400 text-xl">Hotline</span>{" "}
            01327-364140
          </p>
          <p className="flex gap-2"><MdEmail className="text-white text-xl" />eat@fryfrenzy.com</p>
          <p><span className=" font-semibold">H/O</span> : 2nd Floor, Navana DH Tower, Plot:06, Panthapath, Dhaka 1215</p>
          <p>Fry Frenzy</p>
          <div className="flex text-orange-400 gap-1">
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
        <div>
          <span className="text-lg font-bold text-orange-400">
            Openig hours
          </span>
          <p>Mon.........................1:00 pm -- 10:00 pm</p>
          <p>Tue............................1:00 pm -- 10:00 pm</p>
          <p>Wed.........................1:00 pm -- 10:00 pm</p>
          <p>Thu...........................1:00 pm -- 10:00 pm</p>
          <p>Fri..............................1:00 pm -- 10:00 pm</p>
          <p>Sat............................1:00 pm -- 10:00 pm</p>
          <p>Sun...........................1:00 pm -- 10:00 pm</p>
        </div>
        <div>
          <span className="text-lg font-bold text-orange-400 ">Company</span>
          <Link to="/about-us" className="link link-hover">About Us</Link>
          <Link to="/contact-us" className="link link-hover">Contact</Link>
          <div >
            <p className="pb-3">
              Location
            </p>
            <iframe className="rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.03912029734!2d90.375862!3d23.74703065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1684477699193!5m2!1sen!2sbd" width="200" height="120" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div>
          <span className="text-lg font-bold text-orange-400">Legal</span>
          <Link to="/terms-condition" className="link link-hover">Terms of use</Link>
          <Link to="/privacy-policy" className="link link-hover">Privacy policy</Link>
          <Link to="/purchase-policy" className="link link-hover">Purchase and Sales Policy</Link>
          <Link to="/cookie" className="link link-hover">Cookie policy</Link>

        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-black text-white  justify-center ">
        <div className="items-center grid-flow-col">
          <p className="text-center">
            <span className="text-orange-400">Fry Frenzy</span> <br />
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
