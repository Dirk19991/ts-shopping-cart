import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
        Cart
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}></Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
