import styled from "styled-components";

export const Btn = styled.button`
    background-color: ${props => props.theme.btnColor};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.textWhite};
`