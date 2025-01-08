import "./App.css";
import BlogItem from "./Buoi-3/BlogItem.js";
import BT from "./Buoi-3/BT.js";
import CardItem from "./Buoi-3/CardItem.js";
import BTVN from "./Buoi-4/BTVN.js";
import DemoChildren from "./Buoi-4/DemoChildren.js";
import DemoFunction from "./Buoi-4/DemoFunction.js";
import Product from "./Buoi-4/Product.js";
import Avatar from "./Component/Avatar.js";
import Cha from "./Component/ComponentCha.js";
import Header2 from "./Header.js";

const URL1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XYzApoIIO5VwySCjzCl4pfiw0CKthc4Ceg&s";
const URL2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDPybJiXqz0E5ECyMgEFuGtWN9ZpswUyZEMg&s";

const URL3 =
  "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/Clear_Case_with_Magsafe_e255c5f04a.png";
const URL4 =
  "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/iphone_16_pro_max_bda3030b4b.png";
const URL5 =
  "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2021_10_20_637703173012881570_macbook-pro-14-2021-bac-dd.jpg";

const TEXT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

const blog1 = {
  title: "An ninh mang",
  discription: TEXT,
};
const blog2 = {
  title: "Chinh tri",
  discription: TEXT,
};
const blog3 = {
  title: "Phap luat",
  discription: TEXT,
};

const URL =
  "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/macbook_pro_14_m4_space_black_1_8891ba3512.png";

const products = [
  {
    img: URL,
    title: "MacBook Pro 13",
    description: "MACONE là đại lý uỷ quyền Apple. ",
    price: "40,000,000 VND",
  },
  {
    img: URL,
    title: "MacBook Pro 14",
    description: "MACONE là đại lý uỷ quyền Apple.",
    price: "40,000,000 VND",
  },

  {
    img: URL,
    title: "MacBook Pro 15",
    description: "MACONE là đại lý uỷ quyền Apple. ",
    price: "40,000,000 VND",
  },
];

function App() {
  const log = () => {
    alert("Hello Phan Hoang Su");
  };

  const renderProducts = () => products.map((item) => <Product {...item} />);

  // console.log("renderProducts", renderProducts());

  return (
    <div
      // style={{
      //   // padding: "30px",
      //   display: "flex ",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   backgroundColor: "#faebd6",
      //   // border: "5px solid green",
      //   borderRadius: "40px",
      // }}
      className="App"
    >
      <BTVN />

      {/* <div style={{ display: "flex", gap: "10px" }}>{renderProducts()} </div> */}
      {/* 
      <DemoChildren>
        <h1>Demo phan hoang su</h1>
      </DemoChildren> */}
      {/* <DemoFunction>{() => <h1> hello word function</h1>}</DemoFunction> */}

      {/* <BT
        link={URL3}
        tenSp="Iphone 16 Pro max"
        vocher="giam gia 10% toi da 1.000.000 cho don hang tu 2.000.000 vnd"
        gia="22.0000"
      />
      <BT
        link={URL4}
        tenSp="Iphone 16 Pro "
        vocher="giam gia 10% toi da 1.000.000 cho don hang tu 6.000.000 vnd"
        gia="22.0000"
      />
      <BT
        link={URL5}
        tenSp="Mackook Pro "
        vocher="giam gia 10% toi da 1.000.000 cho don hang tu 7.000.000 vnd"
        gia="22.0000"
      /> */}

      {/* <BlogItem blog={blog1} />
      <BlogItem blog={blog2} />
      <BlogItem blog={blog3} /> */}

      {/* <ul>
        <CardItem title="UI/UX desig" discription={TEXT} icon="♔" />
        <CardItem title="Web Developmnet" discription={TEXT} icon="☀" />
        <CardItem title="Branding" discription={TEXT} icon="☂" />
        <CardItem title="Photography" discription={TEXT} icon="☼" />
        <CardItem title="Apps Development" discription={TEXT} icon="✈" />
      </ul> */}

      {/* <Avatar link={URL1} alt="Anh So 1" />
      <Avatar link={URL2} alt="Anh So 2" />
      <Header2 /> 
      <Cha /> */}

      {/* <button onClick={log()}>Click me</button>  thực thi trước khi ấn click me */}
      {/* <button onClick={log}>Click me</button>  cách 1 khai báo thường  */}
      {/* <button onMouseOver={log}>Click me 3</button> hover
      <button onClick={() => log()}>Click me</button> cách 2 khai báo function */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
                  <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <h1> Hello Phan Hoang Su</h1> */}
    </div>
  );
}

export default App;
