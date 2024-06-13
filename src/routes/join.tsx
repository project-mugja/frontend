import { styled } from "styled-components";
import { Btn } from "../components/components";
import { useForm } from "react-hook-form";
import { IJoinForm } from "../interface";
import { doJoin } from "../api";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo_square.jpg"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 400px;
    min-width: 350px;
    width: 100%;
`
const TitleBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 5vh 0 30px 0;
    &>span:first-child{
        font-size: 30px;
        font-weight: bold;
    }
    &>span:last-child{
        font-size: 18px;
        color: dimgray;
    }
`
const JoinForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 350px;
    width: 100%;
    &>div:not(&>:first-child){
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start; 
        flex-direction: column;
        &>span{
            display: inline-block;
            margin: 5px 3px 3px 3px;
            font-size: 17px;
        }
        &>input{
            display: inline-block;
            height: 40px;
            width: 100%;
            border-radius: 5px;
            padding: 0;
            border: none;
            background-color: ${props => props.theme.innerColor};
            margin-bottom: 8px;
            text-align: center;
            font-size: 17px;
        }
    }
`
const EmailBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    flex-direction: column;
    &>span{
        margin: 5px 3px 3px 3px;
        font-size: 17px;
    }
    &>div{
        width: 100%;
        display: flex;
        position: relative;
        justify-content: space-between;
        &>input{
            display: inline-block;
            height: 40px;
            width: 74%;
            border-radius: 5px;
            padding: 0;
            border: none;
            background-color: ${props => props.theme.innerColor};
            margin-bottom: 8px;
            text-align: center;
            font-size: 17px;
        }
        &>button{
            display: inline-block;
            width: 24%;
            height: 40px;
            font-size: 15px;
            border: 1px solid rgb(150,150,150);
            background-color: white;
            border-radius: 5px;
            &:hover{
                cursor: pointer;
            }
        }
    }
`
const StyledBtn = styled(Btn)`
    border: none;
    width: 100%;
    height: 40px;
    margin: 15px 0 15px 0;
    border-radius: 5px;
    font-size: 17px;
    &:hover{
        cursor: pointer;
    }
`
const ErrorMsg = styled.span`
    position: absolute;
    width: 200px;
    color: red;
    font-size: 11px !important;
    right: -52%;
    bottom: 18px;
`
const Logo = styled.div`
    margin: 40px 0 30px 0;
    height: 200px;
    width: 300px;
    background-image: url(${logo});
    background-position: center;
    background-size: 100%;
`
const SuccessMsg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &>*{
        margin-top: 10px;
    }
    span{
        font-size: 27px;
        font-weight: bold;
    }
`
function Join(){
    const [ isSuccess, setSuccess] = useState(false);
    const { 
        register, 
        handleSubmit, 
        setError, 
        formState:{errors},
        setValue 
    } = useForm<IJoinForm>();
    const onValid = (data:IJoinForm) => {
        if(data.password !== data.password2){
            setError("password2",{message: "비밀번호가 일치하지 않습니다."})
            setValue("password2","");
        }
        //가입 요청
        console.log(doJoin(data));
        //성공시 가입 성공
        if(true/*가입성공?*/){
            setSuccess(true);
        }

    }
    const onValidEmail = () => {

    }
    return(
        <Container>
            {isSuccess? 
            <>
                <Logo/>
                <SuccessMsg>
                    <span>가입 축하합니다!</span>
                    <Link to={"/main"}>
                        <StyledBtn>메인 페이지로</StyledBtn>
                    </Link>
                </SuccessMsg>
            </>
            : 
            <>
                <TitleBox>
                    <span>필수 정보 입력</span>
                    <span>가입을 위해 필수 정보를 입력해주세요</span>
                </TitleBox>
                <JoinForm onSubmit={handleSubmit(onValid)}>
                    <EmailBox>
                        <span>이메일</span>
                        <div>
                            <input
                                {...register("email",{
                                    required:true,
                                })} 
                                type="text" 
                                placeholder="sample@gmail.com"
                            />
                            <button onClick={onValidEmail}>인증요청</button>
                        </div>
                    </EmailBox>
                    <div>
                        <span>비밀번호</span>
                        <input
                            {...register("password",{
                                required:true,
                                minLength: {
                                    value: 8,
                                    message: "비밀번호가 너무 짧습니다."
                                }
                            })} 
                            type="password"
                            />
                        <ErrorMsg>{errors?.password?.message}</ErrorMsg>
                    </div>
                    <div>
                        <span>비밀번호 확인</span>
                        <input
                            {...register("password2",{
                                required:true,
                            })} 
                            type="password" 
                        />
                        <ErrorMsg>{errors?.password2?.message}</ErrorMsg>
                    </div>
                    <StyledBtn>가입</StyledBtn>
                </JoinForm>
            </>
            }
        </Container>
    )
}

export default Join;