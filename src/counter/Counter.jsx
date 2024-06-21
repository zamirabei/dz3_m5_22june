import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset} from "../store/postSlice";
import {Link} from "react-router-dom";

const Counter = () => {
    const counter = useSelector(state => state.postSlice.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={()=>dispatch(increment(1))} >+1</button>
            <button onClick={()=>dispatch(decrement(1))}>-1</button>
            <button onClick={()=>dispatch(increment(10))}>+10</button>
            <button onClick={()=>dispatch(decrement(10))}>-10</button>
            <button onClick={()=>dispatch(reset())}>reset</button>
            <p>{counter}</p>
            <Link to={'/'}>
                <button>go home</button>
            </Link>
        </div>
    );
};

export default Counter;