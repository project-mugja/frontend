import styled, { DefaultTheme } from "styled-components";

export const defaultTheme:DefaultTheme = {
    innerColor: "#D9D9D9",
    btnColor: "#1565FF",
    textBlue: "#42B2FF",
    textWhite: "white",
    textGray: "#6D6D6D",
    yellowColor: "#FFD600",
}

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
`;