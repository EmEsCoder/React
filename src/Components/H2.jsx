function H2({title,age}) {
  const ObjStyle = {
    backgroundColor : "yellow",
    fontSize : '3rem',
  }
  // console.log(bioto.age);
  // console.log(bioto.title);
  

  return (
    <>
      <h2 style={{color:'blue'}}>matn shomare 1</h2>
      <h1 style={ObjStyle}>matn shomare 2</h1>
      {/* <p>name: {bioto.title} age: {bioto.age}</p> */}
      <p>name: {title} age: {age}</p>
    </>
  )
}

export default H2;