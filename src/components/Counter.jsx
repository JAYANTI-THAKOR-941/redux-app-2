import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/countAction';

const Counter = () => {

    const count = useSelector(state=>state.count);

    const dispatch = useDispatch();

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increase</button>
        <button onClick={()=>dispatch(decrement())}>Decrease</button>
    </div>
  )
}

export default Counter