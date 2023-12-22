import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { MdAddCircle } from "react-icons/md";

const Menu = () => {
  const data = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-tomato-sauce-carrot_1150-20211.jpg",
      name: "Chicken Fry",
      price: 20,
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/baked-chicken-wings-asian-style_2829-10161.jpg?w=740&t=st=1675240513~exp=1675241113~hmac=64cc4b0bf87642ebb8a679dde27e19fa3c407e0e6617bbed8dc9171241a20e35",
      name: "Chicken Wings",
      price: 15,
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/side-view-chicken-roll-grilled-chicken-lettuce-cucumber-tomato-mayo-pita_141793-4849.jpg?t=st=1675240565~exp=1675241165~hmac=e5732a348a8a9bc6d554ab41fbbd10db68195072d4e4d2a5dbabfa60d2fdc2ce",
      name: "Chicken Shawarma",
      price: 25,
    },
    {
      id: 4,
      img: "https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_761402230-600x600.jpg",
      name: "Chicken Lollypop",
      price: 10,
    },
    {
      id: 5,
      img: "https://republicofchicken.in/wp-content/uploads/2022/02/Chicken-sausages.jpg",
      name: "Chicken Burger",
      price: 35,
    },
    {
      id: 6,
      img: "https://republicofchicken.in/wp-content/uploads/2022/02/Chicken-sausages.jpg",
      name: "Chicken Sausage",
      price: 25,
    },
    {
      id: 7,
      img: "https://thebigmansworld.com/wp-content/uploads/2022/05/keto-chicken-nuggets-recipe.jpeg",
      name: "Chicken Nuggets",
      price: 20,
    },
    {
      id: 8,
      img: "https://www.spiceandlife.com/wp-content/uploads/2021/09/chicken-shish-kabob-on-platter.jpg",
      name: "Chicken Kabab",
      price: 30,
    },
  ];

  const [getImage, setImage] = useState();
  const [getClose, setClose] = useState("hidden");
  const [getName, setName] = useState();
  const [getPrice, setPrice] = useState();
  const [cartCount, setCartCount] = useState(0);

  const HandleImage = (img, name, price) => {
    setImage(img);
    setClose("block");
    setName(name);
    setPrice(price);
  };

  const HandleClose = () => {
    setClose("hidden");
  };

  const handleAddMenu = (selectedItem) => {
    console.log("Selected item:", selectedItem);

    let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    console.log("Cart items before:", cartItems);
    let itemInCart = cartItems.find((item) => item.id === selectedItem.id);

    if (itemInCart) {
      cartItems = cartItems.map((item) =>
        item.id === selectedItem.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              countPrice: item.price * (item.quantity + 1),
            }
          : item
      );
    } else {
      cartItems = [
        ...cartItems,
        {
          ...selectedItem,
          quantity: 1,
          countPrice: selectedItem.price,
        },
      ];
    }

    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCartCount(cartCount + 1); // Update the cart count
  };

  return (
    <div id="menu" className="pb-20 pt-16">
      <div className="container mx-auto  " >
      <div>
        <h2 className="font-bold text-[#E21B70] text-center text-[40px] pb-16 uppercase">
          Menu
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-5 justify-items-center gap-10">
        {data.map((item) => (
          <div className=""
            key={item.id}
            onClick={() => HandleImage(item.img, item.name, item.price)}
          >
            <div className="shadow-md rounded-xl">
              <img
                className="w-80 h-60 rounded-t-xl "
                src={item.img}
                alt={item.name}
              />
              <h2 className="text-lg pt-2 font-bold px-2">{item.name}</h2>
              <p className="text-xl  font-bold text-red-700 px-2">${item.price}</p>
              <Link to="/cart"  onClick={() => handleAddMenu(item)} className="flex justify-center gap-2 py-2 mt-2 items-center w-full rounded-b-xl bg-gray-100 hover:bg-gray-200 text-[#E21B70] border-t border-[#E21B70]">
                <button
                 
                  className="   font-semibold  "
                >
                  Add To Cart 
                 
                </button>
                <MdAddCircle className="text-2xl text-green-600"/>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div
        id="imgPopupWrap"
        className={`flex flex-col fixed top-0 z-[999] justify-center justify-items-center left-0 w-full h-full ${getClose}`}
      >
        <div onClick={HandleClose} className="bgshadow "></div>
        <div className="product-container  flex flex-col md:flex-row gap-8 border-2 border-white">
          <img
            className="w-full h-auto sm:w-[300px]  md:w-[280px]   lg:w-[400px]"
            src={getImage}
          />

          <div>
            <p className="text-white w-full self-center md:2xl xl:text-4xl font-bold text-justify mb-2  md:mb-6">
              {getName}
            </p>
          </div>
          <p className="text-white absolute bottom-0 md:bottom-4 font-semibold md:text-xl xl:text-3xl w-full self-center text-justify  mb-2">
            {getPrice} ৳
          </p>

          <span onClick={HandleClose} className="closeBtn  cursor-pointer">
            X
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Menu;
