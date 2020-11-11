import React, { useState } from 'react'

import useProduct from 'hooks/useProduct'
import TableHeader from 'components/TableHeader'
import TableBody from 'components/TableBody'

import './styles.scss'

const Jackets = () => {
  const category = location.pathname.substr(1)
  const [isSorted, setIsSorted] = useState<boolean>(true)
  const [tableHeader, setTableHeader] = useState<string>('name')
  const { availability, sortedProducts } = useProduct(
    category,
    tableHeader,
    isSorted
  )
  const tHeaders = [
    'name',
    'type',
    'color',
    'price',
    'manufacturer',
    'availability',
  ]

  const handleClick = (tableHeader: string) => {
    setTableHeader(tableHeader)
    setIsSorted(!isSorted)
  }

  return (
    <table className="table">
      <thead>
        <TableHeader
          tHeaders={tHeaders}
          handleClick={handleClick}
          isSorted={isSorted}
          selectedTableHeader={tableHeader}
        />
      </thead>
      <tbody>
        <TableBody products={sortedProducts} availability={availability} />
      </tbody>
    </table>
  )
}

export default Jackets
