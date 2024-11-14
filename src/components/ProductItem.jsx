const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <p>
        <b>{product.title}</b>
      </p>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <p>{product.description.slice(0, 100)}...</p>
    </div>
  );
};
export default ProductItem;
