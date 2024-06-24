import DetailProducts from "../components/DetailProducts";
import { useParams } from "react-router-dom";
import productService from "../services/product";
import { useContext, useEffect, useState } from "react";
import { Product } from "../types/product";
import { spinnerCT } from "../App";
import ProductItem from "../components/ProductItem";

const DetailPage = () => {
  const param = useParams();
  const [dispatch] = useContext(spinnerCT);
  const id = param.id;
  const [product, setProdcut] = useState<Product | null>(null);
  const [sameProducts, setSameProducts] = useState<Product[]>([]);

  useEffect(() => {
    dispatch({ type: "show" });
    productService.getDetail(id as string).then((response) => {
      setProdcut(response.data);
      dispatch({ type: "colse" });
    });
  }, [id]);

  useEffect(() => {
    dispatch({ type: "show" });
    productService.getList(4).then((response) => {
      setSameProducts(response.data.docs);
      dispatch({ type: "colse" });
    });
  }, []);

  return (
    <div className="mt-[70px]">
      <DetailProducts product={product} />
      <div className="mt-20 container">
        <h1 className="text-5xl font-bold">Other Products</h1>
        <div className="grid grid-cols-4 gap-8 mt-8 ">
          {sameProducts.map((item) => (
            <ProductItem key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
