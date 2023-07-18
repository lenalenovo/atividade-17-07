import Bisneto from "../bisneto/Bisneto"
import { ContainerNeto, TextoNeto } from "./styled"


function Neto (props){
    return(
        <>
            <ContainerNeto>
                <TextoNeto>Neto</TextoNeto>
                <Bisneto textoProp={props.textoProp}/>
            </ContainerNeto>
        </>
    )
}

export default Neto