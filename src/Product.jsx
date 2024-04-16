import {useSelector,useDispatch} from "react-redux"
import { addqty ,addproduct} from "./features/counter/productSlice"

const Product = () => {
    let product = useSelector((item) => item.product)
    let dispatch = useDispatch()
    console.log(product)
  return (
    <div>

        {product.phonecategory.map((pt) => (
            <div key={pt.id}>
                <div>{pt.productName}</div>
                <div>{pt.productPrice}</div>
                <div>{pt.description}</div>
                <div>{pt.qty}</div>
                <button onClick={()=>dispatch(addqty(pt.id))}>add</button>
                <br />
            </div>
        ))}



        <button onClick={()=>dispatch(addproduct({name:'samsung',price:400}))}>add prod</button>

    </div>
  )
}

export default Product