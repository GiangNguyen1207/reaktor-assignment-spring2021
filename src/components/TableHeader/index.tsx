import React from "react";

const TableHeader = () => {
  const tHeaders = [
    "name",
    "type",
    "color",
    "price",
    "manufacturer",
    "availability",
  ];

  return (
    <tr>
      {tHeaders.map((header) => {
        return (
          <th className="table-header" key={header}>
            {header}
          </th>
        );
      })}
    </tr>
  );
};

export default TableHeader;
