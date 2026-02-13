function Form() {
    function print(e) {
        console.log(e.target.value);
        
    }

    function selected(e) {
        const value = [...e.target.selectedOptions].map((evo) => evo.value)
        console.log(value);
        
    }

  return (
    <>
      <label htmlFor="">input :</label>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        className="ml-8 bg-red-200"
      />
      <textarea onChange={print} className="bg-amber-200"></textarea>
      <br />
      <br />
      <select multiple onChange={selected}>
        <option value="html">Html</option>
        <option value="css">Css</option>
        <option value="js">Js</option>
        <option value="php">Php</option>
      </select>
      <br />
      <br />
      <input type="radio" name="gender" value="male"  onChange={print}/> Male
      <input type="radio" name="gender" value="female" onChange={print}/> Female
    </>
  );
}

export default Form;
