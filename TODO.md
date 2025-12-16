# React Fake Store Exercise Plan

## Information Gathered:
- React Router is already configured with routes for "/" and "/product/details/:productId"
- Axios is available for HTTP requests
- ProductListPage and ProductDetailsPage components exist but need implementation
- Navbar component exists with cart icon (but not functional yet)

## Plan:

### Iteration 1: Products List
1. **ProductListPage.jsx** - Implement API call to fetch all products
   - Import useEffect and axios
   - Add useEffect hook to make API call on component mount
   - Fetch from https://fakestoreapi.com/products
   - Store response in products state
   - Render product cards with basic info (title, price, image)

### Iteration 2: Product List Links
2. **ProductListPage.jsx** - Make products clickable
   - Import Link from react-router-dom
   - Wrap each product card in Link component
   - Link to `/product/details/${product.id}`

### Iteration 3: Product Details
3. **ProductDetailsPage.jsx** - Implement product details view
   - Import useParams, useEffect from react-router-dom
   - Get productId from URL parameters
   - Add useEffect hook to fetch specific product details
   - Fetch from https://fakestoreapi.com/products/:productId
   - Store response in product state
   - Render detailed product information

### Bonus Iteration 4: Cart Page
4. **Create CartPage.jsx** - Implement cart functionality
   - Create new CartPage component
   - Add route for /cart in App.jsx
   - Make cart icon in Navbar a Link to /cart
   - Fetch cart data from https://fakestoreapi.com/carts/5

## Implementation Steps:
1. Complete ProductListPage with API integration
2. Add navigation links to product cards
3. Complete ProductDetailsPage with API integration
4. Create CartPage component
5. Update App.jsx with cart route
6. Update Navbar to link cart icon to cart page

## Expected Result:
- Products page shows list of all products from API
- Each product navigates to its details page
- Product details page shows specific product information
- Cart page displays shopping cart (bonus)
