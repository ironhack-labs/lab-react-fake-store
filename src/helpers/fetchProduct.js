import { API_URL } from "./constants";

// To fetch the product details, set up an effect with the `useEffect` hook:
const fetchProduct = async (productId, setter) => {
    try{
      const response = await fetch(`${API_URL}/products/${productId}`);
      console.log('error here', productId)
      if (!response.ok) {
        if (typeof setter  == 'function') {
            const data = await response.json(); // works in this case because data is on top level
            setter(data);
            console.log('setter called')
        } else {
        
            return response.json();
        }
        console.log("Response format: ", response);
        throw new Error ('Server responded with error', response); // inspect response properties to look for what is the exact error
      }

      const productData = await response.json();
      setter(productData);
      console.log("Product data format: ", productData);
    }
    catch (error) { 
      console.log(error); // catch error from server here, otherwise App would crash
    }
  }

  export default fetchProduct;