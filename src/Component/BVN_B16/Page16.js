import React from "react";
import Bai3Buoi16 from "./BT3/Bai3Buoi16.jsx";
import { LanguageProvider } from "./BT3/LanguageContext.jsx";
import Bai4Buoi16 from "./BT4/Bai4Buoi16.jsx";
import ProductProvider from "./BT4/productContext/ProductContext.jsx";
import Modal from "./BT5/Modal.jsx";
import ModalProvider from "./BT5/ModalContext.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const Page16 = () => {
  const navigate = useNavigate();

  // gửi 1  thông tin chỉ hiện duy nhất 1 lần thông qua (useLocation),
  //  nó chỉ ăn trên session (1 phiên làm việc)

  const location = useLocation();

  console.log("location", location.state);

  const onForward = () => {
    navigate(1);
  };

  const clickPage16State = () => {
    navigate("/page16", { state: { name: "Phan Hoang Su" } });
  };
  return (
    <ModalProvider>
      <div>
        <button onClick={onForward}>Click Forward</button>
        <button onClick={clickPage16State}>Buoi 16</button>
        <ProductProvider>
          <Bai4Buoi16 />
        </ProductProvider>

        {/* <Modal /> */}
      </div>
    </ModalProvider>
  );
};

export default Page16;
