import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _isEmpty from 'lodash/isEmpty'

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
    isLoading,
  } = useSelector((state: RootState) => ({
    jackets: state.product.jackets,
    shirts: state.product.shirts,
    accessories: state.product.accessories,
    availability: state.product.availability,
    searchedProducts: state.product.searchedProducts,
    isLoading: state.product.isLoading,
  }))

  useEffect(() => {
    if (
      (category === pJackets && _isEmpty(jackets)) ||
      (category === pShirts && _isEmpty(shirts)) ||
      (category === pAccessories && _isEmpty(accessories))
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
    isLoading,
  }
}
