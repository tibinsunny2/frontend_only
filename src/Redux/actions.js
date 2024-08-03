// src/redux/actions.js

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const ALL_PRODUCTS="ALL_PRODUCTS";
export const addToCart = (packageItem) => ({
  type: ADD_TO_CART,
  payload: packageItem,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
