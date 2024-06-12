import styled from "styled-components";
import { Btn, Container } from "../components/components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import banner from "../image/banner.webp"

const HeadBox = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 500px;
    background-image: url(${banner});
`
const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    margin-top: 120px;
    height: 150px;
    border-radius: 16px;
    background-color: ${props => props.theme.textWhite};
    &>div{
        display: flex;
        justify-content: center;
        width: 100%;
        &>*{
            margin: 10px;
            height: 60px;
        }
    }
    &>div:first-child{
        height: 35%;
        span{
            display: inline-block;
            padding-top: 5px;
            width: 80%;
            font-size: 20px;
            font-weight: bold;
        }
    }
    &>div{

    }
`
const Input = styled.input`
    padding: 0 20px 0 20px;
    font-size: 18px;
    max-width: 900px;
    width: 70%;
    border: none;
    border-radius: 10px;
    background-color: ${props => props.theme.innerColor};
    &:focus{
        outline: none;
    }
`
const StyledBtn = styled(Btn)`
    border: none;
    width: 80px;
    border-radius: 10px;
    font-size: 18px;
    &:hover{
        cursor: pointer;
    }
`
interface IForm {
    search:string;
    date?:string;
}
function Home(){
    const { handleSubmit, register } = useForm<IForm>();
    const navigate = useNavigate();
    const onSearch = (data:IForm)=>{
        navigate(`/search/all/${data.search}`);
    }
    return(
        <Container className="container">
            <HeadBox>
                <div>
                    <span></span>
                </div>
                <div>
                    <span></span>
                </div>
                <Form onSubmit={handleSubmit(onSearch)}>
                    <div>
                        <span>여기서 검색해주세요</span>
                    </div>
                    <div>
                        <Input
                            {...register("search",{required:true})} 
                            placeholder="여행지나 숙소를 검색해보세요.."
                        />
                        <StyledBtn>검색</StyledBtn>
                    </div>
                </Form>
            </HeadBox>
        </Container>
    )
}

export default Home;
//input required 나중에 false로 바꿔서 빈칸 검색 허용하도록 수정