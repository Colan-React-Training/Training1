import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../Counter';
import {increment, decrement} from './actions/CounterAction'

const AppRedux = () => {
  const count = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className='row'>
      <button className='primary' onClick={() => dispatch(increment())}>Inc</button>
<h1>{count.counter}</h1>
<button className='primary' onClick={() => dispatch(decrement())}>Dec</button>
    </div>
  )
}

export default AppRedux