async function fetchItemDetails(productId) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return(jsonResponse);
  } catch (err) {
    console.log(err);
  }
}

export default fetchItemDetails;