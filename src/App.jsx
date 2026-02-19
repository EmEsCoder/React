import Form from "./Components/Form.jsx";
import Sample from "./Components/Hooks.jsx";
import PostLists from "./Components/PostLists.jsx";
import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary.jsx";

function App() {
  return (
    <>
      {/* <Form /> */}
      {/* <Sample /> */}
      <ErrorBoundary>
        <Suspense fallback={<p>loading ....</p>}>
          <PostLists />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
