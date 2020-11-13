import React from 'react'
import _isEmpty from 'lodash/isEmpty'

import TableHeader from 'components/TableHeader'
import TableBody from 'components/TableBody'
import { Product, AvailabilityData } from 'redux/type'
import './styles.scss'

type DisplayTableProps = {
  tHeaders: string[]
  productList: Product[]
  searchedProducts: Product[]
  availability: AvailabilityData | null
}

const DisplayTable: React.FC<DisplayTableProps> = ({
  tHeaders,
  productList,
  searchedProducts,
  availability,
}: DisplayTableProps) => {
  return (
    <table className="table">
      <thead>
        <TableHeader tHeaders={tHeaders} />
      </thead>
      <tbody>
        <TableBody
          products={_isEmpty(searchedProducts) ? productList : searchedProducts}
          availability={availability}
        />
      </tbody>
    </table>
  )
}

export default React.memo(DisplayTable)

DisplayTable.displayName = 'DisplayTable'
