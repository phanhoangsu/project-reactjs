import React, { createContext, useReducer } from "react";
import { INIT_DATA } from "./const";
import { reducer } from "./reducer";

export const ProductCtx = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_DATA);

  const addProduct = (newProduct) => {
    //them san pham

    dispatch({ type: "ADD", newProduct });
  };
  const removeProduct = (id) => {
    // xoa san pham
    dispatch({ type: "REMOVE", id });
  };

  return (
    <ProductCtx.Provider value={{ products: state, addProduct, removeProduct }}>
      {children}
    </ProductCtx.Provider>
  );
};

export default ProductProvider;

// Tính năng bài này chỉ add với remove
