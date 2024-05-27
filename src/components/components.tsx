import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`;

export const Btn = styled.button`
    background-color: ${props => props.theme.btnColor};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.textWhite};
`

export const Loader = () => {
    const Load = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex: auto;
        span{
            font-size: 25px;
            font-weight: bold;
        }
    `
    return(
        <Load>
            <span>Loading...</span>
        </Load>
    )
}