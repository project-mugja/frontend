import { useRecoilState } from "recoil";
import styled from "styled-components";
import { login } from "../atom";
import logo from '../image/logo_square.jpg';
import { Link } from "react-router-dom";

const Logo = styled.img`
    height: 60px;
    width: 110px;
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

function Header(){
    const [isLogin] = useRecoilState(login)
    const onClick = () => {
        //로그인 페이지로 이동
        window.location.href = `${process.env.REACT_APP_SERVER_API}/mugja/login`
    }
    return(
        <Wrapper>
            <Container>
                <Logo className="clickable" src={logo}/>
                <Login  className="clickable">
                    {isLogin? 
                    <div onClick={onClick}>마이페이지</div> 
                    : 
                    <Link style={{color:"black"}} to={`/mypage/info`}>
                        <div >로그인</div>
                    </Link>
                    }
                </Login>
            </Container>
        </Wrapper>
    )
}

export default Header;