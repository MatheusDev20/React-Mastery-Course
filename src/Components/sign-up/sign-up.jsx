import React, { Component } from 'react'
import './sign-up.styles.scss'

import FormInput from '../Form-input/Form-input'
import CustomButton from '../custom-button/CustonButton'

import {auth, createUserProfileDocument} from '../../firebase/firebase.util'

class SignUp extends Component {
    constructor() {
    super()
    this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    }
    handleSubmit = async event => {
    event.preventDefault()
     const {displayName, email, password, confirmPassword} = this.state
     if(password !== confirmPassword){
         alert("Senhas diferentes")
         return
     }
     try{
         const {user} = await auth.createUserWithEmailAndPassword(email,password)
         await createUserProfileDocument(user, {displayName});
         this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
         })
     } catch(err)
        {
            console.error(err)
        }
    }
    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]:value})
    }
    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sign-up">  
                <h2 className="title">Ainda não sou cadastra-do</h2>
                <span style={{fontWeight:'bold'}}>Cadastre-se com seu email e senha</span>
                <form onSubmit={this.handleSubmit}>
                <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={this.handleChange}
                label="Display Name"
                required
                />
                   <FormInput
                type="text"
                name="displayName"
                value={email}
                onChange={this.handleChange}
                label="Email"
                required
                />
                   <FormInput
                type="password"
                name="displayName"
                value={password}
                onChange={this.handleChange}
                label="Password"
                required
                />
                   <FormInput
                type="password"
                name="displayName"
                value={confirmPassword}
                onChange={this.handleChange}
                label="Confirm Password"
                required
                />
                <CustomButton type="submit">Cadastre-se</CustomButton>
                </form>
            </div>

        )
    }
}
export default SignUp

