import { useEffect, useState } from "react"

function Cart() {

  const [ productosDelCarrito , setProductosDelCarrito ] = useState(null)
  let id = 5
  useEffect(() => {
    console.log("useEffect")
    getData()
  },[])
  const getData = async () => {
    try {
      console.log("primeros pasos")
      const response = await fetch(`https://fakestoreapi.com/carts/${id}`)
      console.log(response)
      const data = await response.json()
      setProductosDelCarrito(data)
      console.log("que se le asigna",productosDelCarrito)
    } catch (error) {
      console.log("FATAL ERROR",error)
    }
  }

  if (productosDelCarrito === null) {
    return (
      <h1>LA PUTA QUE LOS PARIO A TODOS</h1>
    )
  }

  return (
    <div>
      <h1>Tu Carrito de compras!</h1>
      <ul>
        {console.log("productos del carrito:",productosDelCarrito)}
        {productosDelCarrito.products.map((producto) => {
          return(
            <li key={producto.id} style={{display:"flex",alignItems:"center",height:"200px",border:"2px solid black",margin:"10px",padding:"10px"}}>
              <img style={{height:"150px"}} src={producto.image} alt="" />
              <h2>{producto.title}</h2>
              <h4>{producto.category}</h4>
              <h4>€{producto.price}</h4>
              <h4>{producto.description}</h4>
            </li>
            // ya se que esta mal pero entendimos que nos tomaria mucho tiempo y preferimos dedicarle este tiempo a nuestro proyecto. entendemos que el objeto que recibimos nos da el index y con eso deberiamos buscar dentro de los productos. Endenemos perfectamente pero nos tomaria mucho tiempo jejeje (lo haramos el fin de semana)
          )
        })}
      </ul>
    </div>
  )
}

export default Cart