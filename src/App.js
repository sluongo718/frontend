import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import menuItemForm from './components/menuItemForm'
import MenuContainer from './containers/menuContainer'
import menuItems from "./components/menuItems"
import MenuItem from "./components/menuItem"
import homePage from "./components/homePage";
import Nav from "./components/nav";
import menuContainer from './containers/menuContainer';

function App() {
  return (
    <div >
        
        <Nav />
        <MenuContainer/>
    </div>
  );
}

export default App;
