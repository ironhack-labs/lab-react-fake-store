// import { useEffect, useState } from "react";

// export function Cart() {
//   const [products, setProducts] = useState([]);
//   //step 1 get cart

//   useEffect(() => {
//     handleFetchCart();
//   }, []);

//   const handleFetchCart = async () => {
//     try {
//       const response = await fetch(
//         "https://fakestoreapi.com/carts/" + Math.floor(Math.random() * 10)
//       );
//       const data = await response.json();
//       const promisesArr = [];
//       data &&
//         data.products &&
//         data.products.length &&
//         data.products.forEach((product) =>
//           promisesArr.push(
//             fetch(
//               "https://fakestoreapi.com/products/" + product.productId
//             ).then((resp) => resp.json())
//           )
//         );
//       Promise.all(promisesArr).then((resp) => setProducts(resp));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //step 2 get details
//   //   const handleFetchProduct = async () => {
//   //     try {
//   //       const response = await fetch(
//   //         "https://fakestoreapi.com/products/" + productId
//   //       );
//   //       const data = await response.json();
//   //       setProduct(data);
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };

//   console.log(products);
//   return <div>Hello World</div>;
// }
