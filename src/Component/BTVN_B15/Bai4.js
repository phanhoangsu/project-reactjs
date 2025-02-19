import React, { act, useMemo, useReducer } from "react";

const PRODUCTS = [
  { id: 1, name: "Iphone 16 Pro", price: 2000 },
  { id: 2, name: "Iphone 15 Pro", price: 2500 },
  { id: 3, name: "Iphone 14 Pro", price: 3000 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      //thêm vào cart nếu chưa tồn tại
      // thêm số lượng sp nếu đã tồn tại
      let isAdded = false;
      const cart = state?.map((prd) => {
        if (prd?.id === action?.product?.id) {
          isAdded = true;
          return { ...prd, quantity: (prd?.quantity || 0) + 1 };
        }
        return prd;
      });
      return isAdded ? cart : [...state, { ...action?.product, quantity: 1 }];

    case "TANG_SL":
      return state?.map((prd) => {
        if (prd?.id === action?.id) {
          return { ...prd, quantity: (prd?.quantity || 0) + 1 };
        }
        return prd;
      });
    case "GIAM_SL":
      // giảm số lượng
      // xóa sp nêú quantity bằng 0

      const isSoldout =
        state?.find((prd) => prd?.id === action?.id)?.quantity === 1;

      if (isSoldout) {
        return state?.filter((prd) => prd?.id !== action?.id);
      }
      return state?.map((prd) => {
        if (prd?.id === action?.id) {
          return { ...prd, quantity: (prd?.quantity || 0) - 1 };
        }
        return prd;
      });

    default:
      return state;
  }
};

const Bai4 = () => {
  const [cartList, dispastch] = useReducer(reducer, []);

  const onGetToalAmount = () => {
    let total = 0;
    cartList?.forEach((prd) => {
      const sum = prd?.quantity * prd?.price;
      total += sum;
    });
    return total;
  };
  // tránh tính toán lại dùng useMemo

  const amount = useMemo(() => onGetToalAmount(), [cartList]);

  const renderProducts = () => {
    return PRODUCTS.map((prd) => {
      return (
        <tr key={prd.id}>
          <td>{prd.id}</td>
          <td>{prd.name}</td>
          <td>{prd.price}</td>
          <td>
            <button onClick={() => onAddToCart(prd)}>Add To Cart</button>
          </td>
        </tr>
      );
    });
  };

  const renderCart = () => {
    return cartList.map((prd) => {
      return (
        <tr key={prd.id}>
          <td>{prd.id}</td>
          <td>{prd.name}</td>
          <td>{prd.price}</td>
          <td>
            <div style={{ display: "flex", gap: "1px" }}>
              <button onClick={() => onDecease(prd?.id)}>-</button>
              <button>
                <h3>{prd?.quantity || 0}</h3>
              </button>
              <button onClick={() => onIncease(prd?.id)}>+</button>
            </div>
          </td>
        </tr>
      );
    });
  };

  const onAddToCart = (product) => {
    dispastch({ type: "ADD_CART", product });
  };

  const onIncease = (id) => {
    dispastch({ type: "TANG_SL", id });
  };
  const onDecease = (id) => {
    dispastch({ type: "GIAM_SL", id });
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "30px" }}>
        <table border={1}>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th></th>
          {renderProducts()}
        </table>
        <div>
          <table border={1}>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            {renderCart()}
          </table>
          <h1>{amount}$</h1>
        </div>
      </div>
    </div>
  );
};

export default Bai4;
