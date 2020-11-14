import React, { useState, useMemo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import _isEmpty from 'lodash/isEmpty'

import Header from 'components/Header'
import NavigationBar from 'components/NavigationBar'
import useProduct from 'hooks/useProduct'
import DisplayTable from 'components/DisplayTable'
import { Product } from 'redux/type'
import { showNotification } from 'redux/actions'

const DisplayPage = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState<string>('')
  const [searchedProducts, setSearchProducts] = useState<Product[]>([])
  const category = location.pathname.substr(1)
  const { availability, productList, searchedResults } = useProduct(
    category,
    input
  )

  const tHeaders = useMemo(
    () => ['name', 'color', 'price', 'manufacturer', 'availability'],
    []
  )

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setInput(event.target.value)
    },
    []
  )

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    if (_isEmpty(searchedResults)) {
      dispatch(showNotification('No products found. Please search again'))
    }
    event.preventDefault()
    setSearchProducts(searchedResults)
  }

  const handleRemoveSearchClick = () => {
    setInput('')
    setSearchProducts([])
  }

  return (
    <>
      <Header
        handleChange={handleChange}
        handleClick={handleClick}
        input={input}
      />
      <NavigationBar handleRemoveSearchClick={handleRemoveSearchClick} />
      <DisplayTable
        tHeaders={tHeaders}
        productList={productList}
        searchedProducts={searchedProducts}
        availability={availability}
      />
    </>
  )
}

export default React.memo(DisplayPage)
