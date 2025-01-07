import { useEffect, useState } from "react";
import PageLayout from "../components/layouts/page-layout/page-layout";
import { useParams } from "react-router-dom";
import * as FakeStoreApi from "../services/api-service";
import ProductItem from "../components/Products/product-item/product-item";

function ProductDetailsPage() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    FakeStoreApi.getProduct(id)
      .then((product) => setProduct(product))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) {
    return null;
  } else {
    return (
      <PageLayout>
        <ProductItem key={product.id} product={product} />
      </PageLayout>
    );
  }
}

export default ProductDetailsPage;
