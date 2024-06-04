import { ThemeProvider } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools"
import { defaultTheme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Router/>
        <ReactQueryDevtools/>
      </ThemeProvider>
    </>
  );
}

export default App;
