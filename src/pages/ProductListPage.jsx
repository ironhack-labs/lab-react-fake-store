import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

import Card from '../components/Card';


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  const apiBaseUrl = `https://fakestoreapi.com`;

  useEffect(() => {

    axios
      .get(`${apiBaseUrl}/products`)
      .then(result => setProducts(result.data));

  },[])


  return (

    <div className="ProductListPage">

    {products?.map(item => {

      return (

          <Card key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} category={item.category} />

        )

    })}


    </div>
  );
}

export default ProductListPage;
