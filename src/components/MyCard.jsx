import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useCartSelector } from "../hooks/useSelectors";
import { decrement, increment } from "../reducers/cartReducer";

const MyCard = ({ handleShow, elem, buttonName, buttonsClick }) => {
  const { cartProducts } = useCartSelector();

  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    if (!cartProducts.some((elem) => elem.id === productId)) {
      dispatch(buttonsClick({ productId, quantity: 1 }));
    } else {
      dispatch(buttonsClick(productId));
    }
  };


  return (
    <div className="mb-4">
      <Card key={elem.id} className="h-100 p-[15px]" style={{ width: "18rem" }}>
        <div className="m-auto">
          <Card.Img
            style={{ width: "160px", height: "140px" }}
            src={elem.image}
            className="object-contain"
          />
        </div>
        <Card.Body>
          <Card.Title>{elem.title}</Card.Title>
          <Card.Text>{elem.price} $</Card.Text>
        </Card.Body>
        <Card.Footer className="w-[100%] text-center">
          {buttonName === "Add to Cart" && (
            <Button className="text-black" onClick={() => handleShow(elem.id)}>
              learn more
            </Button>
          )}
          <Button
            variant="primary"
            onClick={() => handleAddToCart(elem.id)}
            className="text-black font-[700]"
          >
            {buttonName}
          </Button>
          {buttonName === "Remove Item" && (
            <div className="mt-2 flex gap-2 w-[50%] m-auto">
              <button
                onClick={()=>dispatch(decrement(elem.id))}
                disabled={elem.quantity===1}
                className="bg-[teal] text-white px-3 font-[500] rounded-[5px]"
              >
                -
              </button>
              {elem.quantity}
              <button
                onClick={()=>dispatch(increment(elem.id))}
                className="bg-[teal] text-white px-3 font-[500] rounded-[5px]"
              >
                +
              </button>
            </div>
          )}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default MyCard;
