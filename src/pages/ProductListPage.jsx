import { useEffect, useState } from "react";
import ProductListContainer from "../components/ProductListContainer";

function ProductListPage() {
    const [loading, setLoading] = useState(true);
    const [productsData, setProductsData] = useState([]);
    const url = "https://fakestoreapi.com/products/";

    useEffect(getData, []);

    function getData() {
        fetch(url)
            .then((result) => {
                return result.json();
            })
            .then((json) => {
                console.log(json);
                return setProductsData(json);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log(productsData);
                //setLoading(false);
            });
    }

    return loading ? (
        <div>
            <p>loading...</p>
            <button onClick={getData}><i>Load-Test</i></button>
        </div>
    ) : (
        <div className="ProductListPage">
            {productsData.map((product) => {
                return (
                    <ProductListContainer key={product.id} productData={product} />
                );
            })}
        </div>
    );
}

export default ProductListPage;
