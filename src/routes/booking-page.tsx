import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { Btn } from "../components/components";

const Container = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
`
interface ITitle{
    fontsize?:string;
}
const Title = styled.div<ITitle>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    span{
        font-size: ${props => props.fontsize? props.fontsize : "25px"};
        font-weight: bold;
    }
`
const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
    margin: 5px 0 5px 0;
    border: 1px solid black;
    &>div{
        margin: 10px 0 10px 0;
        width: 80%;
    }
    &>form{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        &>div{
            height: 100%;
        }
        &>div:first-child{
            width: 55%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            &>div{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
            }
        }
        &>div:last-child{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 15px 0 15px 0;
            width: 30%;
            min-width: 50px;
        }
    }
    `
const Input = styled.input`
    display: inline-block;
    width: 70%;
    height: 20px;
    margin: 10px 0 10px 0;
`
const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: dimgray;
    margin: 25px 0 25px 0;
`
const StyledBtn = styled(Btn)`
    border: none;
    height: 35px;
    width: 80px;
    border-radius: 5px;
`
interface IBookForm {
    checkin:string;
    checkout:string;
    name:string;
    contact:number;
}
function Booking(){
    const { handleSubmit, register } = useForm<IBookForm>();
    const onValid = (data:IBookForm) => {

    }
    return(
        <Container>
            <Title fontsize={"30px"}>
                <span>예약하기</span>
            </Title>
            <Title>
                <span>객실정보 확인</span>
            </Title>
            <Box>
                <div>
                    <span>숙소정보:{}</span>
                </div>
                <div>
                    <span>객실정보:{}</span>
                </div>
                <div>
                    <span>객실가격:{}</span>
                </div>
            </Box>
            <Line/>
            <Title>
                <span>예약정보 확인</span>
            </Title>
            <Box>
                <form onSubmit={handleSubmit(onValid)}>
                    <div>
                        <div>
                            <span>체크인</span>
                            <Input
                                {...register("checkin",{required:true})} 
                                type="date" 
                            />
                        </div>
                        <div>
                            <span>체크아웃</span>
                            <Input
                                {...register("checkout",{required:true})} 
                                type="date" 
                            />
                        </div>
                        <div>
                            <span>예약자명</span>
                            <Input
                                {...register("name",{required:true})} 
                                type="text" 
                            />
                        </div>
                        <div>
                            <span>예약자 연락처</span>
                            <Input
                                {...register("contact",{required:true})} 
                                type="text" 
                            />
                        </div>
                    </div>
                    <div>
                        <StyledBtn>결제하기</StyledBtn>
                    </div>
                </form>
            </Box>
        </Container>
    )
}

export default Booking;