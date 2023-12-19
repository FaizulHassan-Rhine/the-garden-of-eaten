

import b1 from '../../images/b1.png'
import b2 from '../../images/b2.png'
import b3 from '../../images/b3.png'

const Blog = () => {
  return (
    <div
      id="blog"
      className="my-20  lg:my-20 lg:pt-20 md:my-20 md:pt-20 container mx-auto"
    >
      <h1 className=" text-2xl lg:text-4xl uppercase text-center font-bold mb-10 from-current ">
        <span className="text-orange-400">Frenzy</span> Food Blog
      </h1>
      <div className="container mx-auto px-12 rounded-xl">
        {/* <!-- Box-1 --> */}
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4 sm:space-y-0">
          <div className="bg-white">
            <div>
              <div className="shadow-lg mx-10 mb-10 md:mx-0 lg:mx-0 hover:shadow-xl transform transition duration-500 hover:scale-105">
                <div>
                  <img
                    className="w-full rounded-md"
                    src={b1}
                    alt=""
                  />
                  <div className="px-4 py-2">
                    <h1 className="text-lg font-gray-700 font-bold">
                      Food Blogger Eats Pizza With Pudina Chutney; Internet
                      Reacts
                    </h1>
                    <div className="flex space-x-2 mt-2"></div>
                    <p className="text-sm tracking-normal">
                      {`Thanks to food experiments, we have received delicious
                      dishes that we can't imagine our lives without! Take, for
                      instance, chilli paneer - an Indo-Chinese dish that is a
                      delicious combination of Indian and Chinese cuisines. But
                      it is our culinary genius and expertise that led to the
                      invention of chilli paneer! While some experiments sound
                      appetising, other experiments are simply disastrous
                      Recently.`}
                    </p>
                    <button className="mt-4 w-full text-center hover:bg-lime-400 bg-orange-400 py-2 rounded-lg">
                      <a
                        href="https://food.ndtv.com/food-drinks/food-blogger-eats-pizza-with-pudina-chutney-internet-reacts-2600230"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read more
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* box---2 */}
          <div className="bg-white">
            <div>
              <div className="shadow-lg mx-10  mb-10 md:mx-0 lg:mx-0 hover:shadow-xl transform transition duration-500 hover:scale-105">
                <div>
                  <img
                    className="w-full rounded-md"
                    src={b2}
                    alt=""
                  />
                  <div className="px-4 py-2">
                    <h1 className="text-lg font-gray-700 font-bold">
                      Chicken Wings Recipe: Make These Tantalising Chicken Wings
                      A Desi Twist
                    </h1>
                    <div className="flex space-x-2 mt-2"></div>
                    <p className="text-sm tracking-normal">
                      There is no denying that chicken makes for one of the most
                      satisfying meals. Deep fry them for those restaurant-style
                      fried chicken wings or roast them on the tandoor for that
                      authentic desi favorite Tandoori chicken. No matter which
                      recipe you choose, the dish is the sure to leave you full
                      and happy. It goes without saying that these chicken
                      dishes are also some of the
                    </p>
                    <button className="mt-4 w-full text-center hover:bg-lime-400 bg-orange-400 py-2 rounded-lg">
                      <a
                        href="https://food.ndtv.com/food-drinks/bhuna-chicken-wings-recipe-make-these-tantalising-chicken-wings-with-a-desi-twist-2663475"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read more
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* box----3 */}
          <div className="bg-white">
            <div>
              <div className="mx-10 md:mx-0 lg:mx-0  mb-10 shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                <div>
                  <img
                    className="w-full rounded-md"
                    src={b3}
                    alt=""
                  />
                  <div className="px-4 py-2">
                    <h1 className="text-lg font-gray-700 font-bold">
                      9 Best Fried Chicken Recipes To Try At Home | Fried
                      Chicken Recipes
                    </h1>
                    <div className="flex space-x-2 mt-2"></div>
                    <p className="text-sm tracking-normal">
                      {`Fried Chicken Recipes: Find out the best of fried chicken
                      recipes to prepare at home, complete with key ingredients
                      and a step by step process. From stir fried chilli chicken
                      to oat crusted chicken tenders and the classic fried
                      chicken wings, we've got it all.Let's just agree already
                      that chicken meals are the way to a non-vegetarian's
                      heart. And when it is about fried chicken, can we`}
                    </p>
                    <button className="mt-4 w-full text-center hover:bg-lime-400 bg-orange-400 py-2 rounded-lg">
                      <a
                        href="https://food.ndtv.com/lists/5-best-fried-chicken-recipes-2042477"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read more
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
