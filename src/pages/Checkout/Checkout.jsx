import React from "react";
import { CheckoutContainerStyled } from "./CheckoutStyles";

import CheckoutForm from '../../components/Checkout/Form/CheckoutForm';
import ProductsCheckout from '../../components/Checkout/Products/ProductsCheckout';
import { useSelector } from "react-redux";
const Checkout = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  const price = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);
  return (
    <CheckoutContainerStyled>
      <CheckoutForm
        cartItems={cartItems}
        price={price}
        shippingCost={shippingCost}
      />
      <ProductsCheckout
        cartItems={cartItems}
        price={price}
        shippingCost={shippingCost}
      />
    </CheckoutContainerStyled>
  );
};

export default Checkout;
