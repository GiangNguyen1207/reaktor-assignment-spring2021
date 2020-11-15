import React, { useState, useMemo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import Header from 'components/Header'
import NavigationBar from 'components/NavigationBar'
import useProduct from 'hooks/useProduct'
import DisplayTable from 'components/DisplayTable'
import { searchProduct, removeSearchedProduct } from 'redux/actions'
import Categories from 'constants/Categories'

const DisplayPage = () => {
  const dispatch = useDispatch()
  const category = location.pathname.substr(1)
  const [input, setInput] = useState<string>('')
  const { pJackets, pShirts } = Categories
  const {
    jackets,
    shirts,
    accessories,
    availability,
    searchedProducts,
  } = useProduct(category, input)

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
    event.preventDefault()
    dispatch(searchProduct(category, input))
  }

  const handleRemoveSearchClick = () => {
    setInput('')
    dispatch(removeSearchedProduct())
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
        productList={
          category === pJackets
            ? jackets
            : category === pShirts
            ? shirts
            : accessories
        }
        searchedProducts={searchedProducts}
        availability={availability}
      />
    </>
  )
}

export default React.memo(DisplayPage)
