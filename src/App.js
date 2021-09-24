import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MenuItemForm from './components/menuItemForm'
import MenuContainer from './containers/menuContainer'

function App() {
  return (
    <div className="App">
        <MenuContainer />
    </div>
  );
}

export default App;
