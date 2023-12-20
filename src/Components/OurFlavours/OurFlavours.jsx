
import { FaFire } from "react-icons/fa";

const OurFlavours = () => {
    return (
        <div className="container mx-auto pt-10 pb-24 ">
           
            <h2 className="font-bold text-[#E21B70] text-center text-[40px] pb-16 uppercase">
            Get to know our Flavors
        </h2>
            <div className="flex flex-col items-center md:flex-row justify-center justify-items-center gap-5">
                <div className=" bg-white hover:bg-[#E21B70] hover:text-white w-96 md:h-44 lg:h-36 p-4  border-[#E21B70] border-4">
                    <p className="text-xl font-bold mb-2">Signature</p>
                    <div className="flex gap-1 justify-items-center">
                        <p className="text-orange-400 text-sm font-semibold mb-2">Spice Level </p>
                        <p className="text-orange-400"><FaFire /></p>

                    </div>
                    <p className="text-xs">Traditional spice mix with pepper and salt</p>
                </div>
                <div className=" bg-white hover:bg-[#E21B70] hover:text-white w-96 md:h-44 lg:h-36 p-4  border-[#E21B70] border-4">
                    <p className="text-xl font-bold mb-2">TangyTingle</p>
                    <div className="flex  justify-items-center">
                        <p className="text-orange-400 text-sm font-semibold mb-2">Spice Level</p>
                        <p className="text-orange-400 ml-1"><FaFire /> </p>
                        <p className="text-orange-400"><FaFire /> </p>

                    </div>
                    <p className="text-xs">Oriental spices coated with a Sweet and Tangy in-house sauce</p>
                </div>
                <div className=" bg-white hover:bg-[#E21B70] hover:text-white w-96 md:h-44 lg:h-36 p-4  border-[#E21B70] border-4">
                    <p className="text-xl font-bold mb-2">Parmaroma</p>
                    <div className="flex gap-1 justify-items-center">
                        <p className="text-orange-400 text-sm font-semibold mb-2">Spice Level</p>
                        <p className="text-orange-400"><FaFire /></p>

                    </div>
                    <p className="text-xs">Black & White Pepper garnished with Parmesan Cheese</p>
                </div>
                <div className=" bg-white hover:bg-[#E21B70] hover:text-white w-96 md:h-44 lg:h-36 p-4  border-[#E21B70] border-4">
                    <p className="text-xl font-bold mb-2">Kashmiri Spice</p>
                    <div className="flex  justify-items-center">
                        <p className="text-orange-400  text-sm font-semibold mb-2">Spice Level</p>
                        <p className="text-orange-400 ml-1"><FaFire /></p>
                        <p className="text-orange-400"><FaFire /></p>
                        <p className="text-orange-400"><FaFire /></p>

                    </div>
                    <p className="text-xs">A harmonious blend of warmth, depth and aromatic Kashmiri spices blend</p>
                </div>

            </div>

        </div>
    );
};

export default OurFlavours;
