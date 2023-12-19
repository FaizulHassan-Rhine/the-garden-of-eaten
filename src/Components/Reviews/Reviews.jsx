
import Review from "../Review/Review";

import i1 from '../Review/img/1.png'
import i2 from '../Review/img/2.png'
import i3 from '../Review/img/3.png'

const Reviews = () => {
  const data = [
    {
      "name": "Thomas Muller",
      "review": "Very good service, good menu … not overly extensive. Food was very good quality all around.",
      "location": "Germany",
      "img": i1
    },
    {
      "name": "Lionel Messi",
      "review": "The food is excellent, generous portions and great prices. The service was fast and friendly. I highly recommended it",
      "location": "Argentina",
      "img": i2
    },
    {
      "name": "Shakib Al Hassan",
      "review": "Great selection! My go to favorite is the Chicken Shawarma. We also love their Chicken Fry. ",
      "location": "Bangladesh",
      "img": i3
    }
  ]


  return (
    <div className="my-32 px-6 md:px-10 lg:px-20 container mx-auto ">
      <div>
        <h2 className="text-4xl text-center text-orange-400 font-bold">
          What Our Customers Says
        </h2>
      </div>

      <div className="grid grid-cols-1 justify-items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {data.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
