import {useState} from "react"
import Maior from "./VerificaMaior";
import QuadradoCirculo from "./QuadradoCirculo";

function App() {
  const INCREMENTOS = [1, 2, 5, 10, 20, 30];
  const [contar, setContar] = useState(0);

  return (
    <>
    <h1>Contador = {contar}</h1>
    {
      INCREMENTOS.map( item => {
        return <button onClick= { () => {setContar(contar + item)}}> {`+${item}`}</button>
      })
    }

    <br />
    <br />
    <br />

    <Maior />

    <div>
      <QuadradoCirculo />
    </div>
    </>
  );
}

export default App;
