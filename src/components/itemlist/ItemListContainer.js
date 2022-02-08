import React from "react"
import ItemList from "./ItemList";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/Firebase";
import { getDocs, query, collection, where, doc} from "firebase/firestore"


const ItemListContainer = (props) =>{

  const [productos, setProductos] = useState([]); 
  const {nombre} = useParams()
  
  useEffect(() => {

    const prodCollecion  = collection(db, "productos")

    const usoBD = (info) =>{
      getDocs(info)
        .then((resultado) =>{
          const docs = resultado.docs
          const lista = docs.map((doc)=>{
          const id= doc.id
          const data = doc.data()
          const producto = {
            id: id,
            ...data
          }
          return producto;
          
        })
        
        setProductos(lista)
      })
      .catch((error) => {
      })
    }

    if (nombre) {
      const consulta = query(prodCollecion, where ("categoria", "==" , nombre))
      usoBD(consulta)  
    }else{
      usoBD(prodCollecion)}
    
}, [nombre]);
  
  
  
  return (
    <>
    <div><h2 className="titulos">Nuestro Catalogo de Zapatillas Online | Verano 2022</h2></div>
    
    
    <div><ItemList productos={productos}/></div>   
    </>
  )
  
} 



export default ItemListContainer