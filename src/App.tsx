import { ThemeProvider } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools"
import { defaultTheme } from "./theme";
import Header from "./components/header";
import { useEffect } from "react";

function App() {
useEffect(()=>{
  window.addEventListener("message", (event) => {
    if (event.origin === `${process.env.REACT_APP_SERVER_API}`) {
        const { token } = event.data;
        localStorage.setItem("token", token);
      }
  });
},[])

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
