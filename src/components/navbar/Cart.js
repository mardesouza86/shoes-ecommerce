import React from "react";
import { useContexto } from "../../CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const {cart,borrarDelCarrito,limpiarCarrito, precioTotal, cantidadTotal} = useContexto()

    return (
        <>
        <h5 className="productosCart">Actualmente tenes en tu carrito ({cart.length}) producto(s)</h5>
            {cart.length > 0 ? (
                <ul>
                {cart.map((prod) => {
                    return (
                      <div key={prod.id} item={prod} img={prod.image} borrarDelCarrito={()=>borrarDelCarrito(prod)}>
                        <li className="detalleCarrito" >
                          <img src={prod.imagen}  alt="img" width="100px"/>
                          <p>{prod.nombre}</p> 
                           <p>Precio Unitario $ {prod.precio}</p>
                           <p>Cantidad:</p> <p className="qty">({prod.cantidad})</p>  
                          <button className="btnItemDelete" onClick={()=>borrarDelCarrito(prod.id, prod.cantidad, prod.precio)}>Borrar Producto</button>
                        </li> 
                      </div>
                    );
                  })}
                  <h4>Cantidad Total de Productos en el carrito: [ {cantidadTotal} ]</h4>
                  <h3>Total Compra $ {precioTotal}</h3>
                   <button style={ {display: 'flex', textAlign: 'center'}} className="btnDeleteAll" onClick={limpiarCarrito}>Vaciar Carrito</button>
                 </ul>
            ): <>
            <h4>El carrito esta vacio</h4> 
                  <Link to={"/productos"}>
                    <button className="btnComprarProductos">Ir a comprar productos</button>
                  </Link>
            </>
            }
            
          
        </>
    );
    

    



}


export default Cart