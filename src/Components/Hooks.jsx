import { useState } from "react";

function sample() {
  const [members, setMembers] = useState(["mamad", "taqi", "hosein"]);
  let [newMember,setNewMember] = useState('');
//   console.log(newMember);
  

  return (
    <>
      <input
        type="text"
        className="bg-red-300"
        onChange={(e) => {
            setNewMember(e.target.value)
            
        }}
      />
      <button className="bg-blue-400" onClick={()=> {setMembers([...members,newMember])}}>ADD TO LIST</button>
      <ul>
        {members.map((evo) => {
          return (
            <li className="ml-5" key={evo}>
              {evo}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default sample;
