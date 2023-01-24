import { Header } from "../components/Header/index";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Container } from "../components/Header-Right/styles";
import { UserNotExists } from "../components/UserNotExists/inde";

export function Dinied(){

    return(
        <>
        <GlobalStyles />
        <Header />
        <Container >
            <UserNotExists />
        </Container>
        </>
    )
}