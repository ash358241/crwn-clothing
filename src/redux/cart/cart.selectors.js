import { createSelector } from "reselect";

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce((accumulatedQuantity, cartPerItem) => accumulatedQuantity + cartPerItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce((accumulatedQuantity, cartPerItem) => accumulatedQuantity + cartPerItem.quantity * cartPerItem.price, 0)
)