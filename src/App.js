import React from 'react';
import './estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemlist/ItemListContainer';
import ItemDetailContainer from './components/itemlist/ItemDetailContainer';
import Marcas from './components/marcas/Marcas';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Cart from './components/navbar/Cart';
import Footer from './components/footer/Footer';
import CustomProvider from "./CartContext";
import Pay from "./components/pay/Pay.js";
import Ingreso from "./components/ingreso/Ingreso.js";



function App() {
  
  const links = [
    { href: "/productos", nombre: "Productos", id: 5 },
    { href: "/categoria/mujer", nombre: "Mujer", id: 1 },
    { href: "/categoria/hombre", nombre: "Hombre", id: 2},
    { href: "/categoria/chicos", nombre: "Chicos", id: 3},
    { href: "/marcas", nombre: "Marcas", id: 6 },
    { href: "/ingresar", nombre: "Ingresar/Registrarte", id: 4 }
]
return (
  <CustomProvider>
    <BrowserRouter>
      <Navbar links={links} />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/categoria/:nombre" element={<ItemListContainer />} />
          <Route path="/productos/:id" element={<ItemDetailContainer />} />
          <Route path="/marcas/" element={<Marcas />} />
          <Route path="/pay" element={<Pay/>}/>
          <Route path="/ingresar" element={<Ingreso />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  </CustomProvider>
);
}



export default App;
