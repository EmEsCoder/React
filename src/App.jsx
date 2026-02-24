import Form from "./Components/Form.jsx";
import Sample from "./Components/Hooks.jsx";
import PostLists from "./Components/PostLists.jsx";
import { Suspense, useReducer } from "react";
import ErrorBoundary from "./ErrorBoundary.jsx";
import CompA from "./Components/CompA.jsx";
import UserContext from "./Context/UserContext.jsx";
import Counter from "./Components/Counter.jsx";
import countContext from "./Context/CountContext.jsx";
import CountProvider from "./Context/CountProvider.jsx"




function App() {

  return (
    <>
      {/* <Form /> */}
      {/* <Sample /> */}

      {/* <ErrorBoundary>
        <Suspense fallback={<p>loading ....</p>}>
          <PostLists />
        </Suspense>
      </ErrorBoundary> */}

      {/* <UserContext.Provider value={'meti'}>
        <CompA />
      </UserContext.Provider> */}
      {/* <Counter /> */}



      <CountProvider>
        <CompA />
      </CountProvider>
    </>
  );
}

export default App;
