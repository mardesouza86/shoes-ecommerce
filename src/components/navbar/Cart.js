import React from "react";
import { useContexto } from "../../CartContext";
import { Link, NavLink } from "react-router-dom";

const Cart = () => {

    const {cart, borrarDelCarrito, limpiarCarrito, precioTotal, sumarItem, restarItem, cantidadTotal} = useContexto() ;

    
    
        return (
            <> 
            
            <div className="containerCarrito">
            
            
 {cart.length > 0 ? (
                  <div >
                    <div><h4>Carrito ({cantidadTotal})</h4></div>
                  <div>
                  
                  {cart.map((prod) => {
                      return (
                        <div className="itemCarrito">
                          <img src={prod.imagen}  alt="img" width="100px"/>
                          
                          <div className="lineaCarrito"> 
                          
                          <h5>{prod.nombre} - Precio Unitario $ {prod.precio} - Cantidad:[{prod.cantidad}]  - Total $ {prod.precio * prod.cantidad}
                          

                          <button className="btnRestaCarrito" onClick={()=>restarItem(prod)}>-</button>
                          <button className="btnSuma" onClick={()=>sumarItem(prod)}>+</button>
                          <button className="btnItemDelete" onClick={()=>borrarDelCarrito(prod)}>borrar producto</button>  
                          </h5>
                          </div>
                            </div>
                      );
                    })}
                   </div>
                  
                     <div className="footerCarrito" >
                          
                        <div ><h5 className="precioCompra" >Precio Total de la compra: ${precioTotal}</h5></div>
                        
                        <button onClick={limpiarCarrito} className="btnDeleteAllCarrito" >Vaciar Carrito</button>
                          <NavLink to="/pay"> 
                        <button className="btn-endCompra">Finalizar compra</button>
                        </NavLink>
                        
                        </div>
                        
                        
                        
                     </div>
        
              ): 
                <>
                <div className="carritoVacio">
                  <h4>Todavia no elegiste ningun modelo de zapatillas! </h4> 
                      <Link to={"/productos"}>
                        <button className="btn-volverAProductos2">Ir a Productos</button>
                      </Link></div>
                </>
                }
                </div>
            </>
          );
}

export default Cart