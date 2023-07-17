import Neto from "../neto/Neto"
import { ContainerFilho, TextoFilho } from "./styled"


function Filho (){
    return(
    <>
        <ContainerFilho>
            <TextoFilho>Filho</TextoFilho>
            <Neto/>
        </ContainerFilho>
    </>
    )
}

export default Filho