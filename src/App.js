import React,{Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom' // Switch impede que duas paginas sejam carregadas ao msm tempo no navegador

import HomePage from './Pages/homepage/Homepage'
import ShopPage from '../src/Pages/shop/ShopPage'
import Header from '../src/Components/Header/Header'
import SignInAndSignUp from './Pages/sign-in-and-sing-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.util';


 class  App extends Component {
   constructor() {
     super()
      this.state = {
        currentUser: null 
      }
   }
   unsubscribeFromAuth = null;
   componentDidMount() {
     auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth) // UserRef vindo da função
        userRef.onSnapshot(snapShot=> {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
          }
        })
      })
      }
        this.setState({currentUser: userAuth})
     })
     }
     componentWillUnmount(){
       this.unsubscribeFromAuth();
     }
   render() {
  return (
    <div>

      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/'component={HomePage}/>
      <Route path ="/shop" component={ShopPage}/>
      <Route path="/sign" component={SignInAndSignUp}/>
      </Switch>
    </div>
    
  )
}
 }
export default App;
