// import { useState } from "react";


// function ProductListPage() {
//   // The state variable `products` is currently an empty array [], 
//   // but you should use it to store the response from the Fake Store API (the list of products).
//   const [products, setProducts] = useState([]);

//   // To fetch the list of products, set up an effect with the `useEffect` hook:


//   return (
//     <div className="ProductListPage">
//       {/* Render list of products here */}
//     </div>
//   );
// }

// export default ProductListPage;

// import React, { useState, useEffect } from "react";
// import axios from 'axios';

// function ProductListPage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Function to fetch products from the API
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         setProducts(response.data); // Set the fetched products into state
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     // Call the fetchProducts function when the component mounts
//     fetchProducts();


//   }, []); 

//   return (
//     <div className="ProductListPage">
//       <h1>Products List</h1>
//       <div className="product-cards">
//         <table>
//         {products.map(product => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.title} className="product-image" />
//             <div className="product-details">
//               <h2>{product.title}</h2>
//               <p><strong>Category:</strong> {product.category}</p>
//               <p><strong>Price:</strong> ${product.price}</p>
//               <p>{product.description}</p>
//             </div>
//           </div>
//         ))}
//         </table> 
//       </div>
//     </div>
//   );
// }


// return (
//   <div className="ProductListPage">
//     <h1>Products List</h1>
//     <div className="product-cards">
//       <table>
//       {products.map(product => (
//           <tr className="product-row" id={product.id}>
//             <td><img src={product.image} alt="" className="product-image" /></td>

//             <td><span>{product.title}</span></td>
//             <td><span>{product.category}</span></td>
//             <td><span>{product.price}</span></td>
//            <td><span>{product.description.split(' ').slice(0, 8).join(' ')}</span></td>

//           </tr>

       
//       ))}
//       </table> 
//     </div>
//   </div>
// );
// }

// export default ProductListPage;

import React, { useState, useEffect } from "react";
import axios from 'axios';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <div className="ProductListPage">
      <h1>Products List</h1>
      <table className="product-table">
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="product-row">
              <td>
                <div className="product-card">
                  <img src={product.image} alt={product.title} className="product-image" />
                  <div className="product-details">
                    <h2>{product.title}</h2>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p>{product.description.split(' ').slice(0, 8).join(' ')}</p>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductListPage;
