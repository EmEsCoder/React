import H2 from "./Components/H2.jsx";
import Header from "./Components/Header.jsx";

function App() {
  function tabeClick(e) {
    console.log("clicked", e.target);
  }

  function tabeClick2(name, tar) {
    console.log(name, tar.target);
  }

  function show(pepe) {
    console.log(pepe);
    
  }
  const name = "mehdi";
  const age = "22";
  return (
    <>
      <Header bahbah = {show}>
        <p>Lorem ipsum dolor sit amet.</p>
        </Header>
      <H2 title={name} age={age} />
      <button
        className="rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-white opacity-100 focus:outline-none"
        onClick={tabeClick}
      >
        salam
      </button>
      <button
        onClick={(e) => {
          tabeClick2("ali", e);
        }}
      >
        salam2
      </button>
    </>
  );
}

export default App;
