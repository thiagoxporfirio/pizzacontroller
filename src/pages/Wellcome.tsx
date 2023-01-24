import { Header } from "../components/Header";
import { Container } from "../components/Header-Right/styles";
import { UserWellCome } from "../components/UserWellCome";
import { GlobalStyles } from "../styles/GlobalStyles";
import {Route, Link} from 'react-router-dom'

export function WellcomeUser(){

    let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser') || '{}')
    let TOKEN = identidadeUser?.dados?.token
    let username = identidadeUser?.dados?.username

    const handleProducts = () => {
        let btnProducts = document.querySelector('#btnProducts')
        btnProducts?.setAttribute('style', 'background-color: #ffffff;')
    
        
        setTimeout(() => {
            btnProducts?.setAttribute('style', 'background-color: grey;')
        }, 1000)

    }

    const handlecadastreUser = () => {
        
        let btncadastraUser = document.querySelector('#btncadastraUser')
        btncadastraUser?.setAttribute('style', 'background-color: #ffffff;')
        
        setTimeout(() => {
            btncadastraUser?.setAttribute('style', 'background-color: grey;')
        }, 1000)
        
    }
    
    return(
        <>
            <GlobalStyles />
            <Header />
            <Container>
                <div className="content-btn">
                    <Link to="/products"><button id="btnProducts" onClick={handleProducts}>Produtos</button></Link>
                    <Link to="/registeruser"><button id="btncadastraUser" onClick={handlecadastreUser}>Cadastrar user</button></Link>
                </div>

                <UserWellCome />
                
            </Container>


           
       </>
    )
}