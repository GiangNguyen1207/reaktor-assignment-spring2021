import React from 'react'
import { Product } from 'redux/type'

import Button from 'components/Button'
import { Availability } from 'redux/type'

type TableBodyProps = {
  products: Product[]
  handleShowClick: (productId: string, manufacturer: string) => void
  pAvailability: Availability[]
}

const TableBody = ({
  products,
  handleShowClick,
  pAvailability,
}: TableBodyProps) => {
  return (
    <>
      {products.map((product) => {
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
                <p
                  dangerouslySetInnerHTML={{
                    __html: pAvailability.map((p) => p.DATAPAYLOAD)[0] || '',
                  }}
                />
              ) : (
                <Button
                  label="Show"
                  handleClick={() => {
                    handleShowClick(product.id, product.manufacturer)
                  }}
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

TableBody.displayName = 'TableBody'
