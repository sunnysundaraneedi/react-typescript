import { useContext } from "react";
import { Navbar as NavbarBs } from "react-bootstrap";
import { Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartContext from "../context/CartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useContext(CartContext);

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store">
            Store
          </Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          className="rounded-circle"
          variant="outline-primary"
          style={{ position: "relative" }}
        >
          <i
            className="uil uil-shopping-cart-alt"
            style={{ fontSize: "1.5rem" }}
          ></i>
          <span
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              position: "absolute",
              padding: "4px",
              width: "25px",
              height: "25px",
              color: "white",
              bottom: "0",
              right: "0",
              transform: "translate(25%,25%)",
            }}
          >
            {cartQuantity}
          </span>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
