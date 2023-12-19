import React, { useEffect, useState } from "react";
// import "./Cart.css";

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
        <h1 className="cart__empty">Cart is empty</h1>
      ) : (
        <h2>
          {cartItems.map((item, key) => (
            <div key={key} className=" flex justify-center items-center mb-5 px-4 mt-5 gap-20">
              <img
                style={{
                  width: 100,
                  height: 100,
                  marginRight: "20px",
                  borderRadius: "20px",
                }}
                src={item.img}
                alt=""
               
              />
              <h2>{item.name}</h2>
              <div className="h-6 w-2 flex justify-center items-center gap-5">
                <span onClick={() => minus(item.id)} className="minus bg-red-600 px-2 text-white cursor-pointer">
                  -
                </span>
                <span>{item.quantity}</span>

                <span onClick={() => plus(item.id)} className="plus qty  bg-green-500 px-2 text-white cursor-pointer">
                  +
                </span>
              </div>
              <h2 className="pri">
                {item.countPrice > 0 ? item.countPrice : item.price}
              </h2>
              <hr />
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-600 rounded px-4 text-white "
              >
                remove
              </button>
            </div>
          ))}
          <hr />

          <div className="flex justify-end items-center pr-5">
            <button className="mr-8 bg-orange-400 rounded-md p-2 text-white hover:bg-lime-400 ">
              Payment
            </button>
            <h2>Total: {total}</h2>
          </div>
        </h2>
      )}
    </div>
  );
};

export default Cart;