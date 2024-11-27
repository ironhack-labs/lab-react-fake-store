import { Link } from "react-router-dom";
import "./ProductCard.css"
function ProductCard(props) {
    const {id,title,price,description,category,image,rating: {rate,count}} = props.product
    console.log(props.product);

    const shortDescription = description.slice(0,80) + "..."
    
    return (
        <Link to={{
            pathname: "/product/details/" + id,
          }} key={id} className="product-list-card">
                <img src={image} alt={title} />
                <div className="product-detail-text">
                    {title}
                </div>
                <div className="product-detail-text">
                    {category}
                </div>
                <div className="product-detail-text">
                    {price}
                </div>
                <div className="product-detail-text">
                    {shortDescription}
                </div>
            </Link>
    )
    
}
export default ProductCard


/* 
{
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 130
    }
}

*/