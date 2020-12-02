import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/CartHelper";
import Stripe from "react-stripe-checkout";
import { API } from "../backend";
import createOrder from "./helper/OrderHelper";

const StripeCheckout = ({
  products,
  setreload = (f) => f,
  reload = undefined,
}) => {
  const [data, setdata] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });

  const token = isAuthenticated() && isAuthenticated().token;
  const userId = isAuthenticated() && isAuthenticated().user._id;

  const getFinalPrice = () => {
    let amount = 0;
    products.map((p) => {
      amount = amount + p.price;
    });
    return amount;
  };

  const makePayment = (token) => {
    const body = {
      token,
      products,
    };

    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`${API}/stripepayment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
        const {status} = response
    
      })
      .catch((err) => console.log(err));
  };

  const showStripeButton = () => {
    return isAuthenticated() ? (
      <Stripe
        stripeKey="pk_test_51HqzQpKSGvI76IpfKkh5OFLU5AWRyZzuN3JI8Yf9at8ElYfrHu6aXt7vGnfr6Wj7UsJKxU1i2SD3zMquR8DxErpc00qG6q2kg1"
        token={makePayment}
        amount={getFinalPrice() * 100}
        name="Buy T-shirts"
        shippingAddress
        billingAddress
      >
        <button className="btn btn-primary">pay with stripe</button>
      </Stripe>
    ) : (
      <Link to="/signin">
        <button className="btn btn-warning">signin</button>
      </Link>
    );
  };

  return (
    <div>
      <h3>Stripecheckout {getFinalPrice()}</h3>
      {showStripeButton()}
    </div>
  );
};
export default StripeCheckout;
