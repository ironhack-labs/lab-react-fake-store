// Code to run when the component mounts

// import { useEffect, useState } from "react";

// const [products, setProducts] = useState(null);
// const [loading, setLoading] = useState(null);

// useEffect(() => {
//   const fetchProduct = async () => {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const allProducts = await response.json();
//       setProducts(allProducts);
//       setLoading(false);
//     } catch (err) {
//       console.log("error loading", err);
//     }
//   };
//   fetchProduct();
// }, []);
// if (loading) {
//   return <p>loading...</p>;
// } else {
//   return <div>{}</div>;
// }

// export default Home;
// //  ^ [] Means the effect will run only once, when the component mounts
