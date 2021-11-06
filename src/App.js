import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Definition from './pages/Definition';
import History from './pages/History';
import Types from './pages/Types';
import SingleCocktail from './pages/SingleCocktail'

import Navbar from './components/Navbar';
import Submenu from './components/Submenu';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Submenu/>
      <Sidebar/>
      <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route path='/definition'>
          <Definition/>
        </Route>
        <Route path='/history'>
          <History/>
        </Route>
        <Route path='/types'>
          <Types/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
