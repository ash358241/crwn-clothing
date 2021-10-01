import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import "./CartDropDown.scss";

const CartDropDown = ({cartItem}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItem.map(cartPerItem => <CartItem key={cartPerItem.id} item={cartPerItem}></CartItem>)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = ({cart: {cartItem}}) => ({
    cartItem
})

export default connect(mapStateToProps)(CartDropDown) ;