import React from 'react';
import "./Header.scss";
import logo from "../../logo/crwn.png";
import { Link } from 'react-router-dom';
import {auth} from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({currentUser, hidden}) => {
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
                <CartIcon></CartIcon>
            </div>
            {
                hidden ? null : <CartDropDown></CartDropDown>
            }
        </div>
    );
};

// const mapStateToProps = ({user, cart}) => ({
//     currentUser: user.currentUser,
//     hidden: cart.hidden
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps) (Header);