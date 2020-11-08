import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducer'

export default function useProduct() {
  const { jackets, shirts, accessories, availability } = useSelector(
    (state: RootState) => ({
      jackets: state.product.jackets,
      shirts: state.product.shirts,
      accessories: state.product.accessories,
      availability: state.product.availability,
    })
  )

  return {
    jackets,
    shirts,
    accessories,
    availability,
  }
}
