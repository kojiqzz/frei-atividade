import "./index.scss";


export default function Card({ titulo, info, data, entregaTrab, status }) {
  let corPrimaria = "";
  let corSecundaria = "";

  switch (status) {
    case "Completo":
      corPrimaria = "#A3E5BA";
      corSecundaria = "#EFFBE2";
      break;

    case "Em andamento":
      corPrimaria = "#DCA3E5";
      corSecundaria = "#EDE2FB";
      break;

    case "Evento":
      corPrimaria = "#F6E448";
      corSecundaria = "#FAF4C1";
      break;
      
    default:
      corPrimaria = "#C3C3C3";
      corSecundaria = "#F2F2F2";
      break;
  }

  return (
    <div className="card" style={{backgroundColor: corSecundaria}} >
      <div className="card-cabecalho"style={{backgroundColor:corPrimaria}}>
        <h2>{titulo}</h2>
      </div>
      <div className="card-conteudo">
        <h3>Assuntos</h3>
        <pre>{info}</pre>
      </div>
      <p className="tag">{data}</p>
      {entregaTrab && <p className="tag">Entrega Trab. </p>}
    </div>
  );
}


export function FimBimestres(titulo) {
  return ( 
    <div className="card-fim">
      <div className="card-meio">
        <h2>{titulo}</h2>
      </div>
  
    </div>
);

  
}
