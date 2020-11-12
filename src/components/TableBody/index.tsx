import React from 'react'

import { Product, AvailabilityData } from 'redux/type'

type TableBodyProps = {
  products: Product[]
  availability: AvailabilityData | null
}

const TableBody = ({ products, availability }: TableBodyProps) => {
  return (
    <>
      {products.map((product) => {
        return (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.color}</td>
            <td>{product.price}</td>
            <td>{product.manufacturer}</td>
            {availability && availability[product.manufacturer] ? (
              <td
                dangerouslySetInnerHTML={{
                  __html: availability[product.manufacturer][product.id],
                }}
              />
            ) : (
              <td>Loading...</td>
            )}
          </tr>
        )
      })}
    </>
  )
}

export default React.memo(TableBody)

TableBody.displayName = 'TableBody'
