import React from 'react'
import { Product, AvailabilityData } from 'redux/type'

type TableBodyProps = {
  products: Product[]
  availability: AvailabilityData[]
}

const TableBody = ({ products, availability }: TableBodyProps) => {
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
            <td
              dangerouslySetInnerHTML={{
                __html:
                  availability
                    .find((man) => man.manufacturer === product.manufacturer)
                    ?.data.find((p) => p.id.toLowerCase() === product.id)
                    ?.DATAPAYLOAD || 'Loading...',
              }}
            />
          </tr>
        )
      })}
    </>
  )
}

export default TableBody

TableBody.displayName = 'TableBody'
