import { useState } from "react";

function sample() {
  //   let count = 0;
  //   function Click() {
  //     count += 1;
  //     console.log(count);
  //   }

  const [name, setName] = useState("mamad");
  function changeName() {
    setName("mohsen");
  }

  const [count, setCount] = useState(0);
  function Click() {
    setCount(count + 1);
    setCount(mama);
    setCount(mama);
    // setCount((pr) => {
    //   return pr + 1;
    // });
  }
  function mama(eve) {
    return eve + 1;
  }

  const [person, setPerson] = useState({ name: "", age: "" });

  return (
    <>
      <br />
      <br />
      <button onClick={Click} className="bg-amber-400">
        Counter + 1
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        className="bg-amber-800"
      >
        Counter - 1
      </button>
      <p>Count : {count}</p>
      <button onClick={changeName} className="bg-red-400">
        change name
      </button>
      <p>changing to : {name}</p>
      <br />

      name is : <input
        type="text"
        className="bg-blue-300"
        onChange={(e) => {
          setPerson({ ...person,name: e.target.value });
        }}
      />

      <p>Person name : {person.name}</p>
      <br />
      age is : <input
        type="text"
        className="bg-blue-300"
        onChange={(e) => {
          setPerson({ ...person,age: e.target.value });
        }}
      />

      <p>Person age : {person.age}</p>
    </>
  );
}

export default sample;
