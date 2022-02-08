import React from "react";  
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/Firebase";
import {collection, doc, getDoc} from "firebase/firestore"


const ItemDetailContainer = () => {

  const [producto, setProducto] = useState([]); 
  const {id} = useParams()
  
  useEffect(() => {
    const coleccionProductos = collection(db, "productos")
    const docRef = doc(coleccionProductos, id)

    getDoc(docRef)
      .then((resultado) => {
          const id = resultado.id
          const data = resultado.data()
          const producto = {
            id: id,
            ...data
          }
          setProducto(producto)
      })
      .catch((error) => {
       } )
      
}, [id]);
   
return (

<>
<ItemDetail producto={producto}/>
</>
)


}




export default ItemDetailContainer