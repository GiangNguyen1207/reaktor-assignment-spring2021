import React, { useState, useMemo, useCallback } from 'react'

import Header from 'components/Header'
import NavigationBar from 'components/NavigationBar'
import useProduct from 'hooks/useProduct'
import DisplayTable from 'components/DisplayTable'
import useSearchProduct from 'hooks/useSearchProduct'
import { Product } from 'redux/type'

const DisplayPage = () => {
  const [input, setInput] = useState<string>('')
  const [searchedProducts, setSearchProducts] = useState<Product[]>([])
  const category = location.pathname.substr(1)
  const { productList } = useSearchProduct(category, input)
  const { availability, sortedProducts } = useProduct(category)

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

  const handleClick = () => {
    setSearchProducts(productList)
  }

  return (
    <>
      <Header handleChange={handleChange} handleClick={handleClick} />
      <NavigationBar />
      <DisplayTable
        tHeaders={tHeaders}
        productList={searchedProducts}
        sortedProducts={sortedProducts}
        availability={availability}
      />
    </>
  )
}

export default React.memo(DisplayPage)
