import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";
import { FC } from "react";
import { CartItems as TCartItem } from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem : TCartItem
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
