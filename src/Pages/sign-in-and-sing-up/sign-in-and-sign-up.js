import React from 'react'

import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../Components/sign-in/Sign-in'
import SignUp from '../../Components/sign-up/sign-up'
const SignInAndSignUp = () => {
    return (
            <div className="sign-in-and-sign-up">
                    <SignIn/>
                    <SignUp/>
            </div>
    )
}
export default SignInAndSignUp