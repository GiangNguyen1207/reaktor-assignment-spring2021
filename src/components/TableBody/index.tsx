import React from "react";

import { Product } from "redux/type";

type Props = {
  jackets?: Product[];
};

const TableBody = ({ jackets }: Props) => {
  return (
    <>
      {jackets?.map((jacket) => {
        return (
          <tr key={jacket.id}>
            <td>{jacket.name}</td>
            <td>{jacket.type}</td>
            <td>{jacket.color}</td>
            <td>{jacket.price}</td>
            <td>{jacket.manufacturer}</td>
            <td>
              <button>Show availability</button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableBody;
