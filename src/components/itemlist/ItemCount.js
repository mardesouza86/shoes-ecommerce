import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    let [count, setCount] = useState(initial);

    const sumar = () => {
    setCount(count + 1);
    }
const restar = () => {
    setCount(count - 1);
    }
    
    const agregar = () => {
        console.log("Aca agrego un item");
        onAdd(count);
        setCount(initial);
    }
    return (
        <div>
        <span>Contador:{count}</span>
        <button onclick={sumar}>sumar</button>
        <button onclick={restar}>restar</button>
        <button onclick={agregar}>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount