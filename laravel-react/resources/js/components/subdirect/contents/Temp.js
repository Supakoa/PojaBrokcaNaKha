import React from "react";
import { useSelector } from "react-redux";

function Temp () {
    const counter = useSelector(state => state.counter)

    return (
        <div className="Temp">
            <h1>Counter: {counter}</h1>
        </div>
    )
}

export default Temp