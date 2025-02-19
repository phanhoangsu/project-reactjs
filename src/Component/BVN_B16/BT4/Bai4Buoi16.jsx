import React, { useContext } from "react";
import { ProductCtx } from "./productContext/ProductContext";
import { ModalCtx } from "../BT5/ModalContext";

const Bai4Buoi16 = () => {
  const { products, addProduct, removeProduct } = useContext(ProductCtx);
  const { openModal, closeModal } = useContext(ModalCtx);
  const onAddNewProduct = () => {
    const stt = products?.length + 1;
    const newProduct = {
      id: `PRD${stt}`,
      name: `product${stt}`,
      price: 5000,
      quantity: 10,
    };
    addProduct(newProduct);
  };

  const renderProduct = () => {
    return products?.map((prd) => {
      return (
        <tr key={prd?.id}>
          <td>{prd.id}</td>
          <td>{prd.name}</td>
          <td>{prd.price}</td>
          <td>{prd.quantity}</td>
          <td>
            <button onClick={() => removeProduct(prd?.id)}>Remove</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div>
        <button onClick={() => openModal("Goodbye")}>Open modal bai4</button>
        <button onClick={closeModal}>close modal bai4</button>
      </div>

      <button onClick={onAddNewProduct}>Add New Product </button>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th>ACTION</th>
        </tr>
        {renderProduct()}
      </table>
    </div>
  );
};

export default Bai4Buoi16;
