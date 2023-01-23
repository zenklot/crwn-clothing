import {
  RemoveButton,
  CheckoutItemContainer,
  ImageContainer,
  ItemCart,
  Quantity,
  Arrow,
  Value,
} from "./checkout-item.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemToCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { FC } from "react";
import { CartItems } from "../../store/cart/cart.types";


type CheckoutItemProps = {
  cartItem : CartItems
}

const CheckoutItem : FC<CheckoutItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemToCart(cartItems, cartItem));
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <ItemCart>{name}</ItemCart>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <ItemCart>{price}</ItemCart>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
