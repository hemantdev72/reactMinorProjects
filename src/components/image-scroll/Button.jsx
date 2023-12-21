import React, { useEffect, useState } from "react";
import "./style.css";

function Button() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchImage() {
    try {
      let response = await fetch(
        `https://dummyjson.com/products?limit=50&skip=${
          count === 0 ? 0 : count * 50
        }`
      );
      let data = await response.json();
      let pro = data.products;
      setProducts((prev) => [...prev, ...pro]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImage();
  }, [count]);

  console.log(products); // Move this line outside the fetchImage function

  return (
    <div className="container">
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : products.length > 0 ? (
          products.map((item, index) => (
            <div className="pro" key={index}>
              <img alt={item.title} src={item.thumbnail} key={item.id} />
              <p>{item.title}</p>
            </div>
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
      <button
        onClick={() => setCount(count + 1)}
        disabled={products.length >= 100}
      >
        More Products
      </button>
    </div>
  );
}

export default Button;
