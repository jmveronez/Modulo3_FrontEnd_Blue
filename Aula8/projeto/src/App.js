import "../src/styles/global.css"
import Card from "./Components/Card"

function App() {
  return (
    <>
    <h1>Notas dos alunos!</h1>
    <Card 
      nome="João"
      nota1 = {8}
      nota2 = {5}
      nota3 = {7}
      nota4 = {9}
    />
    <Card 
      nome="Marco"
      nota1 = {8}
      nota2 = {6}
      nota3 = {4}
      nota4 = {10}
    />
    <Card 
      nome="Veronez"
      nota1 = {7}
      nota2 = {6}
      nota3 = {4}
      nota4 = {10}
    />
    </>
  );
}

export default App;
