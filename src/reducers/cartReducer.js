import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "cart/getProducts",
  async function getProduct() {
    const response = await axios.get("https://fakestoreapi.com/products/");
    return response.data;
  }
)

const cartReducer = createSlice({
  name: "cart",
  initialState: {
    products: [],
    errorMessage: "",
    cartProducts: [],
    modalProduct: {},
    showModal: false,
  },

  reducers: {
    add(state, action) {
      const addedProduct = {
        ...state.products.reduce(
          (acc, elem) => (elem.id === action.payload.productId ? elem : acc),
          null
        ),
        quantity: action.payload.quantity,
      };
      state.cartProducts.push(addedProduct);
    },
    remove(state, action) {
      state.cartProducts = state.cartProducts.filter(
        (elem) => elem.id !== action.payload
      );
    },
    setModalProduct(state, action) {
      state.modalProduct = (state.products.filter(
        (elem) => elem.id == action.payload
      ))[0];
    },    
    setShowModal(state, action) {
      state.showModal = action.payload;
    },
    setProductQuantity(state, action) {
      state.cartProducts.filter((elem) =>
        elem.id === action.payload.productId
          ? action.payload.case === '+'
            ? (elem.quantity += 1)
            : (elem.quantity -= 1)
          : null
      );
      console.log(action.payload.case);
    },
    increment(state, action){
      state.cartProducts.filter((elem) =>
        elem.id === action.payload
            ? (elem.quantity += 1)
            : null
      );
    },
    decrement(state, action){
      state.cartProducts.filter((elem) =>
        elem.id === action.payload
            ? (elem.quantity -= 1)
            : null
      );
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.errorMessage = action.error.message;
    });
  },
});
export const { add, remove, setModalProduct, setShowModal, setProductQuantity, increment, decrement } = cartReducer.actions;
export default cartReducer.reducer;
