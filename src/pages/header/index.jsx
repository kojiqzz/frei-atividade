import './index.scss'; 
import logo from '../../assets/images/logo.png'



export default function Cabecalho() {
    return(
        <div className='cabecalho-mae'>
            <header>
                <img src={logo} alt="" />
                <h1 className='titulo'>Atividades</h1>
            </header>
        </div>
    )
}