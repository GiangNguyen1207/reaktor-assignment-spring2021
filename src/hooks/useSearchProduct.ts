import { useEffect, useState } from 'react'

import useProduct from './useProduct'
import { Product } from 'redux/type'

export default function useSearchProduct(category: string, input: string) {
  const [productList, setProductList] = useState<Product[]>([])
  const { sortedProducts } = useProduct(category)

  let searchedProducts: Product[] = []
  useEffect(() => {
    searchedProducts = sortedProducts.filter((p) =>
      p.name.toLowerCase().includes(input.toLowerCase())
    )
    setProductList(searchedProducts)
  }, [category, input])

  return {
    productList,
  }
}
