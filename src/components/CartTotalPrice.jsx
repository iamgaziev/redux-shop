import React from "react";

const CartTotalPrice = ({ cartProducts }) => {
  const totalPrice = +cartProducts
    .reduce((acc, elem) => acc + elem.price * elem.quantity, 0)
    .toFixed(2);

  const totalPriceWithDiscount = +(
    totalPrice >= 2500
      ? totalPrice * 0.85
      : totalPrice >= 1000
      ? totalPrice * 0.95
      : totalPrice
  ).toFixed(2);

  return (
    <div className="max-w-[1200px] m-auto">
      <div class="bg-white border-[1px] border-[teal] w-[30%] rounded-[5px] px-4 my-5 pb-[5%] pt-2 sm:w-[80%] sm:m-auto">
        <p class="text-[16px] text-[grey] my-3">
          Available delivery methods and times can be selected when placing an
          order.
        </p>
        <hr />
        <div class="flex justify-between items-center mt-[5%]">
          <p class="font-[700] text-[24px]">Your cart</p>
          <span>
            {totalPrice >= 2500
              ? "Total Price(-15%):"
              : totalPrice >= 1000
              ? "Total Price(-5%):"
              : "Total Price:"}
          </span>
          <span className="font-[700]">{totalPriceWithDiscount}$</span>
        </div>
        <div class="text-center mt-[10%]">
          <button class="text-white px-[5%] py-3 font-[700] text-[18px] rounded-[5px] min-w-[20px] m-auto bg-[#10C44C] sm:w-[100%] sm:font-[600] sm:">
            Добавить оформление
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotalPrice;
