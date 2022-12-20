import styled from "styled-components";
import logo from './Images/Logo.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setSenha] = useState("")
  const [cor, SetCor] = useState("#FFFFFF")
  const [disabled, setDisabled] = useState("")
  const [opacity, setOpacity] = useState("100%")
  const [carregar, setCarregar] = useState(false)
  const navigate = useNavigate()

  return (<div>
    <Logo><img src={logo}></img></Logo>
    <Corpo onSubmit={entrarApp}>
      <Dados><Input background={cor} type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required disabled={disabled}></Input></Dados>
      <Dados><Input background={cor} type="password" placeholder="senha" value={password} onChange={e => setSenha(e.target.value)} required disabled={disabled}></Input></Dados>
      <Dados>
        <Entrar opacity={opacity} disabled={disabled}>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={carregar}
          /><Texto carregar={carregar}>Entrar</Texto>
        </Entrar></Dados>
    </Corpo>
    <Link to="/cadastro">
      <Cadastrar>Não tem uma conta? Cadastre-se!</Cadastrar>
    </Link>

  </div>

  );

  function entrarApp(e) {
    e.preventDefault();

    const dados = {
      email,
      password
    }

    SetCor("#F2F2F2");
    setDisabled("disabled");
    setOpacity("70%");
    setCarregar(true);

    const url_post = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`
    const promise = axios.post(url_post, dados)

    promise.then(resposta => {
      console.log(resposta.data)
      navigate("/habitos")
    })

    promise.catch(err => {
      console.log(err)
      alert("Deu erro tente novamente")
      SetCor("#FFFFFF");
      setDisabled("");
      setOpacity("100%");
      setCarregar(false);
    })
  }
}

const Texto = styled.div`
display:${props => props.carregar ? "none" : "flex"}`

const Logo = styled.div`
display:flex;
width:100%;
justify-content:center;
margin-top: 68px;
margin-bottom: 33px;

img{
  width:180px;
  height: 180px;

};
`
const Corpo = styled.form`
display:flex;
flex-direction:column;
align-items:center;`
const Dados = styled.div`
margin-bottom:6px;
`
const Input = styled.input`
width:303px;
height:45px;
box-sizing: border-box;
border-radius: 5px;
border: 1px solid #D4D4D4;
padding-left: 11px;
background-color: ${props => props.background};
font-family: 'Lexend Deca', sans-serif;
color:#AFAFAF;
font-size: 19.98px;
line-height: 25px;
::placeholder{
font-family: 'Lexend Deca', sans-serif;
color:#DBDBDB;
font-size: 19.98px;
line-height: 25px;
}
`
const Entrar = styled.button`
display:flex;
align-items: center;
justify-content: center;
opacity: ${props => props.opacity};
width:303px;
height:45px;
border:none;
border-radius: 4.64px;
text-align: center;
background-color: #52B6FF;
font-family: 'Lexend Deca', sans-serif;;
color:#FFFFFF;
font-size: 20.98px;
line-height: 26px;
`

const Cadastrar = styled.p`
margin-top: 25px;
text-align: center;
font-family: 'Lexend Deca', sans-serif;;
color:#52B6FF;
text-decoration: underline;
font-size: 13.98px;
line-height: 17px;`