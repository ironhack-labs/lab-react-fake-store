import { Link } from "react-router-dom";

function CardProduct(props) {

  const maxLengthTest = (text, maxLength = null) => {
    if (maxLength === null || isNaN(maxLength)) {
      return text;
    }

    return text.length > maxLength ? text.slice(0, maxLength) : text;
  };

  return (
    <Link to={`/product/details/${props.product.id}`} className="product-card">
      <img src={props.product.image} alt="" />
      <p>
        <strong>{props.product.title}</strong>
      </p>
      <p>{props.product.category}</p>
      <p>${props.product.price}</p>
      <p>{maxLengthTest(props.product.description, 100)}</p>
    </Link>
  );
}

export default CardProduct;
