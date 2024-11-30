import { useLocation } from "react-router-dom";
import { OrderFail } from "./components/OrderFail"
import { OrderSuccess } from "./components/OrderSuccess"
import { useEffect } from "react";

export const OrderPage = ({title}) => {
  useEffect(() => {
    document.title = `${title} | CodeBook`
  });

  const { state } = useLocation();

  return (
    <main>
      { state.status ? <OrderSuccess data={state.data}/> : <OrderFail />}
    </main>
  )
}
