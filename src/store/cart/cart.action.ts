import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES, CartItems } from "./cart.types";
import { CategoryItem } from "../categories/category.types";
import { ActionWithPayload, withMacher } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems: CartItems[], productToAdd : CategoryItem) : CartItems[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems : CartItems[], cartItemToRemove : CartItems) : CartItems[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems : CartItems[], clearItemFromCart: CartItems) : CartItems[] => {
  return cartItems.filter((cartItem) => cartItem.id !== clearItemFromCart.id);
};

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItems[]>

export const setIsCartOpen = withMacher((boolean : boolean) : SetIsCartOpen =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));


export const setCartItems =withMacher((cartItems : CartItems[]) : SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems))


export const addItemToCart = (cartItems: CartItems[], productToAdd : CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems)
};

export const removeItemToCart = (cartItems : CartItems[], cartItemToRemove: CartItems) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems)
};

export const clearItemFromCart = (cartItems : CartItems[], clearItemFromCart: CartItems) => {
  const newCartItems = clearCartItem(cartItems, clearItemFromCart);
  return setCartItems(newCartItems)
};
