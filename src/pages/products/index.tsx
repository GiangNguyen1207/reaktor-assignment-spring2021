import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import useProduct from 'hooks/useProduct'
import TableHeader from 'components/TableHeader'
import TableBody from 'components/TableBody'
import { getAvailability } from 'redux/actions'
import './styles.scss'

const Jackets = () => {
  const dispatch = useDispatch()
  const [id, setId] = useState<string>('')
  const [manufacturer, setManufacturer] = useState<string>('')
  const {
    jackets,
    shirts,
    accessories,
    manufacturerList,
    pAvailability,
  } = useProduct(id, manufacturer)

  const handleShowClick = (productId: string, manufacturer: string) => {
    setId(productId)
    setManufacturer(manufacturer)
    if (!manufacturerList.includes(manufacturer)) {
      dispatch(getAvailability(manufacturer))
    }
  }

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
          handleShowClick={handleShowClick}
          pAvailability={pAvailability}
        />
      </tbody>
    </table>
  )
}

export default Jackets
