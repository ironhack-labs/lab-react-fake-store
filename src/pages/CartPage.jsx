import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CartPage() {

    const { productId } = useParams()
    const navigate = useNavigate();
    const [products, setProducts] = useState({});
    
    return (
        <>
            <div>
                <h1>Cart</h1>
            </div>
        </>
    )
}