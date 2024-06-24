import Baner from "../components/Baner";
import productService from "../services/product";
import { Product } from "../types/product";
import ProductItem from "../components/ProductItem";
import Ads from "../components/Ads";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { spinnerCT } from "../App";

const HomePage = () => {
  const [dispatch] = useContext(spinnerCT);
  const [products, setProducts] = useState<Product[]>([]);
  const [topProduct, setTopProduct] = useState<Product[]>([]);
  useEffect(() => {
    dispatch({ type: "show" });
    productService.getList(8).then((response) => {
      setProducts(response.data.docs);
      dispatch({ type: "close" });
    });
    productService.getList(8, 5).then((response) => {
      setTopProduct(response.data.docs);
      dispatch({ type: "close" });
    });
  }, []);
  return (
    <div>
      <Baner />
      <div className="container mx-auto">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-5xl font-bold">Featured Products</h2>
            <p className="text-lg my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div>
            <Link to="/products">
              <button className="py-3 px-6 border border-black rounded">
                View all
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 mt-8">
          {products.map((product: Product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
      <Ads />
      <div className="container mx-auto">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-5xl font-bold">Popular Products</h2>
            <p className="text-lg my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div>
            <Link to="/products">
              <button className="py-3 px-6 border border-black rounded">
                View all
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 mt-8">
          {topProduct.map((product: Product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
