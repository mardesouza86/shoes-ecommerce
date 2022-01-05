import React from "react";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ producto }) => {
  
  const [state, setState] =useState(true);
  const [itemSelect, setItemSelect] = useState(true)
  
  function onAdd (cantidad, stock) {
    setState(false);
    if ( cantidad < stock) {
    //Guardas el prod en el state
    setItemSelect(producto) }
    }

if (state===true) {
  return  <><h2>PRODUCTO</h2> 
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
         </>
            
        }else{
            return (
                <><h2 className="modeloElegido">Modelo de Zapatilla Elegido</h2>     
                     <div className="listaProductos">
                    {producto.map((prod) =>{
                    return <div><h5>{prod.nombre}</h5>
                    <img src={prod.imagen} alt={prod.nombre} width="400px" />
                    <h5>Precio:  ${prod.precio}</h5>
                    <h5>{prod.descripcion}</h5>
                    <h5>{prod.cantidad}</h5>
                    <Link to="/Cart"><button className="btn-endCompra">Finalizar Compra</button></Link>
                    
                    
                    </div>
                })}
                   
                </div>
             </>
            )

        }
                   
}


export default ItemDetail 
