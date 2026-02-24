import { useContext, useReducer } from "react";
import UserContext from "../Context/UserContext";
import CountContext from "../Context/CountContext";




function CompB () {
    const name = useContext(UserContext);
    const {count,dispath} = useContext(CountContext)
    return(
        <>
        <h1>CompB</h1>
        <h1>{count}</h1>
        <button className="bg-green-200" onClick={() => {dispath('plus')}}>plus</button>
        <button className="bg-green-600" onClick={() => {dispath('manfi')}}>manfi</button>
        </>
    )
}

export default CompB;