import React from "react";
import { useNavigate } from "react-router-dom";
import Bai1 from "./Bai1";

const Page15 = () => {
  // navigate có 2 kiểu dữ liệu (string và number)

  const navigate = useNavigate();

  // kiểu dữ liệu string (đến 1 cái đường dẫn nào đấy)

  const onClickHome = () => {
    navigate("/");
  };

  // replace: true  nó không lưu lại trang trước đó => mà nó back về Home luôn

  const onClickPage16 = () => {
    navigate("/page16", { replace: true });
  };

  // kiểu dữ liệu number (back , forword , Reset)

  const onBack = () => {
    navigate(-1);
  };
  const onReset = () => {
    navigate(0);
  };

  return (
    <div>
      <div>
        {/* kiểu dữ liệu number */}

        <button onClick={onBack}>Click Back</button>
        <button onClick={onReset}>Click Reset</button>
      </div>

      {/* kiểu dữ liệu string */}

      <button onClick={onClickHome}>Click Home</button>
      <button onClick={onClickPage16}>Click Page16</button>
      <Bai1 />
      {/* <Bai2 /> */}
      {/* <Bai3 /> */}
      {/* <Bai4 /> */}
      {/* <DemoUseContext /> */}
    </div>
  );
};

export default Page15;
