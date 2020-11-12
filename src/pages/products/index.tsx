import React, { useState, useMemo, useCallback } from 'react'

import Header from 'components/Header'
import NavigationBar from 'components/NavigationBar'
import useProduct from 'hooks/useProduct'
import DisplayTable from 'components/DisplayTable'
import useSearchProduct from 'hooks/useSearchProduct'
import './styles.scss'

const DisplayPage = () => {
  const [input, setInput] = useState<string>('')
  const category = location.pathname.substr(1)
  const { availability, sortedProducts } = useProduct(category)
  const { productList } = useSearchProduct(category, input)
  const tHeaders = useMemo(
    () => ['name', 'color', 'price', 'manufacturer', 'availability'],
    []
  )

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value)
    },
    [input]
  )

  return (
    <>
      <Header handleChange={handleChange} />
      <NavigationBar />
      <DisplayTable
        tHeaders={tHeaders}
        productList={productList}
        sortedProducts={sortedProducts}
        availability={availability}
      />
    </>
  )
}

export default React.memo(DisplayPage)
