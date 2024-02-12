import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { productId } = useParams();
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [productId]);

  return (
    <article className="border mx-4 py-4 px-8 hover:shadow-lg flex flex-col gap-3">
      <img
        src={product.image}
        alt={`photo of ${product.title}`}
        className="w-64 h-64 p-4 border-2 object-cover"
      />
      <p className=" bg-blue-600 w-fit px-4 rounded text-white py-1 text-xs">
        {product.category}
      </p>

      <h2 className="text-left font-bold">{product.title}</h2>

      <div className="grid h-28 grid-cols-2 text-left gap-4">
        <p className="text-sm">{product.description}</p>
        <p className="text-blue-600 font-bold">${product.price}</p>
      </div>

      <div className="border my-2" />

      <NavLink
        to={"/"}
        className="bg-green-600 w-fit mx-auto px-4 py-1 rounded text-white"
      >
        Back
      </NavLink>
    </article>
  );
}

export default ProductDetailsPage;
