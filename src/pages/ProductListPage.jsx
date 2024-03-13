import { Link } from "react-router-dom";

export const ProductListPage = ({ products }) => {
  return (
    <>
      <h3>Products:</h3>
      <div className="product-container">
        {products &&
          products.map((oneProduct) => {
            return (
              <Link key={oneProduct.id} to={`/product/details/${oneProduct.id}`}>
                <div className="product-card">
                  <img src={oneProduct.image} alt={oneProduct.title} style={{ height: "100px" }} />
                  <h1>{oneProduct.title}</h1>
                  <h2>{oneProduct.category}</h2>
                  <h2>{oneProduct.price} $</h2>
                  <h2>{oneProduct.description}</h2>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};
