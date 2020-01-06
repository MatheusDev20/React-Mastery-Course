import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom' // Switch impede que duas paginas sejam carregadas ao msm tempo no navegador

import HomePage from './Pages/homepage/Homepage'
import ShopPage from '../src/Pages/shop/ShopPage'
import Header from '../src/Components/Header/Header'
import SignInAndSignUp from './Pages/sign-in-and-sing-up/sign-in-and-sign-up';


function App() {
  return (
    <div>

      <Header/>
      <Switch>
      <Route exact path='/'component={HomePage}/>
      <Route path ="/shop" component={ShopPage}/>
      <Route path="/sign" component={SignInAndSignUp}/>
      </Switch>
    </div>
    
  )
}

export default App;
