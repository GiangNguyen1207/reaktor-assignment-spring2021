import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducer'

import { getProducts } from 'redux/actions'

export default function useProduct(path: string) {
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
      jackets.length === 0 ||
      shirts.length === 0 ||
      accessories.length === 0
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
