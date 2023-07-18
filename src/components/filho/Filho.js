import Neto from "../neto/Neto"
import { ContainerFilho, TextoFilho } from "./styled"


function Filho (props){
    return(
    <>
        <ContainerFilho>
            <TextoFilho>Filho</TextoFilho>
            <Neto textoProp={props.textoProp}/>
        </ContainerFilho>
    </>
    )
}

export default Filho