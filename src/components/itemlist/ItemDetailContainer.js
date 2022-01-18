import React from "react";  
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]); 
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    
    const url = "https://mocki.io/v1/b620ad81-b4e2-455e-a509-2c0011d7c35a"
    const getProducto = async () => {
          
        const pedido = await fetch(url);
        const productos = await pedido.json();
        return productos.find((producto)=>producto.id==id)
  };


useEffect(() => {
getProducto()
  .then((res) => {
    setProducto(res);
    setLoading(false);
  })
  .catch((error) => {
    console.log(error.message);
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