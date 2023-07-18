import Filho from './components/filho/Filho'
import Neto from './components/neto/Neto'
import Bisneto from './components/bisneto/Bisneto'
import Botao from './components/botao/Botao'
import { useState } from 'react'
import StyledGlobal, { CorFundo, TextoMain } from './styledGlobal';

function App() {
  const [texto, setTexto] = useState("Texto inicial")
  return (
    <>
    <StyledGlobal/>
      <CorFundo>
      <TextoMain>App(pai) <br/> {texto}</TextoMain>
      <Filho textoProp={setTexto}/>
      </CorFundo>
    </>
  
  );
}

export default App;
