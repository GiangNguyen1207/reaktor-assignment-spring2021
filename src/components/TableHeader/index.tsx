import React from 'react'

type TableHeaderProps = {
  tHeaders: string[]
}
const TableHeader: React.FC<TableHeaderProps> = ({
  tHeaders,
}: TableHeaderProps) => {
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

export default React.memo(TableHeader)

TableHeader.displayName = 'TableHeader'
