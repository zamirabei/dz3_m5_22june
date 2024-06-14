import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const ChangeTitle = () => {

    const dispatch = useDispatch()
    const title = useSelector(state => state.title)

    function plus () {
        dispatch ({
            type: "ONE"
        })
    }
    function minus () {
        dispatch ({
            type: "-ONE"
        })
    }
    function ten () {
        dispatch ({
            type: "TEN"
        })
    }
    function tenMinus () {
        dispatch ({
            type: "-TEN"
        })
    }
    function reset () {
        dispatch ({
            type: "RESET"
        })
    }
    return (
        <div>
            <p>{title}</p>
            <button  onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
            <button onClick={ten}>10</button>
            <button onClick={tenMinus}>-10</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default ChangeTitle;