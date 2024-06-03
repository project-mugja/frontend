import { ThemeProvider } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools"
import { defaultTheme } from "./theme";
import Header from "./components/header";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header/>
        <Router/>
        <ReactQueryDevtools/>
      </ThemeProvider>
    </>
  );
}

export default App;
