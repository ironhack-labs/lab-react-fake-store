import { useState, useEffect } from "react";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);


const fetchData = async () => {
  try{
    const response = await fetch('https://fakestoreapi.com/products');
    const result = await response.json();
    setProducts(result)
  }catch (error) {
    console.log('Error fetching data:', error);
  }
};

useEffect(() =>{
  fetchData();
}, []);

return(
  <div>
  <h1>Lista de Productos</h1>
  {products.length === 0 ? (
    <p>Cargando productos...</p>
  ) : (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <h2>{product.title}</h2>
          <p>Precio: ${product.price}</p>
          <img src={product.image} alt={product.title} style={{ width: "100px" }} />
        </li>
      ))}
    </ul>
  )}
</div>
);
}


export default ProductListPage;
