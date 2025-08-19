import { Link } from "react-router-dom";

function ProductDetailItem({ product }) {
  return (
    <div className="m-5">
      <div className="shadow-md mx-auto mb-5 bg-white rounded-sm flex flex-col p-10 items-start gap-3">
        <div className="border-2">
          <img src={product.image} alt="Product image" className="w-[150px] h-[150px] max-w-none object-cover overflow-hidden"/>
        </div>
        <div className="bg-blue-700 text-white px-2 text-sm rounded-sm">{product.category}</div>
        <div className="font-bold">{product.title}</div>
        <div className="flex w-1/2 gap-5 items-center">
          <div className="text-sm">{product.description}</div>
          <div className="font-extrabold text-xl text-blue-900">${product.price}</div>
        </div>
      </div>
      <Link to={"/"}>
        <button className="p-3 bg-green-600 text-white rounded-lg text-sm" onClick={""}>Back</button>
      </Link>
    </div>
  );
}
export default ProductDetailItem;
