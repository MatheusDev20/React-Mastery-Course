import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom' // Switch impede que duas paginas sejam carregadas ao msm tempo no navegador

import HomePage from './Pages/homepage/Homepage';
import ShopPage from '../src/Pages/shop/ShopPage'



function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/'component={HomePage}/>
      <Route path ="/shop" component={ShopPage}/>
      </Switch>
    </div>
    
  )
}

export default App;
