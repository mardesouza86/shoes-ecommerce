import { useContexto } from "../../CartContext"
import {NavLink} from "react-router-dom"

const CartWidget = () => {
    
    const { cantidadTotal } = useContexto()

    return (
<>
<NavLink style={ {color: 'inherit', textDecoration: 'inherit'}}to="/cart">
                    <span className="carrito">
                    <img src="https://img.icons8.com/fluency/48/000000/shopping-cart.png" alt="carrito"className="carrito"/>
                    </span>
                    <span className="contador">{cantidadTotal}</span>
                </NavLink>
</>
    )
}
    

export default CartWidget;
