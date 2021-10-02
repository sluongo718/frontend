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
    <div className="App">
        
        <Nav />
        <MenuContainer/>
       
        
       
         {/* <Switch>
            <Route exact path="/" component={homePage} />
            <Route  exact path="/menuForm" component={menuItemForm} />
            <Route exact path="/menuItems" component={MenuContainer}  />
            <Route exact path="/menuItem/:id" render={(routerProps) => <MenuItem {...routerProps} items={menuItems} /> } />
        </Switch> */}
        

    </div>
  );
}

export default App;
