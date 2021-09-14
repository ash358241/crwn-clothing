import React from 'react';
import Signin from '../../components/Signin/Signin';
import SignUp from '../../components/SignUp/SignUp';
import "./SignInAndSignUp.scss";

const SignInAndSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <Signin></Signin>
            <SignUp></SignUp>
        </div>
    );
};

export default SignInAndSignUp;