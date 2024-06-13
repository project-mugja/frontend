import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../image/logo_square.jpg"
import { Btn } from "../components/components";
import { useForm } from "react-hook-form";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Logo = styled.div`
    margin: 20px;
    height: 200px;
    width: 300px;
    background-image: url(${logo});
    background-position: center;
    background-size: 100%;
`
const LoginForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 150px;
    max-width: 240px;
    width: 100%;
    input{
        margin: 5px;
        width: 100%;
        height: 30px;
        text-align: center;
        font-size: 15px;
        border: 1px solid gray;
        border-radius: 5px;
    }
    button{
        width: 100%;
        height: 35px;
        border: none;
        border-radius: 5px;
        margin: 5px 0 15px 0;
        &:hover{
            cursor: pointer;
        }
    }
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        a{
            text-decoration: none;
            color: inherit;
            font-size: 14px;
            &:hover{
                cursor: pointer;
            }
        }
    }
`
interface ILoginForm{
    id:string;
    password:string;
}
function Login(){
    const { handleSubmit, register, setValue } = useForm<ILoginForm>();
    const onValid = (data:ILoginForm) => {
        console.log(data);
        //로그인

        setValue("id","");
        setValue("password","")
    }
    return(
        <Container>
            <Logo/>
            <LoginForm onSubmit={handleSubmit(onValid)}>
                <input
                    {...register("id",{required:true})} 
                    type="text" 
                    placeholder="아이디"
                />
                <input 
                    {...register("id",{required:true})}
                    type="password" 
                    placeholder="비밀번호"
                />
                <Btn>로그인</Btn>
                <div>
                    <Link to={""}>비밀번호 찾기</Link>
                    <Link to={""}>회원가입</Link>
                </div>
            </LoginForm>
        </Container>
    )
}

export default Login;