import React from 'react'
import { Icon } from 'react-icons-kit'
import { sortDesc } from 'react-icons-kit/fa/sortDesc'
import { sortAsc } from 'react-icons-kit/fa/sortAsc'

type TableHeaderProps = {
  tHeaders: string[]
  handleClick: (header: string) => void
  isSorted: boolean
  selectedTableHeader: string
}
const TableHeader: React.FC<TableHeaderProps> = ({
  tHeaders,
  handleClick,
  isSorted,
  selectedTableHeader,
}: TableHeaderProps) => {
  return (
    <tr>
      {tHeaders.map((header: string) => {
        return (
          <th
            className="table-header"
            key={header}
            onClick={() => handleClick(header)}
          >
            {header}
            {selectedTableHeader === header && (
              <Icon icon={isSorted ? sortAsc : sortDesc} />
            )}
          </th>
        )
      })}
    </tr>
  )
}

export default TableHeader

TableHeader.displayName = 'TableHeader'
