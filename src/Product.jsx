import { useParams } from "react-router-dom"

export default function Product() {
  
  const params = useParams()
  console.log('Use Paramas : ', params.id)
  const id = params.id
  console.log('Id : ', id)
  return (
    <div>Product</div>
  )
}
