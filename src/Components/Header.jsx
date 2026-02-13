import { Children } from "react";

function Header({ children, bahbah }) {
    // console.log(children);
    
  return (
    <>
      <p>2rud</p>
      <button
        onClick={() => {
          bahbah("mehdi");
        }}
      >
        click from header
      </button>
      {children}
    </>
  );
}
export default Header;
