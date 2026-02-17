import { useEffect, useState } from "react";

function sample() {
  const [members, setMembers] = useState('');
  const [count,setCount] = useState(0)
  
    useEffect(()=> {
        console.log("ejra bad code jsx");
        
    },[count])
  return (
    <>
        <button className="bg-red-200" onClick={()=>setCount(count + 1)}>Count : {count}</button>
        <br /><br />
        <input type="text"  className="bg-red-200" onChange={(e)=> setMembers(e.target.value)} />
        <p>{members}</p>
    </>
  );
}

export default sample;
