import { useEffect, useState } from "react";

function sample() {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useeffect");

    window.addEventListener("resize", checkSize);

    return () => {
      console.log("cleanup");

      window.removeEventListener("resize", checkSize);
    };
  },[]);

  return (
    <>
      <h1>react.js - webprog.io</h1>
      <h2>window: {size} px</h2>
    </>
  );

}

export default sample;
