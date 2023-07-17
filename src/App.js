import Filho from './components/filho/Filho'
import Neto from './components/neto/Neto'
import Bisneto from './components/bisneto/Bisneto'
import Botao from './components/botao/Botao'
import StyledGlobal, { CorFundo, TextoMain } from './styledGlobal';

function App() {
  return (
    <>
    <StyledGlobal/>
      <CorFundo>
      <TextoMain>App(pai)</TextoMain>
      <Filho/>
      </CorFundo>
    </>
  
  );
}

export default App;
