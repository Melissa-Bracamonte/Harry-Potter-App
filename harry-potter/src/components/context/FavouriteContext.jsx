import React, { useState } from "react";
import PropTypes from "prop-types";

const FavouriteContext = React.createContext();

export const OrderContextProvider = (props) => {
  const [order, setOrder] = useState([]);
  const [amount, setAmount] = useState(0);

  const sendContextOrder = (meals) => {
    setOrder(meals);
  };
  const sendContextAmount = (total) => {
    setAmount(total);
  };

  return (
    <FavouriteContext.Provider
      value={{ order, sendContextOrder, amount, sendContextAmount }}
    >
      {props.children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContext;

OrderContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};