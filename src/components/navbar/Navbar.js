import CartWidget from './CartWidget'
import { Link, NavLink } from "react-router-dom"


const Navbar = ({links}) => {
    
    return (
        <header> 
     <div id="brand" className="header"> 
            <Link to="/" > 
            <img src="./logoshoes.png" alt="logotipo" className="logotipo" /></Link>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">
            <h1 className="titulo">Shoes MDQ</h1>
            </Link>
                     
            </div>

<nav>
<nav>
            {links.map((link)=>{
                return <NavLink key={link.id} to={link.href} className="links">{link.nombre}</NavLink>
            })} 

            <NavLink to="/cart"><CartWidget/></NavLink>

            </nav>
</nav>

</header>
    )
}
















export default Navbar