import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Stack, Button } from "react-bootstrap";
import items from "../data/items.json";
import formatCurrency from "../utilities/formatCurrency";

type cartProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: cartProps) => {
  const { removeFromCart } = useContext(CartContext);
  const item = items.find((it) => it.id === id);

  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ height: "75px", width: "125px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              X {quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
