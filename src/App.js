import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import itemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App () {
  return (
    <> 
      <NavBar /> 
      <itemListContainer gretting = "Productos" />
      <ItemCount stock = {5} initial= {1} onAdd={onAdd} />
    </>
  );
}

export default App;
