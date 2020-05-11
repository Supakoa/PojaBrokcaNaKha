/**
 * TODO: Can delete it
 */
import React from "react";
import { useSelector } from "react-redux";

function Temp () {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)

    return (
        <div className="Temp">
            <h1>Counter: {counter}</h1>
            {
                isLogged ? <h1>welcome</h1> : <h1>login</h1>
            }
        </div>
    )
}

export default Temp
