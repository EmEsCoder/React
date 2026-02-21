import { useContext } from "react";
import UserContext from "../Context/UserContext";

function CompB () {
    const name = useContext(UserContext)
    return(
        <>
        <h1>CompB</h1>
        <h1>{name}</h1>
        </>
    )
}

export default CompB;