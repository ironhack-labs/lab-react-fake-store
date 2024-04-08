import classes from "../styles/ProductCard.module.css";

const ProductCard = ({ productDetail }) => {
  return (
    <div className={classes.cardContainer}>
      <img
        src={productDetail.image}
        alt="Product Image"
        className={classes.imgContainer}
      />
      <p>{productDetail.title}</p>
      <p>{productDetail.category}</p>
      <p>{productDetail.price}</p>
      <p>{productDetail.description}</p>
    </div>
  );
};

export default ProductCard;
