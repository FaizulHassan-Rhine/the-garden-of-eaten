import React, { useEffect, useState } from "react";
// import "./Cart.css";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [flag, setFlag] = useState(false);

  if (cartItems === null) {
    sessionStorage.setItem("cartItems", JSON.stringify([]));
  }
  // plus button
  const plus = (item_id) => {
    const itemIndex = cartItems.findIndex((item) => item.id === item_id);
    const updatedCartItems = [...cartItems];
    updatedCartItems[itemIndex].quantity++;
    updatedCartItems[itemIndex].countPrice =
      updatedCartItems[itemIndex].price * updatedCartItems[itemIndex].quantity;
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
    setFlag(!flag);
  };

  const minus = (item_id) => {
    const itemIndex = cartItems.findIndex((item) => item.id === item_id);
    const updatedCartItems = [...cartItems];
    updatedCartItems[itemIndex].quantity--;
    if (updatedCartItems[itemIndex].quantity === 0) {
      updatedCartItems[itemIndex].quantity = 1;
    }
    updatedCartItems[itemIndex].countPrice =
      updatedCartItems[itemIndex].price * updatedCartItems[itemIndex].quantity;
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
    setFlag(!flag);
  };

  useEffect(() => {
    const getItems = JSON.parse(sessionStorage.getItem("cartItems"));
    if (getItems) {
      setCartItems(getItems);
      const getTotal = getItems.reduce((acc, item) => acc + item.countPrice, 0);
      setTotal(getTotal);
    }
  }, [flag]);

  const handleRemove = (id) => {
    const arr = cartItems.filter((item) => item.id !== id);
    const newTotal =
      total - (cartItems.find((item) => item.id === id).countPrice || 0);
    sessionStorage.setItem("cartItems", JSON.stringify(arr));
    setCartItems(arr);
    setTotal(newTotal);
  };

  return (
    <div className="container mx-auto">
      <hr />
      {/* if cartItems is null */}
      {cartItems.length === 0 ? (
        <h1 className="flex justify-center items-center h-[80vh] text-5xl font-extrabold text-[#E52491]">Cart is empty</h1>
      ) : (
        <div>
          <div className="flex justify-center items-center text-[#E52491] font-bold text-xl pt-5 gap-5">
         
            <h2 className="w-60 text-center ">Item</h2>
         
            <h2 className="w-60 text-center">Name</h2>
            <h2 className="w-60 text-center">Quantity</h2>
            <h2   className="w-60 text-center">Price</h2>        
            <h2   className="w-60 text-center">Remove</h2>        
          </div>
          {cartItems.map((item, key) => (
            <div key={key} className=" flex justify-center items-center mb-5 gap-5 mt-5 ">
           <div className="">
           <div className="w-60 flex justify-center">
            <img
              className="w-40 h-32"
                src={item.img}
                alt=""
               
              />
            </div>
           </div>
              <div className="w-60 text-center">
              <h2>{item.name}</h2>
              </div>
             <div className="w-60 flex justify-center">
             <div className="h-6 w-2 flex justify-center items-center gap-5">
                <span onClick={() => minus(item.id)} className="minus bg-red-600 px-2 text-white cursor-pointer">
                  -
                </span>
                <span>{item.quantity}</span>

                <span onClick={() => plus(item.id)} className="plus qty  bg-green-500 px-2 text-white cursor-pointer">
                  +
                </span>
              </div>
             </div>
              <div className="w-60 text-center">
              <h2 className="pri">
                {item.countPrice > 0 ? item.countPrice : item.price}
              </h2>
              </div>
              <hr />
              <div className="w-60 flex justify-center">
              <button
                onClick={() => handleRemove(item.id)}
                className="  text-red-600 cursor-pointer text-[30px]"
              >
               <MdDeleteForever />
              </button>
              </div>
            </div>
          ))}
          <hr />

          <div className="flex justify-end items-center pr-5 mt-2">
            <button className="mr-8 bg-[#E52491] text-lg rounded-md p-2 px-8 border border-[#E52491] text-white hover:bg-gray-200 hover:text-[#E52491]">
              Payment
            </button>
            <h2 className="border-b-[#E52491] border-b-2 py-2 text-lg">Total: {total}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;