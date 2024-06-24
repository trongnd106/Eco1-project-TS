import { useContext, useEffect, useRef, useState } from "react";
import productService from "../services/product";
import { Product } from "../types/product";
import ProductItem from "../components/ProductItem";
import { spinnerCT } from "../App";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
const limit = 12;
const ProductsPage = () => {
  const [dispatch] = useContext(spinnerCT);
  const [urlParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const totalPage = useRef(0);
  const currentPage = Number(urlParams.get("page") || 1);
  const category = urlParams.get("category") || "";
  useEffect(() => {
    dispatch({ type: "show" });
    productService
      .getList(limit, currentPage, "", category)
      .then((response) => {
        setProducts(response.data.docs);
        totalPage.current = response.data.totalPages;
        dispatch({ type: "close" });
      });
  }, [currentPage, category]);
  return (
    <div className="container mx-auto mt-20">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-5xl font-bold">Popular Products</h2>
          <p className="text-lg my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-8">
        {products.map((product: Product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Pagination totalPage={totalPage.current} page={currentPage} />
      </div>
    </div>
  );
};

export default ProductsPage;
