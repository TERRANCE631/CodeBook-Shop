import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context"
import { useEffect } from "react";

export const CartPage = ({title}) => {
  useEffect(() => {
    document.title = `${title} | CodeBook`
  });

  const { cartList } = useCart();

  return (
    <main>
      { cartList.length ? <CartList /> : <CartEmpty /> };          
    </main>
  )
}
