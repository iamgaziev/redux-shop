import React from "react";
import { Link } from "react-router-dom";
import { useCartSelector } from "../hooks/useSelectors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const MyNavbar = () => {
  const { cartProducts } = useCartSelector();

  return (
    <div class="bg-[#F5F7FA]">
      <div class="bg-[teal]">
        <div class="flex justify-between items-center py-3 max-w-[1200px] m-auto sm:w-[100%] sm:flex sm:px-4">
          <div>
            <Link to="/">
              <p class="font-[700] text-[26px] text-white sm:text-[20px]">ProductHome</p>
            </Link>
          </div>
          <div>
            <Link to="cart">
              <div className="font-[800] text-[23px] text-white">
                <ShoppingCartIcon style={{ fontSize:"35px" }}/>
                <sup className="ml-1">
                  {cartProducts.length ? cartProducts.length : null}
                </sup>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;
