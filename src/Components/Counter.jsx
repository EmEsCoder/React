import { useReducer, useState } from "react";
const initialState = 0;
const reducer = (state, action) => {
  if (action === 'plus') {
    return state + 1;
  } else if (action === 'manfi') {
    return state - 1;
  } else{
    throw new Error('NaSHod')
  }
};
function Counter() {
    const [Count,dispath] = useReducer(reducer,initialState)
//   const [Count, setCount] = useState(0);
  return (
    <>
      <h2>{Count}</h2>
      {/* <div className="flex gap-2">
        <button
          onClick={() => {
            setCount(Count + 1);
          }}
          className="bg-green-300"
        >
          {" "}
          + 1
        </button>
        <button
          onClick={() => {
            setCount(Count - 1);
          }}
          className="bg-green-300"
        >
          {" "}
          - 1
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
          className="bg-green-300"
        >
          {" "}
          default
        </button>
      </div> */}
      <button onClick={()=> {dispath('plus')}} className="bg-green-400">+1</button>
      <button onClick={()=> {dispath('manfi')}} className="bg-green-800">-1</button>
    </>
  );
}

export default Counter;
