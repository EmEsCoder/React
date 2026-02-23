import { useReducer, useState } from "react";
const initialState = {
    name : '',
    count : 0
};
const reducer = (state, action) => {
  if (action.type === 'plus') {
    return {...state, count:state.count + action.payload};
  } else if (action === 'manfi') {
    return {...state, count:state.count - 1};
  } else{
    throw new Error('NaSHod')
  }
};
function Counter() {
    const [state,dispath] = useReducer(reducer,initialState)
  return (
    <>
      <h2>{state.count}</h2>
        {/* <button onClick={()=>{dispath('plus')}} className="bg-green-400">+1</button>
        <button onClick={()=>{dispath('manfi')}} className="bg-green-800">-1</button> */}
        <button onClick={()=>{dispath({type : 'plus',payload:5})}} className="bg-green-400">+</button>
        <button onClick={()=>{dispath('manfi')}} className="bg-green-800">-1</button>
    </>
  );
}

export default Counter;
