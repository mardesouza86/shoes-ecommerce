import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
  

    if (productos !== []) {
      return (<>
          <div className="listaProductos">
            {productos.map((prod) => {
              return (
                <Item  
                  id={prod.id}
                  title={prod.nombre}
                  price={prod.precio}
                  stock={prod.stock}
                  image={prod.imagen}
                />
              );
            })}
          </div>
        </>
      );
    }else{
      return null;
    }
        
        
   
    
} 

export default ItemList