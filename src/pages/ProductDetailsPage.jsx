import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [productData, setProductData] = useState([]);
    const id = useParams().productId;
    const url = "https://fakestoreapi.com/products/" + id;
    console.log(productData);


    useEffect(getData, []);

    function getData() {
        if (true) {
            fetch(url)
                .then((result) => {
                    //console.log(result);
                    return result.json();
                })
                .then((result) => {
                    console.log(result);
                    setProductData(result);
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setDataLoaded(true);
                });
        }
        else {
            axios.get(url)
                .then((result) => {
                    console.log(result.data);
                    setProductData(result.data);
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setDataLoaded(true);
                });
        }
    }
    const stars = productData.rating ? Math.floor(productData.rating.rate) : 0;
    return !dataLoaded ? (
        <div>
            <p>loading...</p>
        </div>
    ) : (
        <div className="ProductDetailsPage">
            <div style={{ textAlign: "left", width: "50%", margin: "2%" }}>
                <img src={productData.image} style={{ height: "390px" }} />
                <br />
                <p><b>{productData.title}</b></p>
                <br />
                <p>{"".padStart(stars, "★").padStart(5, "☆")}</p>
                <p>{productData.rating.rate} Stars | {productData.rating.count} Ratings</p>
                <br />
                <p>{productData.category}</p>
                <br />
                <p>{productData.price} €</p>
                <br />
                <p>{productData.description}</p>
                <br />
                <Link to="/" >
                        <p style={{ color: "white", backgroundColor: "blue", width: "50px", textAlign: "center" }}>back</p>
                </Link>

            </div>
        </div>
    );
}

export default ProductDetailsPage;
