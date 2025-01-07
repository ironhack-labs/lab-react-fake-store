
import ProductItem from "../product-item/product-item";

function ProductList({productList}) {


  return <div className="d-flex flex-wrap gap-3">
    {productList.map((product)=> (
      <ProductItem key={product.id} product={product}/>
    ))}

  </div>;
}

export default ProductList;
