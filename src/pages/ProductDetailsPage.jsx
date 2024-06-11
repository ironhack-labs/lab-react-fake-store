import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
    const [product, setProduct] = useState();
    const { productId } = useParams();

    const fetchDetailsData = async () => {
        const result = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await result.json();
        setProduct(data);
    };

    useEffect(() => {
        fetchDetailsData();
    }, []);

    return (
        <>
            {product && (
                <div className="ProductDetailsPage">
                    <img
                        src={product.image}
                        width={240}
                    />
                    <p>${product.price}</p>
                    <p>Title: {product.title}</p>
                    <p>Description: {product.description}</p>
                    <Link to="/">
                        <button className="btn-primary">Back</button>
                    </Link>
                </div>
            )}
        </>
    );
}

export default ProductDetailsPage;
