import React from 'react'

import TableHeader from 'components/TableHeader'
import TableBody from 'components/TableBody'
import { Product, AvailabilityData } from 'redux/type'
import './styles.scss'

type DisplayTableProps = {
  tHeaders: string[]
  productList: Product[]
  searchedProducts: Product[] | null
  availability: AvailabilityData
  isLoading: boolean
}

const DisplayTable: React.FC<DisplayTableProps> = ({
  tHeaders,
  productList,
  searchedProducts,
  availability,
  isLoading,
}: DisplayTableProps) => {
  return (
    <table className="table">
      <thead>
        <TableHeader tHeaders={tHeaders} />
      </thead>
      <tbody>
        <TableBody
          products={searchedProducts === null ? productList : searchedProducts}
          availability={availability}
          isLoading={isLoading}
        />
      </tbody>
    </table>
  )
}

export default React.memo(DisplayTable)

DisplayTable.displayName = 'DisplayTable'
