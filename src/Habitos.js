import { useState } from "react"
import styled from "styled-components"

export default function Habitos() {

    const [arrayDias, setDias] = useState([])

    const diasSemana = [
        {
            id: 0,
            dia: 'D'
        },
        {
            id: 1,
            dia: 'S'
        }, {
            id: 2,
            dia: 'T'
        },
        {
            id: 3,
            dia: 'Q'
        }, {
            id: 4,
            dia: 'Q'
        },
        {
            id: 5,
            dia: 'S'
        },
        {
            id: 6,
            dia: 'S'
        }
    ]
    const [mostrar, setMostrar] = useState("none")
    const [name, setHabito] = useState("")

    return (
        <Pagina>
            <Cabecalho>
                <Nome>Trackit</Nome>
                <Imagem src="https://sm.ign.com/ign_br/screenshot/default/025pikachu-os-anime-4_3pym.png"></Imagem>
            </Cabecalho>
            <Adicionar>
                <Titulo>Meus Hábitos</Titulo>
                <Botao onClick={() => criarHabito()}><Simbolo>+</Simbolo></Botao>
            </Adicionar>
            <CaixaAdicionar display={mostrar}>
                <CaixaDados>
                    <Nomehabito placeholder="nome do habito" onChange={e => setHabito(e.target.value)}></Nomehabito>
                    {diasSemana.map(dia => (
                        <DiaSemana key={dia.id} onClick={() => selecionarDia(dia.id)} background={arrayDias.includes(dia.id)} color={arrayDias.includes(dia.id)}>{dia.dia}</DiaSemana>
                    ))}
                </CaixaDados>
                <Botoes>
                    <Cancelar onClick={() => criarHabito()}>Cancelar</Cancelar>
                    <Salvar onClick={() => salvarHabito()}>Salvar</Salvar>
                </Botoes>
            </CaixaAdicionar>
            <Informacoes></Informacoes>
            <Nenhum>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Nenhum>
        </Pagina>
    )

    function salvarHabito() {
        if (name.length > 0) {
            const dados = {
                name,
                days: arrayDias
            }

            console.log(dados)
        }

    }

    function criarHabito() {

        if (mostrar == "none") {
            setMostrar("")
        } else {
            setMostrar("none")
        }

    }

    function selecionarDia(dia) {
        let array = [...arrayDias]

        if (array.includes(dia)) {
            const array2 = array.filter(diferentes => diferentes != dia)
            setDias(array2)
            console.log(arrayDias)
        } else {
            array.push(dia)
            setDias(array)
            console.log(arrayDias)
        }
    }
}
const Cancelar = styled.h1`
color:#52B6FF;
font-family: 'Lexend Deca', sans-serif;
font-size: 15.98px;
margin-right: 23px;
`

const Salvar = styled.button`
width:84px;
height:35px;
border-radius: 4.64px;
border: none;
background-color: #52B6FF;
color:#FFFFFF;
font-family: 'Lexend Deca', sans-serif;
font-size: 15.98px;

`

const Botoes = styled.div`
margin-top:30px;
display:flex;
justify-content: flex-end;
margin-right: 16px;
align-items: center ;
`

const CaixaDados = styled.div`
margin-left:19px;
margin-right: 18px;
`

const DiaSemana = styled.button`
width:30px;
height:30px;
font-family: 'Lexend Deca', sans-serif;
color:${props=>props.color ? '#FFFFFF':'#DBDBDB'};
font-size: 19.98px;
box-sizing: border-box;
border-radius: 5px;
border: 1px solid #D4D4D4;
background-color: ${props=>props.background ? '#CFCFCF' : '#FFFFFF'};
margin-top: 8px;
margin-right: 4px;
`

const Nomehabito = styled.input`
margin-top:18px;
padding-left: 11px;
width:100%;
height:45px;
box-sizing: border-box;
border-radius: 5px;
border: 1px solid #D4D4D4;
color:#666666;
::placeholder{
font-family: 'Lexend Deca', sans-serif;
color:#DBDBDB;
font-size: 19.98px;
line-height: 25px;
}`

const Pagina = styled.div`
background-color:#E5E5E5;
height:100%;`

const CaixaAdicionar = styled.div`
margin-top: 20px;
margin-left: 17px;
margin-right: 18px;
height: 180px;
box-sizing: border-box;
border-radius: 5px;
background-color: #FFFFFF;
display:${props => props.display};
`


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
font-family: 'Playball', cursive;
color:#FFFFFF;
font-size:38.98px;

`

const Imagem = styled.img`
width:51px;
height: 51px;
border-radius: 98.5px;
margin-right: 10px;
`