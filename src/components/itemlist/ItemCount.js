import {useState} from 'react'


const ItemCount = ({stock,initial,onAdd}) => {

    let [count, setCount] = useState(0)

    const sumar = () => {
        setCount(count + 1)
    }

    const restar = () => {
        setCount(count - 1)
        if (count < 1) {
            setCount(0)
        }
    }

    const agregarItem = () => {
        console.log("Aca agrego un item con onAdd")
        setCount(initial)
        onAdd(count)
    }

    return (
        <div>
            <p>Contador Actual : {count}</p>
            <button onClick={sumar}className="btnSuma">+</button>
            <button onClick={agregarItem}className="btnAddCarrito">agregar al carrito</button>
            <button onClick={restar} className="btnResta">-</button>
        </div>
    )
}

export default ItemCount