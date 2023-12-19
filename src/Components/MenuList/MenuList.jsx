import CartComponent from "../Cart/Cart";

import "./menulist.css";

import p1 from "../../images/FryFrenzy/1.Coleslaw.jpg";
import p2 from "../../images/FryFrenzy/2.Dips.jpg";
import p3 from "../../images/FryFrenzy/3.Green Carnival Rice Bowl.jpg";
import p4 from "../../images/FryFrenzy/4.Hot Fries.jpg";
import p5 from "../../images/FryFrenzy/5.Hot Wedges.jpg";
import p6 from "../../images/FryFrenzy/6.Kashmiri Spice Burger.jpg";
import p7 from "../../images/FryFrenzy/7.Kashmiri Spice Fry.jpg";
import p8 from "../../images/FryFrenzy/8.Kashmiri Spice Lollipop.jpg";
import p9 from "../../images/FryFrenzy/9.Kashmiri Spice Strips.jpg";
import p10 from "../../images/FryFrenzy/10.Kashmiri Spice Wings.jpg";
import p11 from "../../images/FryFrenzy/11.OG Fries.jpg";
import p12 from "../../images/FryFrenzy/12.OG Wedges.jpg";
import p13 from "../../images/FryFrenzy/13.Parmaroma Fry.jpg";
import p14 from "../../images/FryFrenzy/14.Parmaroma Strips.jpg";
import p15 from "../../images/FryFrenzy/15.Scarlet Rice Bowl.jpg";
import p16 from "../../images/FryFrenzy/16.Signature Burger.jpg";
import p17 from "../../images/FryFrenzy/17.Signature Fry.jpg";
import p18 from "../../images/FryFrenzy/18.Signature Lollipop.jpg";
import p19 from "../../images/FryFrenzy/19.Signature Strips.jpg";
import p20 from "../../images/FryFrenzy/20.Signature Wings.jpg";
import p21 from "../../images/FryFrenzy/21.Tangy Tingle Wings.jpg";
import p22 from "../../images/FryFrenzy/22.TangyTingle Burger.jpg";
import p23 from "../../images/FryFrenzy/23.TangyTingle Fry.jpg";
import p24 from "../../images/FryFrenzy/24.TangyTingle Lollipop.jpg";
import p25 from "../../images/FryFrenzy/25.TangyTingle Strips.jpg";
import { useState } from "react";

const MenuList = () => {
  const [getImage, setImage] = useState();
  const [getClose, setClose] = useState("hidden");
  const [getDetails, setDetails] = useState();
  const [getDetails2, setDetails2] = useState();
  const [getDetails3, setDetails3] = useState();
  const [getItemName, setItemName] = useState();
  const [getItemPrice, setItemPrice] = useState();

  const HandleImage = (
    img,
    details,
    itemName,
    itemPrice,
    details2,
    details3
  ) => {
    setImage(img);
    setClose("block");
    setDetails(details);
    setDetails2(details2);
    setDetails3(details3);
    setItemName(itemName);
    setItemPrice(itemPrice);
  };

  const HandleClose = () => {
    setClose("hidden");
  };

  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const data = [
    {
      id: 1,
      image_url: p1,
      name: "Coleslaw",
      price: 85,
      des: "Delicately shredded cabbage, vibrant carrots, and a symphony of fresh herbs are artfully combined to create a perfect harmony of flavors and textures. Tossed in a creamy dressing with a hint of tanginess, this classic side dish is the perfect accompaniment to any meal.",
    },

    {
      id: 2,
      image_url: p2,
      name: "Dips",
      price: 45,
      des: "Spicy Mayo - Welcome to the fiery delight of our Spicy Mayo Dip - a harmonious fusion of creamy richness and spicy vigor that will ignite your senses and leave you yearning for more.",
      des2: "Garlic Mayo - Introducing our luscious Garlic Mayo Dip, a delightfully smooth and creamy concoction crafted to tantalize your taste buds. this exquisite dip is the perfect marriage of premium mayonnaise and aromatic garlic.",
      des3: "Honey Mustard - Presenting our sumptuous Honey Mustard Dip - a velvety, golden treat that's set to elevate your snacking experience. This culinary delight is a carefully crafted blend of sweet honey, tangy mustard, and a sprinkle of hand-selected spices, ",
    },

    {
      id: 3,
      image_url: p3,
      name: "Green Carnival Rice Bowl",
      price: 279,
      des: "Savor the zesty goodness of our 'Green Carnival Rice Bowl.' Each bite is a flavorful party, highlighting the crunch of fresh green bell peppers, the aromatic hint of hand-picked herbs, and the magic of oriental spices. The rice, impeccably fluffy, marries these flavors beautifully to offer a vibrant, verdant feast topped with succulent and juicy Signature Strips. Step into a gastronomic celebration with our Green Carnival Rice Bowl and let your senses revel in a riot of green goodness.",
    },

    {
      id: 4,
      image_url: p4,
      name: "Hot Fries",
      price: 145,
      des: "A perfect balance of comforting familiarity and adventurous zest. This exciting twist on the classic dish is an invitation to ignite your taste buds and experience a delightful, fiery ride.Each fry starts as a select, high-quality potato, cut to perfect uniformity to ensure every piece cooks evenly. They are then gently bathed in a blend of high-grade oil and our secret mix of fiery spices before being expertly fried to a delectable, crispy perfection.",
    },

    {
      id: 5,
      image_url: p5,
      name: "Hot Wedges",
      price: 155,
      des: " Hand-cut from superior, fresh potatoes, these bold wedges are an embodiment of rustic elegance and fiery zest.Roasted to a perfect golden-brown, the wedges boast a crackling exterior, spiced with our bespoke blend of fiery seasonings, yielding an enticing, audacious kick. The first bite unveils a crisp, textured crust that opens into a tender, velvety interior, the sweetness of the potato artfully tempering the spice.",
    },

    {
      id: 6,
      image_url: p6,
      name: "Kashmiri Spice Burger",
      price: 339,
      des: "Immerse yourself in the aromatic allure of Kashmiri spices that have been delicately infused into our succulent chicken patty, creating a harmonious marriage of warmth and zest. Nestled between a soft, toasted Wheat Bun, this culinary masterpiece is adorned with a colorful medley of fresh vegetables that takes your taste buds on an unforgettable adventure",
    },

    {
      id: 7,
      image_url: p7,
      name: "Kashmiri Spice Fry",
      price: 149,
      des: "Savor the irresistible flavors of our Kashmiri Spice Chicken Fry. Tender chicken marinated in aromatic spices, perfectly crispy on the outside and juicy on the inside. Experience the richness of Kashmiri cuisine in every delectable bite. A culinary delight that will leave you wanting more.",
    },

    {
      id: 8,
      image_url: p8,
      name: "Kashmiri Spice Lollipop",
      price: 239,
      des: "Experience the fiery delight of our 'Kashmiri Spice Lollipops'. Each lollipop is marinated in a unique blend of exotic Kashmiri spices, resulting in a sizzling symphony of flavors. The exterior offers a tantalizing crunch, while the interior bursts with juicy succulence.Unleash your spice craving with our tempting Kashmiri Spice Lollipops and set your palate on a thrilling journey of culinary wonder.",
    },

    {
      id: 9,
      image_url: p9,
      name: "Kashmiri Spice Strips",
      price: 309,
      des: "Indulge in the exotic allure of our Kashmiri Spice Chicken Strips. Succulent pieces of chicken are generously coated in a fragrant blend of traditional Kashmiri spices, delivering a harmonious balance of warmth and flavor. Each strip boasts a delightful combination of tender meat and a crispy, golden-brown exterior. With every bite, you'll experience the rich, aromatic notes that make Kashmiri cuisine truly special.",
    },

    {
      id: 10,
      image_url: p10,
      name: "Kashmiri Spice Wings",
      price: 239,
      des: "Prepare to tantalize your taste buds with our Kashmiri Spice Chicken Wings. These succulent wings are marinated in a captivating blend of traditional Kashmiri spices, creating a flavor profile that is both bold and enchanting. Each bite delivers a delightful combination of tender meat, a crispy exterior, and the irresistible warmth of Kashmiri spices.",
    },

    {
      id: 11,
      image_url: p11,
      name: "OG Fries",
      price: 129,
      des: " Step into a world of golden delight with our irresistible French Fries, a timeless classic that captures the heart of comfort food. Each fry is a masterpiece of crisp, golden goodness on the outside and fluffy, cloud-like tenderness within.These scrumptious sticks of joy begin their journey as the finest, freshest potatoes selected for their robust flavor and perfect texture. Expertly hand-cut into uniform strips, they're then bathed in a blend of select oils, ensuring each fry cooks to crispy perfection.",
    },

    {
      id: 12,
      image_url: p12,
      name: "OG Wedges",
      price: 139,
      des: "Embark on a gastronomic journey with our exquisite Potato Wedges, expertly crafted from premium, hand-selected potatoes. These chunky gems are roasted to perfection, yielding a resplendent, golden-brown exterior, replete with a tantalizing crunch. As you bite into each wedge, savor the contrast of the crisp exterior against the luxuriously fluffy, cloud-like interior.",
    },

    {
      id: 13,
      image_url: p13,
      name: "Parmaroma Fry",
      price: 149,
      des: "Experience a burst of savory indulgence with our Parmaroma Chicken Fry. Sink your teeth into tender, juicy chicken coated in a golden, crispy layer infused with the rich and nutty notes of Parmesan cheese. Each delectable bite is a harmony of flavors, combining the succulent chicken with the irresistible umami essence of Parmesan.",
    },

    {
      id: 14,
      image_url: p14,
      name: "Parmaroma Strips",
      price: 309,
      des: "Indulge in the irresistible delight of our Parmesan Cheese flavored Chicken Strips. Succulent strips of chicken are coated in a delectable blend of golden breadcrumbs and Parmesan cheese, creating a crispy outer layer that gives way to tender, juicy meat inside. Each bite is a symphony of flavors, as the savory notes of Parmesan cheese perfectly complement the succulent chicken.",
    },

    {
      id: 15,
      image_url: p15,
      name: "Scarlet Rice Bowl",
      price: 299,
      des: "Indulge in the fiery indulgence of our 'Scarlet Rice Bowl.' Every morsel is an eruption of spice, featuring the sweet crunch of red bell peppers, aromatic herbs, and a daring dash of oriental spices. The rice, delicately steamed, binds these explosive flavors into a captivating culinary experience topped with sweet and zesty Tangy Tingle Strips.Embark on a bold gastronomic adventure with our Scarlet Rice Bowl, where every bite is a vibrant dance of red-hot delight.",
    },

    {
      id: 16,
      image_url: p16,
      name: "Signature Burger",
      price: 299,
      des: "A true classic with a refreshing twist. Perfectly cooked patty that's irresistibly crispy on the outside, while tender and juicy on the inside. Served on a lightly toasted Wheat Bun, this burger is adorned with an array of fresh, vibrant vegetables soaked in mayo. Simple yet satisfying, the Signature Burger is a timeless delight that never fails to impress.",
    },

    {
      id: 17,
      image_url: p17,
      name: "Signature Fry",
      price: 139,
      des: "Prepare for a culinary masterpiece with our Signature Chicken Fry. Immerse yourself in a symphony of flavors as you bite into succulent chicken coated in our secret blend of herbs and spices. Each piece is perfectly fried to golden perfection, resulting in a crispy exterior that gives way to tender, juicy meat inside. With every bite, you'll experience a harmonious combination of textures and an explosion of savory goodness that will leave you craving for more.",
    },

    {
      id: 18,
      image_url: p18,
      name: "Signature Lollipop",
      price: 199,
      des: "Embark on a flavor adventure with our Signature Chicken Lollipops. These delectable bites feature tender chicken drumettes, expertly seasoned with our secret blend of herbs and spices. Each lollipop is meticulously crafted to perfection, with the meat pulled down to form a convenient handle for easy enjoyment. As you take a bite, you'll be greeted by succulent, juicy chicken infused with an explosion of savory flavors.",
    },

    {
      id: 19,
      image_url: p19,
      name: "Signature Strips",
      price: 289,
      des: "Crafted with the utmost care and culinary expertise, these tender strips of chicken are seasoned to perfection with our unique blend of herbs and spices. Each bite offers a succulent, juicy sensation encased in a crispy, golden-brown coating. Versatile and satisfying, our Signature Chicken Strips make for an irresistible snack or a delectable addition to any meal. Dip them in your favorite sauces or savor them as is—these delectable strips are sure to tantalize your taste buds and leave you craving more.",
    },

    {
      id: 20,
      image_url: p20,
      name: "Signature Wings",
      price: 199,
      des: "Prepare to be captivated by our Signature Chicken Wings. These delectable wings are a true testament to culinary perfection. Each plump and juicy wing is meticulously seasoned with our secret blend of herbs and spices, creating a symphony of flavors that will leave you craving for more. Served with your choice of dipping sauces, these wings are perfect for sharing with friends or enjoying as a satisfying meal.",
    },

    {
      id: 21,
      image_url: p21,
      name: "Tangy Tingle Wings",
      price: 239,
      des: "Succumb to the irresistible allure of our 'Tangy Tingle Wings.' Each wing is a masterpiece, perfectly glazed in a sweet and tangy sauce that dances on your tongue, promising a flavor carnival.The delightful crispiness gives way to juicy tenderness, while the explosion of sweet heat makes every bite an unforgettable adventure. Come, let your taste buds take flight with our tantalizing Tangy Tingle Wings!",
    },

    {
      id: 22,
      image_url: p22,
      name: "TangyTingle Burger",
      price: 339,
      des: "Indulge in the perfect balance of heat and sweetness as you bite into our succulent TangyTingle Chicken patty, infused with a mouthwatering blend of spices that will awaken your taste buds. Tucked inside a toasted Wheat Bun, this culinary marvel is crowned with a vibrant array of fresh vegetables. Each bite is a delightful dance of flavors, where the succulent chicken, fresh vegetables, and the tantalizing sauce come together in perfect harmony",
    },

    {
      id: 23,
      image_url: p23,
      name: "TangyTingle Fry",
      price: 149,
      des: "Indulge in the perfect combination of sweet and spicy with our TangyTingle Chicken Fries. These delectable strips of tender chicken are coated in a tantalizing blend of flavors that will awaken your taste buds. With each crispy bite, you'll experience a delightful balance of sweetness and heat, creating a flavor sensation that is both satisfying and irresistible.",
    },

    {
      id: 24,
      image_url: p24,
      name: "TangyTingle Lollipop",
      price: 239,
      des: "Indulge in a tantalizing blend of sweetness and spice with our TangyTingle Chicken Lollipops. These succulent drumettes are expertly seasoned with a mouthwatering combination of sweet and spicy flavors that will ignite your taste buds. With each juicy bite, you'll be greeted by a delightful balance of sticky-sweet glaze and a subtle heat that adds just the right amount of kick.",
    },
    {
      id: 25,
      image_url: p25,
      name: "TangyTingle Strips",
      price: 309,
      des: "Experience the perfect harmony of flavors with our Sweet and Spicy Chicken Strips. These succulent strips of tender chicken are coated in a delectable blend of sweet and spicy seasonings, creating a taste sensation that will awaken your palate. Each bite is a tantalizing dance of flavors, as the sweet notes tantalize your taste buds before a subtle kick of spice emerges, leaving a satisfying heat. The crispy exterior gives way to juicy, flavorful meat, making these chicken strips an irresistible delight.",
    },
  ];

  return (
    <div id="menu" className="container lg:pt-5 mx-auto py-24">
      <h2 className="text-center font-bold text-3xl my-16 text-orange-400">
        {" "}
        Our Best Seller
      </h2>
      <div
        className={`grid md:grid md:grid-cols-2 lg:grid-cols-4 mx-5 mb-12 justify-items-center gap-y-12 md:gap-y-10 `}
      >
        {data.map((data, index) => (
          // eslint-disable-next-line react/jsx-key
          <div
            onClick={() =>
              HandleImage(
                data.image_url,
                data.des,
                data.name,
                data.price,
                data.des2,
                data.des3
              )
            }
          >
            {console.log(data)}
            <div className="card card-compact w-64 md:w-56 lg:w-52 xl:w-64 hover:shadow-xl transform transition duration-500 hover:scale-105 bg-base-100 shadow-xl cursor-pointer">
              <figure>
                <img
                  className="h-52 w-60 p-1   rounded-lg"
                  src={data.image_url}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className=" text-base font-bold">{data.name}</h2>
                <p className="text-lg font-bold text-red-700">
                  Starts From ৳ {data.price}
                </p>
                <div className="card-actions justify-center">
                <Lin to="/cart">
              <button
                onClick={() => handleAddMenu(menu)}
                className="bg-orange-400 hover:bg-lime-400  text-white font-semibold p-2 rounded-btn"
              >
                {" "}
                Add To Cart
              </button>
            </Link>
                </div>
              </div>
            </div>

            
          </div>
        ))}
      </div>

      <div
        id="imgPopupWrap"
        className={
          "flex flex-col fixed top-0 z-[999] justify-center justify-items-center  left-0 w-full h-full  " +
          getClose
        }
      >
        <div onClick={HandleClose} className="bgshadow"></div>
        <div className="product-container  flex flex-col md:flex-row gap-8 border-2 border-white">
          <img
            className="w-full h-auto sm:w-[300px]  md:w-[280px]   lg:w-[400px]"
            src={getImage}
          />

          <div>
            <p className="text-white w-full self-center md:2xl xl:text-4xl font-bold text-justify mb-2  md:mb-6">
              {getItemName}
            </p>
            <p className="text-white w-full self-center text-justify text-xs md:text-sm  xl:text-base  mb-4">
              {getDetails}
            </p>
            <p className="text-white w-full self-center text-justify text-xs md:text-sm  xl:text-base  mb-4">
              {getDetails2}
            </p>
            <p className="text-white w-full self-center text-justify text-xs md:text-sm  xl:text-base  mb-4">
              {getDetails3}
            </p>
            <p className="text-white absolute bottom-0 md:bottom-4 font-semibold md:text-xl xl:text-3xl w-full self-center text-justify  mb-2">
              {getItemPrice} ৳
            </p>
          </div>
        </div>
        <span onClick={HandleClose} className="closeBtn  cursor-pointer">
          X
        </span>
      </div>
      <CartComponent cartItems={cartItems} />
    </div>
  );
};

export default MenuList;
