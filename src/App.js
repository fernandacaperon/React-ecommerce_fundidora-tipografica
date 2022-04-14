import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
// import ItemCount from './components/ItemCount';



function App () {
  return (
    <> 
      <NavBar /> 
      <ItemListContainer gretting = "Productos" />
      <ItemDetailContainer gretting = "Detalle" />
      {/* <ItemCount stock = {5} initial= {1} /> */}
    </>
  );
}
export default App;