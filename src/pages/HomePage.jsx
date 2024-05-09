import { useEffect } from "react";
import axios from "axios";

function HomePage() {
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json)
        .then(data => setProducts(data.message))
    }, [] );

    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })

    return (
        <div className="HomePage">
          {products}
        </div>
    );
}

export default HomePage;



