import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function SignUpPage () {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function FazerCadastro(e) {
        e.preventDefault();

        const body = {
            email: email,
            name: name,
            cpf: cpf,
            password: password
        }

        console.log(body);

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', body);

        promise.then(res => navigate('/'))

        promise.catch(err => {
            alert('Dados Inválidos! Preencha novamente')
        })

        setName('');
        setCpf('');
        setEmail('');
        setPassword('');

    }



    return (
        <Page>
            <form onSubmit={FazerCadastro}>
                <Input type='text' value={name} placeholder="Nome" onChange={e => setName(e.target.value)} required/>
                <Input  value={cpf} placeholder="CPF" onChange={(e)=> setCpf(e.target.value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
            .substring(0, 14))}  required/>
                <Input type='email' value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)} required/>
                <Input type='password' value={password} placeholder="Senha" onChange={e => setPassword(e.target.value)} required/>
                <Button type="submit">CADASTRAR</Button>
            </form>
            <Link to='/'><p>Já possui uma conta? Entre!</p></Link>
        </Page>
    )
}

const Page = styled.article`
    background-color: #0E0E13;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        color: #FFFFFF;
        margin-top: 24px;
    }

`

const Input = styled.input`
    width: 80vw;
    height: 52px;
    background: #FFFFFF;
    border-radius: 8px;
    font-size: 14px;
    padding-left: 14px;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;

    &::placeholder {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #7E7E7E;
    }
`

const Button = styled.button`
    width: 85vw;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;

`