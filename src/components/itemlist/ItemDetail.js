import React from "react";
import { useContexto } from "../../CartContext";
import ItemCount from "../itemlist/ItemCount";
import { NavLink } from "react-router-dom";


const ItemDetail = ({producto}) => {
    
  const {agregarAlCarrito} = useContexto()
  function onAdd(cantidad) {
    agregarAlCarrito(producto, cantidad);
  }
            return (
              <>
                <div className="itemDetail">
                  <div className="contenedorItemDetail">
                  <img src={producto.imagen} alt={producto.nombre} width="200px" />
                    <h5 className="fuenteItemDetail">{producto.nombre}</h5>
                    <h5 className="fuenteItemDetail">{producto.descripcion}</h5>
                    <h5 className="fuenteItemDetail">Precio: ${producto.precio}</h5>
                    <ItemCount 
                      stock={producto.stock} 
                      initial={1}
                      onAdd={onAdd}
                      />
                    <NavLink to="/productos">
                      <button className="btn-volverAProductos">Volver a Productos</button>
                    </NavLink>
                    <NavLink to="/cart">
                      <button className="btn-endCompra">Ir a Carrito</button>
                    </NavLink>
                  </div>
                </div>
              </>
            );
            
}

export default ItemDetail 

