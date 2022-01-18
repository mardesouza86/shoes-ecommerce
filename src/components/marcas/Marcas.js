import React from "react";
import Logo from "./Logo";

const Marcas = ({marcas}) => {
      
    
        if (marcas == marcas) {
          return (<>
              <div className="marcas">
                {marcas.map((brand) => {
                  return (
                    <Logo  
                      id={brand.id}           
                      image={brand.imagen}
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
    
    export default Marcas
