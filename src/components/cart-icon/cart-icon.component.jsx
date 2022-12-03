import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
