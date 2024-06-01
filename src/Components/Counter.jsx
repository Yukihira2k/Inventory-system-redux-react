
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from '../Redux/Redux-slice/counterSlice';
import { Button } from "@material-tailwind/react";


const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state)=> state.counter.value)
  return (
    <div className=" w-full h-screen ">
      <div className=' text-4xl'>
       <h1 >{count}</h1>
       <Button onClick={()=>dispatch(increment())}>+</Button>
       <Button onClick={()=>dispatch(decrement())}>-</Button>
      
       </div>
    </div>
  )
}

export default Counter
