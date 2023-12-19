
import { Link } from "react-router-dom";

function Thankyou() {
  // const naviagate = useNavigate();

  // useState(() => {
  //   setTimeout(() => {
  //     naviagate("/")
  //   }, 4000)
  // }, [])
  return (
    <div className="my-20 container   mx-auto">
      <div className="flex flex-col relative justify-center">
        <p
          className="text-orange-400 text-center font-extrabold text-5xl md:text-7xl"

        >
          Thank You
        </p>
        <p
          className="text-center text-black text-base md:text-2xl "
        >
          Thank you for getting in touch. One of our team members will reach
          <br /> out to you within the shortest possible time. If you need
          project
          <br /> assistance, you can contact us at

          <u className="text-orange-500 ml-3">eat@fryfrenzy.com</u>
        </p>
        <Link to="/" className="text-center w-40  bg-orange-400 hover:bg-green-500 text-white py-2 px-6 rounded-lg font-semibold absolute left-[50%] top-[150%]" style={{ transform: 'translateX(-50%)' }}> Back to Home</Link>
      </div>
    </div>
  );
}

export default Thankyou;
