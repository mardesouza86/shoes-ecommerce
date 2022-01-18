import { createContext, useContext, useState } from "react";

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
            const precio = producto.precio * cantidad;
            item.cantidad = item.cantidad + cantidad;
            setCantidadTotal(cantidadTotal + cantidad)
            setCart(copiaCart)
            setPrecioTotal(precioTotal+precio)
        }else{
            const precio = producto.precio * cantidad;
            let prodX = {...producto, cantidad}
            setCart([...cart, prodX]);
            setCantidadTotal(cantidadTotal+cantidad)  
            setPrecioTotal(precioTotal+precio)                    
        }
    }
    
    const borrarDelCarrito = (id, qty, precio) => {
        let copiaCart =cart.filter(obj=> obj.id !== id)     
        setCart(copiaCart)
        setCantidadTotal(cantidadTotal - qty)
        setPrecioTotal(precioTotal - (precio * qty))
        
    }
    const limpiarCarrito = () => {
        setCart([])
        setCantidadTotal(0)
    }

    const valorDelContexto  = {
        cantidadTotal,
        cart,
        precioTotal,
        agregarAlCarrito,
        borrarDelCarrito,
        limpiarCarrito,
        
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default CustomProvider
