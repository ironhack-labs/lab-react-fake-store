import { Link } from "react-router-dom";

function ItemCard({ imgSrc, title, price, category, id }) {
  return (
    <Link to={`/product/details/${id}`}>
      <div className="card">
        <img src={imgSrc} alt="" />
        <h1>{title}</h1>
        <p>{category}</p>
        <p>prix : {price}eur</p>
      </div>
    </Link>
  );
}

export default ItemCard;