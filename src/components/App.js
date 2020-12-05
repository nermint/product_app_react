import React from 'react';

// router
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';

// components
import Nav from './Nav';
import Home from './Home';
import Cart from './Cart';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

function App(){

  return(
    <div>
      <Router>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/cart" component={Cart}/>
            <Route  path="/add" component={AddProduct}/>
            <Route path="/update/:id" component={UpdateProduct}/>
            </Switch>
        </Router>
    </div>
   
  )

}

export default App;