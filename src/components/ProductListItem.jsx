
function ProductListItem({ product }) {
  return (
    <div className="card w-full flex gap-10 justify-between items-center">
      <div className="image-container border-2">
        <img src={product.image} alt="Image product" className="w-[150px] h-[150px] max-w-none object-cover overflow-hidden"/>
      </div>
      <div className="title font-bold w-1/6">{product.title}</div>
      <div className="category">{product.category}</div>
      <div className="price">${product.price}</div>
      <div className="description w-1/6">{product.description.length > 60 ? product.description.slice(0,60) + "..." : product.description}</div>
      {product.quantity !== undefined && <div className="quantity">{product.quantity} Units</div>}
    </div>
  )
}
export default ProductListItem