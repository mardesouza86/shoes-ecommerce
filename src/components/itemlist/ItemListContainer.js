import React from "react"
import ItemList from "./ItemList";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) =>{

    const notify = () => toast("Producto agregado con exito al carrito!");  

    const [productos, setProductos] = useState([]); 
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    
    const url = "https://mocki.io/v1/7d5f64bb-84b1-43a2-bad8-c442ca74bf45";
    
        const getProducto = async () => {
          
            const compra = await fetch(url);
            const productos = await compra.json();
            if (id) {
              return productos.filter(producto=>producto.categoria==id)
            }else{
              return productos
            }
            
          
        };
    
    
    useEffect(() => {
    setTimeout(() => {
      getProducto()
      .then((res) => {
        setProductos(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }, 1000);  
    
      
  }, [id]);
    
    

    return (
        <>
        <div><h2 className="intro">Aprovecha este verano y comprate zapas nuevas! Mira nuestra variedad</h2></div>
        <div><ItemList productos={productos}/></div>   
        </>
    )
} 




export default ItemListContainer