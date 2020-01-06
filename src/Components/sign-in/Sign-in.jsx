import React, {Component} from 'react'
import FormInput from '../Form-input/Form-input'
import CustomButton from '../custom-button/CustonButton'
import './sign-in.styles.scss'
class SignIn extends Component {
    constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: ''
    }

    }
    handleSubmit = event =>{
      event.preventDefault()
    }
    handleChange = event => {
        const {value,name} = event.target
        this.setState({[name]: value}) // setState dinâmico usando o [name] que pode servir tanto como password
                                        // tanto como email, eu usaria um setState pra cada

    }
    render() {
        return (
            <div className="sign-in">
                    <h2>Already have an Account</h2>
                    <span style={{fontWeight:'bold'}}>Sign in with ur email and password</span>

                        <form onSubmit={this.handleSubmit}>
                            <FormInput
                            type="email"
                            name="email" 
                            label="Email"
                            value={this.state.email} 
                            handleChange={this.handleChange}
                            required />
                            <FormInput
                            type="password"
                            name="password" 
                            label="Password"
                            value={this.state.password}
                            handleChange={this.handleChange}
                            required
                            /> 
                          <CustomButton type="submit">
                              Sign in
                          </CustomButton>
                        
                        </form>
            </div>
        )

    }
}
export default SignIn