import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducer'

import { getProducts } from 'redux/actions'
import Categories from 'constants/Categories'

export default function useProduct(path: string) {
  const { pJackets, pShirts, pAccesssories } = Categories
  const dispatch = useDispatch()
  const { jackets, shirts, accessories, availability } = useSelector(
    (state: RootState) => ({
      jackets: state.product.jackets,
      shirts: state.product.shirts,
      accessories: state.product.accessories,
      availability: state.product.availability,
    })
  )

  useEffect(() => {
    if (
      (path === `${pJackets}` && jackets.length === 0) ||
      (path === `${pShirts}` && shirts.length === 0) ||
      (path === `${pAccesssories}` && accessories.length === 0)
    ) {
      dispatch(getProducts(path))
    }
  }, [dispatch, path])

  return {
    jackets,
    shirts,
    accessories,
    availability,
  }
}
