import React from "react"
import ItemList from "./ItemList";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) =>{

    const notify = () => toast("Agregaste este producto al carrito");  

    const [productos, setProductos] = useState([]); 
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    
    const url = "https://mocki.io/v1/b620ad81-b4e2-455e-a509-2c0011d7c35a";
    
    const getProducto = async () => {
          
      const pedido = await fetch(url);
      const productos = await pedido.json();
      if (id) {
        return productos.filter(producto=>producto.categoria==id)
      }else{
        return productos
      }
      
    
  };


useEffect(() => {

getProducto()
.then((res) => {
  setProductos(res);
  setLoading(false);
})
.catch((error) => {
  console.log(error);
});



}, [id]);



return (
  <>
  <div><h2 className="titulos">Nuestro Catalogo de Zapatillas Online | Verano 2022</h2></div>
  
  
  <div><ItemList productos={productos}/></div>   
  </>
)
} 




export default ItemListContainer