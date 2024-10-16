import { useEffect, useState } from "react";

function ProductListContainer(productData) {

    //const [productData, setProductsData] = useState([]);
    const url = "https://fakestoreapi.com/products/";
    const [loading, setLoading] = useState(true);

    /*
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

    return (
        <div>
            <div>
                <div>
                    <img src={productData.image} />
                </div>
            </div>
            <div>
                <p><b>{productData.title}</b></p>
            </div>
            <div>
                <p>{productData.category}</p>
            </div>
            <div>
                <p>{productData.price}</p>
            </div>
            <div>
                <p>{productData.description}</p>
            </div>
        </div>
    );
}

export default ProductListContainer;
