import styled from "styled-components";
import logo from './Images/Logo.png'
import { Link } from "react-router-dom";
import { useState } from "react";


    export default function Cadastro() {
        const [email,setEmail] = useState("")
        const [password,setSenha] = useState("")
        const [name,setNome] = useState("")
        const [image,setFoto] = useState("")

        return (<div>
          <Logo><img src={logo}></img></Logo>
          <Corpo onSubmit={mandarDados}>
            <Dados><Input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required></Input></Dados>
            <Dados><Input type="password" placeholder="senha" value={password} onChange={e => setSenha(e.target.value)} required></Input></Dados>
            <Dados><Input type="text" placeholder="nome" value={name} onChange={e => setNome(e.target.value)} required></Input></Dados>
            <Dados><Input type="url" placeholder="foto" value={image} onChange={e => setFoto(e.target.value)} required></Input></Dados>

            <Dados><Entrar>Cadastrar</Entrar></Dados>
          </Corpo>
          <Link to="/">
          <Cadastrar>Já tem uma conta? Faça login!</Cadastrar>
          </Link>
      
        </div>
      
        );

        function mandarDados(e){
            e.preventDefault()
            const dados = {
                email,
                name,
                image,
                password
            }
            console.log(dados)
        }
      }
      
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
      ::placeholder{
      font-family: 'Lexend Deca', sans-serif;;
      color:#DBDBDB;
      font-size: 19.98px;
      line-height: 25px;
      }
      `
      const Entrar = styled.button`
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