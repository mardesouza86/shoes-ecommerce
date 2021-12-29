import React from 'react';

//CSS
import './estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemlist/ItemListContainer';
import ItemDetailContainer from './components/itemlist/ItemDetailContainer';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Cart from './components/navbar/Cart';
import Footer from './components/footer/Footer';






function App() {
  
  const links = [
    { href: "/productos", nombre: "Productos", id: 5 },
    { href: "/categoria/1", nombre: "Mujer", id: 1 },
    { href: "/categoria/2", nombre: "Hombre", id: 2},
    { href: "/categoria/3", nombre: "Chicos", id: 3},
    { href: "/ofertas", nombre: "Ofertas", id: 6 },
    { href: "/ingresar", nombre: "Ingresar/Registrarte", id: 4 }
]
return (
    <BrowserRouter>
        <Navbar links={links}/>
        <main>
            <Routes>
            
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/productos" element={<ItemListContainer/>}/>
            <Route path="/categoria/:id" element={<ItemListContainer/>}/>
            <Route path="/productos/:id" element={<ItemDetailContainer/>}/>
            
            </Routes>
        </main>
        
        <Footer/>
     </BrowserRouter>
  );
}

export default App;
