import React from 'react';
import { useReducer } from 'react';

const Counter = () => {

    const initialState = 0;

    const reducer = (state, action) => {
        console.log(action)
        if (action.type === "INCREMENT") {
            return state + action.payload;
        }
        else if (action.type === "DECREMENT") {
            return state - action.payload;
        } else {
            return;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div className='flex justify-between w-52 mx-auto pt-64'>
            <button type="button" onClick={() => dispatch({ type: "INCREMENT", payload: 3 })} className="text-9xl mx-5">+</button>
            <h1 className='text-9xl'>{state}</h1>
            <button type="button" onClick={() => dispatch({ type: "DECREMENT", payload: 3 })} className=" text-9xl mx-5 ">-</button>
        </div>
    );
};

export default Counter;