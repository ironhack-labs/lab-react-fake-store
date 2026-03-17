import { Link } from "react-router-dom";


function ProductListPage(props) {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  

  return (
    <div className="ProductListPage">
      {props.products.map((product) => {
        const link = `/product/details/${product.id}`

        return(
          <Link to={link} key={product.id} className="product-card">
            <img src={product.image}/>
            <p><strong>{product.title}</strong></p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
