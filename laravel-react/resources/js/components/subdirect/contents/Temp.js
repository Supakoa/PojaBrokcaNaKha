/**
 * TODO: Can delete it
 */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../redux/actions";

function Temp () {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

    return (
        <div className="Temp">
            <h1>Counter: {counter}</h1>
            <button className="p-2 m-2" onClick={() => dispatch(increment(4))}> + </button>
            <button className="p-2 m-2" onClick={() => dispatch(decrement(2))}> - </button>
            {
                isLogged ? <h1>welcome</h1> : <h1>login</h1>
            }
        </div>
    )
}

export default Temp
