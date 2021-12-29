import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  
  function onAdd (cantidad) {
    console.log("Este producto fue agregado al carrito");
    
}

return (
  <div className="listaProductos">

  {producto.map((prod) =>{
      return <div><h5>{prod.nombre}</h5>
      <img src={prod.imagen} alt={prod.nombre} width="200px" />
      <h5>Precio:  ${prod.precio}</h5>
      <h5>{prod.descripcion}</h5>
      <ItemCount stock={prod.stock} initial={1} onAdd={onAdd}/>   
      </div>
      })}
      </div>             
  );
       
}

export default ItemDetail 