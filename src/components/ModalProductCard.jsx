import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useCartSelector } from "../hooks/useSelectors";

const ModalProductCard = ({ handleClose, showModal }) => {
  const {
    modalProduct: { title, image, price, description },
  } = useCartSelector();

  return (
    <div className="">
      <Modal show={showModal} onHide={handleClose} className="sm:w-[90%] sm:ml-5">
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-[90%] m-auto sm:text-[18px] sm:m-auto">
            {title}
          </Modal.Title>
        </Modal.Header>
        <img src={image} className="w-[550px] h-[300px] object-contain sm:w-[150px] sm:m-auto" />
        <p className="font-[800] text-[25px] text-center mt-3 sm:m-auto sm:text-[20px]">Description:</p>
        <Modal.Body className="font-[600] w-[80%] m-auto text-center">
          {description}
        </Modal.Body>
        <Modal.Footer className="m-auto font-[700] text-[25px]">
          Price: {price} $
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalProductCard;
