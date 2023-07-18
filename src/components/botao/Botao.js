import { BotaoBisneto } from "./styled";


function Botao(props){
    return(
        <>
        <BotaoBisneto onClick={() => props.textoProp("Texto atualizado")}>Atualizar estado</BotaoBisneto>
        </>
    )
}

export default Botao