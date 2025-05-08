import axios from "axios";
import { useState, useEffect } from "react"
import './CartDetailsPage.css'
import { Link } from "react-router-dom";


function ProductListPage() {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => loadProducts(), [])

    const loadProducts = () => {

        axios
            .get("https://fakestoreapi.com/carts/:id")
            .then(response => {
                setProducts(response.data)               // en axios la respuesta del server está en .data
                setIsLoading(false)
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="ProductListPage">
            <h1>Product List</h1>
            <hr />
            {
                isLoading
                    ?
                    <h1>Cargando...</h1>
                    : products.map(pdt => {

                        return (
                            <article className="card" key={pdt.id}>
                                <Link to={`/product/details/${pdt.id}`} >
                                    <img src={pdt.image} alt="apartment" />
                                </Link>

                                <h3>{pdt.title}</h3>
                                <p>{pdt.category}</p>
                                <p>Price: {pdt.price}</p>
                                <p>{pdt.description}  </p>
                            </article>
                        )
                    })
            }



        </div>
    );
}

export default ProductListPage;
