import { useParams } from "react-router-dom";
import { PageLayout } from "../components/layout";
import { ProductDetail } from "../components/product";

function ProductDetailsPage () {
  const { productId } = useParams();

  return (
   <PageLayout>
    <ProductDetail id={ productId }/>
   </PageLayout>
  );
}

export default ProductDetailsPage;