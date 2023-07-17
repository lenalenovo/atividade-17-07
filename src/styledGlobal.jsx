import styled, {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, Arial, Helvetica, sans-serif;
`

export const CorFundo = styled.div`
    background-color: grey;
    height: 100%;
    padding: 120px;
`

export const TextoMain= styled.h2`
    justify-content: flex-start;
    text-align: center;
`