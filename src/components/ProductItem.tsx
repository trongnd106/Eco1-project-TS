import { Product } from "../types/product";
import { Link } from "react-router-dom";
type Props = {
  product: Product;
};
const ProductItem = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <img className="h-60 object-cover" src={product.thumbnail} alt="" />
      </div>
      <div>
        <div className="flex items-center justify-between gap-5">
          <h4 className="text-lg font-semibold text-nowrap overflow-hidden text-ellipsis">
            {product.title}
          </h4>
          <p>${product.price}</p>
        </div>
        <p>{product.category}</p>
      </div>
      <Link to={`/products/${product._id}`}>
        <button className="w-full py-2 rounded border border-black">
          Product Detail
        </button>
      </Link>
    </div>
  );
};

export default ProductItem;
