import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';

function App () {
  return (
    <> 
      <NavBar /> 
      <ItemListContainer gretting = "Productos" />
    </>
  );
}

export default App;