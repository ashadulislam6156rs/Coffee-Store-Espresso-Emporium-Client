import React, { useEffect, useState } from "react";
import Product from "./Product";
import Swal from "sweetalert2";

const ProductsParent = () => {
  const [currProducts, setCurrProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://coffee-store-espresso-emporium-server-1yc0.onrender.com/coffees"
    )
      .then((res) => res.json())
      .then((products) => {
        setCurrProducts(products);
      })
      .catch((err) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-5 mt-10 px-3 md:px-0 md:w-3/4 mx-auto">
      {currProducts.map((product) => (
        <Product
          key={product._id}
          setCurrProducts={setCurrProducts}
          currProducts={currProducts}
          product={product}
        ></Product>
      ))}
    </div>
  );
};

export default ProductsParent;
