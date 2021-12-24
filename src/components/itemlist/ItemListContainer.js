import { useState, useEffect } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"



const productosIniciales = [
    { nombre: "Zapatilla Adidas Blancas Hombre", precio: 12250, descripcion: "Zapatilla de hombre de la marca Adidas" },
    { nombre: "Zapatilla Adidas Negras Hombre", precio: 12250, descripcion: "Zapatilla de hombre de la marca Adidas" },
    { nombre: "Zapatilla Adidas Blancas Mujer", precio: 11600, descripcion: "Zapatilla de mujer de la marca Adidas" },
    { nombre: "Zapatilla Adidas Negras Mujer", precio: 11600, descripcion: "Zapatilla de mujer de la marca Adidas"},
    { nombre: "Zapatilla Nike Blancas Hombre", precio: 15700, descripcion: "Zapatilla de hombre de la marca Nike" },
    { nombre: "Zapatilla Nike Negras Hombre", precio: 15700, descripcion: "Zapatilla de hombre de la marca Nike"},
    { nombre: "Zapatilla Nike Blancas Mujer", precio: 14200, descripcion: "Zapatilla de mujer de la marca Nike"},
    { nombre: "Zapatilla Nike Negras Mujer", precio: 14200, descripcion: "Zapatilla de mujer de la marca Nike"},
    { nombre: "Zapatilla Puma Blancas Hombre", precio: 10100, descripcion: "Zapatilla de hombre de la marca Puma"},
    { nombre: "Zapatilla Puma Negras Hombre", precio: 10100, descripcion: "Zapatilla de hombre de la marca Puma"},
    { nombre: "Zapatilla Puma Blancas Mujer", precio: 9300, descripcion: "Zapatilla de mujer de la marca Puma"},
    { nombre: "Zapatilla Puma Negras Mujer", precio: 9300, descripcion: "Zapatilla de mujer de la marca Puma"},
]



const ItemListContainer = ({ greeting }) => {

    let [lista, setLista] = useState([])
    const { id } = useParams()

    
    useEffect(() => {
    
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 2000)
        })

        promesa
            .then((productos) => {
                console.log("Todo bien")

                //if(id){

                //}else{
                setLista(productos)
                //}
            })
            .catch(() => {
                console.log("Todo mal")
            })

        }, [id])
        
    

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList lista={lista} />
            <ItemCount />
        </div>
    )
}


export default ItemListContainer



