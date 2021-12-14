import CartWidget from './CartWidget'

const Navbar = () => {

    return (
        <header> 
            <img src="./logoshoes.png" alt="logotipo" className="logotipo" />
            <h1 className="titulo">Calzados MDQ</h1>
<nav>
    <ul>
    <li><a href="home.html">Inicio</a></li>
    <li><a href="nosotros.html">Nosotros</a></li>
    <li><a href="adultos.html">Zapatillas Adultos</a></li>
    <li><a href="ninos.html">Zapatillas Niños</a></li>
    <li><a href="deportivo.html">Calzados Deportivos</a></li>
    <li><a href="contactanos.html">Contactanos</a></li>
    <CartWidget />
    </ul>
</nav>
</header>
    )
}
















export default Navbar