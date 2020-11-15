import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'redux/reducer'
import { getProducts } from 'redux/actions'
import Categories from 'constants/Categories'

export default function useProduct(category: string, input: string) {
  const dispatch = useDispatch()
  const { pJackets, pShirts, pAccessories } = Categories

  const {
    jackets,
    shirts,
    accessories,
    availability,
    searchedProducts,
  } = useSelector((state: RootState) => ({
    jackets: state.product.jackets,
    shirts: state.product.shirts,
    accessories: state.product.accessories,
    availability: state.product.availability,
    searchedProducts: state.product.searchedProducts,
  }))

  useEffect(() => {
    if (
      (category === pJackets && jackets.length === 0) ||
      (category === pShirts && shirts.length === 0) ||
      (category === pAccessories && accessories.length === 0)
    ) {
      dispatch(getProducts(category))
    }
  }, [dispatch, category, input, jackets, shirts, accessories])

  return {
    jackets,
    shirts,
    accessories,
    availability,
    searchedProducts,
  }
}
