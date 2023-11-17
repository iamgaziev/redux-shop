import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  add,
  getProducts,
  setModalProduct,
  setShowModal,
} from "../reducers/cartReducer";
import { useCartSelector } from "../hooks/useSelectors";
import ModalProductCard from "../components/ModalProductCard";
import MyCard from "../components/MyCard";
import SelectProduct from "../components/SelectProduct";
import Categories from "../components/Categories";

const ProductHome = () => {
  const dispatch = useDispatch();

  const { showModal, modalProduct, products } = useCartSelector();

  const handleClose = () => dispatch(setShowModal(false));
  const handleShow = (id) => {
    dispatch(setShowModal(true));
    dispatch(setModalProduct(id));
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState([]);
  const [price, setPrice] = React.useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = React.useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  function getSearch() {
    const newArr = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearch(searchValue === "" ? products : newArr);
  }
  useEffect(() => {
    getSearch();
  }, [searchValue, products]);

  function setFilteredPrice(products, price) {
    if (!price) return products;
    return products.filter((elem) => elem.price <= price);
  }
  useEffect(() => {
    setFilteredProducts(setFilteredPrice(search, price));
  }, [search, price]);

  function setProductsByCategory(products, categories) {
    if (!categories.length) return products;
    return categories
      .map((categ) => products.filter((elem) => elem.category === categ))
      .flat();
  }

  useEffect(() => {
    setFilteredCategories(setProductsByCategory(filteredProducts, categories));
  }, [filteredProducts, categories]);

  return (
    <div className="max-w-[1200px] m-auto">
      <p className="text-center font-[700] text-[35px] mb-[5%]">Products</p>
      <div className="w-[50%] m-auto sm:w-[80%]">
        <input
          type="text"
          className="border-[1px] py-2 placeholder:pl-2 pl-2 border-black w-[100%] sm:w-[100%] sm:m-auto "
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search..."
        />
      </div>
      <div className="flex items-center sm:ml-5">
        <p className="font-[700] text-[20px] sm:text-[16px]">
          Filter by Price :
        </p>
        <SelectProduct price={price} setPrice={setPrice} />
      </div>
      <div className="flex items-center sm:px-1">
        <p className="font-[700] text-[20] sm:text-[15px]">
          Filter by Category :
        </p>
        <Categories categories={categories} setCategories={setCategories} />
      </div>
      <ModalProductCard
        showModal={showModal}
        handleClose={handleClose}
        modalProduct={modalProduct}
      />
      <div className="grid grid-cols-3 max-w-[1200px] m-auto mt-5 sm:flex sm:flex-col sm:w-[75%] sm:m-auto sm:text-center">
        {filteredCategories.map((elem) => (
          <MyCard
            key={elem.id}
            handleShow={handleShow}
            elem={elem}
            buttonsClick={add}
            buttonName="Add to Cart"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductHome;
