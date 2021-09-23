import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MenuItemForm from './components/menuItemForm'

function App() {
  return (
    <div className="App">
         <Router>
           <Route exact path="/menu-form" component={MenuItemForm} />
         </Router>
    </div>
  );
}

export default App;
