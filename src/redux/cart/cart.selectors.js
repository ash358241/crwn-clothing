import { createSelector } from "reselect";

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce((accumulatedQuantity, cartPerItem) => accumulatedQuantity + cartPerItem.quantity, 0)
)