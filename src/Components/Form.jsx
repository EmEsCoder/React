function Form() {
  function print(e) {
    console.log(e.target.value);
  }
  let CheckItems = [];
  function print2(e) {
    // console.log(e.target.value, e.target.checked);

    // const item = CheckItems.find((evo) => {
    //   return evo === e.target.value;
    // });
    // if (item) {
    //   CheckItems = CheckItems.filter((evo) => {
    //      return evo !== e.target.value;
    //   });
    // } else {
    //   CheckItems.push(e.target.value);
    // }
    // console.log(CheckItems);

    if (e.target.checked) {
      CheckItems.push(e.target.value);
    } else {
      CheckItems = CheckItems.filter((evo) => {
        return evo !== e.target.value;
      });
    }
    console.log(CheckItems);
    
  }

  function selected(e) {
    const value = [...e.target.selectedOptions].map((evo) => evo.value);
    console.log(value);
  }

  return (
    <>
      <label htmlFor="">input :</label>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.checked);
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
      <input type="radio" name="gender" value="male" onChange={print} /> Male
      <input type="radio" name="gender" value="female" onChange={print} />{" "}
      Female
      <br />
      <br />
      <br />
      <input type="checkbox" value="check1" onChange={print2} />
      <input type="checkbox" value="check2" onChange={print2} />
      <input type="checkbox" value="check3" onChange={print2} />
    </>
  );
}

export default Form;
