import logo from "./logo.svg";
import "./App.css";

import Content from "./Content";
import { useState, useCallback, useMemo, useRef } from "react";

function App() {
  const inputRef = useRef();
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const handleSummary = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");
    inputRef.current.focus();
  };
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("tính toán lại");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);
  return (
    <div style={{ margin: 20 }}>
      <input
        placeholder="Tên sản phẩm"
        value={name}
        ref={inputRef}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        placeholder="Giá sản phẩm"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSummary}>ADD</button>
      <div>
        <h2>{`Tổng: ${total}`}</h2>
      </div>
      <div>
        <ul>
          {products.map((prod, index) => (
            <li key={index}>
              {prod.name}-{prod.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
