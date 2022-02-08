import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

const contexto = createContext();



export const {Provider} = contexto

export const useContexto = () => {
    return useContext(contexto)
}

const CustomProvider = ({children}) => {
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [cart, setCart] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0)
    
    
    const agregarAlCarrito = (producto, cantidad) =>{
        
        const copiaCart= [...cart]
        let item = copiaCart.find((obj)=>obj.id === producto.id)

        if (item) {
            const precio = producto.price * cantidad;
            item.cantidad = item.cantidad + cantidad;
            setCantidadTotal(cantidadTotal + cantidad)
            setCart(copiaCart)
            setPrecioTotal(precioTotal+precio)
        }else{
            const precio = producto.precio * cantidad;
            let Aux = {...producto, cantidad}
            setCart([...cart, Aux]);
            setCantidadTotal(cantidadTotal+cantidad)  
            setPrecioTotal(precioTotal+precio)                    
        }
    }
    
    const borrarDelCarrito = (item) => {
        let copiaCart =cart.filter(obj=> obj.id !== item.id)     
        setCart(copiaCart)
        setCantidadTotal(cantidadTotal - item.cantidad)
        setPrecioTotal(precioTotal - (item.precio * item.cantidad))
        
    }
    const limpiarCarrito = () => {
        setCart([])
        setCantidadTotal(0)
        setPrecioTotal(0)
    }
    const restarItem = (item) =>{
        let copiaCart = [...cart]
        let objeto = copiaCart.find((obj)=> obj.id==item.id);
        
        if (objeto.cantidad >1) {
            objeto.cantidad = objeto.cantidad -1;
            setCart(copiaCart)
            setPrecioTotal(precioTotal - objeto.precio)
            setCantidadTotal(cantidadTotal -1)
        }else{
            borrarDelCarrito(item)
        }
    }

     const sumarItem = (item) => {
        let copiaCart = [...cart]
        let objeto = copiaCart.find((obj)=> obj.id==item.id);
        let precio = item.precio*1;
        if (objeto.cantidad < objeto.stock) {
            objeto.cantidad = objeto.cantidad + 1;
            setCart(copiaCart)
            setPrecioTotal(precioTotal + precio)
            setCantidadTotal(cantidadTotal + 1)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'No hay mas stock del producto seleccionado!'
            })
        }
        
    }
    const valorDelContexto  = {
        cantidadTotal,
        cart,
        precioTotal,
        agregarAlCarrito,
        borrarDelCarrito,
        limpiarCarrito,
        restarItem,
        sumarItem
        
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider
