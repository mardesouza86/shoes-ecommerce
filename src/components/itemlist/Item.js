import ItemCount from "./ItemCount"

const Item = ({item}) => {
    return (
        <article>
            <h3>{item.nombre}</h3>
            <p>Precio : ${item.precio}</p>
            <p>Descripcion : {item.descripcion}</p>
            <button>ver detalle</button>
            <ItemCount/>
        </article>
    )
}

export default Item