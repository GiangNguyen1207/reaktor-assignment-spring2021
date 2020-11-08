import React from 'react'

import useProduct from 'hooks/useProduct'
import TableHeader from 'components/TableHeader'
import TableBody from 'components/TableBody'
import './styles.scss'

const Jackets = () => {
  const { jackets, shirts, accessories, availability } = useProduct()

  return (
    <table className="table">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        <TableBody
          products={
            location.pathname === '/jackets'
              ? jackets
              : location.pathname === '/shirts'
              ? shirts
              : accessories
          }
          availability={availability}
        />
      </tbody>
    </table>
  )
}

export default Jackets
