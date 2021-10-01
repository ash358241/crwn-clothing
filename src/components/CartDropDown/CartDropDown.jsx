import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import "./CartDropDown.scss";
import {selectCartItems} from "../../redux/cart/cart.selectors";

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

const mapStateToProps = (state) => ({
    cartItem: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown) ;