import React from "react";  
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]); 
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    
    const url = "https://mocki.io/v1/7d5f64bb-84b1-43a2-bad8-c442ca74bf45";
    
        const getProducto = async () => {
          
            const compra = await fetch(url);
            const productos = await compra.json();
            return productos.filter(producto=>producto.id==id)
      };
    
    
    useEffect(() => {
    getProducto()
      .then((res) => {
        setProducto(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
        
    
console.log(producto);
   

    
return (
  
    <>
    <ItemDetail producto={producto}/>
    </>
)


}




export default ItemDetailContainer