import React from 'react'
import _isEmpty from 'lodash/isEmpty'

import { Product, AvailabilityData } from 'redux/type'
import Availability from 'constants/Availability'

type TableBodyProps = {
  products: Product[] | null
  availability: AvailabilityData
  isLoading: boolean
}

const TableBody = ({ products, availability, isLoading }: TableBodyProps) => {
  const { inStock, outOfStock } = Availability

  return (
    <>
      {!isLoading ? (
        products && !_isEmpty(products) ? (
          products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.color}</td>
                <td>{product.price}</td>
                <td>{product.manufacturer}</td>
                {availability[product.manufacturer] ? (
                  <td
                    dangerouslySetInnerHTML={
                      availability[product.manufacturer][product.id].includes(
                        inStock
                      )
                        ? {
                            __html: 'In Stock',
                          }
                        : availability[product.manufacturer][
                            product.id
                          ].includes(outOfStock)
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
          })
        ) : (
          <td colSpan={5} className="table-row">
            No products found.
          </td>
        )
      ) : (
        <td colSpan={5} className="table-row">
          Loading products...
        </td>
      )}
    </>
  )
}

export default React.memo(TableBody)

TableBody.displayName = 'TableBody'
