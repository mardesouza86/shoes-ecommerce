import {useState} from 'react'
import Swal from "sweetalert2"


const ItemCount = ({stock,initial,onAdd}) => {

    const [count, setCount] = useState(1)
    const [lista, setLista] = useState([]);
     
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
            setLista(lista);
          }
        };

    const restar = () => {
        if (count > 1) {
        setCount(count - 1)
        }
    }

    const agregarCarrito = () => {
        if(count <= stock){
          setCount(initial);
          onAdd(count)
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'su producto fue agregado al carrito',
            showConfirmButton: false,
            timer: 1800
          })
        }
        else {
          Swal.fire ('ha ocurrido un error, no se pudo agregar el producto') }
      }
   
      return (
        <div>
            <>
      <div>
        <div>
          <h5 className="fuenteItemDetail"> Cantidad : {count}</h5>
            <button onClick={sumar}className="btnSuma">+</button>
            <button onClick={restar} className="btnResta">-</button>
            <div>
            <button onClick={agregarCarrito} className="btn-agregarCarrito">Agregar a Carrito</button>
          </div>
        </div>
      </div>
    </>
        </div>
    );
}

export default ItemCount