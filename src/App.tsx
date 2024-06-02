import { ThemeProvider } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools"
import { defaultTheme } from "./theme";
import Header from "./components/header";
import { useEffect } from "react";

function App() {
useEffect(()=>{
  console.log("try")
  window.addEventListener("message", (event) => {
    console.log("eventlistener")
    if (event.origin === `${process.env.REACT_APP_SERVER_API}`) {
        console.log("getting token")
        const { token } = event.data;
        console.log("token : ",token)
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
