import React from "react";

import useProduct from "hooks/useProduct";
import TableHeader from "components/TableHeader";
import TableBody from "components/TableBody";
import "./styles.scss";

const Jackets = () => {
  const { jackets, shirts, accessories } = useProduct();

  return (
    <table className="table">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        <TableBody
          jackets={
            location.pathname === "/"
              ? jackets
              : location.pathname === "/shirts"
              ? shirts
              : accessories
          }
        />
      </tbody>
    </table>
  );
};

export default Jackets;
