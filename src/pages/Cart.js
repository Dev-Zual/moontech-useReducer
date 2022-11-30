import React from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../context/ProductProvider";

const Cart = () => {
  const {
    state: { cart, loading, error },
  } = useProduct();

  let content;

  if (loading) {
    content = <p>loading...</p>;
  }

  if (error) {
    content = <p>something went wrong</p>;
  }
  if (!loading && !error && cart.length === 0) {
    content = <p>nothing to show cart list is empty</p>;
  }
  if (!loading && !error && cart.length) {
    content = cart.map((product, index) => (
      <ProductCard product={product} key={index} />
    ));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Cart;
