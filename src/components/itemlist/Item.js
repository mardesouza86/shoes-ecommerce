import React from "react";
import { Link } from "react-router-dom";



      const Item = ({id, title, price, stock, image}) =>{
    return(
      <>
        <div className="listaProductos">
        <img src={image} alt="zapa" width="200px"></img> 
            <div><h5>{title}</h5></div>
            <div><h5>Precio: {price} </h5></div>
        <div><h5>Unidades disponibles: {stock}</h5></div>  
        <div><Link to={`/productos/${id}`} className="btn-verProducto">Ver Producto</Link></div>
</div>
</>
    )
  }  
export default Item;
