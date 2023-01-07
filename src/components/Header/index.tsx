import logo from '../../assets/images/logo2.svg'
import { Container, Content } from './styles'


export function Header() {
    return(
        <Container>
            <Content >
                <div className="page-details">
                    <h1>Page home</h1>
                    <h2>Acompanhe o vencimento dos produtos</h2>
                </div>

                <img src={logo} alt="IMAGEMCOZINHA" />
            </Content>
        </Container>
    )
}