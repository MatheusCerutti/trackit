import styled from "styled-components"

export default function Habitos() {
    return (
        <div>
            <Cabecalho>
                <Nome>Trackit</Nome>
                <Imagem>Imagem</Imagem>
            </Cabecalho>
            <Adicionar>
                <Titulo>Meus Hábitos</Titulo>
                <Botao><Simbolo>+</Simbolo></Botao>
            </Adicionar>
            <Informacoes></Informacoes>
            <Nenhum>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Nenhum>
        </div>
    )
}

const Informacoes = styled.div`
`

const Nenhum = styled.h1`
color:#666666;
font-family: 'Lexend Deca', sans-serif;
font-size: 17.98px;
margin-left: 18px;
margin-right:10px;

`

const Adicionar = styled.div`
display:flex;
justify-content:space-between;
margin-left:18px;
margin-right: 10px;
`

const Titulo = styled.div`
font-family: 'Lexend Deca', sans-serif;
color:#126BA5;
font-size: 22.98px;
line-height: 29px;
`
const Botao = styled.button`
display:flex;
align-items: center;
justify-content: center;
width:40px;
height:35px;
box-sizing: border-box;
background-color:#52B6FF;
border-radius: 4.64px;
border:none;
color:#FFFFFF;

`
const Simbolo = styled.h1`
font-weight: 400;
font-size: 26.98px;
font-family: 'Lexend Deca', sans-serif;
padding-bottom: 5px;
`
const Cabecalho = styled.div`
width:100%;
height:70px;
border-radius: 4px;
background-color:#126BA5;
display:flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`

const Nome = styled.div`
padding-left: 18px;
`

const Imagem = styled.div`
padding-right:10px;
`