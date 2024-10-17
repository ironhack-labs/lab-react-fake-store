import { useEffect, useState } from "react";
import ProductListContainer from "../components/ProductListContainer";
import axios from "axios";

function ProductListPage() {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [productsData, setProductsData] = useState([]);
    const url = "https://fakestoreapi.com/products/";

    useEffect(getData, []);

    function onClick(id) {
        console.log(id);
        
    }

    function getData() {
        if (true) {
            fetch(url)
                .then((result) => {
                    //console.log(result);
                    return result.json();
                })
                .then((result) => {
                    console.log(result);
                    setProductsData(result);
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
                    setProductsData(result.data);
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setDataLoaded(true);
                });
        }
    }

    return !dataLoaded ? (
        <div>
            <p>loading...</p>
            {//<button onClick={getData}><i>Load-Test</i></button>
            }
        </div>
    ) : (
        <div className="ProductListPage">
            {productsData.map((product) => {
                return (
                    <ProductListContainer key={product.id} productData={product} click={onClick}/>
                );
            })}
        </div>
    );
}

export default ProductListPage;
