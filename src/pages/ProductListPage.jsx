import { useEffect, useState } from "react";
import ProductListContainer from "../components/ProductListContainer";

function ProductListPage() {
    const [loading, setLoading] = useState(true);
    const [productsData, setProductsData] = useState([]);
    const url = "https://fakestoreapi.com/products/";

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
                console.error(error);
            })
            .finally(() => { }
            );
    }, []);

    return loading ? (
        <div>
            <p>loading...</p>
        </div>
    ) : (
        <div className="ProductListPage">
            {productsData.map((product) => {
                <ProductListContainer key={product.id} productData={product} />
            })}
        </div>
    );
}

export default ProductListPage;
