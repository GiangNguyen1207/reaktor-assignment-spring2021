import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducer'
import { Availability } from 'redux/type'

export default function useProduct(productId: string, manufacturer: string) {
  const { jackets, shirts, accessories, availability } = useSelector(
    (state: RootState) => ({
      jackets: state.product.jackets,
      shirts: state.product.shirts,
      accessories: state.product.accessories,
      availability: state.product.availability,
    })
  )

  let pAvailability: Availability[] = []
  const manufacturerList = availability.map((man) => man.manufacturer)
  const manufacturerData = availability.find(
    (man) => man.manufacturer === manufacturer
  )
  if (manufacturerData) {
    pAvailability = manufacturerData?.data.filter(
      (p) => p.id.toLowerCase() === productId
    )
  }

  return {
    jackets,
    shirts,
    accessories,
    availability,
    productId,
    manufacturerList,
    pAvailability,
  }
}
