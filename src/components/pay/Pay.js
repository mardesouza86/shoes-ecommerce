import React from "react";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import { addDoc,  serverTimestamp } from "firebase/firestore";
import { useContexto } from "../../CartContext";
import { useState } from "react";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";


const Pay = () =>{

    const {cart, limpiarCarrito, precioTotal} = useContexto() ;
    
    
    const [comprador, setComprador] = useState({
        nombre_y_apellido:"",
        direccion:"",
        email:"",
        telefono:""
    })
    
    const infoCliente = (e) => {
        setComprador({...comprador, [e.target.name]: e.target.value});
    };

    const finalizarCompra = () =>{

        const orden = {            
                comprador : comprador,
                items : {...cart},
                fecha : serverTimestamp(),
                total: precioTotal
            }

        const collecionCompras = collection(db, "pedidos")
  
        addDoc(collecionCompras, orden).then(({ id }) =>{
              Swal.fire({
              position: 'top-center',
              icon: 'success',
              text: `Su numero de orden es ${id}, 
              Le llegara un mail con el detalle de su compra, fecha de entrega y el monto total,
              Muchas gracias por elegirnos` ,
              showConfirmButton: false,
              timer: 3500
            })
            limpiarCarrito()
          
        });
        setComprador({nombre_y_apellido:"", direccion:"", email:"", telefono:""})
        
      }
    
       
    return(

        <>
        <div>
        <div className="formularioCompra">
            <h3 className="tituloFormulario">Por favor, complete sus datos personales para poder finalizar el proceso de compra</h3>
            <form>
                <div className="detalleFormulario"><label >Ingrese su Nombre y Apellido: <input type="text" placeholder="Nombre y Apellido" name="nombre_y_apellido" value={comprador.nombre_y_apellido} onChange={infoCliente} required/></label></div>
                <div className="detalleFormulario"><label >Ingrese su Direccion: <input type="text and number" placeholder="Direccion" name="direccion" value={comprador.direccion} onChange={infoCliente} required/></label></div>
                <div className="detalleFormulario"><label >Ingrese su Email: <input type="email" placeholder="Email" name="email" value={comprador.email} onChange={infoCliente} required/></label></div>
                <div className="detalleFormulario"><label >Ingrese su Telefono: <input type="telefono" placeholder="Telefono" name="telefono" value={comprador.telefono} onChange={infoCliente} required/></label></div>

                <div className="botonFinal"><NavLink to="/productos"><button className="btn-endCompra" type="submit" onClick={finalizarCompra} disabled={!(
                comprador.nombre_y_apellido &&
                comprador.direccion &&
                comprador.email &&
                comprador.telefono)
            }>Finalizar Compra</button></NavLink>
                    
                    </div>
                
            </form>
            </div> 
        </div>
        
        </>

    )
    

}

export default Pay