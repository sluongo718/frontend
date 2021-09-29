import './App.css';
import {  Route, Switch } from "react-router-dom";

import menuItemForm from './components/menuItemForm'
import MenuContainer from './containers/menuContainer'
import menuItems from "./components/menuItems"
import menuItem from "./components/menuItem"

function App() {
  return (
    <div className="App">
     
   
        <Switch>
            <Route  exact path="/menuForm" component={menuItemForm} />
            <Route exact path="/menuItems" component={MenuContainer}  />
            <Route exact path="/menuItem" component={menuItem} />
        </Switch>
    </div>
  );
}

export default App;
