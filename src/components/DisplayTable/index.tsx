import React from 'react'
import _isEmpty from 'lodash/isEmpty'

import TableHeader from 'components/TableHeader'
import TableBody from 'components/TableBody'
import { Product, AvailabilityData } from 'redux/type'

type DisplayTableProps = {
  tHeaders: string[]
  productList: Product[]
  sortedProducts: Product[]
  availability: AvailabilityData | null
}

const DisplayTable: React.FC<DisplayTableProps> = ({
  tHeaders,
  productList,
  sortedProducts,
  availability,
}: DisplayTableProps) => {
  return (
    <table className="table">
      <thead>
        <TableHeader tHeaders={tHeaders} />
      </thead>
      <tbody>
        <TableBody
          products={_isEmpty(productList) ? sortedProducts : productList}
          availability={availability}
        />
      </tbody>
    </table>
  )
}

export default React.memo(DisplayTable)

DisplayTable.displayName = 'DisplayTable'
