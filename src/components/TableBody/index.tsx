import React from 'react'
import { Product } from 'redux/type'

import Button from 'components/Button'
import { Availability, AvailabilityData } from 'redux/type'

type Props = {
  products?: Product[]
  handleShowClick: (productId: string, manufacturer: string) => void
  handleHideClick: (productId: string) => void
  pAvailability: Availability[]
}

const TableBody = ({
  products,
  handleShowClick,
  handleHideClick,
  pAvailability,
}: Props) => {
  return (
    <>
      {products?.map((product) => {
        return (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.type}</td>
            <td>{product.color}</td>
            <td>{product.price}</td>
            <td>{product.manufacturer}</td>
            <td>
              {pAvailability
                .map((p) => p.id.toLowerCase())
                .includes(product.id) ? (
                <>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        pAvailability.find(
                          (el) => el.id.toLowerCase() === product.id
                        )?.DATAPAYLOAD || '',
                      //pAvailability.map((el) => el.DATAPAYLOAD)[0] || '',
                    }}
                  />
                  <Button
                    label="Hide"
                    handleClick={() => handleHideClick(product.id)}
                  />
                </>
              ) : (
                <Button
                  label="Show"
                  handleClick={() =>
                    handleShowClick(product.id, product.manufacturer)
                  }
                />
              )}
            </td>
          </tr>
        )
      })}
    </>
  )
}

export default TableBody
