import React from 'react'

const TableHeader: React.FC = () => {
  const tHeaders = [
    'name',
    'type',
    'color',
    'price',
    'manufacturer',
    'availability',
  ]

  return (
    <tr>
      {tHeaders.map((header: string) => {
        return (
          <th className="table-header" key={header}>
            {header}
          </th>
        )
      })}
    </tr>
  )
}

export default TableHeader

TableHeader.displayName = 'TableHeader'
