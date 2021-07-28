import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { addItemTocart } from "./helper/CartHelper";
import ImageHelper from "./helper/ImageHelper";
import { removeItemFromCart } from "./helper/CartHelper";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setreload = function (f) {
    return f;
  },
  reload = undefined,
}) => {
  const [redirect, setredirect] = useState(false);
  const [count, setcount] = useState(product.count);

  const cardTitle = product ? product.name : "A photo from pexels";
  const cardDescription = product ? product.description : "Default description";
  const cardPrice = product ? product.price : "Default price";

  const addtoACart = () => {
    addItemTocart(product, () => setredirect(true));
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button onClick={addtoACart} className="btn btn-primary mt-2 mb-2">
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setreload(!reload);
          }}
          className="btn btn-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };

  return (
    <div className="card text-dark bg-light border shadow  h-100">
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <div className="lead bg-light font-weight-normal">{cardTitle}</div>
        <p className=" bg-light font-weight-normal text-muted ">
          {cardDescription}
        </p>
        <div className="row">
          <p className="col-md-4 lead bg-light font-weight-normal">
            &#x20B9;{cardPrice}
          </p>
          <div className="col-md-8  text-right ">{showAddToCart(addtoCart)}</div>
          <div className="col-md-8 ">
            {showRemoveFromCart(removeFromCart)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
