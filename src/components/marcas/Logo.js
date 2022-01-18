import React from "react";
import { Link } from "react-router-dom";



      const Logo = ({id, image}) =>{
    return(

      <>
        < div className="marcas">
        <Link to={`/marcas/${id}`}></Link>
        <img src="../../../public/marcas" alt="logo" width="100px"></img> 
</div>
</>
    )
  }  
export default Logo;