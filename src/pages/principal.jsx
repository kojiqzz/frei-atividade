import './principal';
import Cabecalho from './header';
import Card from './componentes/cards';
import FimBimestres from './componentes/cards';
import axios from 'axios';
import { useState } from 'react';


export default function Principal() {
   
    const [cards, setCards] = useState([])

    async function listarCards() {
        
        try {
            const resposta = await axios.get('http://localhost:3001/cards')
            setCards(resposta.data)
            
        } catch (err) {
            alert(err)
        }


        
    }
    

        return(
            <div className='principal-mae'>
                <Cabecalho/>

                <button onClick={listarCards} >Listar</button>

                <div className="cards">
                    {cards.map(c => c.FimBimestres 
                    ? <FimBimestres titulo='FIM 3'/> 
                    :
                    
                    <Card
                    titulo={c.titulo}
                    info={c.info}
                    data={c.data}
                    entregaTrab={c.entregaTrab}
                    status={c.status}
                    />


                    )}
                </div>
            
            </div>
        )
}