import { useReducer } from "react";
import CountContext from "./CountContext";



const initial = 0;
const reducer = (state,action) => {
    if(action === 'plus') {
        return state +=1
    }else if(action === 'manfi') {
        return state -=1
    }
}


function CountProvider({ children }) {
    const [count,dispath] = useReducer(reducer,initial)
  return (
    <>
      <CountContext.Provider value={{ count, dispath }}>
        {children}
      </CountContext.Provider>
    </>
  );
}

export  default CountProvider;
