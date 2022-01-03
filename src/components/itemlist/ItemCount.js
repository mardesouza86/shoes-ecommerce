import {useState} from 'react'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock,initial,onAdd}) => {

    const [count, setCount] = useState(1)
    const [lista, setLista] = useState([]);
    const notify = () => toast("Su producto fue agregado al carrito con exito!");
    const notify2 = () => toast("Lamentablemente le informamos que no contamos con mas stock del producto");
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
            setLista();
          } else {
            notify2();
          }
        };

    const restar = () => {
        setCount(count - 1)
        if (count < 2) {
            setCount(1)
        }
    }

    const agregarCarrito = () => {
        if(count <= stock){
          setCount(initial);
          onAdd(count)
      }
    }
   
      return (
        <div>
            <>
      <div>
        <div className="producto">
          
          <h5> Cantidad : {count}</h5>
            <button onClick={sumar}className="btnSuma">+</button>
            <button onClick={restar} className="btnResta">-</button>
            <div>
            <button onClick={agregarCarrito} className="btn-agregarCarrito">Agregar a Carrito</button>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        </div>
      </div>
    </>
        </div>
    );
}

export default ItemCount