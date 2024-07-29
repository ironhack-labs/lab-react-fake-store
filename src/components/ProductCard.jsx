const ProductCard = ([image, id, title, description, price, category, rating]) => {

    /* const productStyle = {
         background: rating >= 95 ? '#e0ffbb' : 'white'
     }style = { productStyle }*/

    return (
        <div className="ProductCard" >
            <img src={image}></img>
            <p>Id:{id}</p>
            <p>Title:{title}</p>
            <p>Description:{description}</p>
            <p>Price:{price}</p>
            <p>Category:{category}</p>
            <p>Rating:{rating}</p>
        </div>

    )

}

export default ProductCard