import React from "react";
import { Link } from "react-router-dom";



      const Item = ({id, title, price, stock, image, category}) =>{
    return(
      <>
        < div className="item">
        <img src={image} alt="zapa" width="200px"></img> 
            <div><h5 className="descripcion">{title}</h5></div>
            <div><h5 className="colorPrecio">$ {price} </h5></div>
        <div><h5 className="unidadesDisponibles">Unidades disponibles: {stock}</h5></div> 
        <div><Link to={`/productos/${id}`} className="btn-verProducto">Ver Producto</Link></div>
</div>
</>
    )
  }  
export default Item;
