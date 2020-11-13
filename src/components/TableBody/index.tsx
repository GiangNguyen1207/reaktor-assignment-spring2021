import React from 'react'

import { Product, AvailabilityData } from 'redux/type'
import Availability from 'constants/Availability'

type TableBodyProps = {
  products: Product[]
  availability: AvailabilityData | null
}

const TableBody = ({ products, availability }: TableBodyProps) => {
  const { inStock, outOfStock } = Availability

  return (
    <>
      {products.length > 0 &&
        products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.color}</td>
              <td>{product.price}</td>
              <td>{product.manufacturer}</td>
              {availability && availability[product.manufacturer] ? (
                <td
                  dangerouslySetInnerHTML={
                    availability[product.manufacturer][product.id].includes(
                      inStock
                    )
                      ? {
                          __html: 'In Stock',
                        }
                      : availability[product.manufacturer][product.id].includes(
                          outOfStock
                        )
                      ? {
                          __html: 'Out of Stock',
                        }
                      : { __html: 'Less than 10' }
                  }
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
