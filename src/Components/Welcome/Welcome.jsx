import food from "../../../public/images/food.jpg"
import chef from "../../../public/images/chef.png"
import service from "../../../public/images/services.jpg"

const Welcome = () => {
  return (
    <div className="container mx-auto">
      <div className=" mt-28 mb-10 overflow-hidden ">
        <h2 className="font-bold text-[#E21B70] text-center text-[40px] pb-16 uppercase">{`The Garden of Eat'n`}</h2>
        <div className="flex flex-col items-center md:flex-row justify-center justify-items-center gap-5">
                <div className="flex flex-col items-center">
                  <img className="w-60" src={food}/>
                    <p className="text-2xl font-bold mb-2">Delicious Food</p>
                    <p className="text-sm text-center">We provide you with different cuisines of food to satisfy your hunger.</p>
                </div>
                <div className="flex flex-col items-center">
                <img className="w-60" src={chef}/>
                    <p className="text-2xl font-bold mb-2">Experienced Chef</p>
                   
                    <p className="text-sm text-center">If you are a happy person around food, we have the right chef for you.</p>
                </div>
                <div className="flex flex-col items-center">
                <img className="w-60" src={service}/>
                    <p className="text-2xl font-bold mb-2">Quality Services</p>
                  
                    <p className="text-sm text-center">{`The Garden of Eat'n provides the best services for their customer.`}</p>
                </div>
               

            </div>
      </div>
    </div>
  );
};

export default Welcome;
