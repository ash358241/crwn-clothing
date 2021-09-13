import React from 'react';
import "./Header.scss";
import logo from "../../logo/crwn.png";
import { Link } from 'react-router-dom';
import {auth} from "../../firebase/firebase.utils";

const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img style={{width:'50px'}} src={logo} alt="" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :  
                    <Link className="option" to="/signIn">SIGN IN</Link>
                }
            </div>
        </div>
    );
};

export default Header;