import { useContext } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import CartContext from "../context/CartContext";
import formatCurrency from "../utilities/formatCurrency";
import CartItem from "./CartItem";
type shopProps = {
  isOpen: boolean;
};
const ShoppingCart = ({ isOpen }: shopProps) => {
  const { closeCart, cartItems } = useContext(CartContext);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
