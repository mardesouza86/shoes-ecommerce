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
                <h2 className="titulos">DETALLE DEL PRODUCTO SELECCIONADO</h2>
                <div className="itemDetail">
                  <div>
                    <img src={producto.imagen} alt={producto.nombre} width="200px" />
                    <h5>{producto.nombre}</h5>
                    <h5>Precio: ${producto.precio}</h5>
                    <h5>{producto.descripcion}</h5>
                    <ItemCount
                      stock={producto.stock}
                      initial={1}
                      onAdd={onAdd}
                    />
                    <NavLink to="/cart">
                      <button className="btn-endCompra">Finalizar Compra</button>
                    </NavLink>
                  </div>
                </div>
              </>
            );
            
}

export default ItemDetail 

