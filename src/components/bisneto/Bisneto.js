import Botao from "../botao/Botao";
import { ContainerBisneto, TextoBisneto } from "./styled";

function Bisneto(props) {
  return (
    <>
      <ContainerBisneto>
        <TextoBisneto>Bisneto</TextoBisneto>
        <Botao textoProp={props.textoProp} />
      </ContainerBisneto>
    </>
  );
}

export default Bisneto;
