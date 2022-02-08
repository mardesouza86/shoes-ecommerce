import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
  

    if (productos !== []) {
      return (<>
          <div className="itemList">
            {productos.map((prod) => {
              return (
                <Item  
                  id={prod.id}
                  title={prod.nombre}
                  price={prod.precio}
                  stock={prod.stock}
                  image={prod.imagen}
                  image2={prod.imagen2}
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