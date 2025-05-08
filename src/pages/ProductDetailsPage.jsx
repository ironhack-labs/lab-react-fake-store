import ProductDetailsComponent from "../components/ProductDetailsComponent";
import { useParams } from "react-router-dom";
function ProductDetailsPage() 
{
	//Destructure route params
	
	const { productId } = useParams();

	return (
		<section>
			{/*Send id route params via props */}
			<ProductDetailsComponent id={productId}/>
		</section>
	);
}

export default ProductDetailsPage