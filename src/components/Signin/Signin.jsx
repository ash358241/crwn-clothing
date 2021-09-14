import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import "./Signin.scss";

import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

class Signin extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        }
        catch(error){
            console.error(error);
        }
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} label="email" required handleChange={this.handleChange} />
                    <FormInput type="password" name="password" value={this.state.password} label="password" required handleChange={this.handleChange} />
            
                    <div className="buttons">
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin;