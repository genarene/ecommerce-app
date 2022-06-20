import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
      </div>
    </div>
  );
};

export default Success;

// was not able to set up an account with Stripe due to location
// will look for a way to configure and finishing remaining work flow
