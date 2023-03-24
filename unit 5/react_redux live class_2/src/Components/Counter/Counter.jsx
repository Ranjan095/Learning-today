import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { addAction, reduceAction } from '../../redux/action';
// import { addAction,reduceAction } from '../redux/Counter/action'
import  {addAction,reduceAction} from '../../redux/Counter/action';

const Counter = () => {
    
    let {counter}=useSelector((store)=>{
        console.log(store)
        return store.counter;
    });
    let dispatch=useDispatch();

    let handleAdd=()=>{
        dispatch(addAction(1))
    }
    let handleReduce=()=>{
        dispatch(reduceAction(1))
    }
    
  return (
    <div>
        <h1>Counter :{counter}</h1>

        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>reduce</button>
    </div>
  )
}

export default Counter