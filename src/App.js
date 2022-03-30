import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import itemListContainer from './components/ItemListContainer';

function App () {
  return (
    <> 
      <NavBar /> 
      <itemListContainer gretting = "Productos" />
    </>
  );
}

export default App;
