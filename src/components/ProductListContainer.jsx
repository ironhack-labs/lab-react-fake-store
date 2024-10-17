import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListContainer({ productData, click }) {
    /*
    const [productData, setProductsData] = useState([]);
    const url = "https://fakestoreapi.com/products/";
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((result) => {
                result.json();
            })
            .then((json) => {
                setProductsData(json);
                setLoading(false);
            })
            .catch((error) => {
            })
            .finally(() => { }
            );
    }, []);
    */

    

    const style = { display: "flex", width: "25%", }
    return (
        <Link to={"/product/details/" +productData.id} className="card" style={{ display: "flex", alignContent: "space-evenly", alignItems: "center", width: "99%", height: "400px" }}>
            <div style={style}>
                <div>
                    <img src={productData.image} style={{ height: "390px" }}/>
                </div>
            </div>
            <div style={style}>
                <p><b>{productData.title}</b></p>
            </div>
            <div style={style}>
                <p>{productData.category}</p>
            </div>
            <div style={style}>
                <p>{productData.price} €</p>
            </div>
            <div style={style}>
                <p>{productData.description}</p>
            </div>
        </Link>
    );
}

export default ProductListContainer;
