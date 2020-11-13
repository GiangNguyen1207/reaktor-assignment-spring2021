import React, { useState, useMemo, useCallback } from 'react'

import Header from 'components/Header'
import NavigationBar from 'components/NavigationBar'
import useProduct from 'hooks/useProduct'
import DisplayTable from 'components/DisplayTable'
import { Product } from 'redux/type'

const DisplayPage = () => {
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
      setInput(event.target.value)
    },
    [input]
  )

  const handleClick = () => {
    setSearchProducts(searchedResults)
  }

  return (
    <>
      <Header handleChange={handleChange} handleClick={handleClick} />
      <NavigationBar />
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

// let searchedProducts: Product[] = []
// if (input) {
//   if (category === pJackets) {
//     searchedProducts = jackets.filter((p) =>
//       p.name.toLowerCase().includes(input.toLowerCase())
//     )
//   } else if (category === pShirts) {
//     searchedProducts = shirts.filter((p) =>
//       p.name.toLowerCase().includes(input.toLowerCase())
//     )
//   } else {
//     searchedProducts = accessories.filter((p) =>
//       p.name.toLowerCase().includes(input.toLowerCase())
//     )
//   }
// }
// console.log(searchedProducts)

// const sortedProducts: Product[] = _orderBy(
//   category === pJackets
//     ? _isEmpty(searchedProducts)
//       ? jackets
//       : searchedProducts
//     : category === pShirts
//     ? _isEmpty(searchedProducts)
//       ? shirts
//       : searchedProducts
//     : _isEmpty(searchedProducts)
//     ? accessories
//     : searchedProducts,
//   ['name'],
//   ['asc']
// )
// setProductList(sortedProducts)
