import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import "./CartDropDown.scss";
import {selectCartItems} from "../../redux/cart/cart.selectors"; 
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import {toggleCartHidden} from '../../redux/cart/cart.action';

const CartDropDown = ({cartItem, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItem.length ?
                    (cartItem.map(cartPerItem => <CartItem key={cartPerItem.id} item={cartPerItem}></CartItem>))
                    : 
                    (<span className="empty-message">Your cart is empty</span>)
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps =  createStructuredSelector({
    cartItem: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown)) ;