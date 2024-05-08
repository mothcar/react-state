import { useHotel } from './store/hotelStore'

export default function About() {
  const hotel = useHotel((state)=>state.hotel)
  return (
    <>
      <div>About</div>
      <div>val : {hotel}</div>
    </>
    
  )
}
