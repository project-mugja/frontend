import Hotel from "../components/Hotel";
import Review from "../components/Review";
import { Container } from "../theme";

function DetailPage(){
    return(
        <>
            <Container>
                <Hotel/>
                <Review/>
            </Container>
        </>
    )
}

export default DetailPage;