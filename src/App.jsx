import Form from "./Components/Form.jsx";
import Sample from "./Components/Hooks.jsx";
import PostLists from "./Components/PostLists.jsx";
import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary.jsx";
import CompA from "./Components/CompA.jsx";
import UserContext from "./Context/UserContext.jsx";

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

      <UserContext.Provider value={'meti'}>
        <CompA />
      </UserContext.Provider>
    </>
  );
}

export default App;
