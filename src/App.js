import React from 'react';

//CSS
import './estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemlist/ItemListContainer';




function App() {
  
  

  return (
<>
<Navbar />
<ItemListContainer name="MDQ" days={56} occupation="developers software de RedNet" />  
</>
  );
}

export default App;
