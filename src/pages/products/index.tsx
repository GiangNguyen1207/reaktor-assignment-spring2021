import React from "react";
import { useDispatch } from "react-redux";

import useProduct from "hooks/useProduct";
import TableHeader from "components/TableHeader";
import TableBody from "components/TableBody";
import { getAvailability, decreaseProductAvailability } from "redux/actions";
import "./styles.scss";

const Jackets = () => {
  const dispatch = useDispatch();
  const { jackets, shirts, accessories, availability } = useProduct();

  const handleShowClick = async (productId: string, manufacturer: string) => {
    dispatch(getAvailability(productId, manufacturer));
  };

  const handleHideClick = (productId: string) => {
    dispatch(decreaseProductAvailability(availability, productId));
  };

  return (
    <table className="table">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        <TableBody
          products={
            location.pathname === "/"
              ? jackets
              : location.pathname === "/shirts"
              ? shirts
              : accessories
          }
          handleShowClick={handleShowClick}
          handleHideClick={handleHideClick}
          availability={availability}
        />
      </tbody>
    </table>
  );
};

export default Jackets;
