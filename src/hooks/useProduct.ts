import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _orderBy from 'lodash/orderBy'

import { RootState } from 'redux/reducer'
import { getProducts } from 'redux/actions'
import Categories from 'constants/Categories'
import { Product } from 'redux/type'

export default function useProduct(
  category: string,
  tableHeader: string,
  isSorted: boolean
) {
  const dispatch = useDispatch()
  const { pJackets, pShirts, pAccesssories } = Categories
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
      (category === `${pJackets}` && jackets.length === 0) ||
      (category === `${pShirts}` && shirts.length === 0) ||
      (category === `${pAccesssories}` && accessories.length === 0)
    ) {
      dispatch(getProducts(category))
    }
  }, [dispatch, category])

  const sortedProducts: Product[] = _orderBy(
    category === pJackets
      ? jackets
      : category === pShirts
      ? shirts
      : accessories,
    [tableHeader],
    [isSorted ? 'asc' : 'desc']
  )

  return {
    jackets,
    shirts,
    accessories,
    availability,
    sortedProducts,
  }
}
