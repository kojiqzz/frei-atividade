import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import "./index.jsx"
import Principal from './pages/principal.jsx';


export default function Navegacao() {
    return(


    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Principal/>}/>
        </Routes>
    </BrowserRouter>


)
}