
import { useEffect, useState } from "react";
import * as ProductsServices from './../../../services/products-service';
import { Link } from "react-router-dom";

function ProductDetails({ id }) {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const productId = async (id) => {
      const product = await ProductsServices.getProduct(id);
      setProduct(product);
    };

    productId(id);
  }, []);

  const handleCartAddItem = async (id) => {
    await ProductsServices.setCart(id);
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="shadow p-3 mt-5 bg-body-tertiary rounded">
          <div className="d-flex flex-row mb-3">
            <div className="p-2 ratio ratio-1x1">
              <img src={product.image} alt={ product.title } className="object-fit-contain"/>
            </div>
            <div className="p-2">
              <div className="d-flex justify-content-start py-3">
                <span className="font-monospace text-body-secondary"> { product.category } </span>
              </div>
              <div className="d-flex justify-content-start py-3">
                <span className="fs-4 fw-bold"> { product.title } </span>
              </div>
              <div className="d-flex justify-content-start py-1">
                <span className="fs-6 ms-2"> 
                  { product.price }€ 
                  <span className="text-body-secondary"> IVA incl. </span>
                  <span className="fs-6 fw-lighter"> gastos de envío excluidos</span>
                </span>
              </div>
              <p className="py-3"> { product.description } </p>
              
              <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => handleCartAddItem(product.id)}>Add Cart</button>
              <Link to={`/`} className="btn btn-success btn-sm">Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
