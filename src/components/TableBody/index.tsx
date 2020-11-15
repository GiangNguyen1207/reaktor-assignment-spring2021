import React from 'react'
import _isEmpty from 'lodash/isEmpty'

import { Product, AvailabilityData } from 'redux/type'
import Availability from 'constants/Availability'

type TableBodyProps = {
  products: Product[] | null
  availability: AvailabilityData
}

const TableBody = ({ products, availability }: TableBodyProps) => {
  const { inStock, outOfStock } = Availability

  return (
    <>
      {!_isEmpty(products) ? (
        products &&
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
        })
      ) : (
        <tr>
          <td colSpan={5} className="table-no-product">
            No products found.
          </td>
        </tr>
      )}
    </>
  )
}

export default React.memo(TableBody)

TableBody.displayName = 'TableBody'

// {products.map((product) => {
//   return (
//     <tr key={product.id}>
//       <td>{product.name}</td>
//       <td>{product.color}</td>
//       <td>{product.price}</td>
//       <td>{product.manufacturer}</td>
//       {availability[product.manufacturer] ? (
//         <td
//           dangerouslySetInnerHTML={
//             availability[product.manufacturer][product.id].includes(
//               inStock
//             )
//               ? {
//                   __html: 'In Stock',
//                 }
//               : availability[product.manufacturer][
//                   product.id
//                 ].includes(outOfStock)
//               ? {
//                   __html: 'Out of Stock',
//                 }
//               : { __html: 'Less than 10' }
//           }
//         />
//       ) : (
//         <td>Loading...</td>
//       )}
//     </tr>
//   )
// })
// }
