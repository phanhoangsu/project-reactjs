import React from "react";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Page15 from "./Component/BTVN_B15/Page15";
import Page16 from "./Component/BVN_B16/Page16.js";

const App = () => {
  const Product = () => {
    const navigate = useNavigate();

    return (
      <div>
        <button onClick={() => navigate("/product/tab1")}>Tab1</button>
        <button onClick={() => navigate("/product/tab2")}>Tab2</button>
        <button onClick={() => navigate("/product/tab3")}>Tab3</button>

        <Outlet />
        {/* <h1> Product</h1> */}
      </div>
    );
  };

  const Detail = () => {
    return (
      <div>
        <h2>Detail Product</h2>
      </div>
    );
  };

  // console.log("React", React);
  return (
    <div className="App">
      {/* thích hợp để menu header */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Page15">Page15</Link>
        </li>
        <li>
          <Link to="/page16">Page16</Link>
        </li>
      </ul>

      <Routes>
        {/* path là đường dẫn tới trang web (bộ định tuyến) (lưu ýs chỉ dùng 1/ thôi khồng dùng được 2// )
        path "*" vào những đường dẫn không tồn tại 
        element là hiển thị Compunent tương ứng 
         */}

        <Route
          path="/"
          element={
            <h1 style={{ backgroundColor: "red", color: "#fff" }}>Trang chủ</h1>
          }
        />
        <Route path="/page16" element={<Page16 />} />
        <Route path="/page15" element={<Page15 />} />

        {/* Route cha */}
        <Route path="/product" element={<Product />}>
          {/* Route con */}
          <Route path="detail" element={<Detail />} />
          <Route path="tab1" element={<h1>Tab 1</h1>} />
          <Route path="tab2" element={<h1>Tab 2</h1>} />
          <Route path="tab3" element={<h1>Tab 3</h1>} />
        </Route>

        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </div>
  );
};

export default App;
