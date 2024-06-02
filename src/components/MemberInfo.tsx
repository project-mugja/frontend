import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { Btn } from "./components";
import { useState } from "react";
import { modifyMemInfo, validatePassword } from "../api";
import { useMutation } from "react-query";

const Title = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    span{
        font-size: 22px;
        font-weight: bold;
        margin-right: 10px;
    }
`
const Container = styled.form`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    &>span{
        display: block;
        margin: 10vh 0 40px 0;
        font-size: 22px;
        font-weight: bold;
    }
    &>div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 8vh 0 20px 0;
        span{
            width: 80%;
            display: block;
            color: #03075B;
            margin: 3px;
        }
        div{
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }
`
const SubmitBtn = styled(Btn)`
    display: block;
    width: 60px;
    height: 30px;
    border: none;
    border-radius: 8px;
`
const Input = styled.input`
    background-color: ${prop => prop.theme.innerBlue};
    border: none;
    margin-bottom: 20px;
    height: 30px;
    width: 180px;
    border-radius: 8px;
    padding: 0 10px 0 10px;
    text-align: center;
    &:focus{
        outline-color: ${props => props.theme.btnColor};
    }
`
const Input2 = styled.input`
    height: 35px;
    width: 90%;
    background-color: ${props => props.theme.innerBlue};
    border: none;
    border-radius: 8px;
    padding: 0 10px 0 10px;
    &:focus{
        outline-color: ${props => props.theme.btnColor};
    }
`
interface ValidateForm{
    password:string;
}
interface IMemberInfoProps{
    token:string
}
interface ModifyForm{

}
function MemberInfo({token}:IMemberInfoProps){
    const {register, handleSubmit} = useForm<ValidateForm>();
    const [isValid, setIsValid] = useState(true);
    const onValid = async (data:ValidateForm) => {
        const response = await validatePassword(data.password,token);
        typeof response === "boolean" ? setIsValid(true) : setIsValid(false);
    }

    const { register:modify, handleSubmit:handleModify } = useForm();
    const { mutate } = useMutation((data:ModifyForm) => modifyMemInfo(data, token),{
        onSuccess:() => {
            alert("수정 완료");
        },
        onError:() => {
            alert("수정 실패");
        }
    })
    const onValidMod = async (data:ModifyForm) => {
        mutate(data);
    }

    return(
        <>
            <Title><span>내 정보 관리</span></Title>
            {isValid? 
            <>
            <Container method="put" onSubmit={handleModify(onValidMod)}>
                <div>
                    <div>
                        <span>닉네임</span>
                        <Input2 type="text" {...modify}/>
                    </div>
                    <div>
                        <span>닉네임</span>
                        <Input2 type="text" {...modify}/>
                    </div>
                </div>

                <SubmitBtn className="clickable">수정</SubmitBtn>
            </Container>
            </>
            : 
            <Container method="post" onSubmit={handleSubmit(onValid)}>
                <span>비밀번호를 입력해주세요</span>
                <Input 
                    autoFocus
                    type="password" 
                    {...register(
                        "password", 
                        {required:true})
                    }
                />
                <SubmitBtn className="clickable">확인</SubmitBtn>
            </Container>
            }
        </>
    )
}

export default MemberInfo;