import React from "react";
import { useCartSelector } from "../hooks/useSelectors";
import MyCard from "../components/MyCard";
import { remove } from "../reducers/cartReducer";
import CartTotalPrice from "../components/CartTotalPrice";

const Cart = () => {
  const { cartProducts } = useCartSelector();
  return (
    <>
      <p className="text-center font-[700] text-[35px] mb-[5%]">Cart</p>
      <div className="">
        <CartTotalPrice cartProducts={cartProducts}/>
      </div>
      <div className="max-w-[1200px] m-auto grid grid-cols-3 sm:flex sm:flex-col sm:w-[75%]">
        {cartProducts.map((elem) => (
          <MyCard
            elem={elem}
            key={elem.id}
            buttonName="Remove Item"
            buttonsClick={remove}
          />
        ))}
      </div>
    </>
  );
};

export default Cart;
