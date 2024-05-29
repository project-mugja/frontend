import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { login, searchPage } from "../atom";

const Logo = styled.div`
    height: 44px;
    width: 110px;
    background-color: black;
`
const Login = styled.div`
    height: 40px;
    width: 128px;
    border: 1px solid ${props => props.theme.innerColor};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    max-height: 75px;
    width: 100%;
    height: auto;
    border-bottom: 1px solid ${props => props.theme.innerColor};
`
const Container = styled.div`
    padding: 0 20px ;
    height: 75px;
    width: auto;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SearchBox = styled.div`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        background-color: ${props => props.theme.innerColor};
        height: 100%;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
function Header(){
    const [isLogin] = useRecoilState(login)
    const isSearchPage = useRecoilValue(searchPage);
    const onClick = () => {
        //로그인 페이지로 이동
    }
    return(
        <Wrapper>
            <Container>
                <Logo className="clickable"/>
                {isSearchPage? 
                    <SearchBox>
                        <div><span>검색 : {}</span></div>
                        <div><span>체크인 : {}</span></div>
                    </SearchBox> 
                : null}
                <Login onClick={onClick} className="clickable">
                    {isLogin? 
                    <div>{"닉네임"}</div> 
                    : 
                    <div>로그인</div>
                    }
                </Login>
            </Container>
        </Wrapper>
    )
}

export default Header;