import React, { useState } from "react";
import { Product, Response } from "redux/type";
import { useDispatch } from "react-redux";

import { getAvailability } from "redux/actions";
import Button from "components/Button";

type Props = {
  availability?: Response[];
  products?: Product[];
};

const TableBody = ({ availability, products }: Props) => {
  const dispatch = useDispatch();
  const [isCLicked, setIsClicked] = useState({ numbers: [] as number[] });

  const handleShowClick = (
    productId: string,
    manufacturer: string,
    index: number
  ) => {
    dispatch(getAvailability(productId, manufacturer));
    setIsClicked({ numbers: [...isCLicked.numbers].concat(index) });
  };

  const handleHideClick = (index: number) => {
    const pos = isCLicked.numbers.indexOf(index);
    isCLicked.numbers.splice(pos, 1);
    setIsClicked({ numbers: isCLicked.numbers });
  };

  return (
    <>
      {products?.map((product, index) => {
        return (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.type}</td>
            <td>{product.color}</td>
            <td>{product.price}</td>
            <td>{product.manufacturer}</td>
            <td>
              {isCLicked.numbers.includes(index) && availability ? (
                <>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: availability?.map((el) => el.DATAPAYLOAD)[0],
                    }}
                  />
                  <Button
                    label="Hide"
                    handleClick={() => handleHideClick(index)}
                  />
                </>
              ) : (
                <Button
                  label="Show"
                  handleClick={() =>
                    handleShowClick(product.id, product.manufacturer, index)
                  }
                />
              )}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableBody;
