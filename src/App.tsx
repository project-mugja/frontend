import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools"

function App() {
  return (
    <>
      <Router/>
      <ReactQueryDevtools/>
    </>
  );
}

export default App;
