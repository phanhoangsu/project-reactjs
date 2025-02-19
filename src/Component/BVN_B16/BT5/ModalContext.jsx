import React, { createContext, useState } from "react";
import Modal from "./Modal";

export const ModalCtx = createContext();

const ModalProvider = ({ children }) => {
  const [isOpen, setOpen] = useState("");

  // khi click setOpen sang true
  const openModal = (message) => {
    setOpen(message);
  };

  //khi click setOpen sang false
  const closeModal = () => {
    setOpen("");
  };

  return (
    <ModalCtx.Provider value={{ openModal, closeModal }}>
      {/* nếu isOpen thì hiển thị modal , không isOpen thì không hiên thị modal */}
      {isOpen && <Modal message={isOpen} />}
      {children}
    </ModalCtx.Provider>
  );
};

export default ModalProvider;
